class localStorage {
  all() {
    return window.localStorage
  }

  get(property) {
    try {
      let value = window.localStorage.getItem(property)
      if(typeof(value) != 'string') return null
      return JSON.parse(value)
    }
    catch(e) {
      return null
    }
  }

  set(property, value) {
    window.localStorage.setItem(property, JSON.stringify(value))
  }

  delete(property) {
    window.localStorage.removeItem(property)
  }
}

window.localStoragePlugin = new localStorage()
