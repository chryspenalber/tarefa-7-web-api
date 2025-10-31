# 🏠 Preenchimento de Endereço | Desenvolvido por Chrys Penalber

Este projeto é uma tarefa prática do curso de **Engenheiro Front-End da EBAC**.
O objetivo foi desenvolver um **formulário inteligente de preenchimento de endereço** utilizando **HTML, CSS e JavaScript puro**, com integração à **API ViaCEP** e **armazenamento local via LocalStorage**.

---

## 🔗 Links

* 🔴 [Live Site](https://chryspenalber.github.io/tarefa-7/)
* 💻 [Repositório no GitHub](https://chryspenalber.github.io/tarefa-7-web-api/)

---

## 📐 Visão Geral

O projeto permite que o usuário insira o **CEP** e tenha automaticamente os campos de **logradouro, bairro, cidade e estado** preenchidos com base nas informações retornadas pela **API ViaCEP**.
Além disso, os dados digitados são **armazenados localmente** no navegador, garantindo que o usuário não perca suas informações ao atualizar a página.

### Funcionalidades:

* Preenchimento automático dos campos de endereço via **API ViaCEP**
* Armazenamento de dados com **LocalStorage**
* Restauração automática dos dados ao recarregar a página
* Validação simples para o campo de CEP
* Botão para **limpar os dados e o armazenamento local**
* Interface limpa, centralizada e intuitiva

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** — Estrutura semântica do formulário
* **CSS3 com flexbox** — Layout responsivo e estilização moderna
* **JavaScript (ES6)** — Manipulação do DOM, integração com API e uso de LocalStorage
* **API ViaCEP** — Busca automática de endereços a partir do CEP informado

---

## 📲 Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela, garantindo boa legibilidade e usabilidade em dispositivos **desktop** e **mobile**.

Técnicas aplicadas:

* Layout flexível com `flexbox`
* Tamanhos proporcionais e fontes responsivas
* Botões acessíveis com `hover` e `focus` states

---

## 💡 O que foi explorado neste projeto

* Consumo de **API externa (ViaCEP)** com `fetch()` e `Promise`
* Manipulação do **LocalStorage** com `setItem()`, `getItem()` e `removeItem()`
* Uso de **event listeners** (`load`, `blur`, `click`, `input`)
* Conversão e tratamento de dados JSON com `JSON.stringify()` e `JSON.parse()`
* Organização do código e boas práticas de separação de responsabilidades

---

## 📚 Recursos úteis

* [ViaCEP API - Documentação Oficial](https://viacep.com.br/)
* [MDN Web Docs — Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
* [MDN Web Docs — Window.localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)

---

## 👩‍💻 Autora

* GitHub — [@chryspenalber](https://github.com/chryspenalber)
* LinkedIn — [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)
