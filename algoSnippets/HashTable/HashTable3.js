class HashTable {
  constructor (size = 53) {
    this.keyMap = new Array(size)
  }
  
  _hash (key) {
    var total = 0;
    var PRIME = 31;
    [...key].forEach(char => {
      var value = char.charCodeAt(0) - 96
      total = (total * PRIME + value) % this.keyMap.length
    })
    return total
  }

  set (key, value) {
    var index = this._hash(key)
    if (!this.keyMap[index]) this.keyMap[index] = []
    this.keyMap[index].push([key, value])
  }

  get (key) {
    var index = this._hash(key)
    var value = this.keyMap[index] && this.keyMap[index]
      .find(kvp => kvp[0] === key)
    return value ? value[1] : null
  }

  keys () {
    var keys = [];
    this.keyMap.forEach(bucket => {
      if (!bucket) return;
      bucket.forEach(kvp => {
        if (!keys.includes(kvp[0])) keys.push(kvp[0])
      })
    })
    return keys
  }

  values () {
    var values = []
    this.keyMap.forEach(bucket => {
      if (!bucket) return
      bucket.forEach(kvp => {
        if (!values.includes(kvp[1])) values.push(kvp[1])
      })
    })
    return values
  }
}

let ht = new HashTable();
ht.set("hello", "goodbye")
ht.set("hello", "goodbye")
ht.set("hello2", "goodbye2")
ht.set("hello2", "goodbye2")
ht.set("hello3", "goodbye3")
console.log(ht.get("hello"))
console.log(ht.get("helloe"))

module.exports = HashTable;