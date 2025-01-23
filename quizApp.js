let Ques = [
    {
        num: 1,
        question1: "What does HTML stand for?  ",
        img: "html.png",
        options: {
            right: "Hyper Text Markup Language",
            wrong1: "Hyper Transfer Mark language",
            wrong2: "Hyper text modifed languge"
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
            right: "Bottom-Up approach",
            wrong1: "Top-Down approach ",
            wrong2: "None of them"
        }

    }, {
        num: 4,
        question1: "CSS stands for ?",
        img: "css.png",
        options: {
            right: "Cascading Style sheet",
            wrong1: "Cascading Style Standards",
            wrong2: "Cascading Sheet Style"
        }

    }, {
        num: 5,
        question1: "Return type of Array?",
        img: "js.png",
        options: {
            right: "Object",
            wrong1: "Array",
            wrong2: "undefined"
        }

    }, {
        num: 6,
        question1: "Memory Creation phase in JS execution store values ?",
        img: "js.png",
        options: {
            right: "Yes",
            wrong1: "No",
        }

    }, {
        num: 7,
        question1: "why Promise is used in JS",
        img: "js.png",
        options: {
            right: "To perform Asynchronus Operation",
            wrong1: "To perform Synchronus Operation",
            wrong2: "None of them"
        }

    }, {
        num: 8,
        question1: "Return type of Object ",
        img: "js.png",
        options: {
            right: "Object",
            wrong1: "Array",
            wrong2: "Null"
        }

    }, {
        num: 9,
        question1: ".copyWithIn() chnages Default Array",
        img: "js.png",
        options: {
            right: "Yes",
            wrong1: "No",
        }
    }, {
        num: 10,
        question1: "console.log('1'+1)",
        img: "js.png",
        options: {
            right: "11",
            wrong1: "2",
            wrong2: "none"
        }
    }
]


document.addEventListener('DOMContentLoaded', () => {

})

const start = (x) => {
    let image = document.getElementById('image').src=`${Ques[x].img}`
    let number = document.getElementById('number').innerHTML = `${Ques[x].num}`
    let bar = document.getElementById('file').value = `${Ques[x].num}`
    let question = document.getElementById('questionDisplay').innerHTML = `${Ques[x].question1}`
    let options = document.getElementById('option')
    let sRed = document.getElementById('statues1')
    sRed.style.backgroundColor = "red"

    const optionKeys = Object.keys(Ques[x].options);
    const optionValues = Object.values(Ques[x].options);

    // Loop through the options and create elements for each
    for (let i = 0; i < optionValues.length; i++) {
        const optionDiv = document.createElement('div');
        optionDiv.className = "option";
        optionDiv.textContent = optionValues[i]; // Use the option value as text
        options.appendChild(optionDiv); // Add to the options container
    }
    
    document.getElementById('start').style.visibility='hidden'
}