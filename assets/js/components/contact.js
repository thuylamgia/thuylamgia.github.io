fetch("components/contact.html")
  .then(res => res.text())
  .then(data => document.getElementById("contact").innerHTML = data);
