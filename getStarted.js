let currentQuestionIndex = 1;

    // Show the first question
    function showQuestion(index) {
      const question = document.getElementById(`question${index}`);
      if (question) {
        question.classList.add('show');
      }
    }

    // Hide the current question and show the next one
    function nextQuestion(current) {
      const currentQuestion = document.getElementById(`question${current}`);
      if (currentQuestion) {
        currentQuestion.classList.remove('show');
      }
      
      // Move to the next question after a small delay
      setTimeout(() => {
        const nextQuestion = document.getElementById(`question${current + 1}`);
        if (nextQuestion) {
          nextQuestion.classList.add('show');
        }
      }, 300);
    }

    // Initially show the first question
    showQuestion(currentQuestionIndex);