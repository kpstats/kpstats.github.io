function advancedSearch() {
	var statFilter = document.getElementById("filter-cont");
	if(statFilter.style.display === "block") {
		statFilter.style.display = "none"
	} else {
		statFilter.style.display = "block";
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