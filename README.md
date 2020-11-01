# 鸿学助学权益自动签到、抽奖

1. Fork 项目。
2. 在 Settings 中添加名称为 `JSESSIONID` 的 Secrets。
3. 启用项目 Actions，并将定时任务启用。

## Workflows

| 名称 | 描述 |
| - | - |
| `heartbeat` | 登录保持 |
| `checkin` | 签到 |
| `luckdraw` | 抽奖 |

