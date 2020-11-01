# 鸿学助学权益自动签到、抽奖

1. Fork 项目。
2. 在 [Settings](/settings) 中添加名称为 `JSESSIONID` 的 [Secrets](/settings/secrets)。`JSESSIONID` 可以配置多个，使用 `&` 符号分隔。
3. 启用项目 Actions，并将定时任务启用。

## Workflows

| 名称 | 描述 |
| - | - |
| [`heartbeat`](/actions?query=workflow%3Aheartbeat) | 登录保持 |
| [`checkin`](/actions?query=workflow%3Acheckin) | 签到 |
| [`luckdraw`](/actions?query=workflow%3Aluckydraw) | 抽奖 |
