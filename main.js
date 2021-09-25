/*const tips = [
  "Pójdziesz na imprezę",
  "Będziesz bogata",
  "Polecisz na Malediwy",
  "Trzy lata z konserwami",
  "Nic ciekawego się nie wydarzy",
];*/
let tips = JSON.parse(localStorage.getItem("tips"));
tips === null
  ? (tips = [
      "Pójdziesz na imprezę",
      "Będziesz bogata",
      "Polecisz na Malediwy",
      "Trzy lata z konserwami",
      "Nic ciekawego się nie wydarzy",
    ])
  : tips;
const add = (e) => {
  // metoda push na tablicy dodaje element na koniec tablicy
  // preventDefault zatrzymuje domyślne zdarzenie
  e.preventDefault();
  const input = document.querySelector("input");
  const newTip = input.value;
  if (newTip !== "") {
    tips.push(newTip);
    input.value = "";
    localStorage.setItem("tips", JSON.stringify(tips));
  } else {
    alert("Napisz wróżbę!!");
  }
};
const show = () => {
  // console.log("działa!!!");
  // floor- obcina wszystko, co jest po przecinku bez zaokrąglania
  // random-losuje liczbę z przedziału od zera do liczby równej długości tablicy, ale bez tej liczby
  const index = Math.floor(Math.random() * tips.length);
  document.querySelector("h1").textContent = tips[index];
};
document.querySelector(".show").addEventListener("click", show);
//join zamienia na string po użyciu "";
document.querySelector(".showOptions").addEventListener("click", () => {
  alert(tips.join(" --- "));
});
document.querySelector(".add").addEventListener("click", add);
document.querySelector(".reset").addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("działa!!");
  tips.length = 0;
  localStorage.removeItem("tips");
});
