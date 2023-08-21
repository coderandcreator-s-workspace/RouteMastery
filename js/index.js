// Page Linking
const srfBtn = document.querySelector("#srf-btn"),
about = document.querySelector("#about"),
creators = document.querySelector("#creators"),
home = document.querySelector("#home"),
srfContainer = document.querySelector("#srf"),
dataScience = document.querySelector("#data-science"),
profileListContainer = document.querySelector(".pro-list"),
quesContainer = document.querySelector("#ques"),
homeLink = document.querySelector("#home-link"),
aboutLink = document.querySelector("#about-link"),
creatorsLink = document.querySelector("#creators-link"),
contactLink = document.querySelector("#contact-link"),
submitBtn = document.querySelector(".submit-btn"),
resultPage = document.querySelector("#result-pg"),
retryBtn = document.querySelector(".retry-btn");


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
homeLink.addEventListener("click", function(){
  home.style.display = "block";
  about.style.display = "block";
  creators.style.display = "block";
  srfContainer.style.display = "none";
})
aboutLink.addEventListener("click", function(){
    home.style.display = "block";
    about.style.display = "block";
    creators.style.display = "block";
    srfContainer.style.display = "none";
  })
  creatorsLink.addEventListener("click", function(){
    home.style.display = "block";
    about.style.display = "block";
    creators.style.display = "block";
    srfContainer.style.display = "none";
  })
  contactLink.addEventListener("click", function(){
    home.style.display = "block";
    about.style.display = "block";
    creators.style.display = "block";
    srfContainer.style.display = "none";
  })
submitBtn.addEventListener("click", function(){
    quesContainer.style.display = "none";
    resultPage.style.display = "block";
})
retryBtn.addEventListener("click", function(){
    resultPage.style.display = "none";
    profileListContainer.style.display = "block";
})
// SRF - Questions Logic
const questions = [
    {
        ques: "1. What is the process of converting raw data into a more structured format, often involving cleaning and preprocessing steps?",
        options: ["Data Analysis", "Data Visualization", "Data Transformation", "Data Mining"],
        ans: "Data Transformation"
    },
    {
        ques: "2. Which type of machine learning algorithm is used for classification tasks, where the output variable is discrete categories or classes?",
        options: ["Regression", "Clustering", "Decision Trees", "Linear Regression"],
        ans: "Decision Trees"
    },
    {
        ques: "3. What is the term used for a statistical measure that represents the degree of variation or dispersion in a dataset?",
        options: ["Mean", "Median", "Standard Deviation", "Variance"],
        ans: "Standard Deviation"
    },
    {
        ques: "4. Which data visualization technique is used to show the distribution of a single numerical variable?",
        options: ["Bar Chart", "Pie Chart", "Histogram", "Scatter Plot"],
        ans: "Histogram"
    },
    {
        ques: "5. What is the process of finding and removing errors or inaccuracies in a dataset called?",
        options: ["Data Cleaning", "Data Sampling", "Data Aggregation", "Data Wrangling"],
        ans: "Data Cleaning"
    },
    {
        ques: "6. Which Python library is commonly used for data manipulation and analysis in Data Science?",
        options: ["Matplotlib", "Seaborn", "Pandas", "NumPy"],
        ans: "Pandas"
    },
    {
        ques: "7. Which type of data mining technique is used to find frequent itemsets in a transactional database?",
        options: ["Classfication", "Regression", "Association Rules", "Clustering"],
        ans: "Association Rules"
    },
    {
        ques: "8. What is the name of the process of reducing the dimensionality of a dataset while preserving its important features?",
        options: ["Principal Component Analysis (PCA)", "K-Means Clustering", "Decision Tree Pruning", "Linear Regression"],
        ans: "Principal Component Analysis (PCA)"
    },
    {
        ques: "9. Which evaluation metric in machine learning is used for classification tasks and represents the ratio of correctly predicted positive instances to all positive instances?",
        options: ["Precision", "Recall", "F1 Score", "Accuracy"],
        ans: "Precision"
    },
    {
        ques: "10. In the context of data visualization, which chart type is best suited for showing the relationship between two numerical variables?",
        options: ["Bar Chart", "Pie Chart", "Histogram", "Scatter Plot"],
        ans: "Scatter Plot"
    },
    {
        ques: "11. What is the term used for a set of techniques used to fill missing values in a dataset using existing information?",
        options: ["Data Interpolation", "Data Extrapolation", "Data Imputation", "Data Smoothing"],
        ans: "Data Imputation"
    },
    {
        ques: "12. In machine learning, what do we call the process of dividing a dataset into two subsets: one for training the model and the other for testing its performance?",
        options: ["Data Cleaning", "Data Transformation", "Data Splitting", "Data Scaling"],
        ans: "Data Splitting"
    },
    {
        ques: "13. What is the name of the process of converting categorical variables into numerical representations for machine learning algorithms?",
        options: ["Data Encoding", "Data Scaling", "Data Normalization", "Data Wrangling"],
        ans: "Data Encoding"
    },
    {
        ques: "14. Which statistical measure represents the average value of a dataset?",
        options: ["Variance", "Median", "Mean", "Standard Deviation"],
        ans: "Mean"
    },
    {
        ques: "15. Which supervised learning algorithm is used for regression tasks, where the output variable is a continuous value?",
        options: ["Decision Trees", "Linear Regression", "Support Vector Machines (SVM)", "K-Nearest Neighbors (KNN)"],
        ans: "Linear Regression"
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
    }

    currentQues++;
    if(currentQues < questions.length){
        questionLogic();
    }
    else{
        // document.querySelector(".questions-container").style.display = "none";
        document.querySelector(".next-btn").style.display = "none";
        document.querySelector(".submit-btn").style.display = "block";   
    }
})
