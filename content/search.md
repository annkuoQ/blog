---
title: "Search"  # 頁面標題
layout: "search"
outputs:
    - html
menu:
    main:
        name: "Search"  # 左側欄位顯示的文字
        weight: -80     # 調整權重：Home 是 -100, About 是 -90，所以 -80 會排在第三個
        params:
            icon: search
---