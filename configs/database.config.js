const mongoose = require('mongoose');
const movies = require('./movies.json');
// CONNECT YOUR APP TO THE MONGODB
mongoose
  //                               the name of our database
  //                                   |
  .connect('mongodb+srv://Klaus2132:giLHCYM9CCC9ir7G@cluster0.2rfd3.mongodb.net/movies?retryWrites=true&w=majority')
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .then(() => console.log(movies.title))
  .catch(err => console.error('Error connecting to mongo', err));


