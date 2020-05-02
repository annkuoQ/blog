---
title: 如何知道影片從頭到尾 Bitrate 的變化
date: 2020-04-26 14:29:21
description: 最近在研究適合網路串流的 VBR 轉檔，想知道整段影片的 Bitrate 是怎樣變化的，要是 maximum bitrate 高過網速時，可能就會出現緩衝轉圈圈的情況，如果用 MediaInfo 看，只會有 average bitrate ...
categories: 轉檔 / 影音
tags:
- ffmpeg
- excel
- bitrate viewer
- vlc media player
---

最近在研究適合網路串流的 VBR 轉檔
想知道整段影片的 Bitrate 是怎樣變化的
要是 maximum bitrate (最大流量) 高過網速時
可能就會出現緩衝轉圈圈的情況

<!-- more -->

如果用 [MediaInfo](https://mediaarea.net/en/MediaInfo) 看，只會有 average bitrate (平均流量)
但實際上 Bitrate 是上下不停變動的

在開始之前
要先安裝好 [FFmpeg](https://www.ffmpeg.org/) 和 [Excel](https://www.microsoft.com/zh-tw/microsoft-365/excel) 軟體～

## 列出影格大小與長度
首先用 ffprobe 來找出影格資訊
```
$ ffprobe -print_format csv -select_streams v:0 -show_entries frame=pkt_size,pkt_duration_time input.mp4 > output.csv
```
參數解釋:
- `-print_format csv`
用 csv 格式列印出來
- `-select_streams v:0`
選擇 index 為 0 的視訊流
- `-show_entries frame=pkt_size,pkt_duration_time`
指定列出 frame 的 容量大小和時間長度
- `input.mp4`
要檢查的影片
- `> output.csv`
將印出的資料另存成 .csv 檔案

輸出結果如下:

| pkt_duration_time (second) | pkt_size (byte) |
| --- | --- |
| 0.033367 | 140288 |
| 0.033367 | 1992 |
| 0.033367 | 19638 |
| 0.033367 | 4110 |
| 0.033367 | 8653 |
| 0.033367 | 4188 |
| 0.033367 | 36206 |
| 0.033367 | 4686 |
| ...  | ... |

## 累計秒數與大小

現在只得到每一格影格的流量
但不曉得每一秒的流量
這部測試影片是 29.97 格
先算大約 30 格
所以要固定間隔 30 個 frame 來相加
以下附上 excel 公式～

每秒容量大小
1. 第 1 格 ~ 第 30 格 size 加總 -> `=SUM(OFFSET($B$1,(ROW(B1)-1)*30,,30,))*8/1000`
2. 第 31 格 ~ 第 60 格 size 加總 -> `=SUM(OFFSET($B$1,(ROW(B2)-1)*30,,30,))*8/1000`
3. 第 61 格 ~ 第 90 格 size 加總 -> `=SUM(OFFSET($B$1,(ROW(B3)-1)*30,,30,))*8/1000`
4. ...

累計秒數長度
1. 第 1 格 ~ 第 30 格 second 加總 -> `=SUM(OFFSET($A$1,(ROW(A1)-1)*30,,30,))`
2. `1.` + (第 31 格 ~ 第 60 格 second 加總) -> `=C1+SUM(OFFSET($A$1,(ROW(A1)-1)*30,,30,))`
3. `2.` + (第 61 格 ~ 第 90 格 second 加總) -> `=C2+SUM(OFFSET($A$1,(ROW(A2)-1)*30,,30,))`
4. ...

參數解釋
- [OFFSET 函數](https://support.office.com/zh-tw/article/offset-%e5%87%bd%e6%95%b8-c8de19ae-dd79-4b9b-a14e-b4d906d11b66?ocmsassetID=HP010342739&CorrelationId=67d5fda0-b6ae-41a7-9818-9c5c5ea24f91&ui=zh-TW&rs=zh-TW&ad=TW)
傳回指定列數及欄數之儲存格範圍參照
> `OFFSET(reference, rows, cols, [height], [width])`
>  - reference: 起始參照位置
>  - rows: 往上或往下的參照列數
>  - cols: 往左或往右的參照欄數
>  - height: 要傳回參照的列數高度 (選填)
>  - width: 要傳回參照的欄數寬度 (選填)

- [SUM 函數](https://support.office.com/zh-tw/article/sum-%E5%87%BD%E6%95%B8-043e1c7d-7726-4e80-8f32-07b23e057f89)
加總儲存格參照範圍的值
> `SUM(number1,[number2],...)`
> - number1: 可以是數字、一個儲存格參照、一個儲存格範圍
> - number2: 同上 (選填)

- 換算單位
`*8/1000` 這是要幹嘛的呢？
因為 ffprobe 列出的單位是 byte
所以要換算成 Kbit
> 1 byte = 8 bits
> 1 bit = 0.001 kbit

輸出結果如下:

| pkt_duration_time | pkt_size | 累計秒數 (second) | 每秒大小 (kbit) |
| --- | --- | --- | --- |
| 0.033367 | 140288 | 1.00101 | 3550.312 |
| 0.033367 | 1992 | 2.00202 | 2459.352 |
| 0.033367 | 19638 | 3.00303 | 2504.12 |
| 0.033367 | 4110 | 4.00404 | 3661.992 |
| 0.033367 | 8653 | 5.00505 | 2185.192 |
| 0.033367 | 4188 | 6.00606 | 3699.024 |
| 0.033367 | 36206 | 7.00707 | 3951.6 |
| 0.033367 | 4686 | 8.00808 | 4252.92 |
| ... | ... | ... | ... |

接著就可以用圖表功能畫出 Bitrate 變化囉～

<div align="center"><img src="/2020-04-26-how-to-check-video-bitrate/bitrate-graph.jpg" width="500px" /></div>

## 其他軟體

看完上面這個笨方法之後
有沒有其他比較輕鬆的方式呢？

### [Bitrate Viewer](https://www.videohelp.com/software/Bitrate-Viewer-2)
這是一個免費軟體
主要支援 MPEG-1, MPEG-2, MPEG-4 等格式
只要把影片拖拉進軟體內
就會自動跑出圖表

<div align="center"><img src="/2020-04-26-how-to-check-video-bitrate/bitrate-viewer.jpg" width="500px" /></div>

### [VLC media player](https://www.videolan.org/vlc/index.nb.html)
這是一個開源的免費軟體
它可以在播放影片的時候顯示目前的流量
  1. 播放影片
  2. 點擊功能表 `工具` > `媒體資訊`
  3. 切換到 `統計資訊`
  4. 展開 `輸入位元率`

這樣就可以看到目前使用了多少 Bitrate

<div align="center"><img src="/2020-04-26-how-to-check-video-bitrate/vlc-player.jpg" width="700px" /></div>

以上方法看起來
還是用 Bitrate Viewer 最快了
但支援的格式有限
如果想分析 HEVC (H.265) 或 VP9 之類
可能就要找其他軟體或用笨方法了哈哈
