const express = require('express');
require('dotenv/config');
const colors = require('colors');
const connectDB = require('./config/database');
const app = express();
const port = process.env.PORT || 4000;
const { readdirSync } = require('fs');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
connectDB();
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(cors());
app.use(fileUpload());

// routes middleware
readdirSync('./routes').map((route) =>
    app.use('/api', require('./routes/' + route))
);

// Upload Endpoint
app.post('/api/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    file.mv(`${__dirname}/../client/public/uploads/${file.name}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
});

//   end
app.post('/api/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    file.mv(`${__dirname}/../client/public/uploads/${file.name}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
});

// send front app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
    console.log(`server running ${port}`.yellow.underline.bold)
);
