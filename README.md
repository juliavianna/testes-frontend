# Testes FrontEnd usando Cypress 

Testes feitos no FrontEnd da tela de login do [site](http://www.automationpractice.pl/index.php?controller=authentication&amp;back=my-account) 


### Cenários de Teste
- Dado que o usuário esteja na página “login”, quando ele apenas clicar nos campos que recebem valores (Email address e Password) e não preenchê-los com algum valor, então a cor dos campos deve mudar para rgb(241, 51, 64)

- Dado que o usuário esteja na página “login”, quando o usuário clicar em “Create an account” com o campo “Email address” vazio, então a página deve retornar a mensagem “Invalid email address” na tela

- Dado que o usuário esteja na página “login”, quando o usuário clicar em "Forgot your password?", então ele deve ser redirecionado para a página http://www.automationpractice.pl/index.php?controller=password

