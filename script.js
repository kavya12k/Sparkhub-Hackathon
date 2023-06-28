var score = 0;
var questionCt = 0;

var result = document.getElementById("result");
var restart = document.getElementById("reset");
var start = document.getElementById("title");

// listens for a click and then does the given function (OK, bad or good)
document.getElementById("q1a1").addEventListener("click", okChoice);
document.getElementById("q1a2").addEventListener("click", badChoice);
document.getElementById("q1a3").addEventListener("click", goodChoice);

document.getElementById("q2a1").addEventListener("click", badChoice);
document.getElementById("q2a2").addEventListener("click", okChoice);
document.getElementById("q2a3").addEventListener("click", goodChoice);

document.getElementById("q3a1").addEventListener("click", badChoice);
document.getElementById("q3a2").addEventListener("click", okChoice);
document.getElementById("q3a3").addEventListener("click", goodChoice);

document.getElementById("q4a1").addEventListener("click", goodChoice);
document.getElementById("q4a2").addEventListener("click", badChoice);
document.getElementById("q4a3").addEventListener("click", okChoice);

document.getElementById("q5a1").addEventListener("click", badChoice);
document.getElementById("q5a2").addEventListener("click", goodChoice);
document.getElementById("q5a3").addEventListener("click", okChoice);

document.getElementById("q6a1").addEventListener("click", okChoice);
document.getElementById("q6a2").addEventListener("click", goodChoice);
document.getElementById("q6a3").addEventListener("click", badChoice);

document.getElementById("q7a1").addEventListener("click", okChoice);
document.getElementById("q7a2").addEventListener("click", badChoice);
document.getElementById("q7a3").addEventListener("click", goodChoice);

document.getElementById("q8a1").addEventListener("click", okChoice);
document.getElementById("q8a2").addEventListener("click", badChoice);
document.getElementById("q8a3").addEventListener("click", goodChoice);

document.getElementById("q9a1").addEventListener("click", okChoice);
document.getElementById("q9a2").addEventListener("click", goodChoice);
document.getElementById("q9a3").addEventListener("click", badChoice);

document.getElementById("q10a1").addEventListener("click", goodChoice);
document.getElementById("q10a2").addEventListener("click", okChoice);
document.getElementById("q10a3").addEventListener("click", badChoice);

document.getElementById("displayResult").addEventListener("click", showResult);
//displayResult starts off disabled
document.getElementById("displayResult").disabled = true;

function badChoice()
  {
    questionCt += 1;
      console.log("questionCount = " + questionCt + " score = " + score);
    if (questionCt == 10) {
    console.log("The quiz is done.");  
    document.getElementById("displayResult").disabled = false;
    }
  }

function okChoice()
  {
    questionCt += 1;
    score += 1;
      console.log("questionCount = " + questionCt + " score = " + score);
    if (questionCt == 10) {
    console.log("The quiz is done.");  
    document.getElementById("displayResult").disabled = false;
    }
  }

function goodChoice()
  {
    questionCt += 1;
    score += 2;
      console.log("questionCount = " + questionCt + " score = " + score);
    if (questionCt == 10) {
    console.log("The quiz is done.");  
    document.getElementById("displayResult").disabled = false;
  }
  }

//part of restarting quiz back to normal, all choices enabled displayresult disabled
function enableAll()
  {
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
  document.getElementById("q5a3").disabled = false;
  document.getElementById("q6a1").disabled = false;
  document.getElementById("q6a2").disabled = false;
  document.getElementById("q6a3").disabled = false;
  document.getElementById("q7a1").disabled = false;
  document.getElementById("q7a2").disabled = false;
  document.getElementById("q7a3").disabled = false;
  document.getElementById("q8a1").disabled = false;
  document.getElementById("q8a2").disabled = false;
  document.getElementById("q8a3").disabled = false;
  document.getElementById("q9a1").disabled = false;
  document.getElementById("q9a2").disabled = false;
  document.getElementById("q9a3").disabled = false;
  document.getElementById("q10a1").disabled = false;
  document.getElementById("q10a2").disabled = false;
  document.getElementById("q10a3").disabled = false;
  //click for results gets disabled again
  document.getElementById("displayResult").disabled = true;
  }

// when you click an answer choice, all three answer choices in the same question are disabled
function disableBtnOne() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
}
function disableBtnTwo(){
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
}
function disableBtnThree() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
}
function disableBtnFour(){
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
}
function disableBtnFive(){
  document.getElementById("q5a1").disabled = true;
  document.getElementById("q5a2").disabled = true;
  document.getElementById("q5a3").disabled = true;
}
function disableBtnSix() {
  document.getElementById("q6a1").disabled = true;
  document.getElementById("q6a2").disabled = true;
  document.getElementById("q6a3").disabled = true;
}
function disableBtnSeven(){
  document.getElementById("q7a1").disabled = true;
  document.getElementById("q7a2").disabled = true;
  document.getElementById("q7a3").disabled = true;
}
function disableBtnEight() {
  document.getElementById("q8a1").disabled = true;
  document.getElementById("q8a2").disabled = true;
  document.getElementById("q8a3").disabled = true;
}
function disableBtnNine(){
  document.getElementById("q9a1").disabled = true;
  document.getElementById("q9a2").disabled = true;
  document.getElementById("q9a3").disabled = true;
}
function disableBtnTen(){
  document.getElementById("q10a1").disabled = true;
  document.getElementById("q10a2").disabled = true;
  document.getElementById("q10a3").disabled = true;
}

