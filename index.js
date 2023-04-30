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
      "I never believed in Santa Claus because I knew no white dude would come into my neighborhood after dark.",
    person: "Dick Gregory",
  },
  {
    quote:
      "If mankind minus one were of one opinion, then mankind is no more justified in silencing the one than the one - if he had the power - would be justified in silencing mankind..",
    person: "John Stuart Mill",
  },
  {
    quote:
      "Before you agree to do anything that might add even the smallest amount of stress to your life, ask yourself: What is my truest intention? Give yourself time to let a yes resound within you. When it's right, I guarantee that your entire body will feel it.",
    person: "Oprah Winfrey",
  },
  {
    quote:
      "I shall not pretend that I do not prefer to have people adore me rather than revile me, but I have always found that it was far easier for me to suffer the disapprobation of others than to amend my behaviour in order to find favour with them.",
    person: "Kathryn L. Nelson,",
  },
  {
    quote:
      "I declare after all there is no enjoyment like reading! How much sooner one tires of anything than of a book! When I have a house of my own, I shall be miserable if I have not an excellent library.",
    person: "Jane Austen",
  },
  {
    quote:
      "Politics is supposed to be the second oldest profession. I have come to realize that it bears a very close resemblance to the first.",
    person: "Ronald Reagan ",
  },
  {
    quote: `
      There's something amazing about the passion of youth and its power to sustain. If there's a more powerful energy source, I don't know about it.`,
    person: "Toshihiro Kawabata",
  },
  {
    quote:
      "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
    person: "Friedrich Nietzsche",
  },
  {
    quote:
      "Gifts allow us to demonstrate exactly how little we know about a person. And nothing pisses a person off more than being shoved into the wrong pigeonhole.",
    person: "Pam Davis",
  },
  {
    quote:
      "It is vain to say human beings might be satisfied with tranquillity; they must have action, and they will make it if they can not find it.",
    person: "Charlotte Bronte",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
