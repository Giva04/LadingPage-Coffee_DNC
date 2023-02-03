//interação dos botões
            // variaveis cards
let cards = Array.from(document.querySelectorAll(".card"));
            // variaveis botões
let buttons = Array.from(document.querySelectorAll(".comprar"));
            // variaveis textos cards
let cardText = Array.from(document.querySelectorAll(".card-text"));

    // atribuindo funçao mostrar botão
cards.forEach((element, index) => {
    element.addEventListener("mouseenter",() => {
        buttons[index].style.visibility = 'visible';
        buttons[index].style.height ="auto";
    });

    //  atribuindo função para esconder botão
    element.addEventListener("mouseleave",() => {
        buttons[index].style.visibility = 'hidden';
        buttons[index].style.height ="auto";
    });
});

        // atribuindo Modal entre em contato
let modalCard = document.querySelector("#modal");
