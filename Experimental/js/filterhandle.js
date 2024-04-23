const catalogue = [
    {
        preSeasonValue:["mMelton", "mTayLakes", "mParkside"],
        preSeasonInner:["Match #1 (v Melton)", "Match #2 (v Taylors Lakes)", "Match #3 (v Parkside)"],
        seasonValue:[
        "rOne", "rTwo","rThree", "rFour","rFive", "rSix","rSeven", "rEight",
        "rNine", "rTen","rEleven", "rTwelve","rThirteen", "rFourteen"],
        seasonInner:[
        "R1 (v Airport West)", "R2 (v Greenvale)", "R3 (v Tullamarine)", "R4 (v Strathmore)", 
        "R5 (v Burnside Heights)", "R6 (v Airport West #2)","R7 (v Greenvale #2)", "R8 (v Tullamarine #2)", 
        "R9 (v Burnside Heights #2)", "R10 (v Strathmore #2)","R11 (v Airport West #3)", "R12 (v Strathmore #3)", 
        "R13 (v Burnside Heights #3)", "R14 (v Tullamarine #3)"],
    },
];

const isPlayed = [
    {
        cZero:[true, true, false, false, false, false, false, false, false, false, false, false, false, false],
    }
];

function filterHandle() {
    // YEAR ELEMENT (not needed yet as first season is underway)
    //var yearElement = document.getElementById("year-filter");
}

function filterSeason() {
    var seasonElement = document.getElementById("season-filter");
    var roundElement = document.getElementById("round-filter");

    // if pre season is selected, append options in the round filter
    if(seasonElement.value == "pre-season") {

        for(i = 0; i < catalogue[0].seasonValue.length; i++) {
            roundElement.removeChild(document.getElementById(catalogue[0].seasonValue[i]));
        }

        for(i = 0; i < catalogue[0].preSeasonValue.length; i++) {
            var option = document.createElement("option");
            option.id = catalogue[0].preSeasonValue[i];
            option.value = catalogue[0].preSeasonValue[i];
            option.innerHTML = catalogue[0].preSeasonInner[i];
            roundElement.appendChild(option);
        }

        // or if season is selected remove and append the appropraite options in the round filter
    } else if(seasonElement.value == "season") {

        // Remove
        for(i = 0; i < catalogue[0].preSeasonValue.length; i++) {
            roundElement.removeChild(document.getElementById(catalogue[0].preSeasonValue[i]));
        }

        // Append
        for(i = 0; i < catalogue[0].seasonValue.length; i++) {
            var option = document.createElement("option");
            option.id = catalogue[0].seasonValue[i];
            option.value = catalogue[0].seasonValue[i];
            option.innerHTML = catalogue[0].seasonInner[i];
            
            if(!isPlayed[0].cZero[i]) {
                option.disabled = true;
            } else {
                option.disabled = false;
            }

            roundElement.appendChild(option); 
        }
    }
}