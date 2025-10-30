const express = require('express');
const app = express();
const PORT = 5000;

app.get('/',(req,res)=>{
  try{
    res.json({message:"Server sucessfully created"});
  }
  catch(error){
    console.log('Error in first page:',error);
    res.status(500).json({error:'Internal Server Error'});
  }
})
// Home route
app.get('/home', (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      message: "Welcome to ElectroMart – Your One-Stop Electronics Store!",
      data: {
        storeName: "ElectroMart",
        tagline: "Smart Tech, Smart Living.",
         description: "Grab the hottest deals on mobiles, laptops, TVs, and more.",
          }
    });
  } catch (error) {
    console.error("Error in /home route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// About route
app.get('/about', (req, res) => {
  try {
    res.json({ message: 'This is the About Page.' });
  } catch (error) {
    console.error('Error in /about route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Contact route
app.get('/contact', (req, res) => {
  try {
    res.json({ message: 'This is the Contact Page.' });
  } catch (error) {
    console.error('Error in /contact route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
