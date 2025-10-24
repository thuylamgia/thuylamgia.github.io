document.addEventListener("DOMContentLoaded", () => {
    fetch("components/menu.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("menu").innerHTML = data;

            // đánh dấu menu đang mở
            const current = location.pathname.split("/").pop();
            document.querySelectorAll("nav a").forEach(a => {
                if (a.getAttribute("href") === current) {
                    a.classList.add("active");
                }
            });
        })
        .catch(err => console.error("Không thể tải menu:", err));
});
