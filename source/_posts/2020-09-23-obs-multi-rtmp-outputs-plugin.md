---
title: 如何使用 OBS 同時直播多個平台
date: 2020-09-23 09:12:05
description: OBS 預設只能直播一個平台，但我需要同時直播 YouTube 和 Facebook，所以這陣子都在搜尋有沒有什麼好的解決方式，在心灰意冷的時候看到 OBS Forum 上有人做了 Plug-in ...
categories: 直播 / 串流
tags:
- obs
---

OBS 預設只能直播一個平台
但我需要同時直播 YouTube 和 Facebook
所以這陣子都在搜尋有沒有什麼好的解決方式

<!-- more -->

例如
- 開兩個 OBS (兩個 OBS 的設定可能會打架)
- 用第三方軟體: Restream, Straas (未來可能改為收費)
- 自架伺服器: Nginx (學習門檻較高)

在心灰意冷的時候看到 [OBS Forum](https://obsproject.com/forum/threads/multiple-rtmp-outputs-plugin.122535/) 上有人做了 Plug-in
原本只有出 Windows 的
但後面也有熱心人士做了 Mac 版的 (感動)

話不多說就趕快開始吧！

## Windows 安裝
1. 下載 [最新釋出的 .zip](https://github.com/sorayuki/obs-multi-rtmp/releases/)
解壓縮後有兩個資料夾: `data`, `obs-plugins`
<div align="center"><img src="/2020-09-23-obs-multi-rtmp-outputs-plugin/windows-download-obs-multi-rtmp-zip.jpg" width="700px"/></div>
2. 把套件複製到相對應的主程式目錄底下

  - `obs-multi-rtmp.dll` 檔案 (套件主程式)
將 `C:\Users\user\Downloads\obs-multi-rtmp_Windows_0.2.5\obs-plugins\64bit\obs-multi-rtmp.dll` 複製到 `C:\Program Files\obs-studio\obs-plugins\64bit` 目錄底下

  - `obs-multi-rtmp\` 資料夾 (套件語系)
將 `C:\Users\user\Downloads\obs-multi-rtmp_Windows_0.2.5\data\obs-plugins\obs-multi-rtmp\` 複製到 `C:\Program Files\obs-studio\data\obs-plugins` 目錄底下

3. 打開 OBS，介面左上角會多一個區塊
<div align="center"><img src="/2020-09-23-obs-multi-rtmp-outputs-plugin/windows-obs-multi-rtmp.jpg" width="700px"/></div>

  其實原本打開的時候，套件語系是英文的
  後來去檢查才發現這個 `.zip` 只有包含簡體中文
  但我系統是設繁體中文，所以沒有對應的語系就自動跳預設語系了 (英文)

  不過好加在有人有發繁體中文的 [Pull Requests](https://github.com/sorayuki/obs-multi-rtmp/pull/44)，作者也有 Merge
  只是沒有釋出在 0.2.5 版本的 `.zip` 裡
  所以要到 [zh-TW.ini](https://raw.githubusercontent.com/sorayuki/obs-multi-rtmp/master/locale/zh-TW.ini) (`右鍵` > `另存新檔` > 命名為 `zh-TW.ini`)
  再把這個檔案複製到 `C:\Program Files\obs-studio\data\obs-plugins\obs-multi-rtmp\locale` 底下就好囉
4. 點擊 `建立新串流目標` > 輸入`名稱`、`伺服器`、`串流碼`等設定 > `OK`
<div align="center"><img src="/2020-09-23-obs-multi-rtmp-outputs-plugin/windows-obs-multi-rtmp-setting.jpg" width="500px"/></div>
5. 點擊 `開始` 送直播訊號

## Mac 安裝
1. 下載這位 [網友](https://obsproject.com/forum/threads/multiple-rtmp-outputs-plugin.122535/post-470367) 做的 [obs-multi-rtmp_0.2.4.pkg](https://ci.appveyor.com/api/buildjobs/lbt0iaac6ta8u357/artifacts/obs-multi-rtmp_0.2.4.pkg)
2. 點兩下執行安裝
若顯示 `無法打開 XXX，因為它來自未識別的開發者`
<div align="center"><img src="/2020-09-23-obs-multi-rtmp-outputs-plugin/mac-can-not-opened-pkg.jpg" width="400px"/></div>

  就要去 `系統偏好設定` > `安全性與隱私` > `強制打開`
<div align="center"><img src="/2020-09-23-obs-multi-rtmp-outputs-plugin/mac-open-pkg-unidentified-developer.jpg" width="500px"/></div>

3. 打開 OBS，介面左上角會多一個區塊
<div align="center"><img src="/2020-09-23-obs-multi-rtmp-outputs-plugin/mac-obs-multi-rtmp.jpg" width="600px"/></div>

  這邊跟上面 Windows 一樣，套件語系是英文的
  首先到 `Macintosh HD/Library/Application Support/obs-studio/plugins/obs-multi-rtmp/data/locale`
  拷貝任意 `.ini` 到桌面上，並將檔名改為 `zh-TW.ini`
  接著使用 `文字編輯` 打開
  把這個 [網頁](https://raw.githubusercontent.com/sorayuki/obs-multi-rtmp/master/locale/zh-TW.ini) 上的內容全部複製到 `文字編輯` 裡並儲存
  最後把這個 `zh-TW.ini` 拷貝回當初的 `locale\` 目錄底下就好囉

4. 點擊 `建立新串流目標` > 輸入`名稱`、`伺服器`、`串流碼`等設定 > `OK`
<div align="center"><img src="/2020-09-23-obs-multi-rtmp-outputs-plugin/mac-obs-multi-rtmp-setting.jpg" width="500px"/></div>
5. 點擊 `Start` 送直播訊號

## 補充
這個套件可以單獨停止或開始某路直播
也可以個別設定解析度和編碼格式
不過要注意電腦效能和網速能承受的量

另外可以發現 Windows 版本是 `0.2.5`、Mac 是 `0.2.4`
所以 Windows 有多一個 Audio Mixer ID 的功能

總之開源的力量真的很強大
雖然我不會寫程式 🤣
但我可以幫忙寫說明文件和宣傳～

## 參考資料
- [Multiple RTMP outputs plugin | OBS Forums](https://obsproject.com/forum/resources/multiple-rtmp-outputs-plugin.964/)
- [sorayuki/obs-multi-rtmp | GitHub](https://github.com/sorayuki/obs-multi-rtmp)
- [做了个OBS多路推流插件 - 哔哩哔哩](https://www.bilibili.com/read/cv5458917/)