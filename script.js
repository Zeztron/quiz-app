// =============================================================================
// QUIZ CONTROLLER
// =============================================================================
const quizController = (() => {
    
    // Question Contructor
    function Question(id, questionText, options, correctAnswer) {
        this.id = id;
        this.questionText = questionText;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    const questionLocalStorage = {
        setQuestionCollection: (newCollection) => {
            localStorage.setItem("questionCollection", JSON.stringify(newCollection));
        },
        getQuestionCollection: () => {
            return JSON.parse(localStorage.getItem("questionCollection"));
        },
        removeQuestionCollection: () => {
            localStorage.removeItem("questionCollection");
        }
    };

    return {
        addQuestionOnLocalStorage: (newQuestText, opts) => {
            // console.log("hi");
            var optionsArray, correctAns, questionId, newQuestion, getStoredQuestions;

            if (questionLocalStorage.getQuestionCollection() === null) {
                questionLocalStorage.setQuestionCollection([]);
            }
            // Array to store options
            optionsArray = [];
            // questionId = 0;

            // loop through the options
            for (var i = 0; i < opts.length; i++) {
                // if value is not empty then push to array
                if (opts[i].value !== "") {
                    optionsArray.push(opts[i].value);
                }

                if (opts[i].previousElementSibling.checked && opts[i].value !== "") {
                    correctAns = opts[i].value;
                }
            }

            // [ {id: 0} ]

            if (questionLocalStorage.getQuestionCollection().length > 0) {
                // Increment the question ID for each question collection
                questionId = questionLocalStorage.getQuestionCollection()[questionLocalStorage.getQuestionCollection().length - 1].id + 1;
            } else {
                questionId = 0;
            }

            newQuestion = new Question(questionId, newQuestText.value, optionsArray, correctAns);

            getStoredQuestions = questionLocalStorage.getQuestionCollection();
            getStoredQuestions.push(newQuestion);
            questionLocalStorage.setQuestionCollection(getStoredQuestions);
        }
    }
    

})();

// =============================================================================
// UI CONTROLLER
// =============================================================================
const UIController = (() => {

    const domItems = {
        // Admin panel elements
        questInsertBtn: document.getElementById("question-insert-btn"),
        newQuestText: document.getElementById("new-question-text"),
        adminOptions: document.querySelectorAll(".admin-option")
    };

    return {
        getDomItems: domItems
    };

})();


// =============================================================================
// CONTROLLER
// =============================================================================
const controller = ((quizCtrl, UICtrl) => {
    
    const selectedDomItems = UICtrl.getDomItems;

    selectedDomItems.questInsertBtn.addEventListener("click", () => {
        // console.log("clicked");
        quizController.addQuestionOnLocalStorage(selectedDomItems.newQuestText, selectedDomItems.adminOptions);
    });

})(quizController, UIController);