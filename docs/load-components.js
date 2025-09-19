// load-components.js

function loadHTML(id, url) {
    fetch(url)
        .then(response => {
            if(!response.ok) throw new Error("Network Error");
            return response.text()
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(err => console.error("Failed to load component:", err));
}

// Load the navbar into the placeholder
loadHTML("banner-placeholder", "./banner.html");
loadHTML("footer-placeholder", "./footer.html");