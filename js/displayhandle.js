function displayStats() {
    var seasonValue = document.getElementById("season-filter").value;
    var roundValue = document.getElementById("round-filter").value;
    var statValue = document.getElementById("stat-filter").value;

    if(seasonValue == "pre-season") {
        if(roundValue == "mMelton") {
            loadMelton();
        } else if(roundValue == "mTayLakes") {
            loadTaylors();
        } else if(roundValue == "mParkside") {
            loadParkside();
        } else {
            loadPreSeasonDefault();
        }
            
    } else if(seasonValue == "season") {
        if(roundValue == "rOne") {
            loadRoundOne();
        } else if(roundValue == "rTwo") {
            loadRoundTwo();
        } else if(roundValue == "rThree") {
            loadRoundThree();
        } else if(roundValue == "rFour") {
            loadRoundFour();
        } else if(roundValue == "rFive") {
            loadRoundFive();
        } else if(roundValue == "rSix") {
            loadRoundSix();
        } else if(roundValue == "rSeven") {
            loadRoundSeven();
        } else if(roundValue == "rEight") {
            loadRoundEight();
        } else if(roundValue == "rNine") {
            loadRoundNine();
        } else if(roundValue == "rTen") {
            loadRoundTen();
        } else if(roundValue == "rEleven") {
            loadRoundEleven();
        } else if(roundValue == "rTwelve") {
            loadRoundTwelve();
        } else if(roundValue == "rThirteen") {
            loadRoundThirteen();
        } else if(roundValue == "rFourteen") {
            loadRoundFourteen();
        } else {
            loadSeasonDefault();
        }
        
    } else if(seasonValue == "finals") {
        console.log("Load Finals Default");
    }
}