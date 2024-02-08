const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const mdfigcaption = require('markdown-it-image-figures');

const { formatDate } = require('./11ty/filters/index.js');
const { sortDataByDate } = require('./11ty/filters');

module.exports = function (eleventyConfig) {
	// ---------- Passthrough file copy ----------
	eleventyConfig.addPassthroughCopy({ 'src/assets/images/': 'public/' });
	eleventyConfig.addPassthroughCopy({
		'src/assets/css/*.css': 'css/',
	});
	eleventyConfig.addPassthroughCopy({ 'src/assets/js': 'js/' });
	eleventyConfig.addPassthroughCopy('CNAME');
	eleventyConfig.addPassthroughCopy({ favicon: '/' });

	// ---------- Markdown extra options ----------
	let markdownItOptions = {
		html: true,
		linkify: true,
		typographer: true,
	};

	eleventyConfig.amendLibrary('md', mdLib => mdLib.use(markdownItAttrs));
	eleventyConfig.setLibrary(
		'md',
		markdownIt(markdownItOptions).use(mdfigcaption, { figcaption: true, lazy: true, async: true }),
	);

	// ---------- Collections ----------
	eleventyConfig.addCollection('posts', function (collectionApi) {
		return collectionApi.getFilteredByGlob('src/posts/*.md');
	});

	eleventyConfig.addFilter('featuredProjects', function (projects) {
		return projects.filter(project => project?.featured);
	});

	eleventyConfig.addCollection('postsByYear', collectionApi => {
		const posts = collectionApi.getFilteredByGlob('src/posts/*.md').reverse();
		const years = posts.map(post => post.date.getFullYear());
		const uniqueYears = [...new Set(years)];

		return uniqueYears.reduce((prev, year) => {
			const filteredPosts = posts.filter(post => post.date.getFullYear() === year);

			return [...prev, [year, filteredPosts]];
		}, []);
	});

	// 	----------  Custom filters ----------
	eleventyConfig.addFilter('formatDate', formatDate);
	eleventyConfig.addFilter('sortDataByDate', sortDataByDate);

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
