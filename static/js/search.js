$(function() {
    const summaryInclude = 60;
    const fuseOptions = {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            { name: "title", weight: 0.8 },
            { name: "contents", weight: 0.5 }
        ]
    };

    // 修正 1：對接網址參數，同時支援 s 和 keyword
    let searchQuery = new URLSearchParams(window.location.search).get('keyword') || new URLSearchParams(window.location.search).get('s');

    if (searchQuery) {
        $("#search-input").val(searchQuery);
        executeSearch(searchQuery);
    }

    function executeSearch(query) {
        // 修正 2：寫死 GitHub Pages 的正確路徑
        $.getJSON("/blog/index.json", function(data) {
            let fuse = new Fuse(data, fuseOptions);
            let result = fuse.search(query);
            showResults(result);
        }).fail(function() {
            console.error("無法讀取 /blog/index.json，請檢查檔案是否存在");
        });
    }

    function showResults(results) {
        const $container = $("#search-results");
        $container.empty();
        if (results.length > 0) {
            results.forEach(res => {
                let item = res.item;
                $container.append(`
                    <article class="archive-item">
                        <a href="${item.uri}">
                            <h2 class="archive-item-title">${item.title}</h2>
                        </a>
                    </article>
                `);
            });
        } else {
            $container.append("<p>找不到相關結果</p>");
        }
    }
});