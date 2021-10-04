# NUS Fintech DevOps Project #2: CI/CD

## Desired Outcome: 

Pushing new commits = Automatic notification on: 
* Telegram channel (https://t.me/devops_karl)
* Twitter (https://t.me/devops_karl) 

Notification will contain datetime of commit, commit message, and direct link to the commit to view code changes. 


## Steps Taken:

### 1. Set up IFTTT applet

(a) Link IFTTT to Telegram/Twitter

- Telegram Bot to Telegram channel: https://help.ifttt.com/hc/en-us/articles/360003121113-How-to-get-started-using-IFTTT-with-Telegram

- IFTTT to Twitter account: https://ifttt.com/twitter

(b) Create Applet

![](./img/ifttt_1.png)

Under "If", use Webhook service and set up trigger event name. 

![](./img/ifttt_2.png)

Under "Then", use Telegram/Twitter service and configure notification message.

![](./img/ifttt_3.png)
 
(c) Obtain Webhook Key

Webhook Documentation in https://ifttt.com/maker_webhooks

![](./img/ifttt_4.png)

### 2. Set up Github Actions workflow
