// 4.
const chuyenDoiTitleCase = function (title) {
  const vietHoa = (str) => str[0].toUpperCase() + str.slice(1);
  const ngoaiLe = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (ngoaiLe.includes(word) ? word : vietHoa(word)))
    .join(" ");

  return vietHoa(titleCase);
};

console.log(chuyenDoiTitleCase("đây là một tiêu đề tốt"));
console.log(chuyenDoiTitleCase("đây là một tiêu đề DÀI nhưng không quá dài"));
console.log(chuyenDoiTitleCase("và đây là một tiêu đề khác có ví dụ"));
