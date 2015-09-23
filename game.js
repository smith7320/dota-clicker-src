/*
* Game initializer function.
* Program created by Douglas Smith.
*/

/* Misc functions */
/* Rolling number animation (looks nicer) */
function rollNumbers(id, start, end, duration) {
	var obj = document.getElementById(id);
    var range = end - start;
    var minTimer = 50;

    var stepTime = Math.abs(Math.floor(duration/range));
    stepTime = Math.max(stepTime, minTimer);

    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value + " clicks";
        if (value == end) {
            clearInterval(timer);
        }
    }

    var timer = setInterval(run, stepTime);
    run();
}

Game = {};

Game.Init = function() {
	/* Initialize vars */
	var clicks = 0;
	var cps = 0.10;
	var clickPower = 1;
	var start = 0;
	
	var firstCost = 10;
	var secondCost = 100;
	
	var clickPowerCost1 = 300;
	
	var growth = 3;

	
	Game.increment = function() {
		start = clicks;
		clicks = clicks + clickPower;
		document.getElementById("clicks").value = clicks;
		rollNumbers("clicks", Math.floor(start), Math.floor(clicks), 100);
	}

	Game.timedIncrement = function() {
		start = clicks;
		clicks = clicks + cps;
		document.getElementById("clicks").value = clicks + cps;
		rollNumbers("clicks", Math.floor(start), Math.floor(clicks), 300);
	}
	
	/* Check whether buttons should be active based on cost */
	Game.buttonCheck = function() {
		if (clicks >= firstCost) { document.getElementById("button1").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button1").className = "btn btn-default btn-block disabled"; }
		
		if (clicks >= secondCost) { document.getElementById("button2").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button2").className = "btn btn-default btn-block disabled"; }
	}

	Game.firstButton = function() {
		clicks, start = document.getElementById("clicks").value;
		if (clicks >= firstCost) {
			clicks = clicks - firstCost;
			document.getElementById("clicks").value = clicks;
			rollNumbers("clicks", Math.floor(start), Math.floor(clicks), 300);
			
			cps = cps + 0.5;
			document.getElementById("cps").value = cps;
			document.getElementById("cps").innerHTML = Math.round(cps * 100) / 100 + " cps";
			
			firstCost = firstCost * growth;
			document.getElementById("cost1").value = firstCost;
			document.getElementById("cost1").innerHTML = " " + firstCost;
		}
	}
	
	Game.secondButton = function() {
		clicks, start = document.getElementById("clicks").value;
		if (clicks >= secondCost) {
			clicks = clicks - secondCost;
			document.getElementById("clicks").value = clicks;
			rollNumbers("clicks", Math.floor(start), Math.floor(clicks), 300);
			
			cps = cps + 10;
			document.getElementById("cps").value = cps;
			document.getElementById("cps").innerHTML = Math.round(cps * 100) / 100 + " cps";
			
			secondCost = secondCost * growth;
			document.getElementById("cost2").value = secondCost;
			document.getElementById("cost2").innerHTML = " " + secondCost;
		}
	}
	
	Game.toggleButtonOptions = function() {
		document.getElementById("firstInfo").style.display = (document.getElementById("firstInfo").style.display != "block" ? "block" : "none");
		document.getElementById("secondInfo").style.display = (document.getElementById("secondInfo").style.display != "block" ? "block" : "none");
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