/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver"];
  let action = ["took my", "threw my", "yelled at my", "stole my"];
  let object = ["homework", "cellphone", "car", "shoe"];
  let where = ["on the street", "in my house", "on my driveway"];

  const getRandom = arr => {
    var randomNumber = Math.floor(Math.random() * arr.length);
    return randomNumber;
  };
  console.log(getRandom(pronoun));
  console.log(getRandom(subject));
  console.log(getRandom(action));
  console.log(getRandom(object));
  console.log(getRandom(where));

  const generateExcuse = () => {
    return (
      pronoun[getRandom(pronoun)] +
      " " +
      subject[getRandom(subject)] +
      " " +
      action[getRandom(action)] +
      " " +
      object[getRandom(object)] +
      " " +
      where[getRandom(where)]
    );
  };

  document.querySelector("#excuse").innerHTML = generateExcuse();
};
