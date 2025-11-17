var ri = document.querySelector(".ri");
var submit = document.querySelector("#btn");
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = e.target.name.value;
  var model = e.target.model.value;
  var url = e.target.url.files[0];
  if (name && model && url) {
    const card = document.createElement("div");
    var imageUrl = URL.createObjectURL(url);
    card.classList.add("smallbox");
    card.innerHTML = `
      <div class="top">
        <img src="${imageUrl}">
      </div>
      <div class="bottom">
        <h1>${name}</h1>
        <h4>${model}</h4>
        <button class="remove">Remove</button>
      </div>
    `;
    var btn = card.querySelector(".remove");
    ri.appendChild(card);

    btn.addEventListener("click", function () {
      card.remove();
    });
  } else {
    alert("Enter all required details");
  }
  form.reset();
});
