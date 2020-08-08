---
title: Win 10 安裝 Node.js 和 http-server
date: 2019-12-16 13:56:25
description: Node.js 可以讓後端伺服器跑 JavaScript，而 http-server 可以讓我們的電腦提供 Web Service，首先到 Node.js 官網下載目前最新的穩定版本，然後檢查環境變數是否已新增 ...
categories: 資工 / 程設
tags:
- node.js
- http-server
---

為什麼要安裝 Node.js？
- 因為它可以讓後端伺服器跑 JavaScript

為什麼要安裝 http-server？
- 因為它可以讓我們的電腦提供 Web Service

<!-- more -->

### 安裝 Node.js
1. 到 Node.js 官網 [下載](https://nodejs.org/en/) 目前最新的穩定版本
2. 雙擊執行 `node-v12.13.1-x64`
3. 不停的點 `Next` 下一步，並完成安裝
4. 檢查環境變數是否已新增 `C:\Program Files\nodejs\`
5. 檢查 Node.js 和 NPM 的版本資訊
```
$ node -v
v12.13.1

$ npm -v
6.12.1
```

#### 環境設定
1. 在 `C:\Program Files\nodejs` 路徑下創建 `node_global` & `node_cache` 資料夾
2. 開啟檔案總管
對`本機`按`右鍵` > `內容` > `進階系統設定` > `進階` > `環境變數` > 
點擊`系統變數`的 `Path` > `編輯` > `新增` > 
`C:\Program Files\nodejs\node_global` 和 `C:\Program Files\nodejs\node_modules` > `確定`

3. 開啟 CMD，輸入 `set PATH=C:`，讓環境變數立即生效，不用重開機
4. 關閉 CMD 再重啟，輸入 `echo %PATH%`，查看是否有增加上面兩個路徑
5. 更改 `global` 和 `cache` 資料夾路徑
```
$ npm config set prefix "C:\Program Files\nodejs\node_global"
$ npm config set cache "C:\Program Files\nodejs\node_cache"
```

### 安裝與執行 http-server
1. 下安裝指令
```
$ npm install http-server -g
C:\Program Files\nodejs\node_global\hs -> C:\Program Files\nodejs\node_global\node_modules\http-server\bin\http-server
C:\Program Files\nodejs\node_global\http-server -> C:\Program Files\nodejs\node_global\node_modules\http-server\bin\http-server
+ http-server@0.12.0
added 27 packages from 35 contributors in 2.798s
```
2. 移動到要開放的工作目錄
```
$ cd C:\Users\user\Desktop\test
```
3. 啟動 localhost
```
$ http-server . 8080
Starting up http-server, serving .
Available on:
  http://192.168.1.114:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```
4. 瀏覽器前往 http://127.0.0.1:8080 ，可以看到 test 目錄的東西
5. 點擊 `Ctrl` + `C` 停止 `http-server`

### 參考資料
- [Ndoe.js安装及环境配置(for windows)](https://woodwhales.cn/2019/01/13/016/)
- [node安裝後的設置(node_global和node_cache)](https://www.twblogs.net/a/5bd32ddd2b717778ac1fe7b7)
- [更改npm global與cache資料夾路徑](https://yuugou727.github.io/blog/2017/05/01/npm-global-cache-folder/)