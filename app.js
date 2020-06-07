//Тоглогчын ээлжийг хадгалах хувьсагч  нэгдүгээр тоглогчыг 1  тоглогч 2 =0
var activePlayer=1;
//Тоглогчын цуглуулсан оноо
var scores = [0, 0];
//Тоглогчын ээлжиндээ цуглуусан оноог хадгалах хувьсагч
var roundScore=0;
//Шооны аль талаараа буусныг хадгалах хувьсагчид санамсаргүйгээр 1-6 хүртэлх тоог онооно
var diceNumber = Math.floor(Math.random()*6)+1;
//Программ эхлэхэд бэлдэе
document.getElementById('score-0').textContent= "0"; // тоглогчийн оноог 0 болголооо
document.getElementById('score-1').textContent="0";  // тоглогчийн оноог 0 болголооо
document.getElementById('current-1').textContent="0"; //тоглогчийн цуглуулсан оноог 0 болгоно
document.getElementById('current-0').textContent="0"; //тоглогчийн цуглуулсан оноог 0 болгоно
var diceDom = document.querySelector(".dice");
//document.querySelector('.dice').style.display = "none";
//<button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
document.querySelector(".btn-roll").addEventListener("click" , function() {
    var diceNumber = Math.floor(Math.random()*6)+1; 
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber +".png";
    if(diceNumber !== 1) {
        roundScore =roundScore+diceNumber;
        document.getElementById("current-0").textContent=roundScore;
    }
    else{
        roundScore=0;
        document.getElementById("current-0").textContent=roundScore;
    }
});
