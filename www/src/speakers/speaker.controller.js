angular
    .module('app.speakers.controller', [])
    .controller('SpeakersTabController', SpeakersTabController);

SpeakersTabController.$inject = ['Speaker'];

function SpeakersTabController(Speaker) {
    var vm = this;
    Speaker.getAll().then(function(speakers) {
        vm.speakers = speakers;
    });
}
