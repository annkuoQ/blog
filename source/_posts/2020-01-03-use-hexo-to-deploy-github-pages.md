---
title: 用 Hexo 和 GitHub Pages 架部落格
date: 2020-01-03 23:19:47
description: Hexo 中文資源比較多，也有很多別人做好的主題可以直接用，一鍵就可以產生靜態網站並部署，在開始之前要先創建一個 repo，然後執行 npm install -g hexo-cli ...
categories: 資工 / 程設
tags:
- hexo
- github pages
---

為什麼要用 Hexo？
  - 因為中文資源比較多
  - 因為很多別人做好的主題可以直接用

執行環境
   - Win 10 與 Cmder

<!-- more -->

## 前置步驟
1. 安裝 Git
2. 安裝 Node.js
3. 創建一個 GitHub Repository

## 安裝步驟
1. 安裝 hexo
```
$ npm install -g hexo-cli
C:\Program Files\nodejs\node_global\hexo -> C:\Program Files\nodejs\node_global\node_modules\hexo-cli\bin\hexo
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\hexo-cli\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ hexo-cli@3.1.0
added 82 packages from 356 contributors in 5.298s
```
2. cd 到桌面
```
cd C:\Users\user\Desktop
```
3. 建立網站所需檔案
```
$ hexo init test
INFO  Cloning hexo-starter https://github.com/hexojs/hexo-starter.git
Cloning into 'C:\Users\user\Desktop\test'...
remote: Enumerating objects: 30, done.
remote: Counting objects: 100% (30/30), done.
remote: Compressing objects: 100% (24/24), done.

Receiving objects: 100% (161/161), 31.79 KiB | 4.54 MiB/s, done.
Resolving deltas: 100% (74/74), done.
Submodule 'themes/landscape' (https://github.com/hexojs/hexo-theme-landscape.git) registered for path 'themes/landscape'
Cloning into 'C:/Users/user/Desktop/test/themes/landscape'...
remote: Enumerating objects: 1054, done.
remote: Total 1054 (delta 0), reused 0 (delta 0), pack-reused 1054
Receiving objects: 100% (1054/1054), 3.21 MiB | 1.91 MiB/s, done.
Resolving deltas: 100% (581/581), done.
Submodule path 'themes/landscape': checked out '73a23c51f8487cfcd7c6deec96ccc7543960d350'
INFO  Install dependencies

> ejs@2.7.4 postinstall C:\Users\user\Desktop\test\node_modules\ejs
> node ./postinstall.js

Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\nunjucks\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 371 packages from 472 contributors and audited 2643 packages in 31.54s
found 0 vulnerabilities

INFO  Start blogging with Hexo!
```
4. 現在的目錄結構變成這樣
```
test
├─node_modules
│  ├─...
├─scaffolds
├─source
│  └─_posts
└─themes
    └─landscape
        ├─languages
        ├─layout
        │  ├─_partial
        │  │  └─post
        │  └─_widget
        ├─scripts
        └─source
            ├─css
            │  ├─fonts
            │  ├─images
            │  ├─_partial
            │  └─_util
            ├─fancybox
            │  └─helpers
            └─js
```
5. 進到資料夾中
```
$ cd test\
```
6. 安裝相關套件
```
$ npm install
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\nunjucks\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

audited 2643 packages in 4.048s
found 0 vulnerabilities
```

