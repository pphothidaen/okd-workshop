const Express = require('express');

const app = new Express();

// Just to test our server is working
app.get('/api', (req, res) => {
  res.send({
    msg: 'Hello OKD world with API',
  });
});

module.exports = app;
