//CRIANDO UMA CLASSE QUE SE EXTENDE (EXTENDS) AO COMPORTAMENTO DO HTML (HTMLElement).
class CardNews extends HTMLElement{ 
 constructor(){  //Dentro de uma classe, o primeiro método a ser criado é o do construtos (constructor(){})
    super(); //O super é a chamada do construtor de quem ele esta extendendo.

    const shadow = this.attachShadow({mode: "closed"})
    //O comando acima esta criando um constante que esta armazenando dentro dela this, que é a referencia para esta classe mesmo, attach (que é anexar) Shadow (que é sombra).

    //Ela tem dois modos, open que qualque javascript pode alterar aqui dentro.
    //E também o close, que ninguém além do que estiver aqui dentro pode alterar.

    shadow.innerHTML = "<h1> Hello World</h1>"

    //O Comando acima esta dizendo que pega essa sombra agora, e adiciona dentro do html interno da sombra o Hello World. (inner é interno) (shadow é sombra) (this é esse)
 } 
}

customElements.define('card-news', CardNews)
//O comando acima esta dizendo que crie um elemento customizado (customElements), defina ele, (.define)... O nome dele é 'card-news' e ele esta dentro da classe CardNews