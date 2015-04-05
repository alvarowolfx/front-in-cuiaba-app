angular
    .module('app.config', [])
    .config(Config);

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

function Config($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('tabs', {
            url: "/tab",
            abstract: true,
            templateUrl: "src/shared/templates/tabs.html"
        })
        .state('tabs.speakers', {
            url: "/speakers",
            views: {
                'speakers-tab': {
                    templateUrl: "src/speakers/speakers.html",
                    controller: 'SpeakersTabController as vm'
                }
            }
        })
        .state('tabs.agenda', {
            url: "/agenda",
            views: {
                'agenda-tab': {
                    templateUrl: "src/agenda/agenda.html",
                    controller: 'AgendaTabController as vm'
                }
            }
        })

    .state('tabs.about', {
        url: "/about",
        views: {
            'about-tab': {
                templateUrl: "src/about/about.html",
                controller: 'AboutTabController as vm'
            }
        }
    });

    angular.forEach(['speakers', 'agenda'], function(view, key) {
        var views = {};
        views[view + '-tab'] = {
            templateUrl: "src/detail/detail.html",
            controller: 'DetailTabController as vm'
        };
        $stateProvider.state('tabs.detail-' + view, {
            url: '/detail/:id',
            views: views
        });
    });

    $urlRouterProvider.otherwise("/tab/speakers");

};

window.cordova = {
    yup: true
};
ionic.Platform.isReady = true;

angular.module('app', ['ionic',
    'app.about',
    'app.agenda',
    'app.detail',
    'app.speakers',
    'app.config'
])

.filter('seeMore', function() {
    return function(input) {
        if (typeof input === 'undefined') return '';
        if (input.length > 150) {
            return input.substring(0, 150) + ' ... (ver detalhes)';
        } else {
            return input;
        }
    }
})

angular
	.module('app.about.controller',[])
	.controller('AboutTabController',AboutTabController);

function AboutTabController() {
	var vm = this;
}

angular.module('app.about',['app.about.controller']);

angular
    .module('app.agenda.controller', [])
    .controller('AgendaTabController', AgendaTabController);

AgendaTabController.$inject = ['Talk'];

function AgendaTabController(Talk) {
    var vm = this;
    vm.talks = Talk.getAll();
}

angular
    .module('app.agenda', ['app.agenda.controller'])

angular
    .module('app.detail.controller', [])
    .controller('DetailTabController', DetailTabController);

DetailTabController.$inject = ['$state', 'Talk', 'Speaker'];

function DetailTabController($state, Talk, Speaker) {
    var vm = this;

    var identifier = $state.params.id;
    vm.talk = Talk.getByTwitter(identifier);
    vm.speaker = Speaker.getByTwitter(identifier);
}

angular
    .module('app.detail', ['app.detail.controller'])

angular
    .module('app.speakers.controller', [])
    .controller('SpeakersTabController', SpeakersTabController);

SpeakersTabController.$inject = ['Speaker'];

function SpeakersTabController(Speaker) {
    var vm = this;
    vm.speakers = Speaker.getAll();
}

angular
    .module('app.speakers', ['app.speakers.controller'])

angular.module('app')
    .service('Speaker', Speaker);

function Speaker() {
    var speakers = [{
        "name": "Alvaro Viebranz",
        "twitter": "alvinhuu",
        "img": "img/speaker-alvaro-viebranz.jpg",
        "bio": "É Analista de TI na Sefaz-MT e CTO da startup cuiabana Procurix. Graduado pela UFMT em Ciência da Computação, com estudos na área de banco de dados NoSQL e buscas textuais. Curte muito desenvolvimento web, com foco maior no back-end, mas é entusiasta com front-end em AngularJS. É apaixonado por desenvolvimento mobile utilizando tanto tecnologias hibridas quanto nativas. Arduinista nas horas vagas."
    }, {
        "name": "Ney Simões",
        "twitter": "neysimoes",
        "img": "img/speaker-ney-simoes.jpg",
        "bio": "É desenvolvedor front-end e mobile na empresa CI&T. Atua na área a 5 anos já passou por empresas como e-Construmarket e UOL. Começou a aprender programação por necessidade e se transformou na sua paixão de vida. Entusiasta de CSS acha que a vida pode ser mais bonita com um bom estilo."
    }, {
        "name": "Almir Filho",
        "twitter": "almirfilho",
        "img": "img/speaker-almir-filho.jpg",
        "bio": "Desenvolvedor web na Globo.com e co-fundador do Loop Infinito, onde compartilha seu conhecimento, experiências e pensamentos sobre front-end. Possui mestrado em Ciência da Computação, é entusiasta e extremamente interessado pelo mundo dos padrões web e produtividade. Artista de sanduíches nas horas vagas."
    }, {
        "name": "Fabian Carlos",
        "twitter": "fabiancarlos",
        "img": "img/speaker-fabian-carlos.jpg",
        "bio": "Desenvolvedor \"on demand\" apaixonado por Front-end e Back-end, desenvolve para web e mobile. Possui experiência com ferramentas de alta produtividade e escalabilidade como Ruby/Rails, Nodejs, Backbonejs, Angularjs, MongoDB. Vem atuando principalmente no desenvolvimento para Startups da região."
    }, {
        "name": "Dhyego Fernando",
        "twitter": "dhyegofernando",
        "img": "img/speaker-dhyego-fernando.jpg",
        "bio": "Atualmente com 18 anos, é desenvolvedor web front e back-end apaixonado no que faz e fissurado em solucionar problemas com boas práticas e um bom código. Sempre buscou enfrentar novos desafios, conhecer e utilizar novas tecnologias pois acredita que um bom desenvolvedor não deve ser rotulado."
    }, {
        "name": "Davidson Fellipe",
        "twitter": "davidsonfellipe",
        "img": "img/speaker-davidson-fellipe.jpg",
        "bio": "É Front-end engineer na Globo.com, onde já se envolveu com projetos para o Globoesporte.com, Futpédia, Tempo Real, Eu Atleta e Sportv. Bastante envolvido com a comunidade JS, sendo o fundador do Riojs e Pernambucojs, além de organizar os eventos Front in BH e Front in Recife. Graduado em engenharia da computação pela UPE, técnico em eletrônica pelo IFPE e Mestrando em Ciência da Computação na PUC-Rio."
    }, {
        "name": "Karuan Bertoluci",
        "twitter": "karuanbertoluci",
        "img": "img/speaker-karuan-bertoluci.jpg",
        "bio": "É User Experience designer na CI&T, onde atua com desenvolvimento criativo e inovação. Passou por agências de publicidade e diversas startups trabalhando com desenvolvimento de produtos web/mobile e tecnologia. Estudante e experimentador de processos e metodologias de design para entender melhor o mundo dos usuários. Atualmente organizador do GDG Campinas e DevCast Day e tem como lema: update or die."
    }];
    return {
        getAll: function() {
            return speakers;
        },
        getByTwitter: function(twitter) {
            for (var i in speakers) {
                if (speakers[i].twitter === twitter) {
                    return speakers[i];
                }
            }
            return null;
        }
    }
};

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
