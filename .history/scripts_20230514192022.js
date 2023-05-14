var subjectObject = {
    "Eon": {
    "Slumptabeller": ["Träfftabeller", "Skador", "Händelser"],
    "Ark": ["Karaktärsblad", "Magiblad"],
    "Tärningsgenerator":[]
    },
    "Back-end": {
    "PHP": ["Variables", "Strings", "Arrays"],
    "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
}
window.onload = function() {
    const subjectSel = document.getElementById("Spelsystem");
    const subSystem = document.getElementById("sSystem");
    const topicSel = document.getElementById("Verktyg");
    const chapterSel = document.getElementById("Verktygskategori");
    for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
        const li = document.createElement("li")
        // subSystem.appendChild(li);

    }
    }
    topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
    }
}
function openNav() {
    document.getElementById("sideNav").style.width = "160px";
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}