
class Linker extends Object {

  constructor (targets = []) {
    super()
    this["_data"] = {}
  }

  link (id, type, object) {
    // two way binding
    this[id] = object
    // and
    object._to = this
  }
}


module.exports = Linker