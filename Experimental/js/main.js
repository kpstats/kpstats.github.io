function loadDefault() {
    var roundElement = document.getElementById("round-filter");

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

    createTable();

    console.log("Loaded!");
}