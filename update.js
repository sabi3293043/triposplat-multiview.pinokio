module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }, {
    method: "hf.download",
    params: {
      path: "app",
      _: ["VAST-AI/TripoSplat"],
      "local-dir": "ckpts"
    }
  }]
}
