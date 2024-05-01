const rowData = 3;
var counter = 1;

const disposals = 1;
const kicks = 2;
const handballs = 3;
const clearances = 4;
const tackles = 5;
const marks = 6;
const goals = 7;
const behinds = 8;
const fantasy = 9;

function createTable() {
    var table = document.createElement("table");
    var container = document.getElementById("table-container");
    table.id = "stat-table";
    table.style.tableLayout = "fixed";
    table.style.width = "100%";
    table.style.textAlign = "center";
    container.append(table);

    for(i = 0; i < player.length; i++) {
        var statTable = document.getElementById("stat-table");
        var tr = document.createElement("tr");
        tr.id = i.toString();
        statTable.append(tr);

        for(d = 0; d < rowData; d++) {
            var td = document.createElement("td");
            var row = document.getElementById(i.toString());
            td.id = "data" + i.toString() + d.toString();
            row.append(td);
        }
    }

    //player.sort(function(a, b) { return b.total[tackles] - a.total[tackles]; });
}

function calculateTotals() {

    for(s = 0; s < 9; s++) {
    //calculate pre season totals (2024)
        for(i = 0; i < player.length; i++) {
        var psStats = player[i].mMelton[counter] + 
        player[i].mTayLakes[counter] +
        player[i].mParkside[counter];
        player[i].psTotal[counter] += (psStats);
        }
        counter++;
    }

    counter = 1;

    for(s = 0; s < 9; s++) {
        //calculate season totals (2024)
            for(i = 0; i < player.length; i++) {
            var stats = player[i].rOne[counter] + 
            player[i].rTwo[counter] + player[i].rThree[counter]; 
            /*+ player[i].rFour[counter] + player[i].rFive[counter] +
            player[i].rSix[counter] + player[i].rSeven[counter] +
            player[i].rEight[counter] + player[i].rNine[counter] +
            player[i].rTen[counter] + player[i].rEleven[counter] +
            player[i].rTwelve[counter] + player[i].rThirteen[counter] +
            player[i].rFourteen[counter]
            */
            player[i].total[counter] += (stats);
        }
            counter++;
    }  
}

function defaultTable() {
    player.sort(function(a, b) 
    { return b.total[fantasy] - a.total[fantasy]; });

    for(i = 0; i < player.length; i ++) {
        var img = document.createElement("img");
        var pName = document.createElement("p");
        var pValue = document.createElement("p");
        var imgCell = document.getElementById("data" + i.toString() + "0");
        var nameCell = document.getElementById("data" + i.toString() + "1");
        var valueCell = document.getElementById("data" + i.toString() + "2");

        img.src = player[i].jerseyImg;
        img.alt = "player jersey";
        img.height = "50";
        img.id = "value" + i.toString() + "0";
        imgCell.append(img);
        pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
        pName.id = "value" + i.toString() + "1";
        nameCell.append(pName);
        pValue.innerHTML = player[i].total[fantasy];
        pValue.style.fontSize = "18px";
        pValue.id = "value" + i.toString() + "2";
        valueCell.append(pValue);
    }
}

