
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
* Spices from home & Instant food
* Instant food (maggi, oats, coffee/tea)


🧳 Travel & Miscellaneous

* Suitcase + backpack
* Laundry bag
* Padlock (for suitcase/dorm security)
* Umbrella (Germany weather is unpredictable)
* Small sewing kit
* Cable organizers / pouches
* Extra spectacles/contact lenses (if needed)
* Small cash in euros for initial days

🌦️ Seasonal Add-ons

* Light breathable clothing (spring)
* Sunglasses (spring)
* Heavy thermal wear layers (winter)
* Waterproof boots (winter/rainy periods)
* Hand cream & lip balm (winter dryness)
* Electric heating pad (optional, winter comfort)`;

  console.log("Sending fake AI response for testing...");
  res.json({ packinglist: mockResponse });
});

// --- NEW ROUTE: LOCAL TRANSPORT GUIDANCE ---
app.post('/api/transport-guide', (req, res) => {
  const { origin, destination } = req.body;
  const destLower = destination ? destination.toLowerCase() : "";

  console.log(`Transport request: From ${origin} to ${destination}`);

  // 1. Define the Specific Logic for Ravensburg/Weingarten
  let journeyDetails = "";

  if (destLower.includes("ravensburg") || destLower.includes("weingarten")) {
    journeyDetails = `
      <div style="background: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #2563eb; margin: 15px 0;">
        <strong>Your Step-by-Step Journey:</strong><br/>
        🏙️ <strong>${origin}</strong><br/>
        &nbsp;&nbsp;&nbsp;➔ Take <strong>S-Bahn (S8 or S9)</strong> to <strong>Main Station (Hbf)</strong><br/>
        &nbsp;&nbsp;&nbsp;➔ Transfer to a <strong>Regional Train</strong> (RE/RB) toward <strong>Ulm Hbf</strong><br/>
        &nbsp;&nbsp;&nbsp;➔ Transfer to a train toward <strong>Ravensburg Hbf</strong><br/>
        &nbsp;&nbsp;&nbsp;➔ Take <strong>Bus Line 1 or 6</strong> toward Weingarten<br/>
        📍 <strong>Get down at: Lazarettstr Bus Stop</strong>
      </div>
    `;
  } else {
    // Fallback for other locations
    journeyDetails = `
      <div style="background: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #cbd5e1; margin: 15px 0;">
        <strong>General Route:</strong><br/>
        Take the S-Bahn from ${origin} to the city center (Hauptbahnhof). From there, use a Regional Train to reach ${destination}. 
        <em>Check the DB Navigator app for live platform numbers.</em>
      </div>
    `;
  }

  // 2. Combine with General German Transport Info
  const fullResponse = `
    <h3 style="color: #2563eb;">🇩🇪 German Transport Instructions</h3>
    <p>Navigating the German rail system is easy once you know these three things:</p>
    
    <ul>
      <li><strong>The "DB Navigator" App:</strong> This is mandatory. It shows real-time delays, platform changes, and digital tickets.</li>
      <li><strong>S-Bahn vs. U-Bahn:</strong> <em>S-Bahn</em> connects cities and airports; <em>U-Bahn</em> is the local city subway.</li>
      <li><strong>Validation:</strong> If you buy a paper ticket at a machine, look for a small yellow/orange box on the platform to "stamp" it before boarding.</li>
    </ul>

    ${journeyDetails}

    <p><strong>Next Step:</strong> Check the live timetable here:</p>
    <a href="https://www.int.bahn.de/en" target="_blank" style="display: inline-block; padding: 10px 20px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 5px;">
      Open Official DB Timetable →
    </a>
  `;

  res.json({ transportguide: fullResponse });
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

