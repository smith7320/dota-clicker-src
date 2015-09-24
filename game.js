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
        obj.innerHTML = value + " gold";
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
	var gold = 0;
	var totalgold = 0;
	var gps = 0.10;
	var clickPower = 1;
	var start = 0;
	
	var firstCost = 10;
	var secondCost = 100;
	var thirdCost = 1000;
	var fourthCost = 10000;
	var fifthCost = 100000;
	
	var numBranch = 0;
	var numQuelling = 0;
	var numBoot = 0;
	var numBottle = 0;
	var numMorbid = 0;
	
	var growth = 3;

	
	Game.increment = function() {
		start = gold;
		gold = gold + clickPower;
		document.getElementById("gold").value = gold;
		rollNumbers("gold", Math.floor(start), Math.floor(gold), 100);
	}

	Game.timedIncrement = function() {
		start = gold;
		gold = gold + gps;
		document.getElementById("gold").value = gold + gps;
		rollNumbers("gold", Math.floor(start), Math.floor(gold), 300);
	}
	
	/* Check whether buttons should be active based on cost */
	Game.buttonCheck = function() {
		if (gold >= firstCost) { document.getElementById("button1").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button1").className = "btn btn-default btn-block disabled"; }
		
		if (gold >= secondCost) { document.getElementById("button2").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button2").className = "btn btn-default btn-block disabled"; }
		
		if (gold >= thirdCost) { document.getElementById("button3").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button3").className = "btn btn-default btn-block disabled"; }
		
		if (gold >= fourthCost) { document.getElementById("button4").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button4").className = "btn btn-default btn-block disabled"; }
		
		if (gold >= fifthCost) { document.getElementById("button5").className = "btn btn-default btn-block"; } 
		else { document.getElementById("button5").className = "btn btn-default btn-block disabled"; }
	}

	Game.firstButton = function() {
		gold, start = document.getElementById("gold").value;
		if (gold >= firstCost) {
			gold = gold - firstCost;
			document.getElementById("gold").value = gold;
			rollNumbers("gold", Math.floor(start), Math.floor(gold), 300);
			
			gps = gps + 1.5;
			document.getElementById("gps").value = gps;
			document.getElementById("gps").innerHTML = Math.round(gps * 100) / 100 + " gps";
			
			firstCost = firstCost * growth;
			document.getElementById("cost1").value = firstCost;
			document.getElementById("cost1").innerHTML = " " + firstCost;
			
			numBranch++;
			document.getElementById("numBranch").value = numBranch;
			document.getElementById("numBranch").innerHTML = numBranch;
		}
	}
	
	Game.secondButton = function() {
		gold, start = document.getElementById("gold").value;
		if (gold >= secondCost) {
			gold = gold - secondCost;
			document.getElementById("gold").value = gold;
			rollNumbers("gold", Math.floor(start), Math.floor(gold), 300);
			
			gps = gps + 10.5;
			document.getElementById("gps").value = gps;
			document.getElementById("gps").innerHTML = Math.round(gps * 100) / 100 + " gps";
			
			secondCost = secondCost * growth;
			document.getElementById("cost2").value = secondCost;
			document.getElementById("cost2").innerHTML = " " + secondCost;
			
			numQuelling++;
			document.getElementById("numQuelling").value = numQuelling;
			document.getElementById("numQuelling").innerHTML = numQuelling;
		}
	}
	
	Game.thirdButton = function() {
		gold, start = document.getElementById("gold").value;
		if (gold >= thirdCost) {
			gold = gold - thirdCost;
			document.getElementById("gold").value = gold;
			rollNumbers("gold", Math.floor(start), Math.floor(gold), 300);
			
			gps = gps + 100.5;
			document.getElementById("gps").value = gps;
			document.getElementById("gps").innerHTML = Math.round(gps * 100) / 100 + " gps";
			
			thirdCost = thirdCost * growth;
			document.getElementById("cost3").value = thirdCost;
			document.getElementById("cost3").innerHTML = " " + thirdCost;
			
			numBoot++;
			document.getElementById("numBoot").value = numBoot;
			document.getElementById("numBoot").innerHTML = numBoot;
		}
	}
	
	Game.fourthButton = function() {
		gold, start = document.getElementById("gold").value;
		if (gold >= fourthCost) {
			gold = gold - fourthCost;
			document.getElementById("gold").value = gold;
			rollNumbers("gold", Math.floor(start), Math.floor(gold), 300);
			
			gps = gps + 1000.5;
			document.getElementById("gps").value = gps;
			document.getElementById("gps").innerHTML = Math.round(gps * 100) / 100 + " gps";
			
			fourthCost = fourthCost * growth;
			document.getElementById("cost4").value = fourthCost;
			document.getElementById("cost4").innerHTML = " " + fourthCost;
			
			numBottle++;
			document.getElementById("numBottle").value = numBottle;
			document.getElementById("numBottle").innerHTML = numBottle;
		}
	}
	
	Game.fifthButton = function() {
		gold, start = document.getElementById("gold").value;
		if (gold >= fifthCost) {
			gold = gold - fifthCost;
			document.getElementById("gold").value = gold;
			rollNumbers("gold", Math.floor(start), Math.floor(gold), 300);
			
			gps = gps + 10000.5;
			document.getElementById("gps").value = gps;
			document.getElementById("gps").innerHTML = Math.round(gps * 100) / 100 + " gps";
			
			fifthCost = fifthCost * growth;
			document.getElementById("cost5").value = fifthCost;
			document.getElementById("cost5").innerHTML = " " + fifthCost;
			
			numMorbid++;
			document.getElementById("numMorbid").value = numMorbid;
			document.getElementById("numMorbid").innerHTML = numMorbid;
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