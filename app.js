window.onload = function () {
    var f;
    var colors = ['red', 'blue', 'pink', 'orange', 'purple', 'white', 'black', 'gray', 'violet'];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    var theFunctions = [changeColor, changeNumber, changeLetter];
    
    document.getElementById("color").addEventListener('click', theFunctions[0]);
    document.getElementById("number").addEventListener('click', theFunctions[1]);
    document.getElementById("letter").addEventListener('click', theFunctions[2]);
    
    
    var counter = 0;
    
    function changeColor(e) {
        var target = document.getElementById("box");
        target.style.background = colors[0];
        var counter = 1;
        target.innerHTML = "";
        document.getElementById("box").addEventListener('click', change);
        
        function change(e) {
            target.innerHTML = "";
            target.style.background = colors[counter++];
            if(counter == colors.length) {
                counter = 0;
            }
        }
        
    }
    
    function changeNumber(e) {
        var target = document.getElementById("box");
        target.style.background = 'white';
        target.style.fontSize = '500px';
        target.style.textAlign = 'center';
        var counter = 0;
        target.innerHTML = numbers[counter++];
        document.getElementById("box").addEventListener('click', change2);
        
        function change2(e) {
            target.style.background = 'white';
            target.style.fontSize = '500px';
            target.style.textAlign = 'center';
            target.innerHTML = numbers[counter];
            counter++;
            if (counter == numbers.length) {
                counter = 0;
            } 
        }
        
    }
    
    function changeLetter() {
        var target = document.getElementById("box");
        target.style.background = 'white';
        target.style.fontSize = '500px';
        target.style.textAlign = 'center';
        var counter = 0;
        target.innerHTML = letters[counter++];
        document.getElementById("box").addEventListener('click', change3);
        
        function change3(e) {
            target.style.background = 'white';
            target.style.fontSize = '500px';
            target.style.textAlign = 'center';
            target.innerHTML = letters[counter];
            counter++;
            if (counter == letters.length) {
                counter = 0;
            } 
        }
    }
}