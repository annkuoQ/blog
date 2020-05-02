---
title: 在 Hexo 安裝 utterances 留言版
date: 2020-03-09 22:14:53
description: utterances 沒廣告、不追蹤用戶隱私，留言會自動開 issue 到 repo，首先在 github 創建一個 public repo，然後安裝 utterances app ...
categories: 資工 / 程設
tags:
- hexo
- github pages
- utterances
---

為什麼要用 utterances？
  - 因為沒有廣告
  - 因為不會追蹤用戶隱私
  - 因為不用再申請一個帳號 (部落格本來就架在 GitHub 上)

<!-- more -->

## 安裝步驟

1. 在 GitHub 創建一個 Public Repository
2. 安裝 [utterances app](https://github.com/apps/utterances) > `Only select repositories` > 選剛剛創建的 repo > `Install`
utterances APP 要求存取的權限有:
  - No access to code
  - Read access to metadata
  - Read and write access to issues

<div align="center"><img src="/2020-03-09-add-utterances-comment-widget-to-hexo/permissions.jpg" width="400px" /></div>

3. 輸入 `owner/repo`，就是要放留言的倉庫
4. 設定 issue 標題怎麼開，有以下幾種選擇:
  - Issue title contains page pathname
  - Issue title contains page URL
  - Issue title contains page title
  - Issue title contains page og:title
  - Specific issue number
  - Issue title contains specific term
5. 選擇主題樣式，有以下幾種選擇:
  - GitHub Light
  - GitHub Dark
  - GitHub Dark Orange
  - Icy Dark
  - Dark Blue
  - Photon Dark

6. 複製自動產生的程式碼到 `\themes\你的主題名稱\layout\_partia\article.ejs`
```
<div>
    <section id="comments" class="comments">
      <style>
        .utterances{max-width: 100%;}
      </style>
        <script src="https://utteranc.es/client.js"
                repo="annkuoQ/blog-utterances"
                issue-term="title"
                theme="github-dark"
                crossorigin="anonymous"
                async>
        </script>
  </section>
</div>
```

## 測試留言
1. 點擊留言版的 `Sign in to comment`
2. 同意授權 > `Authorize utterances by utterances`

<div align="center"><img src="/2020-03-09-add-utterances-comment-widget-to-hexo/authorize.jpg" width="400px" /></div>

3. 回到留言板留言後，repo 就會自動開好票囉

<div align="center"><img src="/2020-03-09-add-utterances-comment-widget-to-hexo/test-comment.jpg" width="800px" /></div>

## 參考資料
- [utterances 官方網站](https://utteranc.es/)
- [hexo+yilia 集成 utteranc 评论系统](https://blog.csdn.net/weixin_41287260/article/details/103049579)