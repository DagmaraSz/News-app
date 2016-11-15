var testURL;
var api;
var view;

window.onload = function() {
  beforeAll(function(){
    runTest(function(){test1(function(){assert1()})})
  });
};

function beforeAll(callback){
  console.log("before all")
  testURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body";
  api = new Api();
  view = new View();
  api.getArticle(testURL);
	setTimeout(function() {
		callback();
	}, 5000);
};

function runTest(test){
  console.log("runtest");
  test();
};

function test1(assert) {
  view.showHeadline(api.getHeadline());
  assert();
}

function assert1(){
  if (document.getElementById("headlines").innerHTML.contains(api.getHeadline())){
    cosole.log("Passed: A headline from the Guardian shows up on the page")
  }else{
    cosole.log("Failed: A headline from the Guardian shows up on the page")}
}


// discuss more with Mary exactly why...
// I refactored to the above after Milenna showed her code.
// Mary mentioned looking up this and javascript context.

// Also ask Mary if there is any POODR equivalent for javascript?
// Talk about callback hell and its solutions (http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
