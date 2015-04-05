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
