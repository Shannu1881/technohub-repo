AWS.config.credentials = new AWS.Credentials('AKIA3HARXCQR42M6GVFB', 'G0Zdzx6nZX0zrztjSLkGE4GdvqyafDBzbjz1IWmr');
const lexRuntime = new AWS.LexRuntime();


const chatInterface = document.getElementById('chat-interface');
const userId = 'unique-user-id'; // Replace with a unique user ID

function sendMessage(message) {
  const params = {
    botAlias: 'BotAlias',
    botName: 'BotName',
    inputText: message,
    userId: userId
  };

  lexRuntime.postText(params, function(err, data) {
    if (err) {
      console.error('Error:', err);
      return;
    }

    // Process bot response
    const botMessage = data.message;
    displayMessage('Bot', botMessage);
  });
}

function displayMessage(sender, message) {
  const messageDiv = document.createElement('div');
  messageDiv.textContent = sender + ': ' + message;
  chatInterface.appendChild(messageDiv);
}


const userInputField = document.getElementById('user-input');

userInputField.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const userMessage = userInputField.value;
    displayMessage('User', userMessage);
    sendMessage(userMessage);
    userInputField.value = '';
  }
});
