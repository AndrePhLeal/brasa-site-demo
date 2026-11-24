// Edite este arquivo para personalizar o site do seu estabelecimento.
// Preencha os dados em CLIENTE e o visual em TEMA. Campos vazios podem ocultar seções.

const CLIENTE = {
  nome: "Lanchonete Sabor & Brasa",
  slogan: "Hambúrgueres artesanais, porções generosas e sabor de verdade.",
  sobre: "Somos uma lanchonete de bairro apaixonada por comida feita na hora. Selecionamos ingredientes frescos, preparamos cada pedido com carinho e criamos um ambiente acolhedor para você comer bem com a família e os amigos.",
  diferenciais: [
    { emoji: "🍔", texto: "Hambúrguer artesanal preparado na chapa na hora do pedido" },
    { emoji: "🥬", texto: "Ingredientes frescos e combinações pensadas com cuidado" },
    { emoji: "⚡", texto: "Atendimento rápido para almoço, lanche ou jantar" },
    { emoji: "🏠", texto: "Ambiente confortável para comer no local ou levar" }
  ],
  whatsapp: "5511999999999", // só números com DDI (ex.: 55 + DDD + número)
  telefone: "(11) 99999-9999",
  instagram: "saborbrasa", // apenas o usuário, sem @
  endereco: "Rua das Palmeiras, 123 - Centro, São Paulo - SP",
  mapa: "Rua das Palmeiras, 123 - Centro, São Paulo - SP", // endereço para o Google Maps
  horario: [
    { dia: "Segunda-feira", abre: "11:00", fecha: "22:00" },
    { dia: "Terça-feira", abre: "11:00", fecha: "22:00" },
    { dia: "Quarta-feira", abre: "11:00", fecha: "22:00" },
    { dia: "Quinta-feira", abre: "11:00", fecha: "22:00" },
    { dia: "Sexta-feira", abre: "11:00", fecha: "23:00" },
    { dia: "Sábado", abre: "12:00", fecha: "23:00" },
    { dia: "Domingo", abre: "", fecha: "" } // deixe vazio para "Fechado"
  ],
  hero: {
    imagem: "img/hero.jpg"
  },
  galeria: [
    { src: "img/galeria-1.jpg", alt: "Interior moderno da lanchonete" },
    { src: "img/galeria-2.jpg", alt: "Hambúrgueres gourmet servidos no ambiente" },
    { src: "img/galeria-3.jpg", alt: "Mesas e cadeiras em ambiente acolhedor" },
    { src: "img/galeria-4.jpg", alt: "Hambúrguer com batatas fritas" }
  ],
  produtos: [
    {
      nome: "Brasa Clássico",
      descricao: "Pão brioche, hambúrguer 160g, queijo prato, alface, tomate e molho da casa.",
      preco: "R$ 28,90",
      foto: "img/produto-burger.jpg",
      categoria: "Lanches"
    },
    {
      nome: "Cheddar Bacon",
      descricao: "Hambúrguer 160g com muito cheddar cremoso, bacon crocante e cebola caramelizada.",
      preco: "R$ 33,90",
      foto: "img/produto-burger.jpg",
      categoria: "Lanches"
    },
    {
      nome: "Batata Crocante",
      descricao: "Porção individual de batatas fritas sequinhas, servidas com maionese temperada.",
      preco: "R$ 14,90",
      foto: "img/produto-batata.jpg",
      categoria: "Porções"
    },
    {
      nome: "Onion Rings",
      descricao: "Anéis de cebola empanados e dourados, perfeitos para compartilhar.",
      preco: "R$ 18,90",
      foto: "img/produto-batata.jpg",
      categoria: "Porções"
    },
    {
      nome: "Milk-shake de Morango",
      descricao: "Cremoso, gelado e preparado com calda de morango e chantilly.",
      preco: "R$ 19,90",
      foto: "img/produto-milkshake.jpg",
      categoria: "Bebidas"
    },
    {
      nome: "Refrigerante Lata",
      descricao: "Diversos sabores gelados para acompanhar seu lanche.",
      preco: "R$ 6,00",
      foto: "img/produto-refrigerante.jpg",
      categoria: "Bebidas"
    },
    {
      nome: "Combo da Casa",
      descricao: "Brasa Clássico + batata crocante + bebida à sua escolha.",
      preco: "R$ 44,90",
      foto: "img/produto-combo.jpg",
      categoria: "Combos"
    }
  ],
  // Depoimentos de exemplo: substitua por avaliações reais dos seus clientes.
  depoimentos: [
    { nome: "Mariana S.", texto: "O melhor hambúrguer do bairro! Chegou quentinho e muito saboroso." },
    { nome: "Carlos A.", texto: "Atendimento rápido e porções bem servidas. Virou nosso lugar favorito." },
    { nome: "Juliana R.", texto: "Ambiente agradável e milk-shake maravilhoso. Recomendo demais!" }
  ],
  seo: {
    titulo: "Lanchonete Sabor & Brasa | Hambúrgueres artesanais",
    descricao: "Hambúrgueres artesanais, porções e combos em um ambiente acolhedor. Peça pelo WhatsApp ou venha nos visitar."
  }
};

const TEMA = {
  cores: {
    primaria: "#c2410c",   // cor principal (botões, destaques)
    secundaria: "#7c2d12", // cor de apoio
    destaque: "#f59e0b",   // detalhes e chamadas
    fundo: "#fffaf5",      // fundo do site
    texto: "#1f2937"       // cor do texto
  },
  fonte: {
    titulos: "Fraunces",   // fonte Google para títulos
    corpo: "Manrope"       // fonte Google para textos
  },
  estilo: "moderno",       // "moderno" | "elegante" | "divertido" | "minimalista"
  modo: "claro",           // "claro" | "escuro"
  arredondamento: "suave", // "reto" | "suave" | "redondo"
  animacao: "suave",       // "nenhuma" | "suave" | "dinamica" (movimento ao rolar)
  animacaoRepetir: true    // true | false (anima toda vez que entra na tela)
};
