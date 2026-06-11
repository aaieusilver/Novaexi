# Novaexi — Protótipo HTML

Protótipo estático e responsivo da plataforma Novaexi, desenvolvido em HTML, CSS e JavaScript puro.

## Recursos demonstrados

- Dashboard territorial
- Catálogo de áreas
- Cadastro simulado de empresas e produtores
- Consórcios territoriais
- Receita Nativa interativa
- PSA e editais
- Eco Plus
- Monitoramento de projetos
- Busca e filtros
- Layout responsivo

## Executar localmente

Abra o arquivo `index.html` diretamente no navegador.

Para testar com servidor local:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub, por exemplo `novaexi-prototipo`.
2. Envie os arquivos `index.html`, `styles.css`, `app.js` e `README.md` para a raiz do repositório.
3. No GitHub, abra `Settings` > `Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Selecione a branch `main` e a pasta `/root`.
6. Salve. O endereço será semelhante a:

```text
https://SEU-USUARIO.github.io/novaexi-prototipo/
```

## Estrutura

```text
novaexi-prototype/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Observação

Os dados são simulados para fins acadêmicos e de demonstração. O protótipo não substitui análise jurídica, técnica, licenciamento ou validação por órgão ambiental competente.
