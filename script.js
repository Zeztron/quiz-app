const quizController = (() => {
    const private = 10;
    const privateFn = (a) => {
        return a + private;
    }
    return {
        publicMethod: () => {
            return privateFn(20);
        }
    }
})();



const UIController = (() => {

})();



const controller = ((quizCtrl, UICtrl) => {

})(quizController, UIController);