Urbalytivs Interview

# Background 背景说明
You are designing recommendation code feature so that our sales agent can use it to help attrack new users to use Urbalytics (our data platform). Users who sign up by themselves will be by default "Free" user with limited capabilities. However if user used coupon code after signing up they can be upgraded to "Plus" user for a month
你正在设计一个推荐码（Referral Code）功能，使我们的销售代理（Agent）可以利用该功能吸引新用户使用 Urbalytics（我们的数据平台）。
用户如果自行注册，默认会成为功能受限的「Free」用户。
但如果用户在注册后输入推荐码，可以被升级为「Plus」用户，有效期为一个月。


# Output  输出要求
Design both UI and API so that 
请设计推荐码系统的 UI 和 API 结构，满足以下需求：

## Agents can 销售代理（Agent）端功能需求：
- Create referal code (should be a 6 digit randomized, alpha-numeric code), code should expire in a month 	创建推荐码,推荐码应为 6 位的随机英数字组合（如：A1B2C3）, 推荐码有效期为 1 个月
- Each referral code can be used by multiple users 推荐码可被 多个用户使用
- De-activate referral code, after which it will not be useable any more 可将推荐码设为无效（Deactivate）, 一旦设为无效，不可再被任何用户使用
- View how many users uses a particular referral code 可查看 每个推荐码被多少用户使用过
- [Good to have] (For each user that uses referral code) View user search activity, understand mostly searched items 【加分项】可查看使用该推荐码的每位用户的搜索活动, 用于判断用户主要搜索了哪些数据/区域

## Users can 用户端功能需求：
- Activate code and become a "Plus" user (need to handle various error cases) 输入并激活推荐码, 成功激活后，用户会升级为「Plus」用户，有效期一个月。需处理各种异常情况（如：码已过期、码无效、重复使用等）
- View current status and see status expiry date 用户可以查看自己的当前会员状态和到期时间


# Notes 注意事项
- Please write code as if you are in real work environment, with proper comments, following naming conventions and best practices 请按真实工作环境编写代码，写清注释，使用合适的命名规范与开发最佳实践
- No need to design flow for user registration, use data under /data folder as existing user 无需设计用户注册流程，可使用 /data 文件夹中的数据作为既有用户数据
- No need to design database, can use mock data instead. All data should be persisted into the /data folder 无需设计数据库结构，可使用模拟数据（Mock Data），并将所有数据持久化到 /data 文件夹中
- No need to worry about access control, assuming you can switch between users and agents 无需考虑访问控制，默认可以在用户和代理身份间通过按钮自由切换