(function() {
    // 定義主邏輯
    function initSearch() {
        console.log("搜尋系統初始化中...");
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        if (!searchInput || !searchResults) {
            console.log("找不到元素，500ms 後重試...");
            setTimeout(initSearch, 500); // 如果找不到元素，半秒後再試一次
            return;
        }

        searchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            if (!query) {
                searchResults.innerHTML = "";
                return;
            }

            // 直接讀取根目錄下的 index.json
            fetch("/blog/index.json")
                .then(res => res.json())
                .then(data => {
                    const results = data.filter(item => 
                        item.title.toLowerCase().includes(query) || 
                        (item.content && item.content.toLowerCase().includes(query))
                    );
                    
                    searchResults.innerHTML = results.map(item => `
                        <div style="margin: 15px 0; padding: 10px; background: var(--card-background); border-radius: 8px;">
                            <a href="${item.uri}" style="color: var(--primary); font-size: 1.1rem; text-decoration: none; font-weight: bold;">
                                ${item.title}
                            </a>
                        </div>
                    `).join('');
                });
        });
    }

    // 啟動監測：不管是直接開啟還是 SPA 跳轉都執行
    if (document.readyState === "complete") {
        initSearch();
    } else {
        window.addEventListener('load', initSearch);
    }
})();