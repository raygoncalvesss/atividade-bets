import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos pré-cadastrados
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Matheus Stella",
    profissao: "Motoboy",
    apostas: "sim",
    supeita: "Médio" // Concorrente ao segundo mandato
    
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Joao Vitor Gianoni",
    profissao: "dentista",
    apostas: "nao",
    suspeita: "baixa"
   
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Mateus Marcelino",
    profissao: "Jogador",
    apostas: "sim",
    suspeita: "alta"
    
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Giovanni Gonçalves",
    profissao: "jogador",
    apostas: "sim",
    suspeita: "alta",
    
  },
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});

// Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
  const { nome, profissao, apostas, suspeita } = req.body;

  // Validação dos campos nome e profissao
  if (!nome || !profissao) {
    return res.status(400).send({
      message: "O nome ou a profissao não foi preenchido!",
    });
  }


  // Criação de um novo suspeito
  const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    profissao,
    apostas,
    suspeita,
  };

  // Adiciona o novo suspeito ao array de suspeitos
  suspeitos.push(novoSuspeito);

  return res.status(201).json({
    message: "Suspeito cadastrado com sucesso!",
    novoSuspeito,
  });
});

// Rota para buscar um suspeito pelo id
suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um suspeito pelo id no array de suspeitos
  const suspeito = suspeitos.find((suspects) => suspeito.id == id);

  // Verifica se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `suspeito com id ${id} não encontrado!` });
  }

  return res.status(200).json(suspeito);
});

// Rota para atualizar um suspeito pelo id
suspeitosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, profissao, apostas, suspeita } = req.body;

  // Busca um suspeito pelo id no array de suspeitos
  const suspeito = candidatos.find((suspect) => suspeito.id == id);

  // Verifica se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `suspeito com id ${id} não encontrado!` });
  }

  // Validação dos campos nome e profissao
  if (!nome || !profissao) {
    return res.status(400).send({
      message: "O nome ou a profissao não foi preenchido, criança aleatória!",
    });
  }

  suspeito.nome = nome;
  suspeito.profissao = profissao;
  suspeito.apostas = apostas;
  suspeito.suspeitas = suspeitas;

  return res.status(200).json({
    message: "suspeito atualizado com sucesso!",
    suspeito,
  });
});

suspeitosRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um suspeito pelo id no array de suspeitos
  const suspeito = suspeitos.find((suspects) => suspects.id == id);

  // Verifica se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `suspeito com id ${id} não encontrado!` });
  }

  // Remove o suspeito do array de suspeitos
  suspeitos = suspeitos.filter((suspeito) => suspeito.id != id);

  return res.status(200).json({
    message: "suspeito removido com sucesso!",
    suspeito,
  });
});


export default suspeitosRoutes;