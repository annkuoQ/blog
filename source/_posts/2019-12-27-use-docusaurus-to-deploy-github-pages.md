---
title: 用 Docusaurus 和 GitHub Pages 架網站
date: 2019-12-27 23:18:01
description: Docusaurus 是 Facebook 團隊的開源作品，可以輕鬆產生靜態網站，適合用於 Documentation Website，在開始前要安裝 git 和 node.js，並創建一個 repo ...
categories: 資工 / 程設
tags:
- docusaurus
- github pages
---

為什麼要用 Docusaurus？

- 因為工程師朋友推薦
- 因為 Slash (恐龍吉祥物) 很可愛
- 因為是 Facebook 團隊的開源作品很酷

執行環境

   - Win 10 與 Cmder

<!-- more -->

## 前置步驟

1. 安裝 Git
2. 安裝 Node.js
3. 創建一個 GitHub Repository
4. 把 Repo clone 到本地端
```
$ git clone git@github.com:annkuoQ/test.git
Cloning into 'test'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.
```

## 安裝步驟

1. 安裝 init 腳本
```
$ npm install --global docusaurus-init
C:\Program Files\nodejs\node_global\docusaurus-init -> C:\Program Files\nodejs\node_global\node_modules\docusaurus-init\initialize.js
+ docusaurus-init@1.14.1
added 24 packages from 14 contributors in 1.564s
```
2. cd 到 Repo
```
$ cd test\
```
3. 安裝基礎架構
```
$ docusaurus-init
Website folder created!

Installing latest version of Docusaurus in website.

npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN deprecated coffee-script@1.12.7: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
npm WARN deprecated gulp-header@1.8.12: Removed event-stream from gulp-header

> core-js@2.6.11 postinstall C:\Users\user\Desktop\test\website\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> gifsicle@4.0.1 postinstall C:\Users\user\Desktop\test\website\node_modules\gifsicle
> node lib/install.js

  √ gifsicle pre-build test passed successfully

> jpegtran-bin@4.0.0 postinstall C:\Users\user\Desktop\test\website\node_modules\jpegtran-bin
> node lib/install.js

  √ jpegtran pre-build test passed successfully

> optipng-bin@5.1.0 postinstall C:\Users\user\Desktop\test\website\node_modules\optipng-bin
> node lib/install.js

  √ optipng pre-build test passed successfully
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN website No description
npm WARN website No repository field.
npm WARN website No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ docusaurus@1.14.3
added 1003 packages from 806 contributors and audited 10425 packages in 102.34s
found 0 vulnerabilities

Docusaurus installed in website folder!


> @ examples C:\Users\user\Desktop\test\website
> docusaurus-examples

Wrote docusaurus scripts to package.json file.

test
├── docker-compose.yml
├── Dockerfile
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   ├── exampledoc4.md
│   └── exampledoc5.md
├── README.md
└── website
    ├── blog
    │   ├── 2016-03-11-blog-post.md
    │   ├── 2017-04-10-blog-post-two.md
    │   ├── 2017-09-25-testing-rss.md
    │   ├── 2017-09-26-adding-rss.md
    │   └── 2017-10-24-new-version-1.0.0.md
    ├── core
    │   └── Footer.js
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   └── en
    │       ├── help.js
    │       ├── index.js
    │       └── users.js
    ├── README.md
    ├── sidebars.json
    ├── siteConfig.js
    └── static
        ├── css
        │   └── custom.css
        └── img
            ├── favicon.ico
            ├── oss_logo.png
            ├── undraw_code_review.svg
            ├── undraw_monitor.svg
            ├── undraw_note_list.svg
            ├── undraw_online.svg
            ├── undraw_open_source.svg
            ├── undraw_operating_system.svg
            ├── undraw_react.svg
            ├── undraw_tweetstorm.svg
            └── undraw_youtube_tutorial.svg
```
4. 現在的目錄結構變成這樣
```
root-directory
├── Dockerfile
├── README.md
├── docker-compose.yml
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   ├── exampledoc4.md
│   └── exampledoc5.md
└── website
    ├── blog
    │   ├── 2016-03-11-blog-post.md
    │   ├── 2017-04-10-blog-post-two.md
    │   ├── 2017-09-25-testing-rss.md
    │   ├── 2017-09-26-adding-rss.md
    │   └── 2017-10-24-new-version-1.0.0.md
    ├── core
    │   └── Footer.js
    ├── package.json
    ├── pages
    ├── sidebars.json
    ├── siteConfig.js
    └── static
```
5. 移動到 website 目錄
```
$ cd website\
```
6. 執行 npm start
```
$ npm start

> @ start C:\Users\user\Desktop\test\website
> docusaurus-start

LiveReload server started on port 35729
Docusaurus server started on port 3000
```
7. 瀏覽器自動前往 http://localhost:3000/ 顯示範例網站
![docusaurus-new-site](/2019-12-27-use-docusaurus-to-deploy-github-pages/docusaurus-new-site.jpg)

