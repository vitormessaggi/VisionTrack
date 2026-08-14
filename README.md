<readme>
# 📸 Vision Track

Este repositório contém o código-fonte do **Vision Track**, uma plataforma completa para gerenciamento, publicação e busca de imagens, atuando como um catálogo especializado em **hardwares de PC**. A aplicação foi construída com foco em segurança, manutenibilidade e conteinerização.

## 🚀 Funcionalidades

- **Gestão de Acesso:** Cadastro de novos usuários e autenticação segura.
- **Upload de Imagens:** Envio de arquivos (PNG, JPEG, GIF) com validações automáticas de formato e tamanho para o catálogo de hardware.
- **Galeria Interativa:** Exibição de imagens em formato de galeria, com suporte à visualização em tamanho real das peças.
- **Busca Avançada:** Pesquisa eficiente de imagens de hardware por nome, tag ou extensão.
- **Notificações:** Feedback visual em tempo real para as ações do usuário.

---

## 📋 Especificações do Sistema

### 🔹 Requisitos Funcionais (RF)

| ID | Descrição |
| :--- | :--- |
| **RF01** | O sistema deve permitir que um visitante crie uma conta informando nome, e-mail e senha. |
| **RF02** | O sistema deve impedir o cadastro de um e-mail já existente. |
| **RF03** | O sistema deve permitir que um usuário cadastrado se autentique com e-mail e senha. |
| **RF04** | O sistema deve emitir um token de acesso (JWT) após autenticação bem-sucedida. |
| **RF05** | O sistema deve permitir que o usuário autenticado encerre sua sessão. |
| **RF06** | O sistema deve permitir que o usuário autenticado publique uma nova imagem, informando nome, tags e arquivo. |
| **RF07** | O sistema deve validar o formato (PNG, JPEG, GIF) e o tamanho do arquivo antes do envio. |
| **RF08** | O sistema deve permitir que o usuário pesquise imagens por nome, por tag e/ou por extensão. |
| **RF09** | O sistema deve exibir as imagens encontradas em formato de galeria, com nome, extensão, tamanho e data de upload. |
| **RF10** | O sistema deve permitir a visualização da imagem em tamanho real a partir da miniatura. |
| **RF11** | O sistema deve notificar o usuário sobre sucesso ou falha de cada operação realizada. |

### 🔹 Requisitos Não-Funcionais (RNF)

| ID | Categoria | Descrição |
| :--- | :--- | :--- |
| **RNF01** | Segurança | Senhas devem ser armazenadas com hash (BCrypt); nunca em texto plano. |
| **RNF02** | Segurança | Operações de escrita (publicar imagem) exigem token JWT válido no cabeçalho `Authorization`. |
| **RNF03** | Confiabilidade | A sessão do usuário deve expirar automaticamente 60 minutos após a emissão do token. |
| **RNF04** | Usabilidade | O sistema deve fornecer feedback visual (indicador de carregamento e notificações) durante operações assíncronas. |
| **RNF05** | Portabilidade | O sistema deve ser executável em qualquer ambiente com suporte a Docker, com front-end, back-end e banco isolados em containers. |
| **RNF06** | Interoperabilidade| O back-end deve expor uma API REST stateless, consumida via JSON e `multipart/form-data`. |
| **RNF07** | Manutenibilidade | O back-end deve manter separação em camadas (domínio, aplicação, infraestrutura), permitindo evolução incremental do sistema ao longo do semestre. |

---

## 🛠️ Arquitetura e Tecnologias

- **Backend:** API RESTful Stateless.
- **Arquitetura:** Separação em camadas (Domínio, Aplicação e Infraestrutura) garantindo alta manutenibilidade (RNF07).
- **Segurança:** Autenticação via JWT (JSON Web Token) com expiração de 1 hora e criptografia de senhas utilizando BCrypt.
- **Comunicação:** Consumo de dados via `JSON` e upload de arquivos utilizando `multipart/form-data`.
- **Infraestrutura:** Totalmente conteinerizado com **Docker**, operando com containers separados para Front-end, Back-end e Banco de Dados.

## ⚙️ Como Executar (Docker)

*(Adicione aqui as instruções para subir os containers, por exemplo: `docker-compose up -d`)*

</readme>
