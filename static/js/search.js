// 使用最保險的載入方式，確保 DOM 完全準備好
window.addEventListener('load', function() {
    console.log("搜尋腳本開始初始化...");

    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    // 防錯檢查：如果找不到元素就不執行，避免 console 紅字
    if (!searchInput || !searchResults) {
        console.warn("找不到 search-input 或 search-results 元素，請檢查 HTML ID 設定");
        return;
    }

    // 當使用者在搜尋框輸入時觸發
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length < 1) {
            searchResults.innerHTML = "";
            return;
        }

        // 寫死正確的索引路徑
        fetch("/blog/index.json")
            .then(response => response.json())
            .then(data => {
                // 簡單的關鍵字比對過濾
                const results = data.filter(item => 
                    item.title.toLowerCase().includes(query.toLowerCase()) || 
                    (item.content && item.content.toLowerCase().includes(query.toLowerCase()))
                );
                
                renderResults(results);
            })
            .catch(err => console.error("讀取索引失敗:", err));
    });

    function renderResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = "<p>找不到相關結果</p>";
            return;
        }

        searchResults.innerHTML = results.map(item => `
            <article class="archive-item" style="margin-bottom: 20px;">
                <a href="${item.uri}" style="text-decoration: none;">
                    <h2 style="color: var(--primary); font-size: 1.2rem;">${item.title}</h2>
                </a>
            </article>
        `).join('');
    }
});