function showTopFive() {
	
	var rowCount = 5;
	var dataCount = 3;
	
	sortDisposals();
	
	for(i = 0; i < rowCount; i++) {
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("disposals-data" + 
			i.toString() + d.toString());
			if(d == 0) {
				var img = document.createElement("img");
				img.src = player[i].jerseyImg;
				img.alt = "jersey image";
				img.height = "50";	
				document.getElementById("disposals-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = player[i].name[0] + " " + player[i].name[1];
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[1].toString();
			}
		}
	}
	
	sortKicks();
	
	for(i = 0; i < rowCount; i++) {
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("kicks-data" + 
			i.toString() + d.toString());
			if(d == 0) {
				var img = document.createElement("img");
				img.src = player[i].jerseyImg;
				img.alt = "jersey image";
				img.height = "50";	
				document.getElementById("kicks-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = player[i].name[0] + " " + player[i].name[1];
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[2].toString();
			}
		}
	}
	
	sortHandballs();
	
	for(i = 0; i < rowCount; i++) {
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("handballs-data" + 
			i.toString() + d.toString());
			if(d == 0) {
				var img = document.createElement("img");
				img.src = player[i].jerseyImg;
				img.alt = "jersey image";
				img.height = "50";	
				document.getElementById("handballs-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = player[i].name[0] + " " + player[i].name[1];
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[3].toString();
			}
		}
	}
	
	sortClearances();
	
	for(i = 0; i < rowCount; i++) {
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("clearances-data" + 
			i.toString() + d.toString());
			if(d == 0) {
				var img = document.createElement("img");
				img.src = player[i].jerseyImg;
				img.alt = "jersey image";
				img.height = "50";	
				document.getElementById("clearances-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = player[i].name[0] + " " + player[i].name[1];
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[4].toString();
			}
		}
	}
	
	sortTackles();
	
	for(i = 0; i < rowCount; i++) {
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("tackles-data" + 
			i.toString() + d.toString());
			if(d == 0) {
				var img = document.createElement("img");
				img.src = player[i].jerseyImg;
				img.alt = "jersey image";
				img.height = "50";	
				document.getElementById("tackles-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = player[i].name[0] + " " + player[i].name[1];
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[5].toString();
			}
		}
	}
	
	sortMarks();
	
	for(i = 0; i < rowCount; i++) {
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("marks-data" + 
			i.toString() + d.toString());
			if(d == 0) {
				var img = document.createElement("img");
				img.src = player[i].jerseyImg;
				img.alt = "jersey image";
				img.height = "50";	
				document.getElementById("marks-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = player[i].name[0] + " " + player[i].name[1];
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[6].toString();
			}
		}
	}
	
	sortGoals();
	
	for(i = 0; i < rowCount; i++) {
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("goals-data" + 
			i.toString() + d.toString());
			if(d == 0) {
				var img = document.createElement("img");
				img.src = player[i].jerseyImg;
				img.alt = "jersey image";
				img.height = "50";	
				document.getElementById("goals-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = player[i].name[0] + " " + player[i].name[1];
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[7].toString();
			}
		}
	}
	
	sortBehinds();
	
	for(i = 0; i < rowCount; i++) {
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("behinds-data" + 
			i.toString() + d.toString());
			if(d == 0) {
				var img = document.createElement("img");
				img.src = player[i].jerseyImg;
				img.alt = "jersey image";
				img.height = "50";	
				document.getElementById("behinds-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = player[i].name[0] + " " + player[i].name[1];
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[8].toString();
			}
		}
	}
	
	sortFantasy();
	
	for(i = 0; i < rowCount; i++) {
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("fantasy-data" + 
			i.toString() + d.toString());
			if(d == 0) {
				var img = document.createElement("img");
				img.src = player[i].jerseyImg;
				img.alt = "jersey image";
				img.height = "50";	
				document.getElementById("fantasy-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = player[i].name[0] + " " + player[i].name[1];
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[9].toString();
			}
		}
	}
}

function calculateTotals() {
	totalDisposals();
	totalKicks();
	totalHandballs();
	totalClearances();
	totalTackles();
	totalMarks();
	totalGoals();
	totalBehinds();
	totalFantasy();
}