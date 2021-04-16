---
title: 一樣的 Bitrate，解析度高的畫質會比較好嗎？
date: 2020-10-25 16:46:42
description: 我知道 Bitrate 越大，畫質越好，但是解析度越大，就代表畫質越好嗎？解析度、Bitrate、畫質它們三者的關係是什麼呢？誰是影響畫質的最大因素呢？於是決定做個實驗，看看同樣 Bitrate，不同解析度的畫質誰比較好 ...
categories: 轉檔 / 編碼
tags:
- ffmpeg
- Mixkit
---

某天同事問說 iMovie 怎麼輸出
我說: 除了設解析度，還有 Bitrate
同事問 Bitrate 是什麼？
我說: 就是資料流，每秒的資料量
通常越大，畫質越好，但檔案越大

<!-- more -->

後來回到自己的位置上
突然覺得很好奇
我知道 Bitrate 越大，畫質越好
但是解析度越大，就代表畫質越好嗎？

解析度、Bitrate、畫質它們三者的關係是什麼呢？
誰是影響畫質的最大因素呢？

於是決定做個實驗
看看同樣 Bitrate，不同解析度的畫質誰比較好

## 測試方法
- 使用 [Mixkit](https://mixkit.co/free-stock-video/man-plays-an-accordion-in-front-of-a-fountain-and-631/) 的影片素材
- 使用 [FFmpeg](https://ffmpeg.org/) 轉出四個檔案
  - 1080p 4 Mbps
  ```
  ffmpeg -i input.mp4 -s 1920x1080 -c:v libx264 -x264-params "nal-hrd=cbr:force-cfr=1" -b:v 4M -minrate 4M -maxrate 4M -bufsize 8M 1080p4M.mp4
  ```
  - 1080p 1 Mbps
  ```
  ffmpeg -i input.mp4 -s 1920x1080 -c:v libx264 -x264-params "nal-hrd=cbr:force-cfr=1" -b:v 1M -minrate 1M -maxrate 1M -bufsize 2M 1080p1M.mp4

  ```
  - 480p 4 Mbps
  ```
  ffmpeg -i input.mp4 -s 854x480 -c:v libx264 -x264-params "nal-hrd=cbr:force-cfr=1" -b:v 4M -minrate 4M -maxrate 4M -bufsize 8M 480p4M.mp4

  ```
  - 480p 1 Mbps
  ```
  ffmpeg -i input.mp4 -s 854x480 -c:v libx264 -x264-params "nal-hrd=cbr:force-cfr=1" -b:v 1M -minrate 1M -maxrate 1M -bufsize 2M 480p1M.mp4

  ```

## 測試結果
### 畫質比較
- `1080p4M` > `480p4M` > `480p1M` > `1080p1M`

### 大小比較
- `1080p4M` = `480p4M` > `1080p1M` = `480p1M`

### 截圖比較
- [點我看大圖](https://annkuoq.github.io/blog/2020-10-25-bitrate-vs-resolution/compare.jpg) 👈

<div align="center"><img src="./compare.jpg"" width="700px"/></div>

### 完整截圖 (依畫質排序)

<div align="center"><img src="./1080p4m.jpg"" width="700px"/></div>

<div align="center"><img src="./480p4m.jpg"" width="700px"/></div>

<div align="center"><img src="./480p1m.jpg"" width="700px"/></div>

<div align="center"><img src="./1080p1m.jpg"" width="700px"/></div>

因為 1080p 要記錄的像素比 480p 還要多，所以需要更多 Bitrate
雖然兩者檔案大小一樣，但 480p 畫質比較好

這讓我想起「一碗麵的故事」
一個人吃一碗麵剛剛好
三個人吃一碗麵會餓
雖然有很多人 (像素)，但只吃一碗麵 (Bitrate)
結果每個人都營養不良 (畫質不良)

所以或許反過來想
你應該依照可以提供的 Bitrate 來決定解析度
要是你只能提供 5 Mbps
解析度卻給到 4K
那也觀賞馬賽克了 QQ

## 結論
1. 同 Bitrate，解析度越大 -> 畫質越差
2. 同解析度，Bitrate 越大 -> 畫質越好
(但 Bitrate 大到一定的階段，畫質也不會一直無限好上去)
3. 一樣的 Bitrate，不論解析度多大，檔案大小都一樣

## 參考資料
- [Mixkit](https://mixkit.co/)
- [FFmpeg](https://ffmpeg.org/)
- [同片源1080p與720p同流量下的畫質 - 精華區 AVEncode](https://www.ptt.cc/man/AVEncode/DA31/M.1320786495.A.B02.html)
- [For same bitrate which looks better between 720p and 1080p - VideoHelp Forum](https://forum.videohelp.com/threads/395300-For-same-bitrate-which-looks-better-between-720p-and-1080p)
