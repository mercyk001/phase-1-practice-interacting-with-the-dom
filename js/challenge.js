document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    let count = 0;
    let intervalId;
  
    function startCounter() {
      intervalId = setInterval(() => {
        count++;
        counter.textContent = count;
      }, 1000);
    }
  
    function stopCounter() {
      clearInterval(intervalId);
    }
  
    startCounter();
  
    // Increment and Decrement Buttons
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
  
    plusButton.addEventListener("click", () => {
      count++;
      counter.textContent = count;
    });
  
    minusButton.addEventListener("click", () => {
      count--;
      counter.textContent = count;
    });
  
    // Like Button
    const heartButton = document.getElementById("heart");
    const likesList = document.querySelector(".likes");
  
    heartButton.addEventListener("click", () => {
      let existingLike = document.getElementById(`like-${count}`);
      if (existingLike) {
        let likeCount = parseInt(existingLike.getAttribute("data-likes"), 10);
        likeCount++;
        existingLike.setAttribute("data-likes", likeCount);
        existingLike.textContent = `${count} has been liked ${likeCount} times`;
      } else {
        let newLike = document.createElement("li");
        newLike.id = `like-${count}`;
        newLike.setAttribute("data-likes", 1);
        newLike.textContent = `${count} has been liked 1 time`;
        likesList.appendChild(newLike);
      }
    });
  
    // Pause Button
    const pauseButton = document.getElementById("pause");
  
    pauseButton.addEventListener("click", () => {
      if (pauseButton.textContent === "pause") {
        stopCounter();
        pauseButton.textContent = "resume";
        plusButton.disabled = true;
        minusButton.disabled = true;
        heartButton.disabled = true;
      } else {
        startCounter();
        pauseButton.textContent = "pause";
        plusButton.disabled = false;
        minusButton.disabled = false;
        heartButton.disabled = false;
      }
    });
  
    // Comment Box
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("list");
  
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const commentInput = document.getElementById("comment-input");
      const newComment = document.createElement("p");
      newComment.textContent = commentInput.value;
      commentList.appendChild(newComment);
      commentInput.value = "";
    });
  });