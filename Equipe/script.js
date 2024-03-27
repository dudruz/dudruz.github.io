document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const answers = {
      q1: document.querySelector('input[name="q1"]:checked'),
      q2: document.querySelector('input[name="q2"]:checked'),
      q3: document.querySelector('input[name="q3"]:checked'),
      q4: document.querySelector('input[name="q4"]:checked'),
      q5: document.querySelector('input[name="q5"]:checked'),
      q6: document.querySelector('input[name="q6"]:checked'),
      q7: document.querySelector('input[name="q7"]:checked'),
      q8: document.querySelector('input[name="q8"]:checked'),
      q9: document.querySelector('input[name="q9"]:checked'),
      q10: document.querySelector('input[name="q10"]:checked')
    };
  
    let score = 0;
  
    if (answers.q1 && answers.q1.value === 'a') {
      score++;
    }
  
    if (answers.q2 && answers.q2.value === 'c') {
      score++;
    }
  
    if (answers.q3 && answers.q3.value === 'd') {
      score++;
    }
  
    if (answers.q4 && answers.q4.value === 'b') {
      score++;
    }
  
    if (answers.q5 && answers.q5.value === 'b') {
      score++;
    }
  
    if (answers.q6 && answers.q6.value === 'c') {
      score++;
    }
  
    if (answers.q7 && answers.q7.value === 'b') {
      score++;
    }
  
    if (answers.q8 && answers.q8.value === 'b') {
      score++;
    }
  
    if (answers.q9 && answers.q9.value === 'a') {
      score++;
    }
  
    if (answers.q10 && answers.q10.value === 'a') {
      score++;
    }
  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Você acertou ${score} de 10 perguntas.`;
  });

  function exibirImagemAmpliada(src) {
    // Define o src da imagem ampliada com o src da imagem normal
    document.getElementById("imagemAmpliadaSrc").src = src;
    // Exibe a imagem ampliada
    document.getElementById("imagemAmpliada").style.display = "block";
}

function ocultarImagemAmpliada() {
    // Oculta a imagem ampliada
    document.getElementById("imagemAmpliada").style.display = "none";
}
