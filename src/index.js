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
  
    const isUser = users.find((user) => user.username === user);
    if (isUser) {
      res.send("Usuário já exite! Por favor, insira outro usuário!");
      return;
    }
    users.push({username, avatar});
    console.log(users)
    res.status(201).send("Cadastro realizado com sucesso!");
  });
  
app.listen(5000, () => console.log("Server running on port 5000"))