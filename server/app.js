require('dotenv').config();
require('express-async-errors');
// express
const express = require('express');
const app = express();
// rest of packages
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// database
const connectDB = require('./db/connect');
// routers
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const checkoutRouter = require('./routes/checkOutRoutes');
const productRouter = require('./routes/productRoutes');
const uploadRouter = require('./routes/uploadRoutes');
// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
// route
app.use(express.static('./public'));
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
app.use(cookieParser(process.env.JWT_SECRET));
app.get('/', (req, res)=>{
    res.send('Home Page');
})

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/checkout', checkoutRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/upload', uploadRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}
start();