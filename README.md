# Projeto

Este projeto consiste em um aplicativo (APP) que renderiza estatísticas recebidas da API em três tipos de gráficos.

<details>
<summary><strong> ⚠️ Configurações mínimas para execução do projeto</strong></summary><br />

Para executar o projeto em sua máquina, é necessário ter o Node.js na versão 16.14.0 instalado.

---

## Instalação do Node.js

Você pode utilizar o NVM (Node Version Manager) para instalar o Node.js. Siga as instruções abaixo:

1. Instale o NVM, caso ainda não tenha:
   - [Instruções de instalação do NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
2. Instale a versão 16.14.0 LTS do Node.js e defina como padrão:
   ```bash
   nvm install 16.14 --lts
   nvm use 16.14
   nvm alias default 16.14
   ```

---

</details>

<details>
  <summary>
    <strong>🚀 Instalação e execução</strong>
  </summary><br>

1. Abra o terminal ou prompt de comando

2. Navegue até a pasta onde deseja clonar o repositório

3. Clone o repositório

- ```bash
  git clone git@github.com:kadraknb/Manfing.git
  ```

4. Aguarde o processo de clonagem ser concluído

5. Após o processo de clonagem ser concluído, navegue até a pasta do projeto clonado digitando o comando:

- ```bash
  cd Manfing
  ```

6. Inicializar o projeto

- ```bash
  npm start
  ```

7. Acesso do projeto

- http://localhost:8080

---

</details>

<details>
<summary><strong>🏗️ Estrutura do projeto</strong></summary><br />

O projeto é organizado da seguinte forma:

3 . **Front-end:** Desenvolvido com as seguintes dependências:

- `Vue.js v2`
- `Axios`
- `ApexCharts`
- `Bootstrap`
- `Font Awesome`

2 . **API:**

- https://plataforma-develop-pp6d7tx7ka-rj.a.run.app/api/teste/top-10-produtos

  - Endpoint que retorna um array com os 10 produtos mais vendidos, contendo as seguintes informações:

    - ```json
      [
        {
          "produto": "CAPA DE FECHAMENTO - CF40-01-10",
          "vendas": 3,
          "porcentagem": 15
        },
        ...
      ]

---

- https://plataforma-develop-pp6d7tx7ka-rj.a.run.app/api/teste/faturamento-anual

  - Endpoint que retorna um array com o faturamento mensal do ano, contendo as seguintes informações:

    - ```json
      [
        { 
        "faturamentoMes": "128962.94",
        "data": "2022-01-01 00:00:00"
        },
        ...
      ]

---

</details>


## 📪 Contato

- Email: [vagner_cardoso_s@outlook.com](vagner_cardoso_s@outlook.com)
- GitHub: [kadraknb](https://github.com/kadraknb)
- LinkedIn: [vagner-cardos-santos](https://www.linkedin.com/in/vagner-cardos-santos/)

---
