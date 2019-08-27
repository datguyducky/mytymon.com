function moreCat() {
    //displaying menu for more categories.
    menu = document.getElementById('more-categories');
    if(menu.style.display == 'grid'){
        menu.style.display = 'none';
        document.getElementById('searchbar').style.boxShadow = "none";
    } else {
        menu.style.display = 'grid';
        document.getElementById('searchbar').style.boxShadow = "0 0 0 10000px rgba(0,0,0,.3)";
    }
}

window.onload = function() {
    var categories = document.querySelectorAll('.category-click');
    for(var i =0; i < categories.length; i++) {
        categories[i].onclick = function() {
            //console.log(this.id);
            var currentCat = document.getElementById('selected-category');
            currentCat.innerText = this.id + ' ▼';
            document.getElementById('more-categories').style.display = 'none';
            document.getElementById('searchbar').style.boxShadow = "none";
        };
    }

    var now = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    //elements for innerText
    var day = document.getElementById('e-day');
    var month = document.getElementById('e-month');
    var year = document.getElementById('e-year');
    
    day.innerText = now.getDate();
    month.innerText = months[now.getMonth()] + ' '; //the last part is to make sure there's space between month and year
    year.innerText = now.getFullYear();
}