function loadPreSeasonDefault() {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.psTotal[fantasy] - a.psTotal[fantasy]; });
    
        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].psTotal[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.psTotal[disposals] - a.psTotal[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].psTotal[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.psTotal[kicks] - a.psTotal[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].psTotal[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.psTotal[handballs] - a.psTotal[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].psTotal[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.psTotal[clearances] - a.psTotal[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].psTotal[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.psTotal[tackles] - a.psTotal[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].psTotal[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.psTotal[marks] - a.psTotal[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].psTotal[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.psTotal[goals] - a.psTotal[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].psTotal[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.psTotal[behinds] - a.psTotal[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].psTotal[behinds].toString();
        }
    }
}

function loadSeasonDefault() {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.total[fantasy] - a.total[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].total[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.total[disposals] - a.total[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].total[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.total[kicks] - a.total[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].total[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.total[handballs] - a.total[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].total[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.total[clearances] - a.total[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].total[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.total[tackles] - a.total[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].total[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.total[marks] - a.total[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].total[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.total[goals] - a.total[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].total[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.total[behinds] - a.total[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].total[behinds].toString();
        }
    }
}

function loadMelton() {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.mMelton[fantasy] - a.mMelton[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mMelton[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.mMelton[disposals] - a.mMelton[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mMelton[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.mMelton[kicks] - a.mMelton[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mMelton[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.mMelton[handballs] - a.mMelton[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mMelton[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.mMelton[clearances] - a.mMelton[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mMelton[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.mMelton[tackles] - a.mMelton[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mMelton[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.mMelton[marks] - a.mMelton[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mMelton[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.mMelton[goals] - a.mMelton[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mMelton[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.mMelton[behinds] - a.mMelton[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mMelton[behinds].toString();
        }
    }
}

function loadTaylors() {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.mTayLakes[fantasy] - a.mTayLakes[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mTayLakes[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.mTayLakes[disposals] - a.mTayLakes[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mTayLakes[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.mTayLakes[kicks] - a.mTayLakes[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mTayLakes[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.mTayLakes[handballs] - a.mTayLakes[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mTayLakes[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.mTayLakes[clearances] - a.mTayLakes[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mTayLakes[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.mTayLakes[tackles] - a.mTayLakes[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mTayLakes[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.mTayLakes[marks] - a.mTayLakes[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mTayLakes[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.mTayLakes[goals] - a.mTayLakes[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mTayLakes[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.mTayLakes[behinds] - a.mTayLakes[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mTayLakes[behinds].toString();
        }
    }
}

function loadParkside() {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.mParkside[fantasy] - a.mParkside[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mParkside[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.mParkside[disposals] - a.mParkside[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mParkside[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.mParkside[kicks] - a.mParkside[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mParkside[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.mParkside[handballs] - a.mParkside[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mParkside[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.mParkside[clearances] - a.mParkside[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mParkside[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.mParkside[tackles] - a.mParkside[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mParkside[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.mParkside[marks] - a.mParkside[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mParkside[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.mParkside[goals] - a.mParkside[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mParkside[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.mParkside[behinds] - a.mParkside[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].mParkside[behinds].toString();
        }
    }
}

function loadRoundOne () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rOne[fantasy] - a.rOne[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rOne[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rOne[disposals] - a.rOne[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rOne[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rOne[kicks] - a.rOne[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rOne[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rOne[handballs] - a.rOne[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rOne[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rOne[clearances] - a.rOne[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rOne[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rOne[tackles] - a.rOne[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rOne[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rOne[marks] - a.rOne[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rOne[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rOne[goals] - a.rOne[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rOne[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rOne[behinds] - a.rOne[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rOne[behinds].toString();
        }
    }
}

function loadRoundTwo () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rTwo[fantasy] - a.rTwo[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwo[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rTwo[disposals] - a.rTwo[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwo[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rTwo[kicks] - a.rTwo[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwo[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rTwo[handballs] - a.rTwo[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwo[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rTwo[clearances] - a.rTwo[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwo[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rTwo[tackles] - a.rTwo[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwo[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rTwo[marks] - a.rTwo[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwo[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rTwo[goals] - a.rTwo[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwo[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rTwo[behinds] - a.rTwo[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwo[behinds].toString();
        }
    }
}

function loadRoundThree () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rThree[fantasy] - a.rThree[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThree[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rThree[disposals] - a.rThree[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThree[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rThree[kicks] - a.rThree[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThree[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rThree[handballs] - a.rThree[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThree[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rThree[clearances] - a.rThree[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThree[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rThree[tackles] - a.rThree[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThree[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rThree[marks] - a.rThree[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThree[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rThree[goals] - a.rThree[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThree[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rThree[behinds] - a.rThree[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThree[behinds].toString();
        }
    }
}

function loadRoundFour () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rFour[fantasy] - a.rFour[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFour[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rFour[disposals] - a.rFour[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFour[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rFour[kicks] - a.rFour[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFour[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rFour[handballs] - a.rFour[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFour[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rFour[clearances] - a.rFour[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFour[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rFour[tackles] - a.rFour[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFour[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rFour[marks] - a.rFour[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFour[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rFour[goals] - a.rFour[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFour[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rFour[behinds] - a.rFour[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFour[behinds].toString();
        }
    }
}

function loadRoundFive () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rFive[fantasy] - a.rFive[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFive[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rFive[disposals] - a.rFive[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFive[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rFive[kicks] - a.rFive[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFive[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rFive[handballs] - a.rFive[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFive[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rFive[clearances] - a.rFive[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFive[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rFive[tackles] - a.rFive[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFive[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rFive[marks] - a.rFive[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFive[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rFive[goals] - a.rFive[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFive[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rFive[behinds] - a.rFive[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFive[behinds].toString();
        }
    }
}

function loadRoundSix () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rSix[fantasy] - a.rSix[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSix[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rSix[disposals] - a.rSix[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSix[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rSix[kicks] - a.rSix[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSix[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rSix[handballs] - a.rSix[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSix[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rSix[clearances] - a.rSix[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSix[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rSix[tackles] - a.rSix[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSix[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rSix[marks] - a.rSix[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSix[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rSix[goals] - a.rSix[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSix[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rSix[behinds] - a.rSix[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSix[behinds].toString();
        }
    }
}

function loadRoundSeven () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rSeven[fantasy] - a.rSeven[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSeven[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rSeven[disposals] - a.rSeven[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSeven[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rSeven[kicks] - a.rSeven[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSeven[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rSeven[handballs] - a.rSeven[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSeven[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rSeven[clearances] - a.rSeven[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSeven[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rSeven[tackles] - a.rSeven[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSeven[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rSeven[marks] - a.rSeven[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSeven[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rSeven[goals] - a.rSeven[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSeven[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rSeven[behinds] - a.rSeven[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rSeven[behinds].toString();
        }
    }
}

function loadRoundEight () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rEight[fantasy] - a.rEight[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEight[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rEight[disposals] - a.rEight[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEight[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rEight[kicks] - a.rEight[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEight[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rEight[handballs] - a.rEight[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEight[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rEight[clearances] - a.rEight[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEight[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rEight[tackles] - a.rEight[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEight[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rEight[marks] - a.rEight[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEight[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rEight[goals] - a.rEight[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEight[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rEight[behinds] - a.rEight[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEight[behinds].toString();
        }
    }
}

function loadRoundNine () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rNine[fantasy] - a.rNine[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rNine[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rNine[disposals] - a.rNine[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rNine[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rNine[kicks] - a.rNine[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rNine[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rNine[handballs] - a.rNine[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rNine[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rNine[clearances] - a.rNine[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rNine[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rNine[tackles] - a.rNine[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rNine[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rNine[marks] - a.rNine[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rNine[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rNine[goals] - a.rNine[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rNine[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rNine[behinds] - a.rNine[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rNine[behinds].toString();
        }
    }
}

function loadRoundTen () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rTen[fantasy] - a.rTen[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTen[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rTen[disposals] - a.rTen[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTen[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rTen[kicks] - a.rTen[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTen[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rTen[handballs] - a.rTen[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTen[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rTen[clearances] - a.rTen[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTen[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rTen[tackles] - a.rTen[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTen[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rTen[marks] - a.rTen[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTen[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rTen[goals] - a.rTen[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTen[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rTen[behinds] - a.rTen[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTen[behinds].toString();
        }
    }
}

function loadRoundEleven () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rEleven[fantasy] - a.rEleven[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEleven[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rEleven[disposals] - a.rEleven[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEleven[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rEleven[kicks] - a.rEleven[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEleven[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rEleven[handballs] - a.rEleven[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEleven[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rEleven[clearances] - a.rEleven[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEleven[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rEleven[tackles] - a.rEleven[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEleven[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rEleven[marks] - a.rEleven[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEleven[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rEleven[goals] - a.rEleven[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEleven[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rEleven[behinds] - a.rEleven[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rEleven[behinds].toString();
        }
    }
}

function loadRoundTwelve () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rTwelve[fantasy] - a.rTwelve[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwelve[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rTwelve[disposals] - a.rTwelve[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwelve[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rTwelve[kicks] - a.rTwelve[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwelve[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rTwelve[handballs] - a.rTwelve[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwelve[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rTwelve[clearances] - a.rTwelve[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwelve[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rTwelve[tackles] - a.rTwelve[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwelve[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rTwelve[marks] - a.rTwelve[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwelve[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rTwelve[goals] - a.rTwelve[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwelve[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rTwelve[behinds] - a.rTwelve[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rTwelve[behinds].toString();
        }
    }
}

function loadRoundThirteen () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rThirteen[fantasy] - a.rThirteen[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThirteen[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rThirteen[disposals] - a.rThirteen[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThirteen[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rThirteen[kicks] - a.rThirteen[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThirteen[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rThirteen[handballs] - a.rThirteen[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThirteen[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rThirteen[clearances] - a.rThirteen[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThirteen[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rThirteen[tackles] - a.rThirteen[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThirteen[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rThirteen[marks] - a.rThirteen[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThirteen[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rThirteen[goals] - a.rThirteen[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThirteen[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rThirteen[behinds] - a.rThirteen[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rThirteen[behinds].toString();
        }
    }
}

function loadRoundFourteen () {
    var selectedStat = document.getElementById("stat-filter").value;

    if(selectedStat == "stat-fantasy") {
        player.sort(function(a, b) 
        { return b.rFourteen[fantasy] - a.rFourteen[fantasy]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFourteen[fantasy].toString();
        }
    } else if(selectedStat == "stat-disposals") {
        player.sort(function(a, b) 
        { return b.rFourteen[disposals] - a.rFourteen[disposals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFourteen[disposals].toString();
        }
    } else if(selectedStat == "stat-kicks") {
        player.sort(function(a, b) 
        { return b.rFourteen[kicks] - a.rFourteen[kicks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFourteen[kicks].toString();
        }
    } else if(selectedStat == "stat-handballs") {
        player.sort(function(a, b) 
        { return b.rFourteen[handballs] - a.rFourteen[handballs]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFourteen[handballs].toString();
        }
    } else if(selectedStat == "stat-clearances") {
        player.sort(function(a, b) 
        { return b.rFourteen[clearances] - a.rFourteen[clearances]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFourteen[clearances].toString();
        }
    } else if(selectedStat == "stat-tackles") {
        player.sort(function(a, b) 
        { return b.rFourteen[tackles] - a.rFourteen[tackles]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFourteen[tackles].toString();
        }
    } else if(selectedStat == "stat-marks") {
        player.sort(function(a, b) 
        { return b.rFourteen[marks] - a.rFourteen[marks]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFourteen[marks].toString();
        }
    } else if(selectedStat == "stat-goals") {
        player.sort(function(a, b) 
        { return b.rFourteen[goals] - a.rFourteen[goals]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFourteen[goals].toString();
        }
    } else if(selectedStat == "stat-behinds") {
        player.sort(function(a, b) 
        { return b.rFourteen[behinds] - a.rFourteen[behinds]; });

        for(i = 0; i < player.length; i++) {
            var pImg = document.getElementById("value" + i.toString() + "0");
            var pName = document.getElementById("value" + i.toString() + "1");
            var pValue = document.getElementById("value" + i.toString() + "2");
            pImg.src = player[i].jerseyImg;
            pName.innerHTML = player[i].name[0] + " " + player[i].name[1];
            pValue.innerHTML = player[i].rFourteen[behinds].toString();
        }
    }
}