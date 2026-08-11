# TripoSplat Native Multi-view for Pinokio

One-click Pinokio installer for `https://github.com/sabi3293043/TripoSplat`, a public fork of the
official TripoSplat repository with native multi-view generation.

## What it installs

- The linked TripoSplat source fork.
- An isolated Python environment inside the app folder.
- PyTorch selected by Pinokio for the detected platform and GPU.
- Official TripoSplat weights from `VAST-AI/TripoSplat` on Hugging Face.

TRELLIS model weights are not installed. TRELLIS contributes only the
tuning-free MultiDiffusion sampling pattern and attributed example images.

## Install

1. Install [Pinokio](https://pinokio.computer/).
2. In Pinokio, download this repository URL.
3. Select **Install**.
4. After installation completes, select **Start**.
5. Select **Open Web UI**.

The first installation downloads several gigabytes. Choose a Pinokio home on a
drive with enough space before installing. Checkpoints, Python packages, and
outputs are stored locally and never committed to GitHub.

## Update

Choose **Update** in Pinokio. The launcher pulls this repository, pulls the
linked TripoSplat source fork, and refreshes official model weights if needed.

## Reset

**Reset** removes the local cloned source and its Python environment. Generated
outputs inside that source folder are removed too, so download anything you
want to keep first. The public GitHub repositories are unaffected.

## Multi-view modes

- Use any number of arbitrary free-angle images. The first sets reference
  orientation.
- Optionally use approximate Front-ish, Back-ish, Left-ish, and Right-ish slots.
- Guided and free-angle inputs work together.
- MultiDiffusion is recommended; Stochastic is faster.

See the source fork's
[installation](https://github.com/sabi3293043/TripoSplat/blob/main/docs/INSTALLATION.md),
[usage](https://github.com/sabi3293043/TripoSplat/blob/main/docs/USAGE.md), and
[troubleshooting](https://github.com/sabi3293043/TripoSplat/blob/main/docs/TROUBLESHOOTING.md)
documents for details.

## Credits and license

- [VAST-AI-Research/TripoSplat](https://github.com/VAST-AI-Research/TripoSplat)
- [microsoft/TRELLIS](https://github.com/microsoft/TRELLIS)
- [cocktailpeanut/triposplat.pinokio.git](https://github.com/cocktailpeanut/triposplat.pinokio.git)

This launcher retains its upstream license and the source fork retains
TripoSplat's MIT license and third-party notices.
