# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O usuáiro responsável pelo cadastro deve ser um usuário administrador.
O carro deve ser cadastrado com disponibilidade por padrão.

# Listagem de carro

**RF**
Deve ser possível listar todos os carros disponiveis
Deve ser possível listar todos os carros disponíveis pelo nome da categoria
Deve ser possível listar todos os carros disponíveis pelo nome da marca
Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RN**
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastra uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuáiro responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuáiro responsável pelo cadastro deve ser um usuário administrador.
