const got = require('got');
const {CookieJar} = require('tough-cookie');

module.exports = async function (username, password) {
  console.log(username + ' 开始登录');
  const instance = got.extend({
    prefixUrl: 'http://quanyi.hxjx360.com',
    cookieJar: new CookieJar()
  });
  const response = await instance.post('api/login2', {
    searchParams: {
      username,
      password: `password_CODE_PW_OPENID_${password}_CODE_PW_OPENID_${username}`
    }
  }).json();

  const {code, data} = response;
  if (code === 1) {
    throw username + ' 登录失败。' + data;
  }

  console.log(username + ' 登录成功');
  return instance;
}
