function getTime() {
  let date = new Date();
  return '   [' + date.toLocaleDateString() + ' ' + date.toLocaleTimeString() + ']';
}

module.exports = getTime;
