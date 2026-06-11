# Novaexi — Homepage + MVP React

Plataforma demonstrativa da startup Novaexi, desenvolvida para pitch acadêmico e validação de produto.

## Stack

- Vite 8
- React
- TypeScript
- Tailwind CSS 4
- shadcn/ui (estrutura e componentes locais)
- Radix UI
- Lucide Icons
- React Router com `HashRouter`, compatível com GitHub Pages

## Estrutura do produto

### Homepage institucional

Explica:

- problema de mercado;
- tese da Novaexi;
- públicos conectados;
- fluxo operacional;
- produtos e modalidades;
- tese de impacto;
- chamada para entrada no MVP.

### MVP

A rota `#/mvp` contém:

- dashboard territorial;
- catálogo de áreas;
- empresas demandantes;
- consórcios territoriais;
- monitoramento;
- Eco Plus;
- ferramentas interativas.

### Ferramentas

1. Pré-match territorial
2. Calculadora de consórcio
3. Classificador de intensidade de restauração
4. Receita Nativa
5. Estimador de indicadores ESG e operacionais

Os cálculos são demonstrativos e não substituem projeto técnico, enquadramento jurídico ou aprovação ambiental.

## Executar localmente

```bash
npm install
npm run dev
```

## Validar produção

```bash
npm run lint
npm run build
npm run preview
```

## Publicar no GitHub Pages

O projeto já contém `.github/workflows/deploy.yml`.

1. Substitua os arquivos da raiz do repositório `aaieusilver/Novaexi` pelos arquivos deste projeto.
2. Faça commit e push na branch `main`.
3. No GitHub, abra **Settings > Pages**.
4. Em **Source**, selecione **GitHub Actions**.
5. Acompanhe o workflow na aba **Actions**.

A URL continuará sendo:

```text
https://aaieusilver.github.io/Novaexi/
```

## Ajuste para outro repositório

O arquivo `vite.config.ts` usa:

```ts
base: "/Novaexi/"
```

Se o nome do repositório mudar, altere esse valor para `/<novo-repositorio>/`.

## Observação

Todos os dados, empresas, projetos, editais, custos e indicadores são simulados para fins de demonstração.
