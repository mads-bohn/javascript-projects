//TODO: Add Your Code Below
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(response => {
        //add each astronaut returned to the webpage
        const astronautList = document.getElementById("container");
        let astronautCount = 0 
        const count = document.getElementById("count");
        response.json().then(data => {
            for (let i=0; i < data.length; i++) {
                let astronaut = data[i];
                astronautList.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                </div>
            `;
            astronautCount++;
            count.innerHTML = `${astronautCount}`;
            }

        })
       
        


        
    });
})