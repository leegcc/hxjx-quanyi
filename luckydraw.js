const got = require('got');

async function run(sessionId) {
  const response = await got.post('http://quanyi.hxjx360.com/api/active/luckdraw', {
    headers: {
      Cookie: `JSESSIONID=${sessionId}`
    }
  }).json();
  console.log(JSON.stringify(response));

  const {code, data, items} = response;
  if (code === -201) {
    console.warn(data);
    return;
  }
  if (items === -3) {
    console.warn('重复抽奖');
    return;
  }
  const amount = [10000, 800, 500, 300, 200, 100, 50, 10][items - 1];
  console.info(`获得鸿利金：${amount}`);
}

;(async () => {
  const sessionIds = process.env.JSESSIONID;
  if (sessionIds == null) {
    console.warn('请先配置 JSESSIONID')
    return;
  }
  for (const sessionId of sessionIds.trim().split('&')) {
    console.warn(`> 抽奖开始 [${sessionId}]`);
    await run(sessionId);
    console.warn(`< 抽奖结束`);
  }
})();
