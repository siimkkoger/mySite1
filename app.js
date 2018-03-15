let express      = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    flash        = require("connect-flash"),
    path         = require('path');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let index = require('./routes/index');
app.use(index);




// ------------------- Nodemailer ------------------

//--------------------------------------------------



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT || 3000;
let hostname = process.env.IP || "localhost";

server.listen(3000, () => console.log(`Server is listening at https://${hostname}:${port}/`));

















