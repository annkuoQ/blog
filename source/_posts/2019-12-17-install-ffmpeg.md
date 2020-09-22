---
title: Win 10 安裝 FFmpeg
date: 2019-12-17 12:25:39
description: ffmpeg 是一個開源的影音處理軟體，不管是轉檔、分析、播放、剪接、字幕、濾鏡都做得到，首先前往官網下載打包好的靜態函式庫版本，解壓縮資料夾後，放到 C 槽路徑下面 ...
categories: 轉檔 / 編碼
tags:
- ffmpeg
---


為什麼要安裝 FFmepg？
- 因為開源、彈性大
- 因為轉檔、分析、播放、剪接、字幕、濾鏡都做得到

<!-- more -->

### 安裝步驟
1. 前往官網 [下載](https://ffmpeg.zeranoe.com/builds/)，我下載的版本是
```
Version: 4.2.1 (穩定版本)
Architecture: Windows 64-bit (作業系統)
Linking: Static (打包好的靜態函式庫)
```
2. 解壓縮資料夾後，修改資料夾名稱為 `ffmpeg`

3. 將資料夾放到以下路徑 `C:\ffmpeg`
4. 開啟檔案總管
對 `本機` 按右鍵 > `內容` > `進階系統設定` > `進階` > `環境變數` >
點擊`系統變數`的 `Path` > `編輯` > `新增` > `C:\ffmpeg\bin` > `確定`
5. 開啟 CMD，輸入 `set PATH=C:`，讓環境變數立即生效，不用重開機
6. 關閉 CMD 再重啟，輸入 `echo %PATH%`，查看是否有增加 `C:\ffmpeg\bin`
7. 在 CMD 或 Cmder 輸入 `ffmpeg -version`，檢查是否安裝成功
```
$ ffmpeg -version
ffmpeg version 4.2.1 Copyright (c) 2000-2019 the FFmpeg developers
built with gcc 9.1.1 (GCC) 20190807
configuration: --enable-gpl --enable-version3 --enable-sdl2 --enable-fontconfig --enable-gnutls --enable-iconv --enable-libass --enable-libdav1d --enable-libbluray --enable-libfreetype --enable-libmp3lame --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libopenjpeg --enable-libopus --enable-libshine --enable-libsnappy --enable-libsoxr --enable-libtheora --enable-libtwolame --enable-libvpx --enable-libwavpack --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxml2 --enable-libzimg --enable-lzma --enable-zlib --enable-gmp --enable-libvidstab --enable-libvorbis --enable-libvo-amrwbenc --enable-libmysofa --enable-libspeex --enable-libxvid --enable-libaom --enable-libmfx --enable-amf --enable-ffnvcodec --enable-cuvid --enable-d3d11va --enable-nvenc --enable-nvdec --enable-dxva2 --enable-avisynth --enable-libopenmpt
libavutil      56. 31.100 / 56. 31.100
libavcodec     58. 54.100 / 58. 54.100
libavformat    58. 29.100 / 58. 29.100
libavdevice    58.  8.100 / 58.  8.100
libavfilter     7. 57.100 /  7. 57.100
libswscale      5.  5.100 /  5.  5.100
libswresample   3.  5.100 /  3.  5.100
libpostproc    55.  5.100 / 55.  5.100
```

### 參考資料
- [How to Install FFmpeg on Windows 10 & Add FFmpeg to Windows Path](https://windowsloop.com/install-ffmpeg-windows-10/)
- [ffmpeg – Windows 安裝](http://jsnwork.kiiuo.com/archives/2705/ffmpeg-windows-%E5%AE%89%E8%A3%9D/)