//Тоглогчын ээлжийг хадгалах хувьсагч  нэгдүгээр тоглогчыг 1  тоглогч 2 =0
var activePlayer=1;
//Тоглогчын цуглуулсан оноо
var scores = [0, 0];
//Тоглогчын ээлжиндээ цуглуусан оноог хадгалах хувьсагч
var roundScore=0;
//Шооны аль талаараа буусныг хадгалах хувьсагчид санамсаргүйгээр 1-6 хүртэлх тоог онооно
var dice = Math.floor(Math.random()*6)+1;
//<div class="player-score" id="score-0">43</div>
//document.querySelector('#score-0').textContent = dice;
//Html bichij ajiluulah
//document.querySelector('#score-1').innerHTML = "<em> Yes! </em>";
// <img src="dice-5.png" alt="Dice" class="dice" />\
//Программ эхлэхэд бэлдэе
document.querySelector('#score-0').textContent=0; // тоглогчийн оноог 0 болголооо
document.querySelector('#score-1').textContent=0;
document.querySelector('#current-1').textContent=0;
document.querySelector('#current-0').textContent=0;

document.querySelector('.dice').style.display = "none";
console.log("Шоо : "+ dice);
