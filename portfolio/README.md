<h1 align="center">
    Portfólio - Alan Ryan
</h1>

<div align="center">

![Maintenance](https://img.shields.io/maintenance/yes/2025?style=for-the-badge)
![License MIT](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-completed-brightgreen?style=for-the-badge)

</div>

## 📖 Descrição

Um portfólio pessoal construído com Astro, TypeScript e collections para gerenciar projetos. Esta versão utiliza componentes Astro/React, imagens otimizadas com `astro:assets` e conteúdo organizado em `src/content/projects`.

## Demonstração

Localmente, execute o servidor de desenvolvimento (veja abaixo). Não há uma URL pública ligada automaticamente neste repositório.

## Instalação

Instale dependências a partir da raiz do workspace do `portfolio`:

```bash
npm install
```

## 🧞 Scripts úteis

Execute os comandos a partir da pasta `portfolio` (ou ajuste seu terminal para esse diretório):

| Comando                   | Ação                                                     |
| :------------------------ | :------------------------------------------------------- |
| `npm install`             | Instala as dependências                                  |
| `npm run dev`             | Inicia o servidor de desenvolvimento em `localhost:4321` |
| `npm run build`           | Compila o site de produção para `./dist/`                |
| `npm run preview`         | Pré-visualiza a build localmente antes de publicar       |
| `npm run astro ...`       | Executa comandos da CLI como `astro add`, `astro check`  |
| `npm run astro -- --help` | Mostra ajuda da CLI do Astro                             |

## Estrutura de conteúdo (projects)

Este projeto usa Astro Collections para armazenar projetos em `src/content/projects` como arquivos JSON. Cada entrada segue a coleção `projects` e referencia imagens em `src/content/projects/images/`.

Exemplo mínimo de entrada (JSON):

```json
{
  "id": "project-1",
  "title": "Nome do Projeto",
  "client": "Cliente X",
  "work": "Design / Frontend",
  "mainImage": "./images/project-1.jpg",
  "otherImages": ["./images/project-1-2.jpg"],
  "storyTitle": "O Desafio",
  "storyContent": "Descrição do projeto...",
  "dayOneTitle": "Primeiros passos",
  "dayOneContent": "Como começamos..."
}
```

Adicione as imagens na pasta `src/content/projects/images` e os metadados como acima.

## Tipagem e componentes

O projeto usa `CollectionEntry<'projects'>` (via `astro:content`) para tipar entradas e `astro:assets` para otimizar imagens. Componentes relevantes ficam em `src/components` e seções reutilizáveis em `src/sections`.

## Rodando checagens locais

Rode o TypeScript/ASTRO check:

```bash
npx astro check
npx tsc --noEmit
```

---

## 👤 Sobre o Desenvolvedor

<div align="center">

<table>
  <tr>
    <td align="center">
        <br>
        <a href="https://github.com/0nF1REy" target="_blank">
          <img src="../readme_images/alan-ryan.jpg" height="160" alt="Foto de Alan Ryan" style="border-radius:50%;border:3px solid #0077B5;">
        </a>
        </p>
        <a href="https://github.com/0nF1REy" target="_blank">
          <strong>Alan Ryan</strong>
        </a>
        </p>
        ☕ Peopleware | Tech Enthusiast | Code Slinger ☕
        <br>
        Apaixonado por código limpo, arquitetura escalável e experiências digitais envolventes
        </p>
          Conecte-se comigo:
        </p>
        <a href="https://www.linkedin.com/in/alan-ryan-b115ba228" target="_blank">
          <img src="https://img.shields.io/badge/LinkedIn-Alan_Ryan-0077B5?style=flat&logo=linkedin" alt="LinkedIn">
        </a>
        <a href="https://gitlab.com/alanryan619" target="_blank">
          <img src="https://img.shields.io/badge/GitLab-@0nF1REy-FCA121?style=flat&logo=gitlab" alt="GitLab">
        </a>
        <a href="mailto:alanryan619@gmail.com" target="_blank">
          <img src="https://img.shields.io/badge/Email-alanryan619@gmail.com-D14836?style=flat&logo=gmail" alt="Email">
        </a>
        </p>
    </td>
  </tr>
</table>

</div>

---

## 📫 Contribuir

Contribuições são muito bem-vindas! Se você deseja contribuir com o projeto, por favor, siga estes passos:

1.  **Faça um Fork** do repositório.

2.  **Crie uma nova Branch** para sua feature ou correção:

    ```bash
    git checkout -b feature/nome-da-feature
    ```

3.  **Faça suas alterações** e realize o commit:

    ```bash
    git commit -m "feat: Adiciona nova feature"
    ```

4.  **Envie suas alterações** para o seu fork:

    ```bash
    git push origin feature/nome-da-feature
    ```

5.  **Abra um pull request** para a branch `main` do repositório original.

## 📚 Recursos Adicionais

- **<a href="https://www.atlassian.com/br/git/tutorials/making-a-pull-request" target="_blank">📝 Como criar um Pull Request</a>**

- **<a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank">💾 Padrão de Commits Convencionais</a>**

## 📜 Licença

Este projeto está sob a **licença MIT**. Consulte o arquivo **[LICENSE](LICENSE)** para obter mais detalhes.

> ℹ️ **Aviso de Licença:** © 2025 Alan Ryan da Silva Domingues. Este projeto está licenciado sob os termos da licença MIT. Isso significa que você pode usá-lo, copiá-lo, modificá-lo e distribuí-lo com liberdade, desde que mantenha os avisos de copyright.

⭐ Se este repositório foi útil para você, considere dar uma estrela!
