(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const tieuDe = document.querySelector("h1");
    if (tieuDe) {
      tieuDe.style.color = "red";
      document.querySelector("body").addEventListener("click", function () {
        tieuDe.style.color = "blue";
      });
    } else {
      console.error("Không tìm thấy phần tử h1");
    }
  });
})();
