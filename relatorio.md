# Relatório — Template de Site (v1.0.0)
1. **Criado:** `/home/abygail/SiteCode/index.html`, `/home/abygail/SiteCode/cliente.js`, `/home/abygail/SiteCode/CHANGELOG.md`, `/home/abygail/SiteCode/RELATORIO.md`, `/home/abygail/SiteCode/img/` (SVGs de exemplo) e `/home/abygail/SiteCode/clientes/` (vazia).
2. **Novo cliente:** copie a matriz para `/home/abygail/SiteCode/clientes/<nome-do-cliente>/` e edite apenas o `cliente.js` (nunca altere dados reais na matriz).
3. **Cores e estilo:** em `TEMA` ajuste `cores` (primaria, secundaria, destaque, fundo, texto), `fonte.titulos/corpo` (Google Fonts), `estilo` (moderno/elegante/divertido/minimalista), `modo` (claro/escuro) e `arredondamento` (reto/suave/redondo).
4. **Testar no celular:** na pasta do site rode `python3 -m http.server 8000`, conecte o celular à mesma rede e acesse `http://IP_DO_PC:8000`; ou envie a pasta/ZIP e abra o `index.html`.
5. **Publicar:** GitHub Pages (envie os arquivos ao repositório e ative Pages na branch/pasta) ou Netlify (arraste a pasta do cliente em Deploy manual). Mantenha `cliente.js` e `img/` juntos.
6. **Patches:** altere só o necessário na matriz, atualize o comentário de versão no topo do `index.html`, incremente a versão e registre as mudanças no `CHANGELOG.md`; depois copie para os clientes que precisarem.
7. **Limitações/pendências:** prévia Open Graph depende do crawler (conteúdo é preenchido via JS); mapa usa embed do Google (requer internet); status "Aberto agora" usa o relógio do dispositivo; revisar contraste/fotos ao trocar o `TEMA`/imagens reais.
