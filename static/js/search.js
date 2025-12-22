(function() {
    console.log("搜尋腳本載入中...");

    function startSearchLogic(searchInput, searchResults) {
        if (searchInput.dataset.bound) return; // 避免重複綁定
        searchInput.dataset.bound = "true";
        console.log("搜尋功能已成功掛載到元素上！");

        searchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            if (!query) {
                searchResults.innerHTML = "";
                return;
            }

            fetch("/blog/index.json")
                .then(res => res.json())
                .then(data => {
                    const results = data.filter(item => 
                        item.title.toLowerCase().includes(query) || 
                        (item.content && item.content.toLowerCase().includes(query))
                    );
                    
                    searchResults.innerHTML = results.map(item => `
                        <div style="margin: 15px 0; padding: 15px; background: var(--card-background); border-radius: 8px; border: 1px solid var(--border-color);">
                            <a href="${item.uri}" style="color: var(--primary); font-size: 1.1rem; text-decoration: none; font-weight: bold; display: block;">
                                ${item.title}
                            </a>
                        </div>
                    `).join('');
                })
                .catch(err => console.error("搜尋讀取錯誤:", err));
        });
    }

    // 使用觀察者模式：監控網頁內容變化
    const observer = new MutationObserver((mutations) => {
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');
        if (searchInput && searchResults) {
            startSearchLogic(searchInput, searchResults);
        }
    });

    // 開始監控整個網頁
    observer.observe(document.body, { childList: true, subtree: true });

    // 初始檢查（預防萬一）
    const initialInput = document.getElementById('search-input');
    const initialResults = document.getElementById('search-results');
    if (initialInput && initialResults) {
        startSearchLogic(initialInput, initialResults);
    }
})();