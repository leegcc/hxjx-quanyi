const got = require('got');
module.exports = async function (message) {
  const key = process.env.FT_SCKEY;
  if (key == null) {
    console.info(`未配置 FT_SCKEY，不发送方糖通知`)
    return;
  }
  return got(`https://sc.ftqq.com/${key}.send?text=${message}`);
};
