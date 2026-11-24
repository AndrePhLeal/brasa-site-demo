15. Reveal repetível: os elementos animam toda vez que entram na tela e
    voltam ao estado escondido quando saem (nos dois sentidos da rolagem).
    - Manter o IntersectionObserver ativo (não dar unobserve); alternar a
      classe ao entrar e ao sair.
    - Ao sair, resetar sem animação visível (o elemento já está fora da tela).
    - Sensível à direção: rolando para baixo, entra de baixo (subindo);
      rolando para cima, entra de cima (descendo).
    - Evitar piscar: threshold ~0.15 e rootMargin negativo embaixo (~-8%),
      para só esconder quando estiver bem fora da tela.
    - Seções muito altas: observar os cards/títulos internos, não o bloco inteiro.
    - Grades: manter o atraso escalonado (~80ms) a cada entrada.
    - Só transform e opacity; respeitar prefers-reduced-motion.
    - Novo campo TEMA.animacaoRepetir: true | false (padrão true).
      Com false, volta ao comportamento de uma vez só.
    - Se o JS falhar, o conteúdo continua visível.
    - O hero e o topo da página não escondem (ficam sempre visíveis).
