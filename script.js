// Drives the "timecode" readout in the hero viewfinder —
// ticks up like a camera's on-screen display (HH:MM:SS:FF).
// Purely decorative; safe to delete if you don't want it.

(function () {
  const tcEl = document.getElementById('tc');
  if (!tcEl) return;

  let frames = 0;
  const fps = 24;

  function pad(num) {
    return String(num).padStart(2, '0');
  }

  function tick() {
    frames++;
    const totalSeconds = Math.floor(frames / fps);
    const ff = frames % fps;
    const hh = Math.floor(totalSeconds / 3600);
    const mm = Math.floor((totalSeconds % 3600) / 60);
    const ss = totalSeconds % 60;
    tcEl.textContent = `${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`;
  }

  setInterval(tick, 1000 / fps);
})();
