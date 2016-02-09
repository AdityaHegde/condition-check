module.exports = function(a, b) {
  if(a.idx === b.idx) {
    return b.weight - a.weight;
  }
  return a.idx - b.idx;
};
