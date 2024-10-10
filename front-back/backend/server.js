import express from 'express';
const port =  process.env.PORT || 3000;

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready!');
// });
 
app.get('/api/jokes', (req, res) => { 
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'its a joke'
        },
        {
            id:2,
            title:'Another joke',
            content:'its another joke'
        },
        {
            id:3,
            title:'Again joke',
            content:'its again a joke'
        },
        {
            id:4,
            title:'Once again joke',
            content:'Once again joke'
        },
        {
            id:5,
            title:'LastOne joke',
            content:'last one not a joke'
        },
    ]
    res.send(jokes);
})

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
}) 