// where the text for your results is written
function showResult()
  {
    if(score < 6)
    {
      result.innerHTML = "It looks like you might be contributing to global warming. Fortunately, you can always start now to become a greener version of yourself! Make sure to conserve water, food, and electricity so as not to emit as much CO2 or other harmful gases. If you can, choose to carpool or bike over driving alone in a car. Travelling to other states/countries is, of course, okay, but frequent travelling can be harmful. Planes release a lot of CO2 and burn a lot of harmful fossil fuels. Educate yourself on the causes of climate change. Cut down your plastic use and look for more biodegradable options like paper or more permanent options like metal. Clean up after yourself! With your help, we can fight back against global warming. ";
    }
    else if (score < 11)
    {
      result.innerHTML = "You can make a few more changes to become greener. While you are doing some activities that are environmentally friendly, you can go further! Always conserve your resources. Don't buy food in surplus, as it can lead to a lot of food waste. Consider setting up a compost bin. It's extremely helpful to the worms in an ecosystem, which helps the Earth! Walk short distances and turn your engine off when you're not using it. Try to make things yourself rather than buying it from shops, as it's a lot more sustainable (EX: sewing your own clothes or making your own shelves rather than buying them). Don't be afraid to speak to those who litter and spread awareness to them. Keep recycling when needed! You are important in this era of uncertainty regarding increasing temperatures and harsher weather.";
    }
    else if (score < 16)
    {
      result.innerHTML = "You're on the path to becoming environmentally friendly. It looks like you're trying to reduce your carbon footprint! A few specific suggestions would be to shop sustainably or even cut down on meat. Did you know that eating less meat can help protect the biodiversity of our Earth? Animal farming is a major contributor to climate change due to the damage it causes to the environment. Always go for cleaner energy sources, like solar, wind, thermal, or hydro power if you can. Conserving resources is important to slowing down global warming. Educate others on what they can do to become greener. You can help with our climate change crisis.";
    }
    else if (score <=20)
    {
      result.innerHTML = "You're being green! Try taking it a step further by educating your friends and family about global warming. Not only work towards becoming even more environmental friendly, but also offer greener solutions for your peers. Try organizing beach cleanups with your friend group or creating a challenge where you can only use a car for certain situations. Reduce the amount of food waste in your household, shop sustainably and opt for cleaner devices, like solar panels or electric cars. Speak up against misconceptions. Do your part in saving our planet!";
    }
  }

function restartThis()
  {
    result.innerHTML = "";
    score = 0;
    questionCt = 0;
    console.log(" score = " + score + " and questionCount = " +   questionCt);
    enableAll();
    start.scrollIntoView();
  }

//Fact Generator JS:

var factList = [
"\"Human emissions of heat-trapping gases have already warmed the climate by nearly 2 degrees Fahrenheit (1.1 degrees Celsius) since pre-Industrial times (starting in 1750).\"",/*0*/ "\"The global average temperature is expected to reach or exceed 1.5 degrees C (about 3 degrees F) within the next few decades. These changes will affect all regions of Earth.\"",/*1*/ "\"Global sea level has risen about 8 inches (0.2 meters) since reliable record-keeping began in 1880.\"",/*2*/ "\"By 2100, scientists project that it will rise at least another foot (0.3 meters), but possibly as high as 8 feet (2.4 meters), if we continue carbon emissions at our current rate...[which] can cause increased flooding.\"",/*3*/ "\"The intensity of North Atlantic hurricanes, as well as the frequency of the strongest (Category 4 and 5) hurricanes, have all increased since the early 1980s. Scientists project that hurricane-associated storm intensity and rainfall rates will increase as the climate continues to warm.\"",/*4*/ "\"All seasons are projected to continue to get hotter. By the end of this century, if we continue emitting greenhouse gases at our current rate, extreme heat events that used to occur only once in 20 years are expected to occur every year.\"",/*5*/ "\"Droughts in the Southwest and heat waves (periods of abnormally hot weather lasting days to weeks) are projected to become more intense, and cold waves less intense and less frequent.\"",/*6*/ "\"By around 2050, the amount of land consumed by wildfires in Western states is projected to further increase by two to six times. Even in rainy regions like the Southeast, wildfires are projected to increase by about 30%.\"",/*7*/ "\"More fires and a longer fire season are causing an additional health hazard of wildfire smoke, which affects tens of millions of people in the United States. Meanwhile, the costs of fighting wildfires have risen 11-fold over the past 30 years, adding a financial burden on top of the public health risk.\"", /*8*/ "\"While it may rain less frequently in some regions (such as the Southwest), when it does rain, heavy downpours will be more common.\"", /*9*/ "\"Recent research shows that current global temperatures and the rate of the current warming are both unprecedented over the past 24,000 years. These trends are expected to continue, but reducing greenhouse gas emissions would lessen the amount of warming in the future.\"", /*10*/ "\"Sea ice cover in the Arctic Ocean is expected to continue decreasing, and the Arctic Ocean will very likely become essentially ice-free in late summer if current projections hold; this change is expected to occur before mid-century.\"" /*11*/ ];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if(factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}