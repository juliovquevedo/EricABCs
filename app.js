window.onload = function () {
    var colors = ['red', 'blue', 'pink', 'orange', 'purple', 'white', 'black', 'gray', 'violet'];
    console.log(colors.length);
    document.getElementById("box").addEventListener('click', change);
    var counter = 1;
    
    function change(e) {
        var target = document.getElementById("box");
        target.style.background = colors[counter++];
    }
}