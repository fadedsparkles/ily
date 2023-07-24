function showMessageAndAddImage() {
    const message = "Escolheu a melhor opção!!";
    const question = document.querySelector('.question');
    question.style.display = 'none';
  
    const resultMessage = document.querySelector('.result-message');
    resultMessage.textContent = message;
    resultMessage.style.display = 'block';
  
    const buttons = document.querySelector('.buttons');
    buttons.style.display = 'none';
  
    const resultImage = document.querySelector('.result-image');
    resultImage.style.display = 'block';
  }
  
  function moveButton() {
    const button = document.querySelector('.no-button');
    const newX = Math.random() * (window.innerWidth - 100); // Nova posição X aleatória
    const newY = Math.random() * (window.innerHeight - 100); // Nova posição Y aleatória
  
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
  }
  