var game = {
    scored: ["Lewandowski", "Muller", "Gnabry"],
    score: [1, 2, 1],
};

for (var i = 0; i < game.scored.length; i++) {
    console.log("Goal" + (i + 1) + ":" + game.scored[i]);
}

var ketQuaTranDau = [1, 2, 3, 1];
var soTranThang = 0;
var soTranThua = 0;
var soTranHoa = 0;

for (var i = 0; i < ketQuaTranDau.length; i++) {
    if (ketQuaTranDau[i] == 3) {
        soTranThua++;
    } else if (ketQuaTranDau[i] == 2) {
        soTranHoa++;
    } else {
        soTranThang++;
    }
}
console.log(soTranHoa, soTranThang, soTranThua);
console.log("soTranThang", soTranThang / ketQuaTranDau.length);
console.log("soTranThua", soTranThua / ketQuaTranDau.length);

var scorers = [
    {
        name: "name1",
        tiLe: 3.7,
    },
    {
        name: "name2",
        tiLe: 1.1,

    },
    {
        name: "name3",
        tiLe: 4.6,

    },
    {
        name: "name4",
        tiLe: 2.7,

    }
];

scorers.sort(function(a, b) {
    return b.tiLe - a.tiLe;
  });
  var topScorers = scorers.slice(0, 3);
console.log(topScorers);