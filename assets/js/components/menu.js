fetch("components/menu.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("menu").innerHTML = data;
  })
  .catch(err => console.error("Không thể tải menu:", err));
