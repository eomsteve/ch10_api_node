const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const morgan = require('morgan');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config();

const authRouter = require('./routes/auth');
const indexRouter = require('./routes');
const { sequelize } = require('./models');
const passportConfig = require('./passport');

const app = express();

passportConfig();

app.set('port',process.env.PORT || 8002);
app.set('view engine', 'html');
nunjucks.configure('views',{
    express:app,
    watch:true,
});


