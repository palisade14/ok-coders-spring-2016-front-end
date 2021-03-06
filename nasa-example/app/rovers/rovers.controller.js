angular
  .module('rovers')
  .controller('roversController', roversController)

roversController.$inject = [
  'roversResource',
  'lodash',
  '$log',
]

function roversController(
    roversResource,
    _,
    $log
) {

  vm = this
  vm.testFilter = 'zach mays'

  roversResource.get({}, roverGetSuccess, roverGetFail)

  function roverGetSuccess(data) {
    $log.debug(data)
    vm.roversData = data.rovers
    vm.roverGetSuccess = 'Hey! Check out these data from the Nasa Api'
  }

  function roverGetFail(error) {
    $log.debug("oops!", error)
    vm.roverGetFail = "Oops! We couldn't get the rover data!"
  }

  vm.showRoverForm = function() {
    vm.showAddRoverForm = true
  }

  vm.submitRover = function() {
    console.log(vm.newRover)
  }

  vm.cancelRover = function() {
    vm.showAddRoverForm = false
    vm.newRover = {}
  }
}
