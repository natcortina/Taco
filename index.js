

/*
INSTRUCTIONS:

To get a random cat face - /catfaces

To get what taco you should eat depending the month - /?month=February


*/

// Import the express library 
import express from 'express'

//cats
import cats from 'cat-ascii-faces';


// Create an instance of an express application 
const app = express()

// Set the port 
const port = process.env.PORT || 3001


//start writing my own code AFTER THIS LINE 


let optiontry = {
  "0": {
    name0: "January",
    response0: "Carne Asada"
  },
  "1": {
    name1: "February",
    response1 : "Barbacoa"
  },
  "2": {
    name1: "March",
    response1 : "Birria"
  },
  "3": {
    name1: "April",
    response1 : "Al pastor"
  },
  "4": {
    name1: "May",
    response1 : "Tacos de mariscos"
  },
  "5": {
    name1: "June",
    response1 : "Tinga de pollo"
  },
  "6": {
    name1: "July",
    response1 : "Campechanos"
  },
  "7": {
    name1: "August",
    response1 : "Carnitas"
  },
  "8": {
    name1: "September",
    response1 : "Cochinita Pibil"
  },
  "9": {
    name1: "October",
    response1 : "Nopales"
  },
  "10": {
    name1: "November",
    response1 : "Lengua"
  },
  "11": {
    name1: "December",
    response1 : "Tacos de Canasta"
  }


}

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
    res.send(`¡Que emoción! It is ${input}, sooo the recommended taco
    for you to eat is: ${recommendedTaco}`)
  } else {
    res.send('Not a taco month!!, AKA not possible, you just did not write a month')
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
});

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}` )
})
