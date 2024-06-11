const express = require('express');
const app = express();
const connectDB = require('./config/db');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
// Connect database
connectDB();

// // Init Middleware
// app.use(express.json({ extended: false }));
// app.get('/', (req, res) => res.send('API Running'));

// // Define Routes

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/paycycle', require('./routes/api/paycycle'));
app.use('/api/payment', require('./routes/api/payment'));
app.use('/api/paymethods', require('./routes/api/paymethods'));

//Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
