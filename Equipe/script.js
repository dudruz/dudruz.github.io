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
    mudar('.q1', 't');
  } else {
    mudar('.q1', 'f');
  }

  if (answers.q2 && answers.q2.value === 'c') {
    score++;
    mudar('.q2', 't');
  } else {
    mudar('.q2', 'f');
  }

  if (answers.q3 && answers.q3.value === 'd') {
    score++;
    mudar('.q3', 't');
  } else {
    mudar('.q3', 'f');
  }

  if (answers.q4 && answers.q4.value === 'b') {
    score++;
    mudar('.q4', 't');
  } else {
    mudar('.q4', 'f');
  }

  if (answers.q5 && answers.q5.value === 'b') {
    score++;
    mudar('.q5', 't');
  } else {
    mudar('.q5', 'f');
  }

  if (answers.q6 && answers.q6.value === 'c') {
    score++;
    mudar('.q6', 't');
  } else {
    mudar('.q6', 'f');
  }

  if (answers.q7 && answers.q7.value === 'b') {
    score++;
    mudar('.q7', 't');
  } else {
    mudar('.q7', 'f');
  }

  if (answers.q8 && answers.q8.value === 'b') {
    score++;
    mudar('.q8', 't');
  } else {
    mudar('.q8', 'f');
  }

  if (answers.q9 && answers.q9.value === 'a') {
    score++;
    mudar('.q9', 't');
  } else {
    mudar('.q9', 'f');
  }

  if (answers.q10 && answers.q10.value === 'a') {
    score++;
    mudar('.q10', 't');
  } else {
    mudar('.q10', 'f');
  }


  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Você acertou ${score} de 10 perguntas.`;
});

function mudar(classe, status) {
  var questions = document.querySelectorAll(classe);
  if (status === 't') {
    questions.forEach(function(qu) {
      qu.style.backgroundColor = 'green'; 
    });
  } else {
    questions.forEach(function(qu) {
      qu.style.backgroundColor = 'red'; 
    });
  }
}

function exibirImagemAmpliada(alt) {
  document.getElementById("imagemAmpliadaSrc").src = alt;
  document.getElementById("imagemAmpliada").style.display = "block";
}

function ocultarImagemAmpliada() {
  document.getElementById("imagemAmpliada").style.display = "none";
}
