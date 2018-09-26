const app = require('./server');

app.listen(3000, () => {
  console.log('Listening on server start at port 3000');
});



// Routes
app.get('/', function(req, res) {
  res.send('Hello OKD World!');
});