const dayjs = require('dayjs');

/** https://day.js.org/docs/en/display/format */
const formatDate = (date, format) => dayjs(date).format(format);

module.exports = { formatDate };
