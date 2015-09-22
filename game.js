/*
* Game initializer function.
* Program created by Douglas Smith.
*/

Game = {};

Game.Init = function() {
	/* Initialize vars */
	var clicks = 0;
	var cps = 0.10;
	var clickPower = 1;
	
	var firstCost = 10;
	var secondCost = 100;
	
	var clickPowerCost1 = 300;
	
	var growth = 3;

	
	Game.increment = function() {
		clicks = clicks + clickPower;
		document.getElementById("clicks").value = clicks;
		document.getElementById("clicks").innerHTML = Math.floor(clicks) + " clicks";
	}

	Game.timedIncrement = function() {
		clicks = clicks + cps;
		document.getElementById("clicks").value = clicks;
		document.getElementById("clicks").innerHTML = Math.floor(clicks) + " clicks";
	}
	
	/* Check whether buttons should be active based on cost */
	Game.buttonCheck = function() {
		if (clicks >= firstCost) { document.getElementById("button1").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button1").className = "btn btn-default btn-block disabled"; }
		
		if (clicks >= secondCost) { document.getElementById("button2").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button2").className = "btn btn-default btn-block disabled"; }
		
		if (clicks >= clickPowerCost1) { document.getElementById("buttonA").className = "btn btn-default"; } 
		else { document.getElementById("buttonA").className = "btn btn-default disabled"; }
	}

	Game.firstButton = function() {
		clicks = document.getElementById("clicks").value;
		if (clicks >= firstCost) {
			clicks = clicks - firstCost;
			document.getElementById("clicks").value = clicks;
			document.getElementById("clicks").innerHTML = Math.floor(clicks) + " clicks";
			
			cps = cps + 1;
			document.getElementById("cps").value = cps;
			document.getElementById("cps").innerHTML = Math.round(cps * 100) / 100 + " cps";
			
			firstCost = firstCost * growth;
			document.getElementById("cost1").value = firstCost;
			document.getElementById("cost1").innerHTML = " " + firstCost;
		}
	}
	
	Game.secondButton = function() {
		clicks = document.getElementById("clicks").value;
		if (clicks >= secondCost) {
			clicks = clicks - secondCost;
			document.getElementById("clicks").value = clicks;
			document.getElementById("clicks").innerHTML = Math.floor(clicks) + " clicks";
			
			cps = cps + 10;
			document.getElementById("cps").value = cps;
			document.getElementById("cps").innerHTML = Math.round(cps * 100) / 100 + " cps";
			
			secondCost = secondCost * growth;
			document.getElementById("cost2").value = secondCost;
			document.getElementById("cost2").innerHTML = " " + secondCost;
		}
	}
	
	Game.displayFirstInfo = function() {
		document.getElementById("firstInfo").style.display = "block";
	}
	
	Game.hideFirstInfo = function() {
		document.getElementById("firstInfo").style.display = "none";
	}
	
	Game.upgradeClicks = function() {
		clickPower = 2;
	}
};

/* Load game function */
window.onload = function() {
	setInterval("Game.timedIncrement()", 1000);
	setInterval("Game.buttonCheck()", 0);
	Game.Init();
}