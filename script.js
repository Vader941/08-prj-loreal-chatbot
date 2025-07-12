/* DOM elements */
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatWindow = document.getElementById("chatWindow");

// Cloudflare Worker URL for secure API requests
const WORKER_URL = "https://prj-loreal-chatbot.nable.workers.dev/";

// Array to store conversation history
let conversationHistory = [];

// Set initial message
chatWindow.textContent = "👋 Hello! How can I help you today?";

/* Function to add messages to chat window */
function addMessage(message, isUser) {
  // Create a new message element
  const messageElement = document.createElement("div");
  messageElement.className = isUser ? "msg user" : "msg ai";
  messageElement.textContent = message;

  // Clear the chat window if it only contains the initial message
  if (chatWindow.textContent === "👋 Hello! How can I help you today?") {
    chatWindow.innerHTML = "";
  }

  // Add the message to the chat window
  chatWindow.appendChild(messageElement);

  // Scroll to the bottom of the chat window
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

/* Function to send message to OpenAI via Cloudflare Worker */
async function sendToOpenAI(userMessage) {
  try {
    // Add user message to conversation history
    conversationHistory.push({
      role: "user",
      content: userMessage,
    });

    // Limit conversation history to last 10 messages (5 user + 5 assistant pairs)
    // This keeps the context manageable and reduces API costs
    if (conversationHistory.length > 10) {
      conversationHistory = conversationHistory.slice(-10);
    }

    // Prepare the request body with conversation history
    // Note: The Worker expects only 'messages', it handles model and max_tokens internally
    const requestBody = {
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant representing L'Oréal. Only respond to questions related to L'Oréal products, beauty routines, skincare or haircare advice, and L'Oréal's recommendations. If someone asks about topics unrelated to beauty, skincare, haircare, or L'Oréal products, kindly refuse to answer and redirect them to ask about L'Oréal beauty topics instead. Always maintain a friendly, professional tone that reflects L'Oréal's brand values.",
        },
        ...conversationHistory,
      ],
    };

    // Show loading message
    addMessage("✨ Thinking...", false);

    // Send request to Cloudflare Worker
    const response = await fetch(WORKER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    // Remove loading message
    const lastMessage = chatWindow.lastChild;
    if (lastMessage && lastMessage.textContent === "✨ Thinking...") {
      chatWindow.removeChild(lastMessage);
    }

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Check if the response has the expected structure
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Invalid response format from API");
    }

    // Extract the AI response
    const aiResponse = data.choices[0].message.content;

    // Add AI response to conversation history
    conversationHistory.push({
      role: "assistant",
      content: aiResponse,
    });

    // Display the AI response
    addMessage(aiResponse, false);
  } catch (error) {
    // Handle any errors
    console.error("Error calling OpenAI API:", error);
    addMessage(
      "Sorry, I'm having trouble connecting right now. Please try again later.",
      false
    );
  }
}

/* Handle form submit */
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get the user's message
  const message = userInput.value.trim();

  // Check if message is not empty
  if (message === "") {
    return;
  }

  // Add user message to chat
  addMessage(message, true);

  // Clear the input field
  userInput.value = "";

  // Send message to OpenAI
  await sendToOpenAI(message);
});
