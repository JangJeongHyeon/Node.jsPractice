import express from "express";
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import flash from 'connect-flash';
import dotenv from 'dotenv';
import pageRouter from './routes/page';

dotenv.config();


const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.set('port',process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure: false
    }
}));

app.use(flash());

app.use('/', pageRouter);


// Error Handling
app.use((req, res, next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.use((err, req, res)=>{
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err:{};
    res.render('error');
});

app.listen(app.get('port'), ()=>{
    console.log(`${process.env.COOKIE_SECRET}`)
    console.log(app.get('port'),'번 포트에서 대기중..');
});