fetch("components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });
