document.getElementById('desc').onkeyup = function() {
    document.getElementById('ile').innerHTML = "Pozostało znaków: " + (500 - this.value.length);
};
