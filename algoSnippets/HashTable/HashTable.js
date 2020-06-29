class HashTable {
  constructor (size = 53) {
    this.keyMap = new Array(size);
  }
  
  _hash (key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set (key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get (key) {
    let index = this._hash(key)
    const value = this.keyMap[index] && this.keyMap[index].find(ele => {
      return ele[0] === key;
    })
    return value ? value[1] : undefined;
  }

  keys () {
    const keyArr = [];
    this.keyMap.forEach(bucket => {
      if (bucket) {
        bucket.forEach(kvp => {
          if (!keyArr.includes(kvp[0])) keyArr.push(kvp[0])
        })
      }
    });
    return keyArr
  }

  values () {
    const valueArr = [];
    this.keyMap.forEach(bucket => {
      if (bucket) {
        bucket.forEach(kvp => {
          if (!valueArr.includes(kvp[1])) valueArr.push(kvp[1])
        })
      }
    })
    return valueArr
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


var c

