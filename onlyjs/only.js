
export function onlyjs(main) {
    function clearCache() {
        // Find all script and link tags to force reloading resources
        const scripts = document.querySelectorAll('script');
        const links = document.querySelectorAll('link[rel="stylesheet"]');
        
        // Append a unique query string to each script tag
        scripts.forEach(script => {
            const src = script.getAttribute('src');
            if (src) {
                script.setAttribute('src', `${src}?v=${new Date().getTime()}`);
            }
        });

        // Append a unique query string to each link tag
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                link.setAttribute('href', `${href}?v=${new Date().getTime()}`);
            }
        });

        // Optional: Disable the cache on XMLHttpRequests (AJAX)
        if (window.XMLHttpRequest) {
            const oldOpen = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function(method, url) {
                if (method === 'GET') {
                    this.setRequestHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
                    this.setRequestHeader('Pragma', 'no-cache');
                    this.setRequestHeader('Expires', '0');
                }
                oldOpen.apply(this, arguments);
            };
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', main);
      clearCache();

    } else {
        main();
      clearCache();
    }

}
