const got = require('got');
const moment = require('moment');

async function run() {
  const sessionId = process.env.JSESSIONID;
  if (sessionId == null) {
    console.warn('请先配置 JSESSIONID')
    return;
  }

  const body = await got.post('http://quanyi.hxjx360.com/api/active/getAward', {
    headers: {
      Cookie: `JSESSIONID=${sessionId}`
    },
    form: {
      date: moment().format('YYYY-MM-DD')
    }
  }).json();
  console.info(JSON.stringify(body));

  if (body.code === 301) {
    console.warn('重复签到');
  }
}

;(async () => {
  await run();
})();
