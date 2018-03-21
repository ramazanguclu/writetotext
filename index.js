const express = require('express');
const app = express();

require('./routes/textRoutes')(app);

const PORT = process.env.PORT || 100;
app.listen(PORT);