export default class StoreHelpers {

  static findById(state, id){
    const collection = Object.assign([], state)
    return collection.filter(obj => obj.id == id)[0]
  }
  
}