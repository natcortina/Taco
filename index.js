

/*
INSTRUCTIONS:

To get a random cat face - /catfaces

To get what taco you should eat depending the month - /?month=February


*/

// Import the express library 
import express from 'express'

//cats
import cats from 'cat-ascii-faces';

import cors from 'cors';


// Create an instance of an express application 
const app = express()
app.use(express.json())
app.use(cors({
  origin: '*'
}));

// Set the port 
const port = process.env.PORT || 3001

//start writing my own code AFTER THIS LINE 


const options = {
  "January": "Carne Asada",
  "February": "Barbacoa",
  "March": "Birria",
  "April": "Al pastor",
  "May": "Tacos de mariscos",
  "June": "Tinga de pollo",
  "July": "Campechanos",
  "August": "Carnitas",
  "September": "Cochinita Pibil",
  "October": "Nopales",
  "November": "Lengua",
  "December": "Tacos de Canasta"
}


     //using the const months, that is what the user has to write after :3001/?
     //, using a variable that starts from false, turns
     //into true and then adds the corresponding taco using a $ sign to add the text
     //recommended taco is empty for it to be able to add whatever the
     //corresponding taco is 


app.get('/', (req, res) => {
  const input = req.query.month

  let found = false
  let recommendedTaco = ""

  Object.keys(options).forEach((key) => {
    if (key === input) {
      found = true
      recommendedTaco = options[key]
    }
  })

 
  if (found) {
    // Send response
    res.json(recommendedTaco);
    console.log("te toca comer un taco");
  } else {
    res.send('Not a taco month!! AKA not possible, you just did not write a month');
    console.log("no toca comer un taco");
  }
})
  

  // Get a random cat face from the library
app.get('/catfaces', (req, res) => {

  const randomCatFace = cats();

  const randomCat = {
    catFace: randomCatFace
  };

  // Send the JSON response
  res.json(randomCat);
  console.log("gatito");
});

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}` )
})
