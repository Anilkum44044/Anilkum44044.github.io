var Inst = setInterval(Color_Change, 1000);

function Color_Change() {
	var colors = ['red', 'blue', 'yellow', 'green', 'purple'];
	counter = Math.floor(Math.random() * 4);
	Element = document.getElementById("color_change");
	Element.style.color = colors[counter];
	counter++;
	if (counter >= colors.length) {
		counter = 0;
	}
}

Color_Change()