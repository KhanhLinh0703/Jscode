function chuyenDoiCamelCase(text) {
  return text
    .split("_")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

const duLieuNhap = [
  "underscore_case",
  "first_name",
  "Some_Variable",
  "calculate_AGE",
  "delayed_departure",
];

duLieuNhap.forEach((item, index) => {
  const ketQuaCamelCase = chuyenDoiCamelCase(item);
  console.log(`${ketQuaCamelCase} ${"\u2705".repeat(index + 1)}`);
});