## 建立網站
1. 產生靜態網站
```
$ hexo g
INFO  Start processing
INFO  Files loaded in 191 ms
INFO  Generated: index.html
INFO  Generated: archives/index.html
INFO  Generated: fancybox/blank.gif
INFO  Generated: fancybox/jquery.fancybox.css
INFO  Generated: fancybox/fancybox_loading.gif
INFO  Generated: fancybox/jquery.fancybox.pack.js
INFO  Generated: fancybox/jquery.fancybox.js
INFO  Generated: fancybox/fancybox_loading@2x.gif
INFO  Generated: fancybox/fancybox_overlay.png
INFO  Generated: fancybox/fancybox_sprite.png
INFO  Generated: fancybox/fancybox_sprite@2x.png
INFO  Generated: archives/2020/01/index.html
INFO  Generated: archives/2020/index.html
INFO  Generated: css/fonts/fontawesome-webfont.eot
INFO  Generated: fancybox/helpers/jquery.fancybox-media.js
INFO  Generated: fancybox/helpers/jquery.fancybox-buttons.css
INFO  Generated: js/script.js
INFO  Generated: fancybox/helpers/jquery.fancybox-thumbs.css
INFO  Generated: fancybox/helpers/jquery.fancybox-thumbs.js
INFO  Generated: css/fonts/fontawesome-webfont.woff
INFO  Generated: fancybox/helpers/jquery.fancybox-buttons.js
INFO  Generated: fancybox/helpers/fancybox_buttons.png
INFO  Generated: css/fonts/fontawesome-webfont.svg
INFO  Generated: css/style.css
INFO  Generated: css/fonts/fontawesome-webfont.ttf
INFO  Generated: css/fonts/FontAwesome.otf
INFO  Generated: 2020/01/03/hello-world/index.html
INFO  Generated: css/images/banner.jpg
INFO  28 files generated in 533 ms
```
2. 多了一個 `public\` 資料夾出來，目錄結構如下
```
public
├─2020
│  └─01
│      └─03
│          └─hello-world
├─archives
│  └─2020
│      └─01
├─css
│  ├─fonts
│  └─images
├─fancybox
│  └─helpers
└─js
```
3. 啟動本地服務器
```
$ hexo server
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```
4. 前往 http://localhost:4000 顯示範例網站
![hexo-new-site](./hexo-new-site.jpg)
5. `Ctrl+ C` 停止服務器

## 建立文章

1. 執行創建文章的指令
```
$ hexo new "post title"
INFO  Created: ~\Desktop\test\source\_posts\post-title.md
```
2. 在 `\source\_posts` 底下新增了一個叫 `post-title.md` 的檔案
打開檔案後，可以看到已經有些內容在裡面
是剛剛打的標題和創建文章的時間
```
---
title: post title
date: 2020-01-03 23:25:41
tags:
---
```

3. 試著在下面打一些內容，並儲存
```
---
title: post title
date: 2020-01-03 23:25:41
tags:
---

# H1
## H2
### H3
#### H4
##### H5
###### H6

_下劃線_

**兩個星號**

~~兩個波浪~~

> 引用區塊

- 無序列表
- 無序列表
- 無序列表

1. 有序列表
2. 有序列表
3. 有序列表

