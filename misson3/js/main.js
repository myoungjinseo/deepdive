import { createListItem } from "./view.js"; 

const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greet = document.getElementById("greet");

const calculateInput = document.getElementById("calculateInput");
const calculateBtn = document.getElementById("calculateBtn");
const calculatelist = document.getElementById("calculatelist");

const transBtn = document.getElementById("transBtn");
const transText = document.getElementById("transText");

const transBtn2 = document.getElementById("transBtn2");
const transText2 = document.getElementById("transText2");

const nameInput2 = document.getElementById("nameInput2");
const greetBtn2 = document.getElementById("greetBtn2");
const greet2 = document.getElementById("greet2");
const htmlEl = document.documentElement;
const label = document.getElementById("mode-label");

greetBtn.addEventListener("click", function () {
  greet.innerText = nameInput.value + "님, 안녕하세요!";
});


calculateBtn.addEventListener("click", function () {
   calculateResult.innerText = calculateInput;
});

calculateBtn.addEventListener("click", () => {
  const num = calculateInput.value.trim();
  calculatelist.innerHTML = "";
  for(let i = 1; i <= 9; i++){
    calculatelist.appendChild(createListItem(num,i));
  }
  calculateInput.value = "";
});

transBtn.addEventListener("click", function () {
    const text = transText.innerText;
  if(text == "기존 문장입니다."){
    transText.innerText = "문장이 변경되었습니다!";  
  }  else{
    transText.innerText = "기존 문장입니다.";
  }
});

transBtn2.addEventListener("mouseover", function () {
    const text = transText2.innerText;
  if(text == "기존 문장입니다."){
    transText2.innerText = "문장이 변경되었습니다!";  
  }  else{
    transText2.innerText = "기존 문장입니다.";
  }
});

greetBtn2.addEventListener("click", function () {
  greet2.innerText = "Hello, " + nameInput2.value;
});

  const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("modal");

    openBtn.addEventListener("click", () => {
      modal.classList.remove("hide");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.add("hide");
    });
  
tailwind.config = {
    darkMode: 'class',
  };
  window.toggleDarkMode = function () {
    htmlEl.classList.toggle("dark");
    label.textContent = htmlEl.classList.contains("dark") ? "다크" : "라이트";
  };
