
// internal error handler
class ErrorHandler {
  constructor (linker) {
    linker.link("eh", "errorHandler", this)
  }

  error (err) {
    console.error(err)

    if (this
      && this._to
      && this._to.config
      && this._to.config.errors_discord
      && this._to.taya
      && this._to.taya._do
      && typeof this._to.taya._do.sendToDevs === "function") 
    {
      this._to.taya._do.sendToDevs(
        "⚡⚡ Server Error :\n"
        + err.message + "\n```"
        + (
          this._to.config.errors_discord_stack 
          ? err.stack 
          : "see logs for stack"
        )
        + "``` (server error) ⚡⚡"
      )
    }
    else {
      console.error("could not send error on discord")
    }
  }
}

module.exports = ErrorHandler