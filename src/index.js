const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

//settings
app.set('json spaces',2);

//middlewares
app.use(morgan('dev')); //combined
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/', require('./routes/RutasWeb'));
app.use('/api', require('./routes/movies'));
app.use('/api', require('./routes/users'));

//server
app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});