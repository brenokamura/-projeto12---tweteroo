import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body;
    
    if (!username) {
      res.status(400).send("Preencha o campo Nome do usuário!");
      return;
    } else {
    } if (!avatar) {
      res.status(400).send("Insira o link do seu avatar!");
      return;
    }
  
    const isUser = users.find((user) => user.username === username);
    if (isUser) {
      res.status(409).send("Usuário já exite! Por favor, insira outro usuário!");
      return;
    }
    users.push({username, avatar});
    console.log(users)
    res.status(201).send("Cadastro realizado com sucesso!");
  });
  
  app.post('/tweets', (req, res) => {
    const { username } = req.headers;
    const { tweet } = req.body;
    
    if (!username) {
      res.status(400).send("O campo Nome do usuário deve estar preenchido!");
      return;
    } else {
    } if (!tweet) {
      res.status(400).send("Preencha o campo Tweet!");
      return;
    }
  
    tweets.push({ username, tweet});
    console.log(tweets);
    res.status(201).send("Tweet postado com sucesso!");
  });


  app.get('/tweets', (req, res) => {
    tweets.forEach((tweet) => {
      const { avatar } = users.find((user) => user.username === tweet.username);
      tweet.avatar = avatar;
    });
    res.send(tweets.slice(-10));
  });


app.listen(5000, () => console.log("Server running on port 5000"))