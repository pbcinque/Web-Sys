var questions = [
    {
      question: "What is your favorite color?",
      options: ["Red", "Blue", "Green", "Yellow", "Purple", "Pink", "Orange"],
      results: ["You are passionate and energetic!", "You are calm and peaceful.", "You are optimistic and growth-oriented.", "You are cheerful and outgoing.", "You are creative and imaginative.", "You are loving and affectionate.", "You are enthusiastic and adventurous."]
    },
    {
      question: "What is your favorite animal?",
      options: ["Dog", "Cat", "Bird", "Fish", "Turtle", "Lion", "Elephant"],
      results: ["You are loyal and friendly.", "You are independent and mysterious.", "You are free-spirited and adventurous.", "You are adaptable and flexible.", "You are wise and patient.", "You are strong and courageous.", "You are gentle and wise."]
    },
    {
      question: "Which mythical creature do you find most fascinating?",
      options: ["Dragon", "Phoenix", "Mermaid", "Unicorn", "Griffin", "Sphinx", "Centaur"],
      results: ["You are powerful and resilient!", "You are reborn and transformative.", "You are mysterious and enchanting.", "You are unique and magical.", "You are majestic and noble.", "You are wise and enigmatic.", "You are strong and independent."]
    },
    {
      question: "Which legendary hero do you admire the most?",
      options: ["King Arthur", "Hercules", "Beowulf", "Robin Hood", "Odysseus", "Gilgamesh", "Cu Chulainn"],
      results: [
        "You value honor and justice!",
        "You are strong and courageous!",
        "You are brave and fearless!",
        "You are kind and selfless!",
        "You are clever and resourceful!",
        "You are mighty and adventurous!",
        "You are loyal and honorable!"
      ]
    },

  ];
  
  var cookieRecipes = [
    "Chocolate Chip Cookies",
    "Oatmeal Raisin Cookies",
    "Peanut Butter Cookies",
    "Snickerdoodle Cookies",
    "Sugar Cookies",
    "Shortbread Cookies",
    "Macadamia Nut Cookies",
    "Double Chocolate Cookies",
    "Gingerbread Cookies",
    "White Chocolate Macadamia Nut Cookies",
    "Lemon Cookies",
    "Coconut Cookies",
    "Almond Cookies",
    "M&M Cookies",
    "Butter Cookies",
    "Cinnamon Cookies",
    "Pistachio Cookies",
    "Raspberry Thumbprint Cookies",
    "Cranberry Orange Cookies",
    "Chocolate Crinkle Cookies",
    "Peanut Butter Blossom Cookies",
    "Cherry Chocolate Chip Cookies",
    "Walnut Cookies",
    "Oreo Stuffed Cookies",
    "Blueberry Cookies",
    "Maple Pecan Cookies",
    "Lavender Shortbread Cookies",
    "Pumpkin Spice Cookies",
    "Caramel Apple Cookies",
    "S'mores Cookies",
    "Banana Chocolate Chip Cookies",
    "Coconut Macaroons",
    "Pecan Sandies",
    "Red Velvet Cookies",
    "Hazelnut Cookies",
    "Key Lime Cookies",
    "Matcha Cookies",
    "Pistachio Cranberry Cookies",
    "Chai Spice Cookies",
    "Espresso Chocolate Chip Cookies",
    "Rosemary Shortbread Cookies",
    "Raspberry Linzer Cookies",
    "Snickers Cookies",
    "Caramel Pecan Cookies",
    "Lemon Lavender Cookies",
    "Tiramisu Cookies",
    "Molasses Cookies",
    "Sesame Cookies",
    "Funfetti Cookies"
  ];
  
  var currentQuestion = 0;
  var selections = [];
  
  function loadQuestion() {
    var question = questions[currentQuestion];
    if (question) {
      document.getElementById('question').textContent = question.question;
      var optionsContainer = document.getElementById('options');
      optionsContainer.innerHTML = '';
      question.options.forEach(function(option, index){
        var radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'option';
        radioBtn.value = index;
        optionsContainer.appendChild(radioBtn);
        optionsContainer.appendChild(document.createTextNode(option));
        optionsContainer.appendChild(document.createElement('br'));
      });
    } else {
      showResult();
    }
  }
  
  function showResult() {
    var resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';
    var resultTitle = document.getElementById('result-title');
    var resultText = document.getElementById('result-text');
    resultTitle.textContent = "Your Result";
    var recipeIndex = selections.reduce((acc, val) => acc + val, 0) % cookieRecipes.length;
    resultText.textContent = "You should make " + cookieRecipes[recipeIndex] + "!";
    
    var submitButton = document.getElementById('submit-btn');
    var questionContainer = document.getElementById('question-container');
    submitButton.style.display = 'none';
    questionContainer.style.display = 'none';
  }
  
  document.getElementById('submit-btn').addEventListener('click', function(){
    var selectedOption = document.querySelector('input[name="option"]:checked');
    if(selectedOption) {
      selections.push(parseInt(selectedOption.value));
      currentQuestion++;
      loadQuestion();
    } else {
      alert('Please select an option');
    }
  });
  
  loadQuestion();