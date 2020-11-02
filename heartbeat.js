const got = require('got');

async function run(sessionId) {
  const response = await got.post('http://quanyi.hxjx360.com/api/uiWeb/account/queryAccount', {
    headers: {
      Cookie: `JSESSIONID=${sessionId}`
    }
  }).json();
  console.log(JSON.stringify(response));

  const {code, items} = response;
  if (code !== 200) {
    console.warn('JSESSIONID 已无效，请更换');
  }
}


;(async () => {
  const sessionIds = process.env.JSESSIONID;
  if (sessionIds == null) {
    console.warn('请先配置 JSESSIONID')
    return;
  }
  for (const sessionId of sessionIds.trim().split('&')) {
    console.warn(`> 保持登录开始`);
    await run(sessionId);
    console.warn(`< 保持登录结束`);
  }
})();
