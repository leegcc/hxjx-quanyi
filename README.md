# 鸿学助学权益自动签到、抽奖

1. Fork 项目。
2. 在 Settings 中添加名称为 `USERS` 的 Secrets。单个账号格式为 `用户名=密码`，多个账号使用 `&` 分隔，例如：

```
user1=pass1&user2=pass2
``` 

3. 启用项目 Actions。

## Workflows

| 名称 | 描述 |
| - | - |
| `checkin` | 签到 |
| `luckdraw` | 抽奖 |
