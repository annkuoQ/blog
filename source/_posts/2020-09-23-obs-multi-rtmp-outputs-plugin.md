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
所以這陣子都在搜尋有沒有什麼好的解決方法

<!-- more -->

例如
- 開兩個 OBS (兩個 OBS 的設定可能會打架)
- 用第三方軟體: Restream, Straas (未來可能改為收費)
- 自架伺服器: Nginx (學習門檻較高)

在心灰意冷的時候看到 [OBS Forum](https://obsproject.com/forum/threads/multiple-rtmp-outputs-plugin.122535/) 上有人做了 Plug-in
原本只有供應 Windows 使用
但後面有熱心人打包成 Mac 版的 (感動)

話不多說就趕快開始吧！

## Windows 安裝
1. 下載 [obs-multi-rtmp_Windows_0.2.5.zip](https://github.com/sorayuki/obs-multi-rtmp/releases/)
(0.2.5 是我這個時候的最新版本，你也可以下載之後更新的版本)
解壓縮後有兩個資料夾: `data`, `obs-plugins`
<div align="center"><img src="./windows-download-obs-multi-rtmp-zip.jpg"" width="700px"/></div>
2. 把套件複製到相對應的主程式目錄底下

  - 套件主程式 (.dll 檔)
將 `obs-plugins\64bit\obs-multi-rtmp.dll` 複製到 `C:\Program Files\obs-studio\obs-plugins\64bit` 目錄下

  - 套件語系 (資料夾)
將 `data\obs-plugins\obs-multi-rtmp` 複製到 `C:\Program Files\obs-studio\data\obs-plugins` 目錄下

<div align="center"><img src="./windows-plugin-copy.jpg"" width="700px"/></div>

3. 打開 OBS，介面左上角會出現一個 `多路串流` 的區塊
你可能需要拉寬那個視窗才看得清楚

4. 點擊 `建立新串流目標` > 輸入`名稱`、`伺服器`、`串流碼`等設定 > `OK`
5. 點擊 `開始` 送直播訊號
<div align="center"><img src="./windows-obs-multi-rtmp-setting.jpg"" width="700px"/></div>

## Mac 安裝
1. ~下載這位 [網友](https://obsproject.com/forum/threads/multiple-rtmp-outputs-plugin.122535/post-470364) 做的 `obs-multi-rtmp_0.2.4.pkg`~

目前這個連結已經壞了
不過在 [這裡](https://github.com/kilinbox/obs-multi-rtmp/releases) 又有另外一位熱心網友編譯了 Mac 版

首先下載 `obs-multi-rtmp-macos-x64-0.2.5.3.zip` 並解壓縮
(0.2.5.3 是我這個時候的最新版本，你也可以下載之後更新的版本)

<div align="center"><img src="./mac-download-obs-multi-rtmp-zip.jpg"" width="700px"/></div>

2. 把套件資料夾複製到相對應的主程式目錄底下
將 `obs-multi-rtmp` 資料夾複製到 `/Library/Application Support/obs-studio/plugins/` 目錄下
(如果沒有 `obs-studio/plugins/` 資料夾，請自行新增)

<div align="center"><img src="./mac-plugin-copy.jpg"" width="700px"/></div>

3. 打開 OBS，介面左上角會出現一個 `多路串流` 的區塊
你可能需要拉寬那個視窗才看得清楚

4. 點擊 `建立新串流目標` > 輸入`名稱`、`伺服器`、`串流碼`等設定 > `OK`
5. 點擊 `開始` 送直播訊號
<div align="center"><img src="./mac-obs-multi-rtmp-setting-2612.jpg"" width="700px"/></div>

## 補充
這個套件可以單獨停止或開始某路直播
也可以個別設定解析度和編碼格式
不過要注意電腦效能和網速能承受的量

如果不小心關閉了套件的視窗
可以從 `檢視` > `停駐視窗` > `多路串流` (Multiple output) 再次開啟

## 參考資料
- [Multiple RTMP outputs plugin | OBS Forums](https://obsproject.com/forum/resources/multiple-rtmp-outputs-plugin.964/)
- [sorayuki/obs-multi-rtmp | GitHub](https://github.com/sorayuki/obs-multi-rtmp)
- [kilinbox/obs-multi-rtmp | GitHub](https://github.com/kilinbox/obs-multi-rtmp)
- [做了个OBS多路推流插件 - 哔哩哔哩](https://www.bilibili.com/read/cv5458917/)
