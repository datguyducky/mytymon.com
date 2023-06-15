# mytymon.com
This is my personal website built with Eleventy, and hosted on GitHub Pages.

## Development
To start this project locally and begin development, follow these steps:
- Clone this repository.
- Run `npm install`
- Execute `npm run start` to have Eleventy build the website and serve it locally at `http://localhost:8080`.

#### Adding new posts:
To add new blog posts, follow these steps:
- Create a new file under `/src/posts`. Make sure to include an appropriate title, date (if needed), description, and tags.

#### Adding new articles for projects:
To add new articles for projects, follow these steps:
- Create a new file under `/src/projects`. Similar to regular blog posts, define a title, description, and other relevant fields, along with websiteUrl and sourceUrl if applicable.

### Images:
All images intended for use within blog/project posts should be stored in `/src/assets/images`.

### JavaScript:
Store all JavaScript scripts in `/src/assets/js`.

### Favicon:
The `/favicon` directory contains all possible favicon files, which are then passed through to the root folder of the website using Eleventy config.

### Featured Projects:
The projects featured on the homepage are determined by using the "featured" tag on the project article file.

### Blog posts
The homepage displays only the six most recent blog posts. The remaining posts are shown on the [/posts](https://mytymon.com/posts) page, categorized by the year they were written.