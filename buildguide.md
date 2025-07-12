
# L’Oréal Chatbot Build Guide

## 🎯 Project Purpose
Develop a branded chatbot experience that exclusively answers questions related to **L’Oréal products**, **beauty routines**, and **recommendations**. The chatbot must maintain context across multiple turns, provide clear UI feedback, and uphold brand tone and identity.

---

## ✅ Phase 1: Initial Configuration

### 1. Define the System Prompt
Set a strict but polite system instruction for the AI:

```
You are a helpful assistant representing L’Oréal. Only respond to questions related to L’Oréal products, beauty routines, skincare or haircare advice, and L’Oréal’s recommendations. Kindly refuse to answer anything unrelated.
```

### 2. Set Up OpenAI API Access
- Obtain an API key from OpenAI.
- Create a secure `.env` file or secure storage for your key if running server-side.
- Load API key into `script.js` securely if running locally or via a proxy server.

---

## 🧠 Phase 2: AI Logic & Relevance Handling

### Modify `script.js` to:
- ✅ Capture input from chat UI
- ✅ Send input to the **Chat Completions API**
- ✅ Pass system prompt as the initial message in conversation history
- ✅ Track and store conversation messages using an array of role-content pairs (for context retention)

### Relevance Filtering:
- If the user asks a non-beauty-related question, insert a polite decline like:

```
I'm here to help with L’Oréal products and beauty routines! Feel free to ask me about skincare, haircare, or our recommendations.
```

---

## 💬 Phase 3: Conversation History & Context

### Requirements:
- ✅ Maintain up to 10 prior messages (or full history) between user and assistant.
- ✅ Save and reuse the user’s name or past questions to personalize replies.
- ✅ Store message objects in the form:

```js
{ role: "user", content: "What shampoo do you recommend for dry hair?" }
{ role: "assistant", content: "I recommend the L’Oréal Elvive Extraordinary Oil Shampoo for nourishing dry hair." }
```

---

## 🖼️ Phase 4: Chat Interface (UI)

### Chat Display Rules:

| Feature                        | Points | Notes |
|-------------------------------|--------|-------|
| Display User Question         | 5 pts  | User’s message should appear clearly **above** each assistant reply |
| Chat Conversation UI          | 10 pts | Mimic chat apps: use message **bubbles**, color separation, avatar icons optional |
| Maintain Message Order        | –      | Append new messages at the bottom of the thread, oldest at top |
| Scroll Behavior               | –      | Ensure autoscroll to latest message (bottom) on each send |
| Clear Input Field             | –      | Reset the input field after sending |

### Example Structure (HTML):

```html
<div class="chat-message user">What’s the best face serum?</div>
<div class="chat-message assistant">L’Oréal Revitalift Derm Intensives 1.5% Pure Hyaluronic Acid Serum is a great option for hydration and plumping.</div>
```

---

## 🛠️ Phase 5: Visual & Brand Integration

### Optional but encouraged:
- Use **L’Oréal color palette** (`#000`, `#FFF`, and signature red).
- Use **brand font styling** (serif for headings, sans-serif for text).
- Add the “O” motif subtly in background/headers.

---

## 🧪 Testing Checklist

| Task                                           | Status |
|------------------------------------------------|--------|
| [ ] System prompt limits AI scope to L’Oréal   |        |
| [ ] Chat input captured correctly              |        |
| [ ] Messages sent to OpenAI API                |        |
| [ ] AI responses shown in proper UI bubbles    |        |
| [ ] User input shown above each response       |        |
| [ ] Conversation history retained              |        |
| [ ] Irrelevant queries declined politely       |        |
| [ ] Scroll updates on message send             |        |

---

## 🔚 Deployment Notes
- Ensure rate-limiting or usage limits for public demos
- If API key is exposed on frontend (not recommended), consider a server proxy

---

## 👥 Credits
This chatbot build is part of a branded experience prototype for L’Oréal and follows FutureBrand’s design principles.
