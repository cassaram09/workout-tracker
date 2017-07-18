import API from './api'

class ExercisesAPI {  

  static url(cat){
    var base = API.base() + '/cats'
    return cat ? base  + `/${cat.id}` : base;
  }

  static getCats() {
    var url = this.url()
    return API.resourceIndex(url);
  }

  static getCat(cat) {
    var url = this.url(cat)
    return API.getResource(url, cat)
  }

  static createCat(cat){
    var url = this.url()
    return API.createResource(url, cat)
  }

  static updateCat(cat) {
    var url = this.url(cat)
    return API.updateResource(url, cat)
  }

  static deleteCat(cat){
     var url = this.url(cat)
    return API.deleteResource(url, cat)
  }
}

export default CatApi;  