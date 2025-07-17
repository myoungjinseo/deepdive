export function createListItem(num, i) {
  const li = document.createElement("li");
  li.innerText = `${num} × ${i} = ${num * i}`;
  return li;
}