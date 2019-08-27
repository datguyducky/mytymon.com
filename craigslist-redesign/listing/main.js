function moreCat() {
    //displaying menu for more categories.
    var menu = document.getElementById('more-categories');
    if(menu.style.display == 'grid'){
        menu.style.display = 'none';
        document.getElementById('searchbar').style.boxShadow = "0px 32px 43px rgba(50, 60, 90, 0.1)";
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
            document.getElementById('searchbar').style.boxShadow = "0px 32px 43px rgba(50, 60, 90, 0.1)";
        };
    }
}

function leftMoreCat(id) {
    var elem = document.getElementsByClassName('cat-ul');
    if(elem[id].style.display == 'block') {
        elem[id].style.display = 'none';
    } else {
        elem[id].style.display = "block";
    }
}

function mobileSettings() {
    var menu = document.getElementById('search-options-mobile');
    var nav =  document.getElementById('nav');

    if(menu.style.display == "none") {
        menu.style.display = "flex";
        nav.style.boxShadow = "0 0 0 10000px rgba(0,0,0,.8)";
    } else {
        menu.style.display = "none";
        nav.style.boxShadow = "none";
    }
}