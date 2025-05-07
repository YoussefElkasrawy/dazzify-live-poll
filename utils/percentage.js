module.exports = function calculatePercentages(optionCounts) {
  const total = Object.values(optionCounts).reduce((a, b) => a + b, 0);
  return Object.keys(optionCounts).map(key =>
    total === 0 ? 0 : Math.round((optionCounts[key] / total) * 100)
  );
}; 