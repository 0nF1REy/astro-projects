<h1 align="center">
   Astro Projects
</h1>

<div align="center">

![Maintenance](https://img.shields.io/maintenance/yes/2025?style=for-the-badge)
![License MIT](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

</div>

## 📖 Descrição

Este repositório reúne projetos desenvolvidos com [Astro](https://astro.build/), um framework moderno para criação de sites estáticos e aplicações web rápidas. Cada projeto demonstra diferentes abordagens de design, organização de código e funcionalidades interativas, oferecendo exemplos práticos de como usar Astro em situações reais.

Atualmente, há um projeto de landing page que inclui componentes interativos e layouts responsivos, seguindo boas práticas de desenvolvimento front-end e arquitetura escalável. Este repositório também pode servir como referência para quem deseja aprender Astro, explorar padrões de design e entender como estruturar projetos de forma clara e organizada.

## 🚀 Projetos

### 🧪 Astro Sample

**📁 Pasta:** `astro-sample/`  
**🎯 Descrição:** Projeto de exemplo e experimentação com Astro, demonstrando a integração entre componentes React e Astro, uso de Tailwind CSS e estruturação básica de um projeto web moderno.

![Banner - Astro Sample](/readme_images/astro-sample.png)

#### ✨ Funcionalidades

- **⚛️ Componentes React:** Integração fluida entre componentes React e Astro
- **🎨 Tailwind CSS:** Framework de CSS utilitário para estilização rápida
- **📄 Múltiplas Páginas:** Sistema de roteamento baseado em arquivos
- **🔧 Utilitários TypeScript:** Funções auxiliares com tipagem forte
- **📊 Consumo de APIs:** Exemplo de fetch de dados externos
- **📁 Organização Modular:** Estrutura bem definida de componentes e layouts

#### 🛠️ Tecnologias Utilizadas

- **Framework:** Astro 5.14.1
- **UI Library:** React 19.1.1
- **Estilização:** Tailwind CSS 4.1.13
- **Tipagem:** TypeScript
- **Build Tool:** Vite (integrado ao Astro)

#### 📂 Estrutura do Projeto

```
src/
├── components/
├── data/
├── layouts/
├── lib/
├── pages/
└── styles/
```

#### 🔬 Recursos Demonstrados

- **Hidratação Seletiva:** Uso de `client:only` para componentes React
- **Fetch de Dados:** Requisições a APIs externas no server-side
- **Roteamento Automático:** Sistema de páginas baseado em estrutura de arquivos
- **Layouts Reutilizáveis:** Template base para consistência visual
- **Integração de Dados:** Consumo de arquivos JSON locais
- **Scripts Client-side:** Execução de JavaScript no navegador

#### 🎨 Características Técnicas

- **SSG (Static Site Generation):** Geração estática para performance otimizada
- **Componentes Híbridos:** Mistura de componentes Astro e React
- **TypeScript First:** Tipagem forte em todo o projeto
- **CSS Moderno:** Uso de Tailwind para desenvolvimento ágil
- **Arquitetura Limpa:** Separação clara entre dados, lógica e apresentação

---

### 🎭 ATARASHII GAKKO! Landing Page

**📁 Pasta:** `atarashii-gakko/`  
**🎯 Descrição:** Clone da landing page oficial do grupo japonês ATARASHII GAKKO!, apresentando sua discografia mais recente, datas da turnê mundial e cadastro de newsletter.

![Banner - Atarashii Gakko](/readme_images/atarashii-gakko.png)

#### ✨ Funcionalidades

- **🎵 Seção de Discografia:** Exibição visual dos álbuns e singles mais recentes
- **🌍 Datas da Turnê Mundial:** Lista interativa de shows com informações de venues
- **📧 Newsletter:** Sistema de cadastro para receber atualizações
- **📱 Design Responsivo:** Otimizado para dispositivos móveis e desktop
- **🎨 Interface Moderna:** Uso de SCSS para estilização avançada

#### 🛠️ Tecnologias Utilizadas

- **Framework:** Astro 5.14.1
- **Estilização:** SCSS/Sass
- **Ícones:** FontAwesome
- **Deploy:** Vercel (configurado)
- **Tipagem:** TypeScript

#### 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── discography/
│   ├── hero/
│   ├── newsletter/
│   ├── tour/
│   └── social-nav/
├── layouts/
├── pages/
├── scripts/
└── styles/
```

#### 🎨 Recursos de Design

- **Tipografia Customizada:** Fontes Bebas Neue, Courier e Roboto Mono
- **Paleta de Cores:** Baseada na identidade visual do grupo
- **Componentes Modulares:** Arquitetura componentizada para fácil manutenção
- **Animações Sutis:** Interações visuais aprimoradas

---

### 🛒 Product Management

**📁 Pasta:** `product-management/`  
**🎯 Descrição:** Sistema completo para cadastro, edição e listagem de produtos, com autenticação de usuários e integração ao Firebase. O projeto utiliza Astro com React, SCSS modular, tipagem TypeScript e layout centralizado, focando em boas práticas de UX e arquitetura escalável.

![Banner - Product Management](/readme_images/product-management.png)

#### ✨ Funcionalidades

- **🔐 Autenticação:** Login e registro de usuários com Firebase Auth
- **📦 Cadastro de Produtos:** Adição, edição e remoção de produtos
- **📋 Listagem Dinâmica:** Visualização dos produtos cadastrados
- **🎨 SCSS Modular:** Estilos organizados por componente e variáveis globais
- **⚛️ Componentes React:** Formulários e listas interativos com tipagem forte
- **🗄️ Integração com Firebase:** Persistência dos dados dos produtos e usuários
- **🖌️ Identidade Visual:** Logotipo próprio e fontes customizadas

#### 🛠️ Tecnologias Utilizadas

- **Framework:** Astro 5.14.1
- **UI Library:** React 19.1.1
- **Estilização:** SCSS/Sass modular
- **Autenticação & Banco:** Firebase
- **Tipagem:** TypeScript
- **Deploy:** Vercel (configurado)

#### 📂 Estrutura do Projeto

```
src/
├── assets/
├── components/
├── layouts/
├── lib/
├── pages/
└── styles/
    └── components/
```

#### 🧩 Recursos Demonstrados

- **Autenticação com Firebase:** Fluxo completo de login e registro
- **CRUD de Produtos:** Adicionar, editar, remover e listar produtos
- **Layout Centralizado:** Template global para todas as páginas
- **SCSS com Variáveis:** Design tokens centralizados para cores, fontes e espaçamentos
- **Componentização:** Separação clara entre lógica, apresentação e dados
- **Deploy Vercel:** Pronto para publicação com adapter configurado

#### 🎨 Características Técnicas

- **TypeScript First:** Tipagem forte em todo o projeto
- **SCSS Modular:** Estilos organizados por componente
- **Arquitetura Limpa:** Separação entre dados, lógica e apresentação
- **Identidade Visual:** Logotipo próprio e fontes customizadas

---

### 📝 Scriptora

**📁 Pasta:** `scriptora/`  
**🎯 Descrição:** Blog e site de conteúdo construído com Astro, focado em publicação de artigos usando as Content Collections do Astro. O projeto reúne um conjunto de componentes reutilizáveis (cards, navbar, busca, paginação), uma API simples de busca (serverless) e uma organização de conteúdo em Markdown para facilitar criação e manutenção editorial.

![Banner - Scriptora](/readme_images/scriptora/scriptora.png)

#### ✨ Funcionalidades

- **📰 Gestão de Conteúdo:** Conteúdos em Markdown organizados em `src/content/blog/` com metadados (tags, data, autor)
- **🔎 Busca Local:** Endpoint de busca (`src/pages/api/search.json.ts`) para pesquisar artigos
- **🏷️ Tags & Páginas de Tag:** Filtragem por tags e listagem de artigos por tag
- **📄 Páginas de Artigo Dinâmicas:** Roteamento para artigos em `src/pages/articles/[...slug].astro`
- **🧩 Componentes Reutilizáveis:** `ArticleCard`, `SearchForm`, `Pagination`, `Navbar`, `Tags`
- **📸 Gestão de Imagens:** Pastas de imagens públicas e otimização via integração com o pipeline de build do Astro
- **📱 Responsividade:** Layouts e componentes otimizados para mobile e desktop

#### 🛠️ Tecnologias Utilizadas

- **Framework:** Astro
- **Estilização:** Tailwind CSS  
- **Tipagem:** TypeScript  
- **Deploy:** Vercel
- **Conteúdo:** Astro Content Collections (Markdown)

#### 📂 Estrutura do Projeto

```
src/
├── components/
├── content/
│   └── blog/
├── layouts/
├── pages/
│   └── articles/
└── assets/
```

#### 🔬 Recursos Demonstrados

- **Uso de Content Collections:** Organização editorial via `src/content` com frontmatter e metadados
- **Geração Estática com buscas server-side:** Combina SSG com um endpoint de busca para melhor UX
- **Componentização do front-end:** Cards, listas e formulários reutilizáveis que facilitam escalabilidade
- **Integração com Vercel:** Output otimizado para deploy e funções servidoras (serverless)

#### 🎨 Características Técnicas

- **SSG & ISR:** Conteúdo estático com possibilidade de atualização incremental dependendo do fluxo de publicação
- **Arquitetura orientada a conteúdo:** Separação clara entre conteúdo (Markdown) e apresentação (Astro components)
- **Performance-first:** Tailwind + Astro para pages leves e rápido Time-to-First-Byte
- **Experiência editorial:** Fluxo simples para adicionar novos posts via Markdown

---

## 👤 Sobre o Desenvolvedor

<div align="center">

<table>
  <tr>
    <td align="center">
        <br>
        <a href="https://github.com/0nF1REy" target="_blank">
          <img src="./readme_images/alan-ryan.jpg" height="160" alt="Foto de Alan Ryan" style="border-radius:50%;border:3px solid #0077B5;">
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
