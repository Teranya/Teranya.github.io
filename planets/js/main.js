var text = document.getElementById("textbox");
var planet1 = document.getElementById("planet1");
var planet2 = document.getElementById("planet2");
var planet3 = document.getElementById("planet3");
var planet4 = document.getElementById("planet4");
var planet5 = document.getElementById("planet5");
var planet6 = document.getElementById("planet6");

var angle1 = 90;
var angle2 = 180;
var angle3 = 30;
var angle4 = 210;
var angle5 = 10;
var angle6 = 120;

function ball() {

	//prompt("The Magic 8-Ball Knows All! Ask It A Question!");
	var words = ["It is certain",
						"It is decidedly so",
						"Without a doubt",
						"Yes definitely",
						"You may rely on it",
						"As we see it, yes",
						"Most likely",
						"Outlook good",
						"Yes",
						"Signs point to yes",
						"Reply hazy try again",
						"Ask again later",
						"Better not tell you now",
						"We cannot predict now",
						"Concentrate and ask again",
						"Do not count on it",
						"Our reply is no",
						"Our sources say no",
						"Outlook not so good",
						"Very doubtful"
					];

	console.log(words.length);


	var randomanswer = parseInt(Math.random() * words.length);
	console.log(randomanswer);
	var answer = words[randomanswer];

	text.innerHTML = answer;





}

function spin() {
	planet1.style.webkitTransform = "rotate(" + angle1 + "deg)";
	planet2.style.webkitTransform = "rotate(" + angle2 + "deg)";
	planet3.style.webkitTransform = "rotate(" + angle3 + "deg)";
	planet4.style.webkitTransform = "rotate(" + angle4 + "deg)";
	planet5.style.webkitTransform = "rotate(" + angle5 + "deg)";
	planet6.style.webkitTransform = "rotate(" + angle6 + "deg)";
	angle1 += 90;
	angle2 += 45;
	angle3 += 100;
	angle4 += 75;
	angle5 += 110;
	angle6 += 80;
}
askbutton.addEventListener("submit", ball);
askbutton.addEventListener("submit", spin);
