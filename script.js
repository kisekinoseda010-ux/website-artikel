document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("articles");

  fetch("trends.json")
    .then(res => {
      if (!res.ok) throw new Error("JSON tidak ditemukan");
      return res.json();
    })
    .then(data => {
      container.innerHTML = "";

      data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
         <img src="https://dummyimage.com/300x450/000/fff&text=${encodeURIComponent(item.keyword)}">
          <h3>${item.keyword}</h3>
        `;

        card.onclick = () => {
          location.href =
            "detail.html?title=" + encodeURIComponent(item.keyword);
        };

        container.appendChild(card);
      });
    })
    .catch(err => {
      container.innerHTML =
        "<p style='color:red'>Gagal load data trending</p>";
      console.error(err);
    });
});

