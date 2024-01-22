const eventsArray = [
  [10, "Ghi bàn"],
  [25, "Thay người"],
  [40, "Thẻ vàng"],
];

for (let i = 0; i < eventsArray.length; i++) {
  if (eventsArray[i][0] === 64 && eventsArray[i][1] === "Thẻ vàng") {
    eventsArray.splice(i, 1);
    break;
  }
}

const totalEvents = eventsArray.length;
const averageEventsPerMinute = totalEvents / 90;
console.log(
  `${totalEvents} sự kiện xảy ra, trung bình mỗi ${Math.round(
    90 / averageEventsPerMinute
  )} phút`
);

for (const event of eventsArray) {
  const [minute, action] = event;
  const half = minute <= 45 ? "HIỆP 1" : "HIỆP 2";
  console.log(`[${half}] ${minute}: ${action}`);
}
