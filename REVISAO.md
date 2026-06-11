# Revisão técnica — versão 3.1

## Correções de build e deploy

- dependências fixadas em versões exatas;
- `package-lock.json` sem registro interno;
- instalação explícita das dependências de desenvolvimento;
- Node.js 22 no GitHub Actions;
- workflow atualizado para as versões atuais das actions;
- alias do Vite compatível com módulos ESM;
- tipos do Node declarados no TypeScript;
- `base` validado para `/Novaexi/`;
- build de produção validado localmente.

## Revisão de interface e experiência

- navegação da homepage corrigida para coexistir com `HashRouter`;
- botões com tipo seguro por padrão;
- diálogos e barras de progresso com melhorias de acessibilidade;
- menu mobile com rótulos e estados ARIA;
- foco visível para navegação por teclado;
- ações de áreas, consórcios e Eco Plus agora têm fluxo demonstrativo;
- estado vazio no catálogo de áreas;
- manifesto de aplicativo e metadados sociais;
- linguagem de pré-match e simulação preservada.

## Testes realizados

```text
npm run lint       OK
npm run typecheck  OK
npm run build      OK
```

Saída validada em `dist/` com caminhos de assets iniciando em `/Novaexi/`.
