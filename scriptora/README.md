# Scriptora

Um blog de tecnologia construído com Astro collections, Markdown e TypeScript. Você pode ver a demonstração ao vivo [aqui](https://scriptora-blog.vercel.app/).

![Banner - Scriptora](/readme_images/scriptora.png)

## Instalação

Instale as dependências

```sh
npm install
```

## 🧞 Comandos

Todos os comandos são executados a partir da raiz do projeto, em um terminal:

| Comando                   | Ação                                                   |
| :------------------------ | :----------------------------------------------------- |
| `npm install`             | Instala as dependências                                |
| `npm run dev`             | Inicia o servidor de desenvolvimento em `localhost:4321` |
| `npm run build`           | Compila o site de produção para `./dist/`             |
| `npm run preview`         | Pré-visualiza a build localmente antes de publicar     |
| `npm run astro ...`       | Executa comandos da CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Mostra ajuda da CLI do Astro                           |

## Criando Posts

Crie um novo arquivo `.md` na pasta `content/blog`. Adicione o frontmatter e o conteúdo.

Aqui está um exemplo de frontmatter:

```md
---
title: "Capturando os Momentos da Vida com a Excelência da Canon"
pubDate: 2025-07-28
author: "David Mitchell"
image: "image6.png"
tags: ["fotografia", "canon", "tecnologia"]
slug: excelencia-canon
---
```

Faça o upload da imagem para `/public/images` e pronto.
