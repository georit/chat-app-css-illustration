/* *****custom variables***** */
// general
// const chatBodyEl = document.querySelector(".chat-body");

// messages received
const chatReceivedOne = document.getElementById("chat-received-1");
const chatReceivedTwo = document.getElementById("chat-received-2");
const chatReceivedThree = document.getElementById("chat-received-3");
const chatReceivedFour = document.getElementById("chat-received-4");
const chatReceivedFive = document.getElementById("chat-received-5");

// messages sent
const chatSentOne = document.getElementById("chat-sent-1");
const chatSentTwo = document.getElementById("chat-sent-2");
const chatSentThree = document.getElementById("chat-sent-3");

/* *****functions***** */
function animateChat() {
  // inbound msg one
  setTimeout(() => {
    chatReceivedOne.style.right = "0%";
  }, 1000);

  // inbound msg two
  setTimeout(() => {
    chatReceivedTwo.style.right = "0%";
  }, 1500);

  // outbound msg one
  setTimeout(() => {
    chatSentOne.style.left = "0%";
  }, 2500);

  // outbound msg two
  setTimeout(() => {
    chatSentTwo.style.left = "0%";
  }, 3000);

  // outbound msg three
  setTimeout(() => {
    chatSentThree.style.left = "0%";
  }, 3500);

  // inbound msg three
  setTimeout(() => {
    chatReceivedThree.style.right = "0%";
  }, 4500);

  // inbound msg four
  setTimeout(() => {
    chatReceivedFour.style.right = "0%";
  }, 5000);

  // inbound msg five
  setTimeout(() => {
    chatReceivedFive.style.right = "0%";
  }, 5500);
}

/* *****event listeners***** */
window.addEventListener("DOMContentLoaded", animateChat);
