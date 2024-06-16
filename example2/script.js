document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".memory-card");
  const resetButton = document.querySelector(".reset");
  const clickSound = new Audio("click.s.mp3");
  const victoryGif = document.getElementById("victory-gif");

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");
    playClickSound(); // Play sound when card is flipped - I added this sound because I felt that the game was dull without any noises, so I though a simple clicking sound would simply elevate it

    if (!hasFlippedCard) {
      // First click
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    // Second click
    secondCard = this;
    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    if (document.querySelectorAll(".flip").length === cards.length) {
      // All cards are flipped - the gif will play once the player has won the game! - yay >.<
      playVictoryGif();
    }

    resetBoard();
  }

  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      resetBoard();
    }, 1000);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  function playClickSound() {
    clickSound.play();
  }

  function playVictoryGif() {
    // Play the "yay.wav" audio file - positive connotations
    const yaySound = new Audio("yay.wav");
    yaySound.play();

    // Display the trophy GIF - victory trophy with "yay" sound together
    victoryGif.style.display = "block";
  }

  function resetGame() {
    playClickSound(); // Play sound when reset button is clicked
    setTimeout(() => {
      window.location.reload(); // Reload the page immediately after 2 seconds - gives it a more smooth look rather than an immediate refresh - plus it allows for the click sound to fully play before reloading the page!
    }, 2000);
  }

  resetButton.addEventListener("click", resetGame);

  (function shuffle() {
    cards.forEach((card) => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();

  cards.forEach((card) => card.addEventListener("click", flipCard));
});
