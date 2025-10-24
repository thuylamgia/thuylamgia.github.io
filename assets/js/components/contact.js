fetch("components/contact.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("contact").innerHTML = data;
  })
  .catch(err => console.error("Không thể tải contact:", err));
