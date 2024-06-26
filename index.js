import express, { json } from 'express'
import { connectToDatabase } from './DataBase/createPool.js'
import router from './routes.js'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
const app = express()
const port = 1488

app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://awaken86.github.io');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
router.use(bodyParser.json())
app.use(fileUpload())
app.use(express.static('static'))
app.use('/api', router)
connectToDatabase().then(() => {
    app.listen(port, () => {

        console.log(`Example app listening on port ${port}`)
        router.get('/menu', (req, res) => {
            // Обработка запроса на /api/menu
            res.send('Это ответ на GET-запрос на /api/menu');
        });
    })
}).catch((error) => {
    console.log(error)
})
