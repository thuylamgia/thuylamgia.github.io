document.addEventListener("DOMContentLoaded", () => {
    fetch("components/contact.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("contact").innerHTML = data;
        })
        .catch(err => console.error("Không thể tải contact:", err));
});
