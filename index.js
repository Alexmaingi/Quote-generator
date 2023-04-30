let btn = document.querySelector("#new-quote");
let quoteText = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "Everybody knows if you are too careful you are so occupied in being careful that you are sure to stumble over something.",
    person: "Gertrude Stein",
  },
  {
    quote:
      "Everybody knows if you are too careful you are so occupied in being careful that you are sure to stumble over something.",
    person: "Gertrude Stein",
  },
  {
    quote:
      "Everybody knows if you are too careful you are so occupied in being careful that you are sure to stumble over something.",
    person: "Gertrude Stein",
  },
  {
    quote:
      "Everybody knows if you are too careful you are so occupied in being careful that you are sure to stumble over something.",
    person: "Gertrude Stein",
  },
  {
    quote:
      "Everybody knows if you are too careful you are so occupied in being careful that you are sure to stumble over something.",
    person: "Gertrude Stein",
  },
  {
    quote:
      "Everybody knows if you are too careful you are so occupied in being careful that you are sure to stumble over something.",
    person: "Gertrude Stein",
  },
  {
    quote:
      "Everybody knows if you are too careful you are so occupied in being careful that you are sure to stumble over something.",
    person: "Gertrude Stein",
  },
  {
    quote:
      "Everybody knows if you are too careful you are so occupied in being careful that you are sure to stumble over something.",
    person: "Gertrude Stein",
  },
  {
    quote:
      "Everybody knows if you are too careful you are so occupied in being careful that you are sure to stumble over something.",
    person: "Gertrude Stein",
  },
  {
    quote:
      "Everybody knows if you are too careful you are so occupied in being careful that you are sure to stumble over something.",
    person: "Gertrude Stein",
  },
  {
    quote:
      "Everybody knows if you are too careful you are so occupied in being careful that you are sure to stumble over something.",
    person: "Gertrude Stein",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
