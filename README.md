# Rest Api movies
API REST desenvolvida utilizando Node.js e Typescript

#### Versão atual: 1.0

## *Notas*

Todas as rotas (com exceção de login) devem estar com autenticação de usuário

## *Features*

### Endpoint para criar um novo filme

>***POST***

	http://localhost:3000/api/movie/create
	
O corpo da requisição deve vir no formato JSON contendo os seguintes campos:

 1. title ***(string)***
 2. released ***(string)***
 3. runtimem ***(string)***
 4. director ***(string)***
 5. plot ***(string)***
 6. language ***(array)***
 7. poster ***(string)***
 8. country ***(string)***
 9. genre ***(array)***
 
-----------------------------

### Endpoint para listar todos os filmes salvos

>***GET***

	http://localhost:3000/api/movies
	
-----------------------------
	
### Endpoint para obter um filme pelo titulo

>***GET***

	http://localhost:3000/api/movie/title
	
-----------------------------

### Endpoint para obter um filme pelo gênero

>***GET***

	http://localhost:3000/api/movie/genre
	
-----------------------------

### Endpoint para excluir um filme

>***DELETE***

	http://localhost:3000/api/movie/delete/id
	
-----------------------------

### Endpoint para editar um filme

>***DELETE***

	http://localhost:3000/api/movie/update/id
	
-----------------------------


