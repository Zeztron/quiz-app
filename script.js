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

    return {
        addQuestionOnLocalStorage: (newQuestText, opts) => {
            console.log("hi");
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