window.onload = function () {
    var colors = ['red', 'blue'];
    document.getElementById("box").addEventListener('click', change);
    
    function change(e) {
        var target = document.getElementById("box");
        target.style.background = colors[1];
    }
}