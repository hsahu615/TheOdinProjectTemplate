import "./main.scss";

function one() {
  let conversation = document.createElement("div");
  conversation.classList.add("conversation");

  conversation.innerHTML = `<i class="fa fa-comments fa-2x" aria-hidden="true"></i>`;
  document.body.appendChild(conversation);
}

one();
