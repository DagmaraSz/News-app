var testURL;
var api;
var view;

function beforeAll(callback){
  console.log("before all")
  testURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body";
  api = new Api();
  view = new View();
  console.log(view);
  api.getArticle(testURL);
	setTimeout(function() {
		callback();
	}, 1000);
};

function runTest(todo, test){
  console.log("runtest");
  todo();
  test();
};

window.onload = function() {
	beforeAll(function() {
    runTest(function(){view.showHeadline(api.getHeadline())},
              function(){
                // Test1: A headline from the Guardian shows up on the page
                if (document.getElementById("headline").innerHTML.contains(api.getHeadline())){
                  cosole.log("Passed: A headline from the Guardian shows up on the page")
                }else{
                  cosole.log("Failed: A headline from the Guardian shows up on the page")}
              }
            )});
};

// this didn't work:
window.onload = function() {
	beforeAll(
    runTest(view.showHeadline(api.getHeadline()),
              function(){
                // Test1: A headline from the Guardian shows up on the page
                if (document.getElementById("headline").innerHTML.contains(api.getHeadline())){
                  cosole.log("Passed: A headline from the Guardian shows up on the page")
                }else{
                  cosole.log("Failed: A headline from the Guardian shows up on the page")}
              }
            ));
};
// discuss more with Mary exactly why...
