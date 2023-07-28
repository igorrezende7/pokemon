Projeto criado com o intuito de recuperar informações de pokémons, bem como analisar algumas informações relevantes.

Para rodar o projeto certifique de que:

- Estar dentro da pasta pokemon
- Rodar no terminar npm install
- Verificar se há o arquivo .env na raíz do projeto contento a variável REACT_APP_URL_API com o link da api(https://pokeapi.co/api/v2)
- Rodar no terminal o npm start
- Verifique se o node está instalado na sua máquina, para esse projeto utilizamos a versão: 18.13.0

Como usar o site:

- O site consiste em duas páginas(home e dados);
- Ambas contém uma navbar com um campo para buscar os pokémons, abrindo uma modal com algumas stats dele
- Na página home temos a listagem dos pokémons, ao clicar em algum abrirá a mesma modal.
- Na página dados temos algumas informações, como:
  - Quantidade de cada tipo de pokémon.
  - Pokémon mais forte.
  - Pokémon mais rápido.
  - Pokémon mais resistente.

Para esse projeto foi utilizado ReactJs, com algumas bibliotecas como:
-apexChart
-axios
-styled-components
-redux
Além disso foram utilizados alguns hooks como useState, useEffect e useCallback.
