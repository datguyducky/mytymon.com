const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

const { formatDate } = require('./11ty/filters/index.js');

module.exports = function (eleventyConfig) {
	// ---------- Custom watch targets ----------
	eleventyConfig.addWatchTarget('./src/assets');

	// ---------- Passthrough file copy ----------
	eleventyConfig.addPassthroughCopy('src/assets/images/');
	eleventyConfig.addPassthroughCopy({
		'src/assets/css/style.css': 'src/css/style.css',
	});

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
