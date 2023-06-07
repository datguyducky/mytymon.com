const changeThemeToDark = () => {
	document.documentElement.setAttribute('data-theme', 'dark'); // set theme to dark
	localStorage.setItem('data-theme', 'dark'); // save theme to local storage

	// hiding and displaying correct image for change theme button
	displayThemeImage('dark');
};

const changeThemeToLight = () => {
	document.documentElement.setAttribute('data-theme', 'light'); // set theme light
	localStorage.setItem('data-theme', 'light'); // save theme to local storage

	// hiding and displaying correct image for change theme button
	displayThemeImage('light');
};

// Get the element based on ID
const themeElement = document.getElementById('theme-button');
if (themeElement) {
	themeElement.addEventListener('click', () => {
		let theme = localStorage.getItem('data-theme');

		if (theme === 'dark') {
			changeThemeToLight();
		} else {
			changeThemeToDark();
		}
	});
}

const theme = localStorage.getItem('data-theme');
if (theme === 'dark') {
	document.documentElement.setAttribute('data-theme', 'dark');
} else {
	document.documentElement.setAttribute('data-theme', 'light');
}

const displayThemeImage = newTheme => {
	if (newTheme === 'dark') {
		document.getElementById('duck-sleepy').style.display = 'none';
		document.getElementById('duck-sunny').style.display = 'inline-block';
	} else {
		document.getElementById('duck-sunny').style.display = 'none';
		document.getElementById('duck-sleepy').style.display = 'inline-block';
	}
};
