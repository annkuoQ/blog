---
title: 如何使用 ffmpeg 串接多個影片
date: 2021-05-08 14:51:15
description: 最近同事在用 Premiere 串接影片時，表示輸出很花時間，因為 Premiere 會重新編碼，以這個案例來說，其實可以使用 ffmpeg 來達成，因為是相同格式的影片，不用重新編碼 ...
categories: 轉檔 / 編碼
tags:
- ffmpeg
---

最近同事在用 Premiere 串接影片時
表示輸出很花時間
因為 Premiere 會重新編碼

<!-- more -->

以這個案例來說
其實可以使用 ffmpeg 來達成
因為是相同格式的影片，不用重新編碼
咻一下～就轉完了～

下面介紹兩種串接方法
一種是串接相同的編碼格式
另一種是串接不同的編碼格式

## 相同編碼格式
### Concat demuxer

1. 在你放影片的資料夾，新建一個文字檔
2. 檔案裡寫上要串接的檔名，開頭加上 `file`
```
file "file1.mp4"
file "file2.mp4"
file "file3.mp4"
...以此類推
```
3. 將檔名儲存為 `list.txt`
4. 在此資料夾開啟 CMD，執行以下指令
```
ffmpeg -f concat -i list.txt -y -c copy output.mp4
```

