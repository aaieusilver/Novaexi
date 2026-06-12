# Novaexi — Homepage institucional + MVP

Aplicação demonstrativa da Novaexi para apresentação acadêmica, pitch e validação de produto.

## Stack

- Vite 8
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui com componentes locais
- Radix UI
- Lucide Icons
- React Router com `HashRouter`

## Rotas

- Homepage: `https://aaieusilver.github.io/Novaexi/`
- MVP: `https://aaieusilver.github.io/Novaexi/#/mvp`

O `HashRouter` evita erros 404 em rotas internas do GitHub Pages.

## Conteúdo

### Homepage institucional

- problema de mercado;
- tese de agregação territorial;
- públicos conectados;
- fluxo operacional;
- portfólio da Novaexi;
- tese de impacto;
- entrada direta no MVP.

### MVP

- dashboard territorial;
- catálogo de áreas;
- empresas demandantes;
- consórcios territoriais;
- monitoramento;
- Eco Plus;
- pré-match territorial;
- calculadora de consórcio;
- intensidade de restauração;
- Receita Nativa;
- cenário de impacto ESG.

Todos os dados, custos, empresas, áreas e indicadores são simulados.

## Executar localmente

Requer Node.js 22.12 ou superior.

```bash
npm ci --include=dev
npm run dev
```

## Validar antes do deploy

```bash
npm run check
```

Esse comando executa lint, verificação TypeScript e build de produção.

## Publicação no GitHub Pages

O repositório contém o workflow:

```text
.github/workflows/deploy.yml
```

No GitHub:

1. Abra `Settings > Pages`.
2. Em `Source`, selecione `GitHub Actions`.
3. Envie os arquivos deste projeto para a branch `main`.
4. Acompanhe `Actions > Deploy Novaexi to GitHub Pages`.
5. Quando o workflow ficar verde, atualize a página com `Ctrl + F5`.

O workflow instala também as dependências de desenvolvimento, valida o projeto, gera a pasta `dist` e publica o artefato correto.

## Configuração do caminho

O arquivo `vite.config.ts` possui:

```ts
base: "/Novaexi/"
```

Caso o nome do repositório mude, esse valor também deve ser atualizado.

## Segurança da comunicação

O protótipo realiza pré-triagens demonstrativas. Ele não substitui:

- projeto técnico;
- responsabilidade profissional;
- análise de Direito Ambiental;
- enquadramento do instrumento legal;
- aprovação do órgão ambiental competente.
