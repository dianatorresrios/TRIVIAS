// script.js

const apiUrl = 'https://opentdb.com/api.php?amount=10';

async function generateTrivia() {
  const category = document.getElementById('category').value;
  const difficulty = document.getElementById('difficulty').value;
  const type = document.getElementById('type').value;
  const url = `${apiUrl}&category=${category}&difficulty=${difficulty}&type=${type}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const trivia = data.results;
    displayTrivia(trivia);
  } catch (error) {
    console.error('Error fetching trivia:', error);
  }
}

function displayTrivia(trivia) {
  const triviaContainer =
     }