### Non-monotonous DTS
如果在轉檔的過程中，出現以下 log
那影片就可能會出現影音不同步的情況
需要改用 [重新編碼](https://annkuoq.github.io/blog/2021-05-08-how-to-combine-videos-using-ffmpeg/#不同編碼格式) 的方式串接
```
 Non-monotonous DTS in output stream 0:1; previous: XXXX, current: XXXX; changing to XXXX. This may result in incorrect timestamps in the output file.
```

## 不同編碼格式
### Concat filter

假設要串接三個檔案的指令如下:
```
ffmpeg -i file.mp4 -i file2.webm -i file3.mov^
-filter_complex "[0:0][0:1][1:0][1:1][2:0][2:1]concat=n=3:v=1:a=1[outv][outa]"^
-map "[outv]" -map "[outa]" output.mkv
```
解釋一下指令意思
- 第一行: 三個來源檔的檔名
- 第二行: 
  - 把 `[0:0][0:1][1:0][1:1][2:0][2:1]` 映射到 `[outv]` `[outa]`
  - `concat=n=3`: 串接 3 個檔案
  - `v=1`: 輸出 1 個 video stream
  - `a=1`: 輸出 1 個 audio stream 
- 第三行: 把 `[outv]` 和 `[outa]` 映射到 `output.mkv`

> 這些 `[0:0]` 或 `[1:1]` 都是 stream 的索引值 (index)
> 也就是 stream 的編號



### 何為索引值 (index)
一個影片會包含很多個 stream
例如視訊、音訊、字幕等

你在轉檔的時候
必須指定要使用哪一個 stream 當作來源
而 index 就像這些 stream 的編號

我們試著執行以下指令 `ffmpeg -i file1.mp4 -i file2.mp4 -i file3.mp4`

- 第 3 ~ 15 行是 `Input #0` 的資訊 ->`file1.mp4`
- 第 16 ~ 28 行是 `Input #1` 的資訊 ->`file2.mp4`
- 第 29 ~ 41 行是 `Input #2` 的資訊 ->`file3.mp4`
```
$ ffmpeg -i file1.mp4 -i file2.mp4 -i file3.mp4

Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'file1.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2avc1mp41
    encoder         : Lavf58.29.100
  Duration: 00:05:00.40, start: 0.000000, bitrate: 6130 kb/s
    Stream #0:0(eng): Video: h264 (High) (avc1 / 0x31637661), yuv420p(tv, bt709), 1920x1080 [SAR 1:1 DAR 16:9], 5997 kb/s, 29.97 fps, 29.97 tbr, 30k tbn, 59.94 tbc (default)
    Metadata:
      handler_name    : MP4 Video Media Handler
    Stream #0:1(eng): Audio: aac (LC) (mp4a / 0x6134706D), 48000 Hz, stereo, fltp, 125 kb/s (default)
    Metadata:
      handler_name    : MP4 Sound Media Handler
Input #1, mov,mp4,m4a,3gp,3g2,mj2, from 'file2.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2avc1mp41
    encoder         : Lavf58.29.100
  Duration: 00:05:00.50, start: 0.000000, bitrate: 6346 kb/s
    Stream #1:0(eng): Video: h264 (High) (avc1 / 0x31637661), yuv420p(tv, bt709), 1920x1080 [SAR 1:1 DAR 16:9], 6212 kb/s, 29.97 fps, 29.97 tbr, 30k tbn, 59.94 tbc (default)
    Metadata:
      handler_name    : MP4 Video Media Handler
    Stream #1:1(eng): Audio: aac (LC) (mp4a / 0x6134706D), 44100 Hz, stereo, fltp, 125 kb/s (default)
    Metadata:
      handler_name    : MP4 Sound Media Handler
Input #2, mov,mp4,m4a,3gp,3g2,mj2, from 'file3.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2avc1mp41
    encoder         : Lavf58.29.100
  Duration: 00:05:00.60, start: 0.000000, bitrate: 6086 kb/s
    Stream #2:0(eng): Video: h264 (High) (avc1 / 0x31637661), yuv420p(tv, bt709), 1920x1080 [SAR 1:1 DAR 16:9], 5952 kb/s, 29.97 fps, 29.97 tbr, 30k tbn, 59.94 tbc (default)
    Metadata:
      handler_name    : MP4 Video Media Handler
    Stream #2:1(eng): Audio: aac (LC) (mp4a / 0x6134706D), 44100 Hz, stereo, fltp, 125 kb/s (default)
    Metadata:
      handler_name    : MP4 Sound Media Handler
```
- 三個 input
  - 第 3 行 `Input #0` 代表第 1 個 input (`file1.mp4`)
  - 第 16 行 `Input #1` 代表第 2 個 input (`file2.mp4`)
  - 第 29 行 `Input #2` 代表第 3 個 input (`file3.mp4`)
- 六個 index
  - 第 10 行 `Stream #0:0` 代表第 1 個 input 的第 1 個 stream (`file1 的 video`)
  - 第 13 行 `Stream #0:1` 代表第 1 個 input 的第 2 個 stream (`file1 的 audio`)
  - 第 23 行 `Stream #1:0` 代表第 2 個 input 的第 1 個 stream (`file2 的 video`)
  - 第 26 行 `Stream #1:1` 代表第 2 個 input 的第 2 個 stream (`file2 的 audio`)
  - 第 36 行 `Stream #2:0` 代表第 3 個 input 的第 1 個 stream (`file3 的 video`)
  - 第 39 行 `Stream #2:1` 代表第 3 個 input 的第 2 個 stream (`file3 的 audio`)

聰明的你有沒有發現～
index 是從 `0` 而不是 `1` 開始編號呢？
- 0 代表第一個
- 1 代表第二個
- 2 代表第三個
- ...以此類推

所以 `0:5` 就是我要取第 1 個 input 的第 6 個 stream 的意思
`3:1` 就是我要取第 4 個 input 的第 2 個 stream 囉

關於 index 還有另一種寫法～
就是加上 stream 的種類:
- v 代表 video
- a 代表 audio
- s 代表 subtitle

範例
- `1:a`: 第 2 個 input 的所有 audio stream
- `3:s:4`: 第 4 個 input 的第 5 個 subtitle stream

所以在我們上面的案例中:
你可以把 `[0:0][0:1][1:0][1:1][2:0][2:1]`
改成 `[0:v][0:a][1:v][1:a][2:v][2:a]`
或是 `[0:v:0][0:a:0][1:v:0][1:a:0][2:v:0][2:a:0]`

雖然它們三者結果相同，但意義不同!!!
舉個例子來說:
- `2:1` 是第 3 個 input 的第 2 個 stream
- `2:a` 是第 3 個 input 的所有 audio stream (此案例剛好也只有一個 audio stream)
- `2:a:0` 是第 3 個 input 的第 1 個 audio stream

## 加 LOGO
同事除了串接的需求
影片全程也要加上 Logo

因為我沒有美感，不清楚 Logo 要怎麼擺
所以請同事做一張 1920x1080 (與影片尺寸相符) 且帶透明的 `.png`
直接先把 Logo 的位置和大小給定住
我轉檔的時候就直接蓋上去

指令如下
```
ffmpeg -i file1.mp4 -i file2.mp4 -i file3.mp4 -i logo.png^
-filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a]concat=n=3:v=1:a=1[v][a];^
[v][3:v]overlay=x=0:y=0[vlogo]"^
-map "[vlogo]" -map "[a]" output_logo.mp4
```
解釋一下指令意思
- 第一行: 三個影片和一個 logo 的檔名
- 第二行: 把 `[0:v][0:a][1:v][1:a][2:v][2:a]` 映射到 `[v]` 和 `[a]`
- 第三行: 
  - 把 `[v][3:v]` 映射到 `[vlogo]`
  - `overlay=x=0:y=0`: logo 的 x 和 y 位置都是 0
- 第四行: 把 `[vlogo]` 和 `[a]` 映射到 `output_logo.mp4`

## 參考資料
- [Concat - FFmpeg Filters Documentation](https://ffmpeg.org/ffmpeg-filters.html#concat)
- [Concatenate – FFmpeg wiki](https://trac.ffmpeg.org/wiki/Concatenate)
- [Map – FFmpeg wiki](https://trac.ffmpeg.org/wiki/Map)
- [h.264 - How to concatenate two MP4 files using FFmpeg? - Stack Overflow](https://stackoverflow.com/questions/7333232/how-to-concatenate-two-mp4-files-using-ffmpeg)
- [FFMPEG Video Concat and Overlay - Super User](https://superuser.com/questions/890612/ffmpeg-video-concat-and-overlay)