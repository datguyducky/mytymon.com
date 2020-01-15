//function to save 'mode' to storage.
function darkMode() {
    let currentMode = localStorage.getItem('mode');
    if(currentMode == 'dark'){localStorage.setItem('mode', 'nodark');}
    else{localStorage.setItem('mode', 'dark');}
    location.reload(false)
}

//on page load getting 'mode' from local storage -> and if 'mode' is set to 'dark' then page style is set to dark mode.
window.onload = function() {
    let mode = localStorage.getItem('mode');
    let body = document.getElementById('body');
    let btn = document.getElementById('night');
	let header = document.getElementById('me');
	let contact_a = document.getElementsByClassName('contact-a');
	let github = document.getElementsByClassName('feather-github');
	let s_card = document.getElementsByClassName('s-card');

    if (mode == 'dark'){
        body.style.backgroundColor = '#222';
        body.style.color = '#f3f3f3';
        
        btn.style.backgroundColor = '#f3f3f3';
		btn.innerHTML = '🌑';
		
		for(let i=0; i<contact_a.length; i++) {
			contact_a[i].style.color = "#bbb";
		}
		github[0].style.color='#f3f3f3'

		for(let i=0; i<s_card.length; i++) {
			s_card[i].style.backgroundColor = '#444';
			s_card[i].style.borderColor = '#444';
		}
        
        header.style.color = '#bbb';

        localStorage.setItem('mode', 'dark');
    }

    else {
        console.log('dark mode is off');
    }
}