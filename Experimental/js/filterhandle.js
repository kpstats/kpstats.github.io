const catalogue = [
    {
        preSeasonValue:["mMelton", "mTayLakes", "mParkside"],
        preSeasonInner:["v Melton (Match #1)", "v Taylors Lakes (Match #2)", "v Parkside (Match #3)"],
    },
];

var yearElement = document.getElementById("year-filter");
var roundElement = document.getElementById("round-filter");

function filterHandle() {

    var seasonElement = document.getElementById("season-filter");

    if(seasonElement.value == "pre-season") {
        
        console.log(catalogue[0].preSeasonValue.length.toString());

        for(i = 0; i < catalogue[0].preSeasonValue.length; i++) {
            var option = document.createElement("option");
            option.id = catalogue.preSeasonValue[i];
            option.value = catalogue.preSeasonValue[i];
            option.innerHTML = catalogue.preSeasonInner[i];
        }
    } else if(seasonElement.value == "season") {

    }
}