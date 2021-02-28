const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const likesUl = document.querySelector("ul")
const pause = document.getElementById("pause")
const counter = document.getElementById("counter")
const commentForm = document.getElementById("comment-form")
const commentInput = document.getElementById("comment-input")
const commentList = document.getElementById("list")

const addComment = event => {
  event.preventDefault();
  let p = document.createElement("p")
  commentList.appendChild(p).innerText = `${commentInput.value}`
  event.target.reset()
}

const addLike = event => {
  let li = document.createElement("li")
  likesUl.appendChild(li).innerText = `${counter.value} has been liked x times`
}

const minusCount = event => {
  let count = parseInt(counter.innerText, 10);
  counter.innerText = `${count - 1}`
}

const plusCount = event => {
  let count = parseInt(counter.innerText, 10);
  counter.innerText = `${count + 1}`
}

const toggleCounter = event => {
  console.log("clicked")
  if (pause.innerText == "pause") { pause.innerText = "resume" } // this isn't doing anything
  if (pause.innerText == "resume") { pause.innerText = "pause" } // neither is this
}

minus.addEventListener("click", minusCount)
plus.addEventListener("click", plusCount)
commentForm.addEventListener("submit", addComment)
pause.addEventListener("click", toggleCounter)
heart.addEventListener("click", addLike)