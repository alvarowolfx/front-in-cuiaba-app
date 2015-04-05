angular
    .module('app.agenda.controller', [])
    .controller('AgendaTabController', AgendaTabController);

AgendaTabController.$inject = ['Talk'];

function AgendaTabController(Talk) {
    var vm = this;
    Talk.getAll().then(function(talks) {
        vm.talks = talks;
    });
}
