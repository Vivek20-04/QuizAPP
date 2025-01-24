let Ques = [
    {
        num: 1,
        question1: "What does HTML stand for?  ",
        img: "html.png",
        options: {
            right: "Hyper Text Markup Language",
            wrong2: "Hyper text modifed languge",
            wrong1: "Hyper Transfer Mark language"
        }

    }, {
        num: 2,
        question1: "Is JsvaScript is Non-Blocking Nature ",
        img: "js.png",
        options: {
            right: "Yes",
            wrong1: "No",
        }

    }, {
        num: 3,
        question1: "which approach implemented by Event Bubbling",
        img: "js.png",
        options: {
            
            wrong1: "Top-Down approach ",
            right: "Bottom-Up approach",
            wrong2: "None of them"
        }

    }, {
        num: 4,
        question1: "CSS stands for ?",
        img: "css.png",
        options: {
           
            wrong1: "Cascading Style Standards",
            wrong2: "Cascading Sheet Style",
            right: "Cascading Style sheet"
        }

    }, {
        num: 5,
        question1: "Return type of Array?",
        img: "js.png",
        options: {
            wrong1: "Array",
            right: "Object",
            wrong2: "undefined"
        }

    }, {
        num: 6,
        question1: "Memory Creation phase in JS execution store values ?",
        img: "js.png",
        options: {
            right: "NO",
            wrong1: "YES",
        }

    }, {
        num: 7,
        question1: "why Promise is used in JS",
        img: "js.png",
        options: {                       
            wrong1: "To perform Synchronus Operation",
            right: "To perform Asynchronus Operation",
            wrong2: "None of them"
        }

    }, {
        num: 8,
        question1: "Return type of Object ",
        img: "js.png",
        options: {
            wrong1: "Array",
            right: "Object",
            wrong2: "Null"
        }

    }, {
        num: 9,
        question1: ".copyWithIn() chnages Default Array",
        img: "js.png",
        options: {
            wrong1: "NO",
            right: "YES"
            
        }
    }, {
        num: 10,
        question1: "console.log('1'+1)",
        img: "js.png",
        options: {
            wrong1: "2",
            right: "11",
            wrong2: "none"
        }
    }
]

  let currentQuestionIndex = 0;
  let timer=10
  let score =0
  
  document.addEventListener("DOMContentLoaded", () => {
    start(currentQuestionIndex);
  });

  // Function to display the current question
  const start = (index) => {

    if (index >= Ques.length) {
      document.getElementById("questionDisplay").innerHTML = `<h2>Quiz Completed!</h2><p>Your Score: ${score}/${Ques.length}</p>`;
      let options = document.getElementById("option");
      options.innerHTML = "";
      if(score>8){
        document.getElementById('statues3').style.backgroundColor='darkgreen'
      }
      else if(score<=8){
        document.getElementById('statues2').style.backgroundColor='rgb(189, 189, 0)'
      }
      else{
        document.getElementById('statues1').style.backgroundColor='darkred'
      }
      return;
    }
    let bar = document.getElementById('file').value=`${Ques[index].num}`
    let image = (document.getElementById("image").src = `${Ques[index].img}`);
    let number = (document.getElementById("number").innerHTML = `${Ques[index].num}`);
    let question = (document.getElementById(
      "questionDisplay"
    ).innerHTML = `${number}.${Ques[index].question1}`);
    let options = document.getElementById("option");

    // Clear previous options
    options.innerHTML = "";
  
    // Create options dynamically
    const optionValues = Object.values(Ques[index].options);
  
    optionValues.forEach((value) => {
      const optionDiv = document.createElement("button");
      optionDiv.className = "option";
      optionDiv.textContent = value;
  
      // Add click listener to check the answer
      optionDiv.addEventListener("click", (e) => {
        if (value === Ques[index].options.right) {
          score++; 
        }
        // Move to the next question
        currentQuestionIndex++;
        start(currentQuestionIndex);
      });
      options.appendChild(optionDiv);
      countdown(timer)
    });  
    document.getElementById("start").style.visibility = "hidden";
    
  };
  

  function countdown(timer) {
    if (window.timerInterval) {
      clearInterval(window.timerInterval);
    }
  
    window.timerInterval = setInterval(() => {
      document.getElementById('timer').textContent = timer;
  
      if (timer === 0) {
        clearInterval(window.timerInterval);
        currentQuestionIndex++;
        start(currentQuestionIndex);
      } else {
        timer--;
      }
    }, 1000);
  }
