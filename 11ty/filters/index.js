const dayjs = require('dayjs');

/** https://day.js.org/docs/en/display/format */
const formatDate = (date, format) => dayjs(date).format(format);

const sortDataByDate = obj => {
	return obj.sort((a, b) => {
		const dateA = dayjs(a.date);
		const dateB = dayjs(b.date);
		return dateA - dateB;
	});
};

module.exports = { formatDate, sortDataByDate };
