const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5500;

app.use(cors());
app.use(bodyParser.json());

let alunos = [
  { nome: "João", curso: "Design Digital", ira: 8.5 },
  { nome: "Maria", curso: "Engenharia de Software", ira: 9.0 },
  // ...
];

// Listar alunos
app.get("/alunos", (req, res) => {
  res.json(alunos);
});

// Adicionar aluno
app.post("/alunos", (req, res) => {
  const novoAluno = req.body;
  alunos.push(novoAluno);
  res.status(201).json({ message: "Aluno criado com sucesso!" });
});

// Editar aluno
app.put("/alunos/:nome", (req, res) => {
  const nome = req.params.nome;
  const dadosAtualizados = req.body;

  const alunosIndex = alunos.findIndex((a) => a.nome === nome);
  if (alunosIndex === -1) {
    return res.status(404).json({ message: "Aluno não encontrado!" });
  }

  alunos[alunosIndex] = { ...alunos[alunosIndex], ...dadosAtualizados };
  res.json({ message: "Aluno atualizado com sucesso!" });
});

// Excluir aluno
app.delete("/alunos/:nome", (req, res) => {
  const nome = req.params.nome;
  const alunosIndex = alunos.findIndex((a) => a.nome === nome);
  if (alunosIndex === -1) {
    return res.status(404).json({ message: "Aluno não encontrado!" });
  }
  alunos.splice(alunosIndex, 1);
  res.json({ message: "Aluno excluído com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
