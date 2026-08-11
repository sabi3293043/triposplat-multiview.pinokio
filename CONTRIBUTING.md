# Contributing

This repository contains only the Pinokio lifecycle wrapper. Generation code,
alignment fixes, tests, and model documentation belong in the linked TripoSplat
source fork.

Before submitting launcher changes:

1. Check `node --check install.js`, `start.js`, `update.js`, `reset.js`,
   `pinokio.js`, and `torch.js`.
2. Test a clean Pinokio install without an existing `app/` folder.
3. Confirm the launcher downloads only official TripoSplat weights.
4. Confirm `start.js` captures the Gradio URL and leaves the app online.
5. Never commit the cloned app, Python environment, model weights, outputs, or
   caches.
