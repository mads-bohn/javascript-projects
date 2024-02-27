// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", init);

function init () {
    const launch = document.getElementById('takeoff');
    const land = document.getElementById('landing');
    const abortMission = document.getElementById('missionAbort');

    const currentStatus = document.getElementById('flightStatus');
    const shuttleFlightScreen = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');

    const shuttle = document.getElementById('rocket');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const rightButton = document.getElementById('right');
    const leftButton = document.getElementById('left');

    launch.addEventListener("click", function (event) {
        let userResponse = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (userResponse === true) {
            currentStatus.innerHTML = 'Shuttle in flight.';
            shuttleFlightScreen.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = 10000;
        }
    });

    land.addEventListener('click', event => {
        window.alert('The shuttle is landing. Landing gear engaged.');
        currentStatus.innerHTML = 'The shuttle has landed.';
        shuttleFlightScreen.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = 0;
    });

    abortMission.addEventListener('click', event => {
        let userResponse = window.confirm('Confirm that you want to abort the mission.');
        if (userResponse === true) {
            currentStatus.innerHTML = 'Mission aborted.';
            shuttleFlightScreen.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = 0;
        }
    });

    upButton.addEventListener('click', event => {
        let pixelCount = parseInt(shuttle.style.bottom);
        if (pixelCount <= 240) {
            pixelCount += 10;
            shuttle.style.bottom = pixelCount + "px";
        }
    });

    downButton.addEventListener('click', event => {
        let pixelCount = parseInt(shuttle.style.bottom);
        if (pixelCount >= 10) {
            pixelCount += -10;
            shuttle.style.bottom = pixelCount + "px";
        }
    });

    rightButton.addEventListener('click', event => {
        let pixelCount = parseInt(shuttle.style.left);
        if (pixelCount < 480) {
            pixelCount += 10;
            shuttle.style.left = pixelCount + "px";
        }
    });

    leftButton.addEventListener('click', event => {
        let pixelCount = parseInt(shuttle.style.left);
        if (pixelCount >= 0) {
            pixelCount += -10;
            shuttle.style.left = pixelCount + "px";
        }
        
    });


}
