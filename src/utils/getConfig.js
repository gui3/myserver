const fs = require("fs")
const path = require("path")
const yaml = require("yaml")

function getConfig () {
  const raw = fs.readFileSync(
    path.resolve(__dirname, "../CONFIG.yaml"),
    {
      encoding: "utf-8"
    }
  )
  return yaml.parse(raw)
}

module.exports = getConfig