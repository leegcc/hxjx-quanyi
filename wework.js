const got = require('got');
module.exports = async function (message) {
  const key = process.env.WEWORK;
  if (key == null) {
    console.info(`未配置 WEWORK，不发送企业微信通知`);
    return;
  }

  const [corpId, corpSecret, agentId, toUser] = key.split('|');
  const {access_token} = await got.post(`https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${corpId}&corpsecret=${corpSecret}`).json();
  return got.post(`https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=${access_token}`, {
    json: {
      "touser": toUser,
      "msgtype": "text",
      "agentid": agentId,
      "text": {
        "content": message
      }
    }
  }).json();
};
