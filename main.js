var mode = "dark";

function darkMode() {
    var body = document.getElementById('body');
    var btn = document.getElementById('night');
    var header = document.getElementById('me');

    if (mode == 'dark'){
        body.style.backgroundColor = '#222';
        body.style.color = '#f3f3f3';
        
        btn.style.backgroundColor = '#f3f3f3';
        btn.innerHTML = '🌑';
        
        header.style.color = '#bbb';

        mode = "nodark";
    } else {
        body.style.backgroundColor = '#f3f3f3';
        body.style.color = '#333';
        
        btn.style.backgroundColor = '#333';
        btn.innerHTML = '🌕';

        header.style.color = '#555';

        mode = "dark";
    }
}