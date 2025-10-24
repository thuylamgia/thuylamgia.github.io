document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("#footer");

  if (footer) {
    fetch("components/footer.html")
      .then(res => res.text())
      .then(html => {
        footer.innerHTML = html;

        // ✅ Sau khi nạp xong HTML, cập nhật năm hiện hành
        const yearSpan = document.getElementById("current-year");
        if (yearSpan) {
          const currentYear = new Date().getFullYear();
          yearSpan.textContent = currentYear;
        }
      })
      .catch(err => console.error("Không thể tải footer:", err));
  }
});