## 創建頁面
### 一般頁面
1. 在 `website/pages/en` 創建一個叫做 `hello-world.js` 的檔案，內容為:
```
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function HelloWorld(props) {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <h1>Hello World!</h1>
        <p>This is my first page!</p>
      </Container>
    </div>
  );
}

module.exports = HelloWorld;
```
2. 瀏覽器前往 http://localhost:3000/hello-world 可以看到新頁面
    ![docusaurus-new-page](/2019-12-27-use-docusaurus-to-deploy-github-pages/docusaurus-new-page.jpg)

  

3. 修改 `hello-world.js` 的內容
```
- <p>This is my first page!</p>
+ <p>I can write JSX here!</p>
```
4. 儲存檔案後，瀏覽器會自動刷新頁面，顯示修改的字

   
### 文件頁面

1. 在 `\docs` 創建一個叫 `doc9.md` 的檔案，內容為:
```
---
id: doc9
title: This is Doc 9
---

I can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

## Markdown Syntax

**Bold** _italic_ `code` [Links](#url)

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

* Hey
* Ho
* Let's Go
```
2. 開啟 `\website\sidebars.json`，在 doc1 後加入 doc9
```
{
  "docs": {
    "Docusaurus": [
      "doc1",
+     "doc9"
    ],
    "First Category": ["doc2"],
    "Second Category": ["doc3"]
  },
  "docs-other": {
    "First Category": ["doc4", "doc5"]
  }
}
```
3. `Ctrl+ C` 停止服務器後，再 `npm start`

4. 瀏覽器前往 http://localhost:3000/docs/doc9 可以看到側邊欄已更新
    ![docusaurus-new-doc](/2019-12-27-use-docusaurus-to-deploy-github-pages/docusaurus-new-doc.jpg)

  

5. `Ctrl+ C` 停止服務器

