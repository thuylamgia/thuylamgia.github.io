﻿document.addEventListener("DOMContentLoaded", () => {
    fetch("components/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(err => console.error("Không thể tải header:", err));
});
