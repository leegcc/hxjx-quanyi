const got = require('got');
const moment = require('moment');

async function run(sessionId) {
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
  const sessionIds = process.env.JSESSIONID;
  if (sessionIds == null) {
    console.warn('请先配置 JSESSIONID')
    return;
  }
  for (const sessionId of sessionIds.trim().split('&')) {
    console.warn(`> 签到开始`);
    await run(sessionId);
    console.warn(`< 签到结束`);
  }
})();
