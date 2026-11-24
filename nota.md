NOTA.md — Template de site para estabelecimentos (arquivo raiz)

Este é o arquivo-modelo de TODOS os sites. Ele define a estrutura, o padrão e as regras. A ideia de cada site específico fica no proposta.md da pasta dele. Não colocar aqui nada de um site em particular.

Como os arquivos se dividem
NOTA.md (este, na raiz): padrão e regras, vale para todo site.
proposta.md (na pasta de cada site): a ideia daquele site (conteúdo, visual, regras próprias). Em caso de conflito sobre conteúdo ou visual, vale o proposta.md; sobre estrutura e regras, vale este NOTA.md.
corrigir.md (na pasta de cada site): só é usado quando houver algo a corrigir. Lista numerada; o opencode aplica, move para "Aplicados" e registra no CHANGELOG.md. Se estiver vazio, ignorar.
Ordem de leitura ao criar ou alterar um site
NOTA.md (raiz) 2. proposta.md da pasta do site
corrigir.md, somente se houver itens pendentes ou se eu pedir.
Local
Matriz (arquivos principais): /home/abygail/SiteCode
Clientes: /home/abygail/SiteCode/clientes/<nome-do-cliente>/ (cópia da matriz)
Site da Foxel Tech: /home/abygail/SiteCode/Foxel-Tech/ (cópia da matriz, fora de clientes/)
Nunca colocar dado de cliente real na matriz.
Objetivo

Site de uma página, bonito, completo e profissional, que sirva para QUALQUER comércio local trocando só o cliente.js (conteúdo e TEMA).

Arquivos (na raiz de SiteCode)
index.html: template (HTML + CSS + JS, sem frameworks, sem npm, sem build). Lê tudo de cliente.js. Sem dado de cliente.
cliente.js: objetos CLIENTE (dados) e TEMA (visual).
img/: fotos de exemplo (placeholders se não houver imagens).
CHANGELOG.md: versão atual (começar em v1.0.0) e lista de patches.
RELATORIO.md: gerado no final de cada build.
Pasta clientes/ (vazia na matriz).
cliente.js — CLIENTE

nome, slogan, sobre, diferenciais[] (3-4 itens com emoji e texto), whatsapp (só números com DDI), telefone, instagram (usuário), endereco, mapa (endereço p/ Google Maps), horario (por dia da semana), fotos[], produtos[] (nome, descricao, preco, foto, categoria), depoimentos[] (opcional), rodape (texto; padrão "Site por Foxel Tech"), seo (título e descrição).

cliente.js — TEMA (o que o dono edita)
cores: primaria, secundaria, destaque, fundo, texto
fonte: títulos e corpo (Google Fonts)
estilo: "moderno" | "elegante" | "divertido" | "minimalista" (muda bordas, sombras, espaçamento e tipografia)
modo: "claro" | "escuro"
arredondamento: "reto" | "suave" | "redondo" Tudo via variáveis CSS. Mudar o TEMA muda o site inteiro.
Seções
Topo fixo com menu e botão WhatsApp
Hero (nome, slogan, botões WhatsApp e Instagram)
Sobre + diferenciais
Produtos com filtro por categoria
Galeria com ampliação (lightbox)
Depoimentos (só aparece se houver)
Horário com selo "Aberto agora / Fechado" automático
Localização com mapa e botão "Como chegar"
Contato (WhatsApp, telefone, Instagram)
Rodapé (texto de CLIENTE.rodape)
botão flutuante de WhatsApp
Requisitos
Mobile first, rápido, visual premium, animações suaves ao rolar.
SEO básico e Open Graph (prévia bonita no WhatsApp).
Seção sem dados não aparece.
Imagens com loading="lazy" e alt. Contraste ok (texto legível sobre cada cor de fundo), botões grandes.
Mostrar a versão do template num comentário no topo do index.html.
Nunca inventar dados do cliente (nome, telefone, clientes, depoimentos, endereço, números).
Estrutura padrão do proposta.md (cada site)
Ideia do site (objetivo, público, tom)
Pasta onde fica
Visual (valores do TEMA)
Conteúdo (campos do CLIENTE; o que está em [PREENCHER] fica como placeholder óbvio e vira pendência no relatório)
Seções que aparecem e as que ficam vazias
Ajustes ao template só para este site (se houver)
Regras próprias (o que não mencionar, etc.)
Regras (economizar tokens)
Não reler arquivos já lidos. Não criar arquivos além dos listados.
Pode perguntar se faltar algo essencial: UMA mensagem só, perguntas curtas e agrupadas. Se não for essencial, decidir sozinho.
Testar abrindo o index.html uma vez; corrigir só o que quebrar.
Em patches futuros: alterar só o necessário, subir a versão e registrar no CHANGELOG.md.
Relatório final (RELATORIO.md na pasta do site, máx. 20 linhas)
O que foi criado (arquivos e caminhos)
Pendências ([PREENCHER] e limitações)
Como criar um cliente novo (copiar a matriz para clientes/<nome>/, criar o proposta.md e editar o cliente.js)
Como mudar cores e estilo (campos do TEMA)
Como testar no celular
Como publicar (GitHub Pages, Netlify ou Cloudflare Pages)
Como lançar patches (versão + CHANGELOG) Depois, responder no chat só com 3 linhas e o caminho do relatório.
