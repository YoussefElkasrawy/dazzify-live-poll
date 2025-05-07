const Vote = require('../models/Vote');
const basicQuestions = require('../data/basicQuestions');
const employeeQuestions = require('../data/employeeQuestions');

exports.getAllPercentages = async function() {
  const percentages = { basic: {}, employee: {} };
  const results = await Vote.aggregate([
    {
      $group: {
        _id: {
          questionKey: '$questionKey',
          isEmployee: '$isEmployee',
          optionKey: '$optionKey'
        },
        count: { $sum: 1 }
      }
    }
  ]);
  const countMap = {};
  results.forEach(r => {
    const { questionKey, isEmployee, optionKey } = r._id;
    const type = isEmployee ? 'employee' : 'basic';
    if (!countMap[type]) countMap[type] = {};
    if (!countMap[type][questionKey]) countMap[type][questionKey] = {};
    countMap[type][questionKey][optionKey] = r.count;
  });
  for (const [type, questions] of [['basic', basicQuestions], ['employee', employeeQuestions]]) {
    for (const q of questions) {
      const optionCounts = {};
      q.options.forEach(opt => {
        optionCounts[opt.key] = (countMap[type] && countMap[type][q.key] && countMap[type][q.key][opt.key]) || 0;
      });
      const total = Object.values(optionCounts).reduce((a, b) => a + b, 0);
      percentages[type][q.key] = q.options.map(opt => {
        const count = optionCounts[opt.key];
        return total === 0 ? 0 : Math.round((count / total) * 100);
      });
    }
  }
  return percentages;
};

exports.renderPoll = async (req, res) => {
  const percentages = await exports.getAllPercentages();
  res.render('index', {
    questions: basicQuestions,
    title: 'Dazzify Live Poll',
    percentages: percentages.basic
  });
};

exports.renderEmployeePoll = async (req, res) => {
  const percentages = await exports.getAllPercentages();
  res.render('employee', {
    questions: employeeQuestions,
    title: 'Dazzify Live Poll - Part 2',
    percentages: percentages.employee
  });
}; 