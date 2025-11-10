const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./db'); // Assuming you have a database connection file
const contactRoutes = require('./routes/contact');
const aboutRoutes = require('./routes/about');
const indexRoutes = require('./routes/index');
const videosRoutes = require('./routes/videos');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3032;

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to Database
connectDB(); 

// Set view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Debug logging for routes
console.log('Registering routes');

// Routes
app.use('/', indexRoutes);
console.log('Registered / route');
app.use('/about', aboutRoutes);
console.log('Registered /about route');
app.use('/contact', contactRoutes);
console.log('Registered /contact route');
app.use('/videos', videosRoutes);
console.log('Registered /videos route');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Error Handling for undefined routes
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

