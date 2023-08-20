// Page Linking
const srfBtn = document.querySelector("#srf-btn"),
about = document.querySelector("#about"),
creators = document.querySelector("#creators"),
home = document.querySelector("#home");
srfContainer = document.querySelector("#srf");
dataScience = document.querySelector("#data-science");
profileListContainer = document.querySelector(".profile-list-container");
quesContainer = document.querySelector("#ques");

srfBtn.addEventListener("click", function(){
    home.style.display = "none";
    about.style.display = "none";
    creators.style.display = "none";
    srfContainer.style.display = "block";

})
dataScience.addEventListener("click", function(){
  profileListContainer.style.display = "none";
  quesContainer.style.display = "block";

})


// SRF - Questions Logic
const questions = [
    {
        ques: "What is the process of converting raw data into a more structured format, often involving cleaning and preprocessing steps?",
        options: ["Data Analysis", "Data Visualization", "Data Transformation", "Data Mining"],
        ans: "Data Transformation"
    },
    {
        ques: "Which type of machine learning algorithm is used for classification tasks, where the output variable is discrete categories or classes?",
        options: ["Regression", "Clustering", "Decision Trees", "Linear Regression"],
        ans: "Decision Trees"
    },
];

let currentQues = 0, score = 0;

const question = document.querySelector(".question"),
options = document.querySelector(".options"),
nextBtn = document.querySelector(".next-btn");

function questionLogic(){
    const q = questions[currentQues];
    question.innerHTML = q.ques;
    options.innerHTML = "";
    q.options.forEach((option)=>{
        const label= document.createElement("label");
        label.innerHTML = `<input type="radio" name="choice" value="${option}"> ${option}`;
        options.appendChild(label);
    });
}
questionLogic();

nextBtn.addEventListener("click", function(){
    const selectedOption = document.querySelector("input[name='choice']:checked");
    if(!selectedOption){
       return;
    }
    if(selectedOption.value === questions[currentQues.ans]){
       score++;
       document.querySelector("result").textContent = `Your score is ${score}`;
    }

    currentQues++;
    if(currentQues < questions.length){
        questionLogic();
    }
    else{
        document.querySelector(".questions-container").style.display = "none";
        document.querySelector(".next-btn").style.display = "none";
        document.querySelector(".ques-end").style.display = "block";
        document.querySelector(".result").style.display = "block";   
    }
})
