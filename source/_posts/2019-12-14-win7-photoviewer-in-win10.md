---
title: Win 10 使用 Win 7 的相片檢視器
date: 2019-12-14 11:23:35
description: Win 10 開相片變得超慢，還是比較習慣 Win 7 的相片檢視器，首先開啟登錄編輯程式，找到以下路徑，電腦\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Photo Viewer\Capabilities\FileAssociations ...
categories: 電腦 / 硬體
tags: 
- windows
- photo viewer
---

為什麼要改用 Win 7 的 Windows 相片檢視器？
- 因為 Win 10 內建的 相片 APP 開圖片很慢

<!-- more -->

## 如果電腦本身有 Windows 相片檢視器

### 方法一
1. 對 `開始` 按右鍵 > `執行` > 輸入 `regedit` > `確定`
2. 開啟`登錄編輯程式`後，找到以下路徑
```
電腦\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Photo Viewer\Capabilities\FileAssociations
```
3. 在空白處按`右鍵` > `新增` > `字串符`
4. 名稱: 圖檔格式 (e.g. `.jpg` `.jpeg` `.png` `.gif` `.bmp` `.ico`...)
數值資料:  `PhotoViewer.FileAssoc.Tiff`
(每種圖檔格式都要個別新增)
5. 關閉`登錄編輯程式`
6. 對任一圖檔按`右鍵` > `開啟檔案` >  `Windows 相片檢視器`

### 方法二
1. `開始` > `設定` > `應用程式` > `預設應用程式` > `相片檢視器` > `Windows 相片檢視器`

## 如果電腦沒有 Windows 相片檢視器
1. 開啟 `記事本` > 將以下文字存成文字檔 > 檔名改為 `PhotoViewer.reg`
```
Windows Registry Editor Version 5.00

; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.jpg]
@="PhotoViewer.FileAssoc.Tiff"


; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.jpeg]
@="PhotoViewer.FileAssoc.Tiff"


; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.gif]
@="PhotoViewer.FileAssoc.Tiff"


; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.png]
@="PhotoViewer.FileAssoc.Tiff"


; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.bmp]
@="PhotoViewer.FileAssoc.Tiff"


; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.tiff]
@="PhotoViewer.FileAssoc.Tiff"


; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.ico]

@="PhotoViewer.FileAssoc.Tiff"
```
2. 下載完成後，點擊兩下執行
3. 出現 `安全性警告` `無法辨認發行者，您確定要執行這個軟體？` > `執行`
出現 `使用者帳戶控制`  `您是否要允許此應用程式變更您的電腦` > `是`
出現 `登錄檔編輯程式` `新增資訊會意外變更或刪除值，而且會造成元件無法正確工作，如果不信任 C:\Users\user\Desktop\PhotoViewer.reg 中的資訊來源，請不要新增至登錄。是否確定要繼續？` > `是`
4. 出現 `登錄檔編輯程式` `C:\Users\user\Desktop\PhotoViewer.reg 中的機碼和值已經成功加入登錄中` > `確定`
5. `開始` > `設定` > `應用程式` > `預設應用程式` > `相片檢視器` > `Windows 相片檢視器`

### 參考資料
- [Win10將相片檢視器為預設選項](https://hcwang.pixnet.net/blog/post/42718982-win10%E5%B0%87%E7%9B%B8%E7%89%87%E6%AA%A2%E8%A6%96%E5%99%A8%E7%82%BA%E9%A0%90%E8%A8%AD%E9%81%B8%E9%A0%85)
- [如何在Windows 10使用傳統的「相片檢視器」程式來看圖](https://www.kocpc.com.tw/archives/95887)