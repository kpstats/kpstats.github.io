const disposals = 1;
const kicks = 2;
const handballs = 3;
const clearances = 4;
const tackles = 5;
const marks = 6;
const goals = 7;
const behinds = 8;
const fantasy = 9;

const rowCount = 5;
const dataCount = 3;

const leaderImgSize = "40";
const secondImgSize = "35";
const otherImgSize = "30";

function totalDisposals() {
	for(i = 0; i < player.length; i++) {
		var combinedStats = player[i].mMelton[disposals] + 
		player[i].mTayLakes[disposals] + 
		player[i].mParkside[disposals];	
		player[i].total[disposals] += (combinedStats);
	}
}

function totalKicks() {
	for(i = 0; i < player.length; i++) {
		var combinedStats = player[i].mMelton[kicks] + 
		player[i].mTayLakes[kicks] + 
		player[i].mParkside[kicks];		
		player[i].total[kicks] += (combinedStats);
	}	
}

function totalHandballs() {
	for(i = 0; i < player.length; i++) {
		var combinedStats = player[i].mMelton[handballs] + 
		player[i].mTayLakes[handballs] + 
		player[i].mParkside[handballs];
		player[i].total[handballs] += (combinedStats);
	}	
}

function totalClearances() {
	for(i = 0; i < player.length; i++) {
		var combinedStats = player[i].mMelton[clearances] + 
		player[i].mTayLakes[clearances] + 
		player[i].mParkside[clearances];
		player[i].total[clearances] += (combinedStats);
	}	
}

function totalTackles() {
	for(i = 0; i < player.length; i++) {
		var combinedStats = player[i].mMelton[tackles] + 
		player[i].mTayLakes[tackles] + 
		player[i].mParkside[tackles];
		player[i].total[tackles] += (combinedStats);
	}	
}

function totalMarks() {
	for(i = 0; i < player.length; i++) {
		var combinedStats = player[i].mMelton[marks] + 
		player[i].mTayLakes[marks] + 
		player[i].mParkside[marks];
		player[i].total[marks] += (combinedStats);
	}	
}

function totalGoals() {
	for(i = 0; i < player.length; i++) {
		var combinedStats = player[i].mMelton[goals] + 
		player[i].mTayLakes[goals] + 
		player[i].mParkside[goals];
		player[i].total[goals] += (combinedStats);
	}	
}

function totalBehinds() {
	for(i = 0; i < player.length; i++) {
		var combinedStats = player[i].mMelton[behinds] + 
		player[i].mTayLakes[behinds] + 
		player[i].mParkside[behinds];
		player[i].total[behinds] += (combinedStats);
	}	
}

function totalFantasy() {
	for(i = 0; i < player.length; i++) {
		var combinedStats = player[i].mMelton[fantasy] + 
		player[i].mTayLakes[fantasy] + 
		player[i].mParkside[fantasy];
		player[i].total[fantasy] += (combinedStats);
	}	
}

