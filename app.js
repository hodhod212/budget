// BUDGET CONTROLLER
var budgetController = (function() {
    var Expense = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
   var data = {
       allItems:{
           exp:[],inc:[]
       },
       totals:{
           exp:0,inc:0
       }
   }
})();

// UI CONTROLLER
var UIController = (function() {
    var DOMstrings = {
        inputType:'.add__type',
        inputDescription:'.add__description',
        inputValue:'.add__value',
        inputBtn:'.add__btn'
    }
    return {
        getInput: function(){
            return {
                typ: document.querySelector(DOMstrings.inputType).value,//will be either inc or exp.
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value 
            };
        },
        getDOMstrings: function(){
            return DOMstrings;
            
        }
    }
})();
// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
        document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13) {
           ctrlAddItem();
        } 
        
    });
    }
    
    var ctrlAddItem = function(){
        // 1. Get the field input data
        var input = UICtrl.getInput();
        
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Clear the fields
        // 5. Calculate and update budget    
        // 6. Calculate and update percentages
        
    };
    return {
        init: function(){
            console.log('just a test');
            setupEventListeners();
        }
    };
})(budgetController,UIController);
controller.init();