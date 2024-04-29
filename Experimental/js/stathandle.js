const rowData = 3;

var counter = 1;

function createTable() {
    var table = document.createElement("table");
    var container = document.getElementById("table-container");
    table.id = "stat-table";
    table.style.tableLayout = "fixed";
    table.style.width = "100%";
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

        //console.log(player[i].psTotal[counter].toString());
        
        }
        counter++;
        //console.log("Stat finished");
    }

    counter = 1;

    for(s = 0; s < 9; s++) {
        //calculate season totals (2024)
            for(i = 0; i < player.length; i++) {
            var stats = player[i].rOne[counter] + 
            player[i].rTwo[counter]; /*+ player[i].rThree[counter] +
            player[i].rFour[counter] + player[i].rFive[counter] +
            player[i].rSix[counter] + player[i].rSeven[counter] +
            player[i].rEight[counter] + player[i].rNine[counter] +
            player[i].rTen[counter] + player[i].rEleven[counter] +
            player[i].rTwelve[counter] + player[i].rThirteen[counter] +
            player[i].rFourteen[counter]*/
            player[i].total[counter] += (stats);
    
            //console.log(player[i].total[counter].toString());
            
        }
            counter++;
            //console.log("Stat finished");
    }  
}

function defaultTable() {
    
}