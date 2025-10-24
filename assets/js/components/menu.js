document.addEventListener("DOMContentLoaded", function () {
  fetch("menu.html")
    .then(response => response.text())
    .then(data => {
      // Tạo phần tử chứa menu
      const navContainer = document.createElement("div");
      navContainer.innerHTML = data;
      
      // Chèn menu ngay sau header
      const header = document.getElementById("header");
      if (header) {
        header.insertAdjacentElement("afterend", navContainer);
      }
    })
    .catch(error => console.error("Không thể tải menu:", error));
});
