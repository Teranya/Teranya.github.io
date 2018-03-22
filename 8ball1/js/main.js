var text = document.getElementById("textbox");
				var planet1 = document.getElementById("planet300");
				var planet2 = document.getElementById("planet500");

				var angle1 = 90;
				var angle2 = 180;

				function ball() {

					//prompt("The Magic 8-Ball Knows All! Ask It A Question!");
					var words = ["It is certain",
						"It is decidedly so",
						"Without a doubt",
						"Yes definitely",
						"You may rely on it",
						"As I see it, yes",
						"Most likely",
						"Outlook good",
						"Yes",
						"Signs point to yes",
						"Reply hazy try again",
						"Ask again later",
						"Better not tell you now",
						"Cannot predict now",
						"Concentrate and ask again",
						"Do not count on it",
						"My reply is no",
						"My sources say no",
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
					angle1 += 90;
					angle2 += 90;
				}
				askbutton.addEventListener("submit", ball);
				askbutton.addEventListener("submit", spin);
