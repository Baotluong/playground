class HashTable {
  constructor (size = 53) {
    this.keyMap = new Array(size)
  }

  _hash (key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    [...key].forEach(char => {
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    })
    return total
  }

  set (key, value) {
    const index = this._hash(key)
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get (key) {
    const index = this._hash(key)
    var value = this.keyMap[index] && this.keyMap[index]
      .find(kvp => kvp[0] === key) 
    return value ? value[1] : null;
  }

  keys () {
    const keys = []
    this.keyMap.forEach(bucket => {
      if (!bucket) return;
      bucket.forEach(kvp => {
        if (!keys.includes(kvp[0])) keys.push(kvp[0])
      })
    })
    return keys;
  }

  values () {
    const values = []
    this.keyMap.forEach(bucket => {
      if (!bucket) return;
      bucket.forEach(kvp => {
        if (!values.includes(kvp[1])) values.push(kvp[1])
      })
    })
    return values;
  }
}

let ht = new HashTable();
ht.set("hello", "goodbye")
ht.set("hello2", "goodbye2")
ht.set("hello3", "goodbye3")
ht.set("hello4", "goodbye4")
ht.set("hello5", "goodbye5")
ht.set("hello5", "goodbye5")
console.log(ht.get("hello"))
console.log(ht.get("helloe"))
console.log(ht.keys())

module.exports = HashTable;