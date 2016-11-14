function View(){
};

View.prototype = {
  showHeadline: function(headline){
    list = document.getElementById("headlines");
    item = document.createElement("LI");
    title = document.createTextNode(headline);
    item.appendChild(headline);
    list.appendChild(item);
  },
}
