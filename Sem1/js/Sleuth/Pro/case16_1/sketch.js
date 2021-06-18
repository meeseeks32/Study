/*
802 - The case of Monte Carlo
Stage 1 - Card sharks

Officer: 2481930
CaseNum: 802-0-82405146-2481930

Time to pull on your best threads kid, grab a martini prepare for an evening at the Monte Carlo casino.

Our targets for this op are a gang of high rolling statisticians. They maintain an air of respectability as the board of Rossling Polling, a company used by the shady politicians of Console City to make them seem more popular than they really are. They’re prepared to give up the dirt on their techniques if we can beat them in a game of 5 card stud poker. We can’t go in and gamble away Sleuth & Co’s cash reserves. There isn’t that much green in the evidence room to compete with these card sharks. Let’s stack the odds in our favour. First let’s learn how to mark cards.

* Write a function called  cardPicker.
* Using a for loop to set the marked property of the deck array elements to true when the suit is Clubs or the value is 3
* Call the function from within setup

*/

var deck = [{"marked":false,"card_suit":"Spades","value":"A"},{"marked":false,"card_suit":"Spades","value":"2"},{"marked":false,"card_suit":"Spades","value":"3"},{"marked":false,"card_suit":"Spades","value":"4"},{"marked":false,"card_suit":"Spades","value":"5"},{"marked":false,"card_suit":"Spades","value":"6"},{"marked":false,"card_suit":"Spades","value":"7"},{"marked":false,"card_suit":"Spades","value":"8"},{"marked":false,"card_suit":"Spades","value":"9"},{"marked":false,"card_suit":"Spades","value":"10"},{"marked":false,"card_suit":"Spades","value":"J"},{"marked":false,"card_suit":"Spades","value":"Q"},{"marked":false,"card_suit":"Spades","value":"K"},{"marked":false,"card_suit":"Clubs","value":"A"},{"marked":false,"card_suit":"Clubs","value":"2"},{"marked":false,"card_suit":"Clubs","value":"3"},{"marked":false,"card_suit":"Clubs","value":"4"},{"marked":false,"card_suit":"Clubs","value":"5"},{"marked":false,"card_suit":"Clubs","value":"6"},{"marked":false,"card_suit":"Clubs","value":"7"},{"marked":false,"card_suit":"Clubs","value":"8"},{"marked":false,"card_suit":"Clubs","value":"9"},{"marked":false,"card_suit":"Clubs","value":"10"},{"marked":false,"card_suit":"Clubs","value":"J"},{"marked":false,"card_suit":"Clubs","value":"Q"},{"marked":false,"card_suit":"Clubs","value":"K"},{"marked":false,"card_suit":"Hearts","value":"A"},{"marked":false,"card_suit":"Hearts","value":"2"},{"marked":false,"card_suit":"Hearts","value":"3"},{"marked":false,"card_suit":"Hearts","value":"4"},{"marked":false,"card_suit":"Hearts","value":"5"},{"marked":false,"card_suit":"Hearts","value":"6"},{"marked":false,"card_suit":"Hearts","value":"7"},{"marked":false,"card_suit":"Hearts","value":"8"},{"marked":false,"card_suit":"Hearts","value":"9"},{"marked":false,"card_suit":"Hearts","value":"10"},{"marked":false,"card_suit":"Hearts","value":"J"},{"marked":false,"card_suit":"Hearts","value":"Q"},{"marked":false,"card_suit":"Hearts","value":"K"},{"marked":false,"card_suit":"Diamonds","value":"A"},{"marked":false,"card_suit":"Diamonds","value":"2"},{"marked":false,"card_suit":"Diamonds","value":"3"},{"marked":false,"card_suit":"Diamonds","value":"4"},{"marked":false,"card_suit":"Diamonds","value":"5"},{"marked":false,"card_suit":"Diamonds","value":"6"},{"marked":false,"card_suit":"Diamonds","value":"7"},{"marked":false,"card_suit":"Diamonds","value":"8"},{"marked":false,"card_suit":"Diamonds","value":"9"},{"marked":false,"card_suit":"Diamonds","value":"10"},{"marked":false,"card_suit":"Diamonds","value":"J"},{"marked":false,"card_suit":"Diamonds","value":"Q"},{"marked":false,"card_suit":"Diamonds","value":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your cardPicker function here
    cardPicker();
}

//write your cardPicker function here
function cardPicker()
{
    for (let i = 0 ; i < deck.length ; i++)
        {
            if ((deck[i].card_suit == "Clubs") || (deck[i].value == "3"))
                {
                    deck[i].marked = true;
                }

        }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (deck[i].marked)
		{
			drawCard(deck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(deck[i], 400 + i * 18, 250);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.value == values[j] && card.card_suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
