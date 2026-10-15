const ATTEMPTS = 4;

const warned = new Set<string>();

/** One warning per distinct failure. Retries do not warn again. */
export function warnOnce(message: string): void {
  if (warned.has(message)) return;
  warned.add(message);
  console.warn(message);
}

/**
 * Fetch a URL, retrying 5xx and network failures with backoff.
 * A 4xx is returned to the caller only as a thrown error after no retry.
 */
export async function fetchRetry(url: string): Promise<Response> {
  let last = "network error";
  for (let attempt = 0; attempt < ATTEMPTS; attempt++) {
    if (attempt > 0) await delay(200 * 2 ** (attempt - 1));
    try {
      const response = await fetch(url);
      if (response.ok) return response;
      last = String(response.status);
      if (response.status < 500) break;
    } catch (error) {
      last = error instanceof Error && error.message ? error.message : "network error";
    }
  }
  throw new Error(last);
}

export async function mapPool<T>(items: readonly T[], limit: number, task: (item: T, index: number) => Promise<void>): Promise<void> {
  if (items.length === 0) return;
  let next = 0;
  const workers = Math.min(Math.max(1, limit), items.length);
  await Promise.all(
    Array.from({ length: workers }, async () => {
      while (next < items.length) {
        const index = next;
        next += 1;
        await task(items[index], index);
      }
    }),
  );
}

/** Gzip packs stay gzip on GitHub Pages. A transparent decode is accepted too. */
export async function decodePack(bytes: Uint8Array): Promise<string> {
  if (bytes.length >= 2 && bytes[0] === 0x1f && bytes[1] === 0x8b) {
    const copy = new Uint8Array(bytes.byteLength);
    copy.set(bytes);
    const stream = new Blob([copy]).stream().pipeThrough(new DecompressionStream("gzip"));
    return new Response(stream).text();
  }
  return new TextDecoder().decode(bytes);
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
