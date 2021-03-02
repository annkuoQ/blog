---
title: 如何使用 LINE Notify 發通知
date: 2021-02-03 22:11:31
description: 最近做了一個監控的 bat，如果服務有發生問題就發通知提醒，而 LINE 是很多人都在用的通訊軟體，於是就把腦筋動到 LINE 上 ...
categories: 資工 / 程設
tags:
- windows
- CMD
- LINE
---

最近做了一個監控的 bat
如果服務有發生問題就發通知提醒
而 LINE 是很多人都在用的通訊軟體
於是就把腦筋動到 LINE 上

<!-- more -->

LINE Notify 跟 LINE Bot 不同
Bot 超過額度需要收費，Notify 則是免費
但 Bot 有一些更進階的功能
像是可以利用官方帳號來推播訊息
不過我只是工作上使用，所以不需要用到


## 設定步驟
1. 到 https://notify-bot.line.me/zh_TW/ 登入帳號

2. 點擊右上角自己的名稱 > 個人頁面

<div align="center"><img src="./my-page.jpg" width="700px"/></div>


3. 點擊 `發行權杖`
- 權杖名稱: 未來通知內容的 "開頭" 會出現這個名稱
- 選擇要接收通知的聊天室: 有兩種，只有自己、群組聊天室
<div align="center"><img src="./generate-token.jpg" width="300px"/></div>

4. 點擊 `發行` 之後，會顯示一串亂碼
先把它複製到別的地方保存
<div align="center"><img src="./copy-token.jpg" width="300px"/></div>

5. `已連動的服務` 出現我們剛剛設定的東西
<div align="center"><img src="./connected-services.jpg" width="700px"/></div>

6. LINE 出現 Notify 的訊息
```
已發行個人存取權杖。連動設定完成後，請將此帳號邀請至「XX」群組中
```
<div align="center"><img src="./successfully-generated-token.jpg" width="400px"/></div>

7. 到要收通知的群組邀請 LINE Notify 進來

8. 打開命令提示字元，使用以下指令
```
$ curl -X POST -H "Authorization: Bearer XXXXXXXXXXXX" -F "message=Hello World" https://notify-api.line.me/api/notify
```
- `XXXXXXXXXXXX` 要改成 "步驟 4" 的一串亂碼
- `message=` 之後要接通知內文

9. 收到通知啦~~~
<div align="center"><img src="./curl-post.jpg" width="400px"/></div>


## 後記

原本 curl 用單引號
結果一直報錯
```
$ curl -X POST -H 'Authorization: Bearer XXXXXXXXXXXX' -F 'message=Hello World' https://notify-api.line.me/api/notify

curl: (6) Could not resolve host: Bearer
curl: (6) Could not resolve host: XXXXXXXXXXXX'
{"status":401,"message":"Missing authorization header"}
```

後來改成雙引號就 OK 了
```
$ curl -X POST -H "Authorization: Bearer XXXXXXXXXXXX" -F "message=Hello World" https://notify-api.line.me/api/notify
{"status":200,"message":"ok"}
```


## 參考資料
- [LINE Notify API Document](https://notify-bot.line.me/doc/en/)
- [LINE Notify Tag Archives - LINE ENGINEERING](https://engineering.linecorp.com/zh-hant/blog/tag/line-notify-tw/)