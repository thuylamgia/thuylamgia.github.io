fetch("components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Sau khi header được nạp, nạp tiếp menu
    fetch("components/menu.html")
      .then(res => res.text())
      .then(menu => {
        // Thêm menu ngay bên dưới header
        document.getElementById("header").insertAdjacentHTML("beforeend", menu);
      });
  });
