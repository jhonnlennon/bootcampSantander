// class CardNews extends HTMLElement(){
//    constructor(){
//       super();

//       const shadow = this.attachShadow({mode: "open"});


//    }
      //abaixo é um método para construir a base
//    build(){

//    }
      //abaixo é um método para construir o estilo
//    styles(){

//    }
// }

// customElements.define("card-news", CardNews);

//Acima, a base para criar um componente profissional.. 


 class CardNews extends HTMLElement{
    constructor(){
       super();

      const shadow = this.attachShadow({mode: "open"}); //Colocando uma sombra desta classe aqui mesmo, aberta.

      shadow.appendChild(this.build()); //Colocando na sombra o método desta classe aqui mesmo.

      shadow.appendChild(this.styles()); //Colocando na sombra o método desta classe aqui mesmo. 


    }
      //abaixo é um método para construir a base
    build(){

      const componentRoot = document.createElement("div"); //criando um elemento div, adicionando na constante.
      componentRoot.setAttribute("class", "card") //Adicionando um atributo a div do componentRoot


      const cardLeft = document.createElement("div") //criando um elemento div, adicionando na constante.
      cardLeft.setAttribute("class", "card__left")//Adicionando um atributo a div do cardLeft


      const autor = document.createElement("span"); //Criando novos elementos
      autor.textContent = "By " + (this.getAttribute("autor") || "Anonimous"); //Adicionando conteude de texto (textContent) e concatenando com o que estiver escrito na propriedade autor (this.getAttribute)



      const linkTitle = document.createElement("a"); //Criando novos elementos
      linkTitle.textContent = this.getAttribute("title")
      linkTitle.href = this.getAttribute("link-url") //Para chamar uma tag já existente.


      const newsContent = document.createElement("p"); //Criando novos elementos
      newsContent.textContent = this.getAttribute("content")

      cardLeft.appendChild(autor); //Pendurando ele no cardLeft
      cardLeft.appendChild(linkTitle); //Pendurando ele no cardLeft
      cardLeft.appendChild(newsContent); //Pendurando ele no cardLeft


      const cardRight = document.createElement("div") //criando um elemento div, adicionando na constante.
      cardRight.setAttribute("class", "card__right")//Adicionando um atributo a div do cardRight
    

      const newsImage = document.createElement("img"); //Criando um elemento IMG. Adicionando na constantes.
      newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";
      newsImage.alt = "Foto do Darth Vader tomando café."
      cardRight.appendChild(newsImage); //Pendurando ele no cardRight



      componentRoot.appendChild(cardLeft) //Pegando o component root, a div principal no caso e adicionando a div do cardLeft
      componentRoot.appendChild(cardRight)  //Pegando o component root, a div principal no caso e adicionando a div do cardRight
      return componentRoot;
    }
      //abaixo é um método para construir o estilo
   styles(){
      const style = document.createElement("style");
      style.textContent = `

     .card{
         width: 80%;
         padding: 20px;
         box-shadow: 10px 10px 16px 0px rgba(0,0,0,0.75);
             -webkit-box-shadow: 10px 10px 16px 0px rgba(0,0,0,0.75);
             -moz-box-shadow: 10px 10px 16px 0px rgba(0,0,0,0.75); /*Adicionado sombra*/
         display: flex;
         flex-direction: row; /*Colocando o alinhamento em linha*/
         justify-content: space-between;
         margin-bottom: 40px;
     }
     
     .card__left{
         display: flex; /*Definindo como flex*/
         flex-direction: column; /*alinhando como coluna*/
         justify-content: center; /*alinhando ao centro a coluna*/
         padding: 10px;
     }
     
     .card__left > span {
         font-weight: 400;
         margin-bottom: 15px;
     }
     
     .card__left > h1 {
         margin-top: 15px;
         font-size: 25px;
     }
     
     .card__left > p {
         color: rgb(70, 70, 70);
     }
     
     .card__left > a {
         color: black;
         text-decoration: none;
         font-weight: 400;
     }
     .card__right{
     
     }
     /*Media query é um conjunto de css que será aplicado a determinado tamanho de tela pré definido em suas configurações..*/
     @media screen and (max-width: 625px) { /*Aqui ele esta dizendo: Quando chegar no pixel 992... Faça o seguinte..:*/
         .card { /*A classe content vai ter agora as seguintes configurações..*/
             max-width: 992px; /*Sua largura máxima será: 992px*/
             height: auto; /*Deixando sua altura automática quanto ao tamanho do dispositivo.*/
             margin: 1rem auto; /*E será centralizado*/
             border-radius: 1rem; /*Deixando o conteúdo do content com bordas. O fundo branco no caso..*/
             flex-direction: column-reverse;
         }
         .card__right > img {
             width: 100%;
              
         }
     }
      `
      return style
   }
}

customElements.define("card-news", CardNews);