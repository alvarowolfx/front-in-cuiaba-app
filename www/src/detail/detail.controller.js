angular
    .module('app.detail.controller', [])
    .controller('DetailTabController', DetailTabController);

DetailTabController.$inject = ['$state', 'Talk', 'Speaker'];

function DetailTabController($state, Talk, Speaker) {
    var vm = this;

    var identifier = $state.params.id;
    Talk.getByTwitter(identifier).then(function(talk) {
        vm.talk = talk;
    });

    Speaker.getByTwitter(identifier).then(function(speaker) {
        vm.speaker = speaker;
    });
}
