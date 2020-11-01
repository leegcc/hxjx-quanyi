const got = require('got');

async function run() {
  const sessionId = process.env.JSESSIONID;
  if (sessionId == null) {
    console.warn('请先配置 JSESSIONID')
    return;
  }

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
  await run();
})();
