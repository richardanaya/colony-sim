import { DEFAULT_SEED, formatSeed } from "../game/generate";

/** Title card. Begin mounts the valley underneath this screen. */
export function mountTitle(root: HTMLElement, onBegin: (seed: number) => void): void {
  let seed = readSeed();
  const screen = document.createElement("div");
  screen.id = "title-screen";
  screen.innerHTML = `
    <div class="title-sky" aria-hidden="true">
      <svg class="title-ridges" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="gulch-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1a120e"/>
            <stop offset="38%" stop-color="#4a2a1c"/>
            <stop offset="62%" stop-color="#c47a3e"/>
            <stop offset="78%" stop-color="#e6c48a"/>
            <stop offset="100%" stop-color="#243028"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="700" fill="url(#gulch-sky)"/>
        <circle cx="860" cy="250" r="54" fill="#f0d7a4" opacity="0.9"/>
        <circle cx="860" cy="250" r="90" fill="#e7b56a" opacity="0.18"/>
        <path d="M0 430 L180 300 L340 390 L520 240 L700 360 L880 220 L1080 340 L1200 280 L1200 700 L0 700 Z" fill="#2c241c"/>
        <path d="M0 500 L140 410 L300 470 L460 360 L640 460 L820 340 L1000 450 L1200 390 L1200 700 L0 700 Z" fill="#1b2420"/>
        <path d="M0 560 L200 500 L380 540 L560 470 L760 530 L980 480 L1200 520 L1200 700 L0 700 Z" fill="#101612"/>
        <path d="M520 470 C620 500 700 560 760 620" fill="none" stroke="#d7b56a" stroke-width="2" opacity="0.55"/>
      </svg>
    </div>
    <div class="title-copy">
      <p class="eyebrow">A hidden valley in Colorado</p>
      <h1>Galt's Gulch</h1>
      <p class="tagline">I swear by my life and my love of it that I will never live for the sake of another man, nor ask another man to live for mine.</p>
      <p class="lede">
        People came here to work, to trade, and to live by their own judgment.
        No one is forced to live for anyone else.
      </p>
      <p class="seed-row">
        <span id="seed-label">Seed <span id="seed-value"></span></span>
        <button type="button" id="reroll">Reroll</button>
      </p>
      <button type="button" id="begin">Begin</button>
      <p class="title-credit"><a href="https://github.com/kndzio/IsoRim" target="_blank" rel="noreferrer">Assets: IsoRim by kndzio (MIT)</a></p>
    </div>
  `;
  root.append(screen);
  const begin = screen.querySelector("#begin");
  const reroll = screen.querySelector("#reroll");
  const seedValue = screen.querySelector("#seed-value");
  if (!(begin instanceof HTMLButtonElement) || !(reroll instanceof HTMLButtonElement)) return;
  const paintSeed = () => {
    if (seedValue) seedValue.textContent = formatSeed(seed);
  };
  paintSeed();
  reroll.addEventListener("click", () => {
    seed = (seed + 1 + Math.floor(Math.random() * 0xffff)) >>> 0;
    paintSeed();
  });
  begin.focus();

  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    onBegin(seed);
    screen.classList.add("is-leaving");
    const remove = () => {
      screen.remove();
    };
    screen.addEventListener("transitionend", remove, { once: true });
    window.setTimeout(remove, 700);
  };
  begin.addEventListener("click", close);
}

function readSeed(): number {
  const raw = new URLSearchParams(window.location.search).get("seed");
  if (raw && /^[0-9a-fA-F]{1,8}$/.test(raw)) return Number.parseInt(raw, 16) >>> 0;
  return DEFAULT_SEED;
}
