const disposals = 1;
const kicks = 2;
const handballs = 3;
const clearances = 4;
const tackles = 5;
const marks = 6;
const goals = 7;
const behinds = 8;
const fantasy = 9;

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
		player.sort(function(a, b) { return b.total[disposals] - a.total[disposals]; });
}

function sortKicks() {
		player.sort(function(a, b) { return b.total[kicks] - a.total[kicks]; });
}

function sortHandballs() {
		player.sort(function(a, b) { return b.total[handballs] - a.total[handballs]; });
}

function sortClearances() {
		player.sort(function(a, b) { return b.total[clearances] - a.total[clearances]; });
}

function sortTackles() {
		player.sort(function(a, b) { return b.total[tackles] - a.total[tackles]; });
}

function sortMarks() {
		player.sort(function(a, b) { return b.total[marks] - a.total[marks]; });
}

function sortGoals() {
		player.sort(function(a, b) { return b.total[goals] - a.total[goals]; });
}

function sortBehinds() {
		player.sort(function(a, b) { return b.total[behinds] - a.total[behinds]; });
}

function sortFantasy() {
		player.sort(function(a, b) { return b.total[fantasy] - a.total[fantasy]; });
}