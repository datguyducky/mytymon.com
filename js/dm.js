//function to save 'mode' to storage.
function darkMode() {
    currentMode = localStorage.getItem("mode");
    if(currentMode == "dark"){localStorage.setItem("mode", "nodark");}
    else{localStorage.setItem("mode", "dark");}
    location.reload(false)
}

//on page load getting 'mode' from local storage -> and if 'mode' is set to 'dark' then page style is set to dark mode.
window.onload = function() {
    var mode = localStorage.getItem("mode");
    var body = document.getElementById('body');
    var btn = document.getElementById('night');
    var header = document.getElementById('me');

    if (mode == 'dark'){
        body.style.backgroundColor = '#222';
        body.style.color = '#f3f3f3';
        
        btn.style.backgroundColor = '#f3f3f3';
        btn.innerHTML = '🌑';
        
        header.style.color = '#bbb';

        localStorage.setItem("mode", "dark");
    }

    else {
        console.log("dark mode is off");
    }
}