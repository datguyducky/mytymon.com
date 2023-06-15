const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

const { formatDate } = require('./11ty/filters/index.js');

module.exports = function (eleventyConfig) {
	// ---------- Passthrough file copy ----------
	eleventyConfig.addPassthroughCopy({ 'src/assets/images/': 'public/' });
	eleventyConfig.addPassthroughCopy({
		'src/assets/css/*.css': 'css/',
	});
	eleventyConfig.addPassthroughCopy({ 'src/assets/js': 'js/' });
	eleventyConfig.addPassthroughCopy('CNAME');
	eleventyConfig.addPassthroughCopy({ "favicon": "/" });

	// ---------- Markdown extra options ----------
	let markdownItOptions = {
		html: true,
		linkify: true,
		typographer: true,
	};

	eleventyConfig.amendLibrary('md', mdLib => mdLib.use(markdownItAttrs));
	eleventyConfig.setLibrary('md', markdownIt(markdownItOptions));

	// ---------- Collections ----------
	eleventyConfig.addCollection('posts', function (collectionApi) {
		return collectionApi.getFilteredByGlob('src/posts/*.md');
	});

	eleventyConfig.addCollection('projects', function (collectionApi) {
		return collectionApi.getFilteredByGlob('src/projects/*.md');
	});

	eleventyConfig.addCollection('featuredProjects', function (collectionApi) {
		return collectionApi.getFilteredByTag('featured');
	});

	eleventyConfig.addCollection('postsByYear', collectionApi => {
		const posts = collectionApi.getFilteredByGlob('src/posts/*.md').reverse();
		const years = posts.map(post => post.date.getFullYear());
		const uniqueYears = [...new Set(years)];

		const postsByYear = uniqueYears.reduce((prev, year) => {
			const filteredPosts = posts.filter(post => post.date.getFullYear() === year);

			return [...prev, [year, filteredPosts]];
		}, []);

		return postsByYear;
	});

	// 	----------  Custom filters ----------
	eleventyConfig.addFilter('formatDate', formatDate);

	return {
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist',
			includes: '_includes',
			layouts: '_layouts',
		},
	};
};
