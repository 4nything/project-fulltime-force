import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import indexRouter from './routes/index';

var app = express();

// view engine setup and set port
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(cors())
app.use(express.json());

app.use('/api/commits', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  res.format({
    html: function (){
      res.render('404', { url: req.url });
    },
    json: function(){
      res.json({ error: 'Not Found'})
    },
    default: function(){
      res.type('txt').send('Not Found');
    }
  })
  
});

// error handler
app.use(function(err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

export default app;
