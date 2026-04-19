
const express = require('express');
const cors = require('cors');
// const OpenAI = require('openai'); // You can comment this out too for now
require('dotenv').config();

const app = express(); // <--- THIS IS THE MISSING LINE!
app.use(express.json());
app.use(cors());

// Now you can have your app.post below this...
app.post('/api/packing-list', async (req, res) => {
   // ... your mock code here ...
  const { city } = req.body;
  console.log("Received request for city:", city);

  // MOCK DATA (Faking the AI response)
  const mockResponse = `🎒 Documents & Essentials
* Passport + multiple photocopies
* Student visa + residence permit paperwork
* University admission letter / enrollment proof
* Health insurance documents
* Passport-sized photos (10–15 copies)
* International debit/credit card
* Emergency contact list

👕 Clothing
* T-shirts, shirts, tops
* Jeans, trousers, joggers
* Formal outfit
* Light jacket & Heavy winter jacket
* Thermals, Scarf, gloves, beanie
* Comfortable walking shoes & Formal shoes

🧼 Toiletries & Personal Care
* Toothbrush, toothpaste, Shampoo
* Skincare essentials
* Basic first-aid kit
* Towels (2–3)

📚 Study Essentials
* Laptop + charger
* Universal travel adapter
* Extension board / power strip
* Backpack

🍳 Kitchen & Food Basics
* Basic cutlery set, Plate, bowl, mug
* Reusable water bottle
* Spices from home & Instant food`;

  console.log("Sending fake AI response for testing...");
  res.json({ packinglist: mockResponse });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));
















// server.js - This is your Node.js Backend Environment
/*const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json()); // Lets the brain read JSON data
app.use(cors());         // Lets your React "Face" talk to this "Brain"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This key stays hidden here!
});

// This is your "Smart Route"
app.post('/api/packing-list', async (req, res) => {
  const { city } = req.body;
  console.log("Received request for city:", city); // <--- Add this

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ 
        role: "user", 
        content: `I am a student moving to ${city}. Give me a 5-item packing list.` 
      }],
    });

    console.log("AI Response received!"); // <--- Add this
    res.json({ list: response.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI Error:", error); // <--- This will show the real problem
    res.status(500).json({ error: "The AI is sleeping right now." });
  }

});  
  // This line keeps the server open so it can hear your React app
app.listen(5000, () => {
  console.log("🚀 The Brain is awake and listening on http://localhost:5000");

});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 SUCCESS: The Brain is awake and listening on port ${PORT}`);
});*/

