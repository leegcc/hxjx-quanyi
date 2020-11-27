module.exports = function () {
  const s = process.env.USERS;
  if (s == null) {
    console.warn('未配置 USERS')
    return [];
  }
  return s.split('&')
    .filter(s => s.trim().length > 0)
    .map(s => {
      const [username, password] = s.trim().split('=');
      return {
        username, password
      }
    });
};
