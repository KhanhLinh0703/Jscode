const chuyenBay =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getMa = (str) => str.slice(0, 3).toUpperCase();
for (const chuyen of chuyenBay.split("+")) {
  const [loai, diemDi, diemDen, gio] = chuyen.split(";");
  const ketQua = `${
    loai.startsWith("_Delayed") ? "\u{1F6D1}" : ""
  }${loai.replaceAll("_", " ")} ${getMa(diemDi)} ${getMa(
    diemDen
  )} (${gio.replace(":", "h")})`.padStart(36);
  console.log(ketQua);
}
