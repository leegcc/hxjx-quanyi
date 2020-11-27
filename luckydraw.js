const getUsers = require('./users');
const login = require('./login');
const ft = require('./ft');

async function run(username, password) {
  const got = await login(username, password);

  const response = await got.post('api/active/luckdraw').json();
  const {code, data, items} = response;
  if (code === -201) {
    console.error(data);
    return;
  }
  if (items === -3) {
    console.warn('重复抽奖');
    return;
  }
  const amount = [10000, 800, 500, 300, 200, 100, 50, 10][items - 1];
  console.info(`获得鸿利金：${amount}`);
  await ft(`获得鸿利金：${amount}`);
}

;(async () => {
  for (const {username, password} of getUsers()) {
    console.info(`${username} 抽奖开始`);
    try {
      await run(username, password);
    } catch (e) {
      console.error(e);
    }
    console.info(`${username} 抽奖结束`);
  }
})();
