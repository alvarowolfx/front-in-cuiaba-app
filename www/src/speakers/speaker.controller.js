angular
    .module('app.speakers.controller', [])
    .controller('SpeakersTabController', SpeakersTabController);

SpeakersTabController.$inject = ['Speaker'];

function SpeakersTabController(Speaker) {
    var vm = this;
    vm.speakers = Speaker.getAll();
}