[連結文字](https://www.google.com)

頭尾使用 `反引號` 包起來

​```javascript
var s = "JavaScript";
alert(s);`` `
```

4.  再次產生靜態網站
```
$ hexo g
INFO  Start processing
INFO  Files loaded in 168 ms
INFO  Generated: archives/index.html
INFO  Generated: 2020/01/03/hello-world/index.html
INFO  Generated: index.html
INFO  Generated: archives/2020/01/index.html
INFO  Generated: archives/2020/index.html
INFO  Generated: 2020/01/03/post-title/index.html
INFO  6 files generated in 52 ms
```
5. 再次啟動服務器
```
$ hexo server
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```
6. 前往 http://localhost:4000/test/2020/01/03/post-title/ 可以看到新文章出現
![hexo-new-post](./hexo-new-post.jpg)

## 部署網站
1. 安裝 Git 部署套件
```
$ npm install hexo-deployer-git --save
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\nunjucks\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ hexo-deployer-git@2.1.0
added 1 package from 1 contributor and audited 2744 packages in 6.991s
found 0 vulnerabilities
```
2. 開啟 `_config.yml`，編寫以下的值，並儲存檔案
```
# URL
url: https://<username>.github.io
root: /<reponame>/

deploy:
  type: git
  repo: git@github.com:<username>/<reponame>.git
  branch: master
```
3. 部署到 GitHub
```
$ hexo d
INFO  Deploying: git
INFO  Setting up Git deployment...
Initialized empty Git repository in C:/Users/user/Desktop/test/.deploy_git/.git/
[master (root-commit) 5f12877] First commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 placeholder
INFO  Clearing .deploy_git folder...
INFO  Copying files from public folder...
INFO  Copying files from extend dirs...
warning: LF will be replaced by CRLF in 2020/01/03/hello-world/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in 2020/01/03/post-title/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in archives/2020/01/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in archives/2020/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in archives/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in css/style.css.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fancybox/helpers/jquery.fancybox-buttons.css.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fancybox/helpers/jquery.fancybox-buttons.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fancybox/helpers/jquery.fancybox-media.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fancybox/helpers/jquery.fancybox-thumbs.css.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fancybox/helpers/jquery.fancybox-thumbs.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fancybox/jquery.fancybox.css.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fancybox/jquery.fancybox.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in fancybox/jquery.fancybox.pack.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in js/script.js.
The file will have its original line endings in your working directory
[master 4b0880d] Site updated: 2020-01-04 11:26:09
 30 files changed, 6185 insertions(+)
 create mode 100644 2020/01/03/hello-world/index.html
 create mode 100644 2020/01/03/post-title/index.html
 create mode 100644 archives/2020/01/index.html
 create mode 100644 archives/2020/index.html
 create mode 100644 archives/index.html
 create mode 100644 css/fonts/FontAwesome.otf
 create mode 100644 css/fonts/fontawesome-webfont.eot
 create mode 100644 css/fonts/fontawesome-webfont.svg
 create mode 100644 css/fonts/fontawesome-webfont.ttf
 create mode 100644 css/fonts/fontawesome-webfont.woff
 create mode 100644 css/images/banner.jpg
 create mode 100644 css/style.css
 create mode 100644 fancybox/blank.gif
 create mode 100644 fancybox/fancybox_loading.gif
 create mode 100644 fancybox/fancybox_loading@2x.gif
 create mode 100644 fancybox/fancybox_overlay.png
 create mode 100644 fancybox/fancybox_sprite.png
 create mode 100644 fancybox/fancybox_sprite@2x.png
 create mode 100644 fancybox/helpers/fancybox_buttons.png
 create mode 100644 fancybox/helpers/jquery.fancybox-buttons.css
 create mode 100644 fancybox/helpers/jquery.fancybox-buttons.js
 create mode 100644 fancybox/helpers/jquery.fancybox-media.js
 create mode 100644 fancybox/helpers/jquery.fancybox-thumbs.css
 create mode 100644 fancybox/helpers/jquery.fancybox-thumbs.js
 create mode 100644 fancybox/jquery.fancybox.css
 create mode 100644 fancybox/jquery.fancybox.js
 create mode 100644 fancybox/jquery.fancybox.pack.js
 create mode 100644 index.html
 create mode 100644 js/script.js
 delete mode 100644 placeholder
Enumerating objects: 48, done.
Counting objects: 100% (48/48), done.
Delta compression using up to 8 threads
Compressing objects: 100% (38/38), done.
Writing objects: 100% (48/48), 508.32 KiB | 2.35 MiB/s, done.
Total 48 (delta 5), reused 0 (delta 0)
remote: Resolving deltas: 100% (5/5), done.
To github.com:annkuoQ/test.git
 + 6e14434...e701c89 HEAD -> master (forced update)
Branch 'master' set up to track remote branch 'master' from 'git@github.com:annkuoQ/test.git'.
INFO  Deploy done: git
```
4. 前往 https://annkuoQ.github.io/test 就可以看到自己的網站囉
(開啟 GitHub Pages 功能需要一點時間，若頁面還沒出來，讓子彈飛一下)

## 參考資料
- [Hexo 官方文件](https://hexo.io/docs/index.html)
- [Hexo静态网页制作教程](https://www.youtube.com/playlist?list=PLD5dyQmlN6xPqBV0cxO7zAe1C8OmDPqfX)
- [Hexo + Github Pages：手把手教你打造免費個人部落格](https://www.larrynote.com/website-service/6590/)
