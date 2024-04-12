function advancedSearch() {
	var statFilter = document.getElementById("filter-cont");
	var topFive = document.getElementById("topfive-container");
	if(statFilter.style.display === "block") {
		statFilter.style.display = "none";
		topFive.style.display = "block";
	} else {
		statFilter.style.display = "block";
		topFive.style.display = "none";
	}
}

function menuHandle() {
	var x = document.getElementById("links");
	if(x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}