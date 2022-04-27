const submit = document.querySelector("#btnSubmit");
const inputText = document.querySelector("#inputText");
const ulList = document.querySelector("#ulList");

submit.addEventListener("click", function (e) {
  if (inputText.value === "") {
    return;
  }
  e.preventDefault();
  const li = document.createElement("li");
  ulList.appendChild(li);
  li.innerHTML = `${`<i class="fa-regular fa-trash-can"></i>`} ${
    inputText.value
  }`;
  inputText.value = "";
  li.classList.add("custom-li");
});
