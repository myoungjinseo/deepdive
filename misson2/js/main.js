import { createHeader } from "./header.js";
import { createFooter } from "./footer.js";
import { createListItem } from "./view.js";

const app = document.getElementById("app");

const input = document.createElement("input");
input.id = "nameInput";
input.placeholder = "이름을 입력하세요";

const addBtn = document.createElement("button");
addBtn.id = "addBtn";
addBtn.innerText = "등록";

const deleteBtn = document.createElement("button");
deleteBtn.id = "deleteBtn";
deleteBtn.innerText = "삭제";

const list = document.createElement("ul");
list.id = "guestList";

const guestbook = [];

addBtn.addEventListener("click", () => {
  const name = input.value.trim();
  if (name) {
    guestbook.push({ name });
    list.appendChild(createListItem(name, guestbook.length - 1));
    console.log(guestbook);
    input.value = "";
  }
});

deleteBtn.addEventListener("click", () => {
  if (guestbook.length > 0) {
    guestbook.pop(); 
    list.removeChild(list.lastChild);
    console.log(guestbook);
  } else {
    alert("삭제할 항목이 없습니다!");
  }
});


app.appendChild(createHeader());
app.appendChild(input);
app.appendChild(addBtn);
app.appendChild(deleteBtn);
app.appendChild(list);
app.appendChild(createFooter());