const ht = require('./HashTable3');

const uniqueKeys = ['hello', 'hello2', 'hello3']
const uniqueValues = ['goodbye', 'goodbye2', 'goodbye3']

describe('HashTables', () => {
  let hashTable;
  beforeAll(() => {
    hashTable = new ht();
  })
  beforeEach(() => {
    hashTable.set("hello", "goodbye")
    hashTable.set("hello2", "goodbye2")
    hashTable.set("hello2", "goodbye2")
    hashTable.set("hello3", "goodbye3")
  })
  it('should return the same hash for the same string', () => {
    expect(hashTable._hash('string')).toBe(hashTable._hash('string'));
  })
  it('should set and get a new key value pair', () => {
    expect(hashTable.get('hello')).toBe('goodbye');
  })
  it('should return null if key doesnt exist', () => {
    expect(hashTable.get('helloo')).toBe(null);
  })
  it('should return all unique keys', () => {
    expect(hashTable.keys().sort()).toEqual(uniqueKeys.sort())
  })
  it('should return all unique values', () => {
    expect(hashTable.values().sort()).toEqual(uniqueValues.sort())
  })
})