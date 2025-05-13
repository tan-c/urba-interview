Urbalytivs Interview

# Background
You are designing recommendation code feature so that our sales agent can use it to help attrack new users to use Urbalytics (our data platform). Users who sign up by themselves will be by default "Free" user with limited capabilities. However if user used coupon code after signing up they can be upgraded to "Plus" user for a month



# Output
Design both UI and API so that 

## Agents can 
- Create referal code (should be a 6 digit randomized, alpha-numeric code), code should expire in a month
- De-activate referral code, after which it will not be useable any more
- View how many users users a particular referral code
- View user search activity, understand mostly searched items 

## Existing user can
- Activate code and become a "Plus" user (need to handle various error cases)
- View current status and see status expiry date

# Notes 
- Please write code as if you are in real work environment, with proper comments, following naming conventions and best practices
- No need to design flow for user registration, use data under /data folder as existing user
- No need to design database, can use mock data instead
- No need to worry about access control, assuming you can switch between users and agents