function sortDisposals() {
		player.sort(function(a, b) 
		{ return b.total[disposals] - a.total[disposals]; });
		
		for(i = 0; i < rowCount; i++) {
			var abrName;
			var specialCase = "Taylor Rose";
			
			if(player[i].name[0] == specialCase) {
				abrName = player[i].name[0].charAt(0) + ". " +
				player[i].name[0].charAt(7) + ". " + player[i].name[1];
			} else {
				abrName = player[i].name[0].charAt(0) + ". " + player[i].name[1];
			}
			
			for(d = 0; d < dataCount; d++) {
				var statsData = document.getElementById("disposals-data" + 
				i.toString() + d.toString());
				
				if(d == 0) {
					var img = document.createElement("img");
					img.src = player[i].jerseyImg;
					img.alt = "jersey image";
					
					if(i == 0) {
						img.height = leaderImgSize;
					} else if (i == 1) {
						img.height = secondImgSize;
					} else {
						img.height = otherImgSize;
					}
					
					document.getElementById("disposals-data" + 
					i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = abrName;
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[1].toString();
			}
		}
	}
}

function sortKicks() {
		player.sort(function(a, b) { return b.total[kicks] - a.total[kicks]; });
		
		for(i = 0; i < rowCount; i++) {
						var abrName;
			var specialCase = "Taylor Rose";
			
			if(player[i].name[0] == specialCase) {
				abrName = player[i].name[0].charAt(0) + ". " +
				player[i].name[0].charAt(7) + ". " + player[i].name[1];
			} else {
				abrName = player[i].name[0].charAt(0) + ". " + player[i].name[1];
			}
			for(d = 0; d < dataCount; d++) {
				var statsData = document.getElementById("kicks-data" + 
				i.toString() + d.toString());
				if(d == 0) {
					var img = document.createElement("img");
					img.src = player[i].jerseyImg;
					img.alt = "jersey image";
					
					if(i == 0) {
						img.height = leaderImgSize;
					} else if (i == 1) {
						img.height = secondImgSize;
					} else {
						img.height = otherImgSize;
					}
					document.getElementById("kicks-data" + 
					i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = abrName;
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[2].toString();
			}
		}
	}
}

function sortHandballs() {
		player.sort(function(a, b) { return b.total[handballs] - a.total[handballs]; });
		
		for(i = 0; i < rowCount; i++) {
						var abrName;
			var specialCase = "Taylor Rose";
			
			if(player[i].name[0] == specialCase) {
				abrName = player[i].name[0].charAt(0) + ". " +
				player[i].name[0].charAt(7) + ". " + player[i].name[1];
			} else {
				abrName = player[i].name[0].charAt(0) + ". " + player[i].name[1];
			}
			for(d = 0; d < dataCount; d++) {
				var statsData = document.getElementById("handballs-data" + 
				i.toString() + d.toString());
				if(d == 0) {
					var img = document.createElement("img");
					img.src = player[i].jerseyImg;
					img.alt = "jersey image";
					
					if(i == 0) {
						img.height = leaderImgSize;
					} else if (i == 1) {
						img.height = secondImgSize;
					} else {
						img.height = otherImgSize;
					}
					document.getElementById("handballs-data" + 
					i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = abrName;
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[3].toString();
			}
		}
	}
}

function sortClearances() {
		player.sort(function(a, b) { return b.total[clearances] - a.total[clearances]; });
		
		for(i = 0; i < rowCount; i++) {
						var abrName;
			var specialCase = "Taylor Rose";
			
			if(player[i].name[0] == specialCase) {
				abrName = player[i].name[0].charAt(0) + ". " +
				player[i].name[0].charAt(7) + ". " + player[i].name[1];
			} else {
				abrName = player[i].name[0].charAt(0) + ". " + player[i].name[1];
			}
			for(d = 0; d < dataCount; d++) {
				var statsData = document.getElementById("clearances-data" + 
				i.toString() + d.toString());
				if(d == 0) {
					var img = document.createElement("img");
					img.src = player[i].jerseyImg;
					img.alt = "jersey image";
					
					if(i == 0) {
						img.height = leaderImgSize;
					} else if (i == 1) {
						img.height = secondImgSize;
					} else {
						img.height = otherImgSize;
					}
				document.getElementById("clearances-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = abrName;
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[4].toString();
			}
		}
	}
}

function sortTackles() {
		player.sort(function(a, b) { return b.total[tackles] - a.total[tackles]; });
		
		for(i = 0; i < rowCount; i++) {
						var abrName;
			var specialCase = "Taylor Rose";
			
			if(player[i].name[0] == specialCase) {
				abrName = player[i].name[0].charAt(0) + ". " +
				player[i].name[0].charAt(7) + ". " + player[i].name[1];
			} else {
				abrName = player[i].name[0].charAt(0) + ". " + player[i].name[1];
			}
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("tackles-data" + 
			i.toString() + d.toString());
			if(d == 0) {
					var img = document.createElement("img");
					img.src = player[i].jerseyImg;
					img.alt = "jersey image";
					
					if(i == 0) {
						img.height = leaderImgSize;
					} else if (i == 1) {
						img.height = secondImgSize;
					} else {
						img.height = otherImgSize;
					}
				document.getElementById("tackles-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = abrName;
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[5].toString();
			}
		}
	}
}

function sortMarks() {
		player.sort(function(a, b) { return b.total[marks] - a.total[marks]; });
		
		for(i = 0; i < rowCount; i++) {
						var abrName;
			var specialCase = "Taylor Rose";
			
			if(player[i].name[0] == specialCase) {
				abrName = player[i].name[0].charAt(0) + ". " +
				player[i].name[0].charAt(7) + ". " + player[i].name[1];
			} else {
				abrName = player[i].name[0].charAt(0) + ". " + player[i].name[1];
			}
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("marks-data" + 
			i.toString() + d.toString());
			if(d == 0) {
					var img = document.createElement("img");
					img.src = player[i].jerseyImg;
					img.alt = "jersey image";
					
					if(i == 0) {
						img.height = leaderImgSize;
					} else if (i == 1) {
						img.height = secondImgSize;
					} else {
						img.height = otherImgSize;
					}
				document.getElementById("marks-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = abrName;
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[6].toString();
			}
		}
	}
}

function sortGoals() {
		player.sort(function(a, b) { return b.total[goals] - a.total[goals]; });
		
		for(i = 0; i < rowCount; i++) {
						var abrName;
			var specialCase = "Taylor Rose";
			
			if(player[i].name[0] == specialCase) {
				abrName = player[i].name[0].charAt(0) + ". " +
				player[i].name[0].charAt(7) + ". " + player[i].name[1];
			} else {
				abrName = player[i].name[0].charAt(0) + ". " + player[i].name[1];
			}
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("goals-data" + 
			i.toString() + d.toString());
			if(d == 0) {
					var img = document.createElement("img");
					img.src = player[i].jerseyImg;
					img.alt = "jersey image";
					
					if(i == 0) {
						img.height = leaderImgSize;
					} else if (i == 1) {
						img.height = secondImgSize;
					} else {
						img.height = otherImgSize;
					}
				document.getElementById("goals-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = abrName;
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[7].toString();
			}
		}
	}
}

function sortBehinds() {
		player.sort(function(a, b) { return b.total[behinds] - a.total[behinds]; });
		
		for(i = 0; i < rowCount; i++) {
						var abrName;
			var specialCase = "Taylor Rose";
			
			if(player[i].name[0] == specialCase) {
				abrName = player[i].name[0].charAt(0) + ". " +
				player[i].name[0].charAt(7) + ". " + player[i].name[1];
			} else {
				abrName = player[i].name[0].charAt(0) + ". " + player[i].name[1];
			}
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("behinds-data" + 
			i.toString() + d.toString());
			if(d == 0) {
					var img = document.createElement("img");
					img.src = player[i].jerseyImg;
					img.alt = "jersey image";
					
					if(i == 0) {
						img.height = leaderImgSize;
					} else if (i == 1) {
						img.height = secondImgSize;
					} else {
						img.height = otherImgSize;
					}
				document.getElementById("behinds-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = abrName;
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[8].toString();
			}
		}
	}
}

function sortFantasy() {
		player.sort(function(a, b) { return b.total[fantasy] - a.total[fantasy]; });
		
		for(i = 0; i < rowCount; i++) {
						var abrName;
			var specialCase = "Taylor Rose";
			
			if(player[i].name[0] == specialCase) {
				abrName = player[i].name[0].charAt(0) + ". " +
				player[i].name[0].charAt(7) + ". " + player[i].name[1];
			} else {
				abrName = player[i].name[0].charAt(0) + ". " + player[i].name[1];
			}
		for(d = 0; d < dataCount; d++) {
			var statsData = document.getElementById("fantasy-data" + 
			i.toString() + d.toString());
			if(d == 0) {
					var img = document.createElement("img");
					img.src = player[i].jerseyImg;
					img.alt = "jersey image";
					
					if(i == 0) {
						img.height = leaderImgSize;
					} else if (i == 1) {
						img.height = secondImgSize;
					} else {
						img.height = otherImgSize;
					}	
				document.getElementById("fantasy-data" + 
				i.toString() + d.toString()).appendChild(img);
			} else if(d == 1) {
				statsData.innerHTML = abrName;
				//console.log(player[i].name[0]);
			} else if(d == 2) {
				statsData.innerHTML = player[i].total[9].toString();
			}
		}
	}
}