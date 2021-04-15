<h1 align="center">BuzzMail :mailbox: :email:</h1>
	
<p align="center">
  <img src="https://github.com/pabloskubert/BuzzMail/blob/main/tela_inicial.png?raw=true">
</p>

Envie até 10k de e-mails por dia sem esforço :fire:	:fire:

##### Observação
É necessário ativar a opção *"Acesso a apps menos seguros"* em todas as contas que você utilizar como login no buzzmail
caso contrário a ferramenta não enviará os e-mails. [clique aqui para ativar essa opção](https://myaccount.google.com/lesssecureapps)
#### Características chave:

  - Quando atinge 500 envios, pula para o próximo login (conta e senha no arquivo txt)
  - Envia para os e-mails lidos de um arquivo de texto (cada e-mail separado por ",")
  - Mostra porcentagem de envios bem sucedidos, e de envios que falhos.

#### Atenção!

O programa irá buscar automaticamente pelo (.txt) e o (.html) nos seguintes diretórios:

 - Desktop
 - Documents
 - Images
 - Downloads 

Coloque o arquivo __html__ e o arquivo de __texto__ em algum dos diretórios acima e no *diálogos* de "arquivo logins gmail" e "arquivo html para enviar" 
coloque somente o nome sem especificar o caminho __absoluto__.

### Downloads
  - Baixe para distros gnu/linux e nix* [clique aqui](https://github.com/pabloskubert/BuzzMail/releases/tag/1.0.4) 
  - Windows (7/8/10) *indisponível*
  - Mac OS *indisponível*

### Guia para criar um executável stand-alone para sua plataforma (caso não haja uma release):

#### Pré-requisitos
- NodeJs v14
- Npm
- Git CLI - Não é necessário caso você baixe o zip

#### Faça download do projeto
```
    git clone https://github.com/pabloskubert/BuzzMail ou baixe diretamente o ZIP
    cd BuzzMail
    npm install ou yarn install
```

#### Gere o executável stand alone (.exe, .deb, .rpm) 
Gerar o executável é bem simples, basta executar o comando abaixo dentro do diretório BuzzMail:
 ```
  npm run gulp
 ```

 Após a execução do comando __gulp__, será criado o executável em BuzzMail\downloads e pronto! 
 Qualquer __dúvida__ me chame no fb/protonmail. :incoming_envelope:
 
 :octocat: Se você achou esse projeto útil deixe uma :star: para aumentar a relevância! :octocat:

### Usando BuzzMail: 
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/Ohi7QkxnWpY/0.jpg)](https://www.youtube.com/watch?v=Ohi7QkxnWpY)

 ### Futuras melhorias: 
 - Lançar releases para Windows/Mac OS
 - Implementar anti-spam com criptografia. 
 - Salvar configurações para uso posterior.
 
