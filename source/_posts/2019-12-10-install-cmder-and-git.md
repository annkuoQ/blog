---
title: Win 10 安裝 Cmder 與 Git
date: 2019-12-10 22:31:46
description: Cmder 可以讓我們在 Windows 上跑 Linux 指令，取代內建的 CMD，首先到官網下載，點擊 Download Full，解壓縮 cmder.zip，然後將 Cmder 資料夾放到 C 槽底下 ...
categories: 資工 / 程設
tags:
- cmder
- git
---

為什麼要安裝 Cmder？

- 因為要在 Windows 使用 Linux 的指令

<!-- more -->

## 安裝步驟

1. 前往 Cmder 官網 [下載](https://cmder.net/)

2. 點擊 `Download Full`，下載 Full 版本 (包含 Git 指令)

3. 解壓縮 `cmder.zip`

4. 將 Cmder 資料夾放到 C 槽底下 `C:\cmder`

5. 對 `本機` 按右鍵 > `內容` > `進階系統設定` > `進階` > `環境變數` > 點擊`系統變數`的 `Path` > `編輯` > `新增` > `C:\cmder` > `確定`

6. 開啟 CMD，輸入 `set PATH=C:`，讓環境變數立即生效，不用重開機

7. 關閉 CMD 再重啟，輸入 `echo %PATH%`，查看是否有增加 `C:\cmder`

8. 開啟 Cmder，出現警告視窗

  ```
  Warning!
  
  ConEmu binaries were marked as 'Down loaded from inter net':
  C:\cmder\ve ndor\conemu-maximus5\C on Emu.exe
  C:\cmder\vendor\conemu-maximus5\C on Emu64.exe
  C:\cmder\vendor\conemu-maximus5\C on Emu\C on EmuC.exe
  C:\cmder\vendor\c on emu-maximus5\ConEmu\C on EmuC64.exe
  C:\cmder\ve ndor\c on emu-maximus5\C on Emu\C on EmuCD.dll
  C:\cmder\ve ndor\conemu-maximus5\C on Emu\C on EmuCD64.dll
  C:\cmder\ve ndor\conemu-maximus5\C on Emu\C on EmuHIcdll
  C:\cmder\ve ndor\c on emu-maximus5\C on Emu\C on EmuHk64.dll
  
  This may cause blocking or access denied errors!
  
  -> Unblock and Continue
       Let ConEmu try to unblock these files
       You may see SmartScreen and UAC confirmations
  
  -> Visit home page and Exit
       htt ps://conemu.github jo/en/Zoneld.html
  
  -> Ignore and Continue
       You may face further warnings
  ```

  

  9. 點擊叉叉後，還是成功開啟 Cmder
```
Generating clink initial settings in "C:\cmder\config\settings"
複製了         1 個檔案。
Additional *.lua files in "C:\cmder\config" are loaded on startup.
Creating initial user_aliases store in "C:\cmder\config\user_aliases.cmd"...
複製了         1 個檔案。
Running Git for Windows one time Post Install....
"running post-install"
'C:\Windows\system32\drivers\etc\hosts' -> '/etc/hosts'
'C:\Windows\system32\drivers\etc\protocol' -> '/etc/protocols'
'C:\Windows\system32\drivers\etc\services' -> '/etc/services'
'C:\Windows\system32\drivers\etc\networks' -> '/etc/networks'
找不到批次檔。
Creating user startup file: "C:\cmder\config\user_profile.cmd"
複製了         1 個檔案。
```

10. 關閉 Cmder

11. 到警告視窗提到的路徑找出這些檔案
對它們點擊`右鍵` > `內容` > 勾選 `解除封鎖` > `確定`

```
C:\cmder\ve ndor\conemu-maximus5\C on Emu.exe
C:\cmder\vendor\conemu-maximus5\C on Emu64.exe
C:\cmder\vendor\conemu-maximus5\C on Emu\C on EmuC.exe
C:\cmder\vendor\c on emu-maximus5\ConEmu\C on EmuC64.exe
C:\cmder\ve ndor\c on emu-maximus5\C on Emu\C on EmuCD.dll
C:\cmder\ve ndor\conemu-maximus5\C on Emu\C on EmuCD64.dll
C:\cmder\ve ndor\conemu-maximus5\C on Emu\C on EmuHIcdll
C:\cmder\ve ndor\c on emu-maximus5\C on Emu\C on EmuHk64.dll
```


12. 再次開啟 Cmder 沒有警告視窗了

## 優化 Cmder
### 1. 更改提示符號 λ
到 `cmder` > `vendor` > 用記事本開啟 `clink.lua` 後
找到 `local lambda` 修改成自己喜歡的符號
儲存後，重新開啟 Cmder 即可
```
- local lambda = "λ"
+ local lambda = "$"
```
### 2. 以管理員身分執行
對 `Cmder.exe` 按右鍵 > `相容性` > 勾選 `以系統管理員的身分執行此程式` > `確定`
### 3. 新增到右鍵清單
執行以下指令後
在桌面或任一資料夾按右鍵，即可看到 `Cmder Here`
```
$ Cmder.exe /REGISTER ALL
```

## 使用 Git 指令
1. 嘗試 clone 一個 repo
看起來沒有訪問的權限，沒有設定 SSH KEY
```
git clone git@github.com:annkuoQ/test.git
Cloning into 'test'...
The authenticity of host 'github.com (IP ADDRESS)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
y

Warning: Permanently added 'github.com,IP ADDRESS' (RSA) to the list of known hosts.
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

2. 設定 email 與 user name
```
git config --global user.email "annkuo@example.com"
git config --global user.name "annkuo"
```

3. 設定 SSH KEY
```
ssh-keygen -t rsa -C "annkuo@example.com"
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\user/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in C:\Users\user/.ssh/id_rsa.
Your public key has been saved in C:\Users\user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx annkuo@example.com
The key's randomart image is:
+---[RSA 2048]----+
|.  XXXXXXX..     |
|.XXXXXXX. .      |
|..XXXXX. .       |
|   XXXXXXXX      |
|    X   XXXX     |
|     X XX X      |
|      X  X X     |
|      XXX X      |
|       XXX       |
+----[SHA256]-----+
```
4. 到 [GitHub](https://github.com/) > `Setting` > `SSH and GPG keys` > `New SSH Key`
找到剛剛在 `C:\Users\user\.ssh` 生成的 `id_rsa.pub`
用記事本打開，把內容複製到 Key 欄位 (忽視 Title) > `Add SSH key`

5. 檢查是否成功驗證身分
```
ssh -T git@github.com
Hi annkuoQ! You've successfully authenticated, but GitHub does not provide shell access.
```
6. 再次 clone repo 成功
```
git clone git@github.com:annkuoQ/test.git
Cloning into 'test'...
Warning: Permanently added the RSA host key for IP address '(IP ADDRESS)' to the list of known hosts.
remote: Enumerating objects: 486, done.
remote: Counting objects: 100% (486/486), done.
remote: Compressing objects: 100% (377/377), done.
remote: Total 486 (delta 79), reused 482 (delta 77), pack-reused 0
Receiving objects: 100% (486/486), 784.38 KiB | 752.00 KiB/s, done.
Resolving deltas: 100% (79/79), done.
```

## 參考資料
- [Cmder GitHub Wiki](https://github.com/cmderdev/cmder/wiki)
- [cmder waring conEmu binaries were marked as 'Downloaded from internet'](https://www.jianshu.com/p/d19791b7e121)
- [GitHub Help - Connecting to GitHub with SSH](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
- [GitHub Help - Error: Permission denied (publickey)](https://help.github.com/en/github/authenticating-to-github/error-permission-denied-publickey)
- [git遇到的问题之“Please make sure you have the correct access rights and the repository exists.”](https://www.jianshu.com/p/21f4f47689b0)
