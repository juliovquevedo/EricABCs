window.onload = function () {
    var colors = ['red', 'blue', 'pink', 'orange', 'purple', 'white', 'black', 'gray', 'violet'];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    document.getElementById("box").addEventListener('click', change);
    var counter = 1;
    
    function change(e) {
        var target = document.getElementById("box");
        target.style.background = colors[counter++];
    }
}