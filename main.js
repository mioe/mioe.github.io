// Loads the wasm-bindgen output produced by scripts/build-web.sh.
// The Rust side has a #[wasm_bindgen(start)] entry point, so awaiting
// init() both instantiates the module and starts the gpui application.
const init_screen = document.getElementById("init");

try {
  const { default: init } = await import("./wasm/portfolio.js");
  await init();
  init_screen?.classList.add("is-done");
} catch (error) {
  console.error("Failed to start the portfolio:", error);
  if (init_screen) {
    init_screen.classList.add("is-failed");
    const hint = init_screen.querySelector(".init-hint");
    if (hint) hint.textContent = `Failed to load: ${error?.message ?? error}`;
  }
}
