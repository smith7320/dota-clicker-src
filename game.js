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
        obj.innerHTML = value + " MMR";
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
	var mmr = 0;
	var totalmmr = 0;
	var mmrps = 0.10;
	var clickPower = 1;
	var start = 0;
	
	var firstCost = 10;
	var secondCost = 100;
	var thirdCost = 1000;
	var fourthCost = 10000;
	var fifthCost = 100000;
	
	var growth = 3;

	
	Game.increment = function() {
		start = mmr;
		mmr = mmr + clickPower;
		document.getElementById("mmr").value = mmr;
		rollNumbers("mmr", Math.floor(start), Math.floor(mmr), 100);
	}

	Game.timedIncrement = function() {
		start = mmr;
		mmr = mmr + mmrps;
		document.getElementById("mmr").value = mmr + mmrps;
		rollNumbers("mmr", Math.floor(start), Math.floor(mmr), 300);
	}
	
	/* Check whether buttons should be active based on cost */
	Game.buttonCheck = function() {
		if (mmr >= firstCost) { document.getElementById("button1").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button1").className = "btn btn-default btn-block disabled"; }
		
		if (mmr >= secondCost) { document.getElementById("button2").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button2").className = "btn btn-default btn-block disabled"; }
		
		if (mmr >= thirdCost) { document.getElementById("button3").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button3").className = "btn btn-default btn-block disabled"; }
		
		if (mmr >= fourthCost) { document.getElementById("button4").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button4").className = "btn btn-default btn-block disabled"; }
		
		if (mmr >= fifthCost) { document.getElementById("button5").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button5").className = "btn btn-default btn-block disabled"; }
	}

	Game.firstButton = function() {
		mmr, start = document.getElementById("mmr").value;
		if (mmr >= firstCost) {
			mmr = mmr - firstCost;
			document.getElementById("mmr").value = mmr;
			rollNumbers("mmr", Math.floor(start), Math.floor(mmr), 300);
			
			mmrps = mmrps + 1.5;
			document.getElementById("mmrps").value = mmrps;
			document.getElementById("mmrps").innerHTML = Math.round(mmrps * 100) / 100 + " mmrps";
			
			firstCost = firstCost * growth;
			document.getElementById("cost1").value = firstCost;
			document.getElementById("cost1").innerHTML = " " + firstCost;
		}
	}
	
	Game.secondButton = function() {
		mmr, start = document.getElementById("mmr").value;
		if (mmr >= secondCost) {
			mmr = mmr - secondCost;
			document.getElementById("mmr").value = mmr;
			rollNumbers("mmr", Math.floor(start), Math.floor(mmr), 300);
			
			mmrps = mmrps + 10.5;
			document.getElementById("mmrps").value = mmrps;
			document.getElementById("mmrps").innerHTML = Math.round(mmrps * 100) / 100 + " mmrps";
			
			secondCost = secondCost * growth;
			document.getElementById("cost2").value = secondCost;
			document.getElementById("cost2").innerHTML = " " + secondCost;
		}
	}
	
	Game.thirdButton = function() {
		mmr, start = document.getElementById("mmr").value;
		if (mmr >= thirdCost) {
			mmr = mmr - thirdCost;
			document.getElementById("mmr").value = mmr;
			rollNumbers("mmr", Math.floor(start), Math.floor(mmr), 300);
			
			mmrps = mmrps + 100.5;
			document.getElementById("mmrps").value = mmrps;
			document.getElementById("mmrps").innerHTML = Math.round(mmrps * 100) / 100 + " mmrps";
			
			thirdCost = thirdCost * growth;
			document.getElementById("cost3").value = thirdCost;
			document.getElementById("cost3").innerHTML = " " + thirdCost;
		}
	}
	
	Game.fourthButton = function() {
		mmr, start = document.getElementById("mmr").value;
		if (mmr >= fourthCost) {
			mmr = mmr - fourthCost;
			document.getElementById("mmr").value = mmr;
			rollNumbers("mmr", Math.floor(start), Math.floor(mmr), 300);
			
			mmrps = mmrps + 1000.5;
			document.getElementById("mmrps").value = mmrps;
			document.getElementById("mmrps").innerHTML = Math.round(mmrps * 100) / 100 + " mmrps";
			
			fourthCost = fourthCost * growth;
			document.getElementById("cost4").value = fourthCost;
			document.getElementById("cost4").innerHTML = " " + fourthCost;
		}
	}
	
	Game.fifthButton = function() {
		mmr, start = document.getElementById("mmr").value;
		if (mmr >= fifthCost) {
			mmr = mmr - fifthCost;
			document.getElementById("mmr").value = mmr;
			rollNumbers("mmr", Math.floor(start), Math.floor(mmr), 300);
			
			mmrps = mmrps + 10000.5;
			document.getElementById("mmrps").value = mmrps;
			document.getElementById("mmrps").innerHTML = Math.round(mmrps * 100) / 100 + " mmrps";
			
			fifthCost = fifthCost * growth;
			document.getElementById("cost5").value = fifthCost;
			document.getElementById("cost5").innerHTML = " " + fifthCost;
		}
	}
	
	Game.toggleButtonOptions = function() {
		document.getElementById("firstInfo").style.display = (document.getElementById("firstInfo").style.display != "block" ? "block" : "none");
		document.getElementById("secondInfo").style.display = (document.getElementById("secondInfo").style.display != "block" ? "block" : "none");
		document.getElementById("thirdInfo").style.display = (document.getElementById("thirdInfo").style.display != "block" ? "block" : "none");
		document.getElementById("fourthInfo").style.display = (document.getElementById("fourthInfo").style.display != "block" ? "block" : "none");
		document.getElementById("fifthInfo").style.display = (document.getElementById("fifthInfo").style.display != "block" ? "block" : "none");
	}
};

/* Load game function */
window.onload = function() {
	setInterval("Game.timedIncrement()", 1000);
	setInterval("Game.buttonCheck()", 0);
	Game.Init();
}