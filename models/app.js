const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();

//seperate routing by router
const pageRouter = require('./routes/page');

//make app by calling express package
const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//set port 9282
app.set('port', process.env.PORT || 9282);

//connect middlewares
//morgan : show log
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
//express built in body-parser : interpret request
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//cookieParser : interpret cookie in request
app.use(cookieParser(process.env.COOKIE_SECRET));
//express-session : manage session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));
//connect-flash : show one-time message
app.use(flash());

app.use('/', pageRouter);

//catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//error handler
app.use((err, req, res) => {
    //set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //render the error page
    res.status(err.status || 500);
    res.render('error');    
});

app.listen(app.get('port'), () => {
    console.log('Wating on port ', app.get('port'));
});