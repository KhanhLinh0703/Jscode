const tongTienGuiNganHang = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((tong, hienTai) => tong + hienTai, 0);

console.log(tongTienGuiNganHang);

const soGiaoDichTren1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((dem, hienTai) => (hienTai >= 1000 ? ++dem : dem), 0);

console.log(soGiaoDichTren1000);

const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (tong, hienTai) => {
      tong[hienTai > 0 ? "deposits" : "withdrawals"] += hienTai;
      return tong;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);
