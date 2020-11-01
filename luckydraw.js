const got = require('got');

async function run() {
  const sessionId = process.env.JSESSIONID;
  if (sessionId == null) {
    console.warn('请先配置 JSESSIONID')
    return;
  }

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
  await run();
})();
