const getUsers = require('./users');
const login = require('./login');
const moment = require('moment');
const ft = require('./ftqq');

async function run(username, password) {
  const got = await login(username, password);
  const body = await got.post('api/active/getAward', {
    form: {
      date: moment().format('YYYY-MM-DD')
    }
  }).json();

  if (body.code === 301) {
    console.warn('重复签到');
    return;
  }

  await ft(username + ' ' + body.items);
  console.info(body.items);
}

;(async () => {
  for (const {username, password} of getUsers()) {
    console.warn(`${username} 签到开始`);
    try {
      await run(username, password);
    } catch (e) {
      console.error(e);
    }
    console.warn(`${username} 签到结束`);
  }
})();
