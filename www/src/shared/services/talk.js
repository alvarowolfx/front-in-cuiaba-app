angular
    .module('app')
    .service("Talk", Talk);

function Talk() {
    var talks = [{
        "name": "Credenciamento/Abertura",
        "hour": "08h00",
        "isTalk": false
    }, {
        "name": "Credenciamento/Welcome Coffe",
        "hour": "08h10",
        "isTalk": false
    }, {
        "name": "Construindo Aplicativos Híbridos com Ionic Framework",
        "person": "alvinhuu",
        "description": "Na tentativa de padronizar uma forma de se desenvolver aplicativo híbridos, nasceu o Ionic Framework, focado em padrões modernos (HTML5, CSS e JS), performance e facilidade de uso.",
        "img": "img/speaker-alvaro-viebranz.jpg",
        "hour": "08h30",
        "isTalk": true
    }, {
        "name": "Arquitetura CSS",
        "person": "neysimoes",
        "description": "Arquitetura CSS é uma das partes mais importantes do front-end, pode não parecer mas num projeto mal estruturado podemos perder mais tempo estilizando do que programando a lógica. Tendo percebido isso vários desenvolvedores no mundo desenvolveram técnicas para uma arquitetura sólida do CSS.",
        "img": "img/speaker-ney-simoes.jpg",
        "hour": "09h30",
        "isTalk": true
    }, {
        "name": "Esse cara é o grunt",
        "person": "almirfilho",
        "description": "♫ O cara que observa seus arquivos toda hora O cara que te avisa quando você quebra o build O cara que faz o reload por você O cara que após o save, te chama Pra dizer se o teste passou ou quebrou Esse cara é o Grunt!",
        "img": "img/speaker-almir-filho.jpg",
        "hour": "10h30",
        "isTalk": true
    }, {
        "name": "Almoço",
        "hour": "11h30",
        "isTalk": false
    }, {
        "name": "Javascript: The Good, Bad and Ugly parts",
        "person": "fabiancarlos",
        "description": "Todas linguagens tem suas partes boas e ruins, e com Javascript a coisa pode ficar realmente feia se for mal compreendida. Vamos falar de como surgiu e que rumo tomou até os dias de hoje de uma amada e odiada linguagem, o Javascript.",
        "img": "img/speaker-fabian-carlos.jpg",
        "hour": "13h00",
        "isTalk": true
    }, {
        "name": "Modularização com AngularJS",
        "person": "dhyegofernando",
        "description": "Muitos acoplamentos podem tornar sua aplicação complicada de se manter. Esta palestra irá abordar soluções inteligentes com AngularJS para resolver de forma ágil este problema.",
        "img": "img/speaker-dhyego-fernando.jpg",
        "hour": "13h50",
        "isTalk": true
    }, {
        "name": "Coffe-break",
        "hour": "14h40",
        "isTalk": false
    }, {
        "name": "Guia do Front-end das Galáxias",
        "person": "davidsonfellipe",
        "description": "Como encarar os desafios da área de desenvolvimento front-end para web, esse campo que é cheio de grandes desafios, sejam eles voltados para dispositivos, browsers, resoluções... Então, quais frameworks, ferramentas e bibliotecas são relevantes para aprimorar sua forma de trabalho? Venha conhecer 42 dicas para trabalhar mais feliz.",
        "img": "img/speaker-davidson-fellipe.jpg",
        "hour": "15h10",
        "isTalk": true
    }, {
        "name": "Inovação & User Experience - Estética ou Funcionalidade?",
        "person": "karuanbertoluci",
        "description": "Qual a ligação de inovação e experiência de usuário? Vamos realizar um breve estudo de caso utilizando a criação de Phillipe Starck: Juicy Salif. Um objeto estranho com um grande apelo visual e apenas uma funcionalidade: Espremer Laranjas. Mas em algum momento o Juicy deixou sua real funcionalidade de lado e hoje atua melhor como uma micro escultura. Isso não faz sentido, faz? Essa palestra faz um tour em algumas ferramentas e metodologias de design para mapear e justificar todos os aspectos do produto em análise.",
        "img": "img/speaker-karuan-bertoluci.jpg",
        "hour": "16h10",
        "isTalk": true
    }, {
        "name": "Mesa Redonda",
        "hour": "17h10",
        "isTalk": false
    }, {
        "name": "Sorteios",
        "hour": "17h40",
        "isTalk": false
    }, {
        "name": "Encerramento",
        "hour": "17:50",
        "isTalk": false
    }];
    return {
        getAll: function() {
            return talks;
        },
        getByTwitter: function(person) {
            for (var i in talks) {
                if (talks[i].isTalk && talks[i].person === person) {
                    return talks[i];
                }
            }
            return null;
        }
    }
};
