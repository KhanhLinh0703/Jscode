// LAB 4.2: (SECTION 11: WORKING WITH ARRAY > IMPLEMENTING TRANSFERS)
// Tiếp tục với ứng dụng Bankist. Xử lý sự kiện Chuyển tiền
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Thực hiện giao dịch chuyển tiền
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Cập nhật giao diện
    updateUI(currentAccount);
  }
});
