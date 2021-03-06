import express from 'express';
import cors from 'cors';
import bodyParder from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/build'))); // Serve static files such as index.html.
app.use(cors()); // enables ALL CORS requests
app.use(bodyParder.json()); // Parse a stream of data to a JSON and constructs a req.body property with it

 // TODO: Check what is the role of the dollar sign?

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true});
        const db = client.db('python-blog');
    
        await operations(db);
    
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

app.get('/api/posts/:name', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;

        const articleInfo = await db.collection('posts').findOne({ name: articleName })
        res.status(200).json(articleInfo);
    }, res);
})

app.post('/api/posts/:name/upvote', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;
    
        const articleInfo = await db.collection('posts').findOne({ name: articleName });
        await db.collection('posts').updateOne({ name: articleName }, {
            '$set': {
                upvotes: articleInfo.upvotes + 1,
            },
        });
        const updatedArticleInfo = await db.collection('posts').findOne({ name: articleName });
    
        res.status(200).json(updatedArticleInfo);
    }, res);
});

app.post('/api/posts/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDB(async (db) => {
        const articleInfo = await db.collection('posts').findOne({ name: articleName });
        await db.collection('posts').updateOne({ name: articleName }, {
            '$set': {
                comments: articleInfo.comments.concat({ username, text }),
            },
        });
        const updatedArticleInfo = await db.collection('posts').findOne({ name: articleName });

        res.status(200).json(updatedArticleInfo);
    }, res);
});

// All requests that aren't caught by any of our other API routes should be passed on to our app (index.html).
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

const port = /*process.env.PORT ||*/ 8000;

app.listen(8000, () => console.log(`Server is running on port ${ port }.`));