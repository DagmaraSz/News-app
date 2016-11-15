function Api(){
  this.article;
};

Api.prototype = {
  getArticle: function(url){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        this.article = xhr.response.response.content;
        console.log(this.article);
      }
    };
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.send();
  },
  getHeadline: function(){
    console.log(this.article)
    return this.article.webTitle
  },

};