## 發布網站
1. 開啟 `siteConfig.js`，編寫以下的值，並儲存檔案
```
const siteConfig = {
  ...
  url: 'https://annkuoq.github.io', (GitHub Pages Host 網址)
  baseUrl: '/test/', (GitHub Project 名稱)
  projectName: 'test', (GitHub Project 名稱)
  organizationName: 'annkuoQ' (GitHub 的用戶名稱)
  ...
}
```
2. 在 `website/` 執行 `npm run build`
```
$ npm run build

> @ build C:\Users\user\Desktop\test\website
> docusaurus-build

generate.js triggered...
feed.js triggered...
feed.js triggered...
sitemap.js triggered...
Site built successfully. Generated files in 'build' folder.
```
3. 在 `website/` 多了一個 `build` 資料夾，裡面有所有文件和其他頁面的 html 檔
```
build
└─test
    │  hello-world.html
    │  help.html
    │  index.html
    │  sitemap.xml
    │  users.html
    │
    ├─blog
    │  │  atom.xml
    │  │  feed.xml
    │  │  index.html
    │  │
    │  ├─2016
    │  │  └─03
    │  │      └─11
    │  │          │  blog-post.html
    │  │          │
    │  │          └─blog-post
    │  │                  index.html
    │  │
    │  └─2017
    │      ├─04
    │      │  └─10
    │      │      │  blog-post-two.html
    │      │      │
    │      │      └─blog-post-two
    │      │              index.html
    │      │
    │      ├─09
    │      │  ├─25
    │      │  │  │  testing-rss.html
    │      │  │  │
    │      │  │  └─testing-rss
    │      │  │          index.html
    │      │  │
    │      │  └─26
    │      │      │  adding-rss.html
    │      │      │
    │      │      └─adding-rss
    │      │              index.html
    │      │
    │      └─10
    │          └─24
    │              │  new-version-1.0.0.html
    │              │
    │              └─new-version-1.0.0
    │                      index.html
    │
    ├─css
    │      main.css
    │      prism.css
    │
    ├─docs
    │  │  doc1.html
    │  │  doc2.html
    │  │  doc3.html
    │  │  doc4.html
    │  │  doc5.html
    │  │  doc9.html
    │  │
    │  ├─doc1
    │  │      index.html
    │  │
    │  ├─doc2
    │  │      index.html
    │  │
    │  ├─doc3
    │  │      index.html
    │  │
    │  ├─doc4
    │  │      index.html
    │  │
    │  ├─doc5
    │  │      index.html
    │  │
    │  └─doc9
    │          index.html
    │
    ├─en
    │  │  hello-world.html
    │  │  help.html
    │  │  index.html
    │  │  users.html
    │  │
    │  ├─hello-world
    │  │      index.html
    │  │
    │  ├─help
    │  │      index.html
    │  │
    │  └─users
    │          index.html
    │
    ├─hello-world
    │      index.html
    │
    ├─help
    │      index.html
    │
    ├─img
    │      favicon.ico
    │      language.svg
    │      oss_logo.png
    │      undraw_code_review.svg
    │      undraw_monitor.svg
    │      undraw_note_list.svg
    │      undraw_online.svg
    │      undraw_open_source.svg
    │      undraw_operating_system.svg
    │      undraw_react.svg
    │      undraw_tweetstorm.svg
    │      undraw_youtube_tutorial.svg
    │
    ├─js
    │      codetabs.js
    │      scrollSpy.js
    │
    └─users
            index.html
```
4. 設定三個環境變數
```
GIT_USER=annkuoQ
CURRENT_BRANCH=master
USE_SSH=true
```
5. 執行發布指令
```
$ npm run publish-gh-pages

> @ publish-gh-pages C:\Users\user\Desktop\test\website
> docusaurus-publish

master
git@github.com:annkuoQ/test.git
generate.js triggered...
feed.js triggered...
feed.js triggered...
sitemap.js triggered...
Site built successfully. Generated files in 'build' folder.
269ea5df776da07e69b1bbb5cbd0218818567b37
Cloning into 'test-gh-pages'...
master
error: pathspec 'origin/gh-pages' did not match any file(s) known to git
Switched to a new branch 'gh-pages'
rm 'README.md'
warning: LF will be replaced by CRLF in blog/2016/03/11/blog-post.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in blog/2016/03/11/blog-post/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in blog/2017/04/10/blog-post-two.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in blog/2017/04/10/blog-post-two/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in blog/2017/09/25/testing-rss.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in blog/2017/09/25/testing-rss/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in blog/2017/09/26/adding-rss.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in blog/2017/09/26/adding-rss/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in blog/2017/10/24/new-version-1.0.0.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in blog/2017/10/24/new-version-1.0.0/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in blog/atom.xml.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in blog/feed.xml.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in blog/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in css/prism.css.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in docs/doc1.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in docs/doc1/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in docs/doc2.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in docs/doc2/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in docs/doc3.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in docs/doc3/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in docs/doc4.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in docs/doc4/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in docs/doc5.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in docs/doc5/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in docs/doc9.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in docs/doc9/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in en/help.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in en/help/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in en/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in help.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in help/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in img/language.svg.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in js/codetabs.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in js/scrollSpy.js.
The file will have its original line endings in your working directory
[gh-pages (root-commit) cefa7df] Deploy website
 56 files changed, 1856 insertions(+)
 create mode 100644 blog/2016/03/11/blog-post.html
 create mode 100644 blog/2016/03/11/blog-post/index.html
 create mode 100644 blog/2017/04/10/blog-post-two.html
 create mode 100644 blog/2017/04/10/blog-post-two/index.html
 create mode 100644 blog/2017/09/25/testing-rss.html
 create mode 100644 blog/2017/09/25/testing-rss/index.html
 create mode 100644 blog/2017/09/26/adding-rss.html
 create mode 100644 blog/2017/09/26/adding-rss/index.html
 create mode 100644 blog/2017/10/24/new-version-1.0.0.html
 create mode 100644 blog/2017/10/24/new-version-1.0.0/index.html
 create mode 100644 blog/atom.xml
 create mode 100644 blog/feed.xml
 create mode 100644 blog/index.html
 create mode 100644 css/main.css
 create mode 100644 css/prism.css
 create mode 100644 docs/doc1.html
 create mode 100644 docs/doc1/index.html
 create mode 100644 docs/doc2.html
 create mode 100644 docs/doc2/index.html
 create mode 100644 docs/doc3.html
 create mode 100644 docs/doc3/index.html
 create mode 100644 docs/doc4.html
 create mode 100644 docs/doc4/index.html
 create mode 100644 docs/doc5.html
 create mode 100644 docs/doc5/index.html
 create mode 100644 docs/doc9.html
 create mode 100644 docs/doc9/index.html
 create mode 100644 en/hello-world.html
 create mode 100644 en/hello-world/index.html
 create mode 100644 en/help.html
 create mode 100644 en/help/index.html
 create mode 100644 en/index.html
 create mode 100644 en/users.html
 create mode 100644 en/users/index.html
 create mode 100644 hello-world.html
 create mode 100644 hello-world/index.html
 create mode 100644 help.html
 create mode 100644 help/index.html
 create mode 100644 img/favicon.ico
 create mode 100644 img/language.svg
 create mode 100644 img/oss_logo.png
 create mode 100644 img/undraw_code_review.svg
 create mode 100644 img/undraw_monitor.svg
 create mode 100644 img/undraw_note_list.svg
 create mode 100644 img/undraw_online.svg
 create mode 100644 img/undraw_open_source.svg
 create mode 100644 img/undraw_operating_system.svg
 create mode 100644 img/undraw_react.svg
 create mode 100644 img/undraw_tweetstorm.svg
 create mode 100644 img/undraw_youtube_tutorial.svg
 create mode 100644 index.html
 create mode 100644 js/codetabs.js
 create mode 100644 js/scrollSpy.js
 create mode 100644 sitemap.xml
 create mode 100644 users.html
 create mode 100644 users/index.html
remote:
remote: Create a pull request for 'gh-pages' on GitHub by visiting:
remote:      https://github.com/annkuoQ/test/pull/new/gh-pages
remote:
To github.com:annkuoQ/test.git
 * [new branch]      gh-pages -> gh-pages
Website is live at: https://annkuoQ.github.io/test
```
6. 前往 https://annkuoQ.github.io/test 就可以看到自己的網站囉
(開啟 GitHub Pages 功能需要一點時間，若頁面還沒出來，讓子彈飛一下)

### 參考資料
- [Docusaurus 官方教學](https://docusaurus.io/docs/en/tutorial-setup)
- [Docusaurus 是如何運作的](https://docusaurus.io/blog/2017/12/14/introducing-docusaurus#how-does-docusaurus-work)
- [Docusaurus 官方 GitHub](https://github.com/facebook/docusaurus)