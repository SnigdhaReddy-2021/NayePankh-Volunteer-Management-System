document.getElementById("volunteerForm")
.addEventListener("submit", async function(e){

e.preventDefault();

const volunteer = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    college: document.getElementById("college").value,
    skills: document.getElementById("skills").value
};

try{

    const response = await fetch(
        "http://localhost:3001/register",
        {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(volunteer)
        }
    );

    const data = await response.json();

    alert(data.message);

    this.reset();

}catch(error){

    alert("Error connecting to server");

    console.error(error);

}

});

document.getElementById("darkModeBtn")
.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

});

function chatBot(){

let input =
document.getElementById("userInput")
.value.toLowerCase();

let response = "";

if(input.includes("volunteer")){
response = "You can register using the Volunteer Registration form.";
}
else if(input.includes("internship")){
response = "NayePankh Foundation provides internship opportunities for students.";
}
else if(input.includes("contact")){
response = "Please contact NayePankh Foundation through the official website.";
}
else{
response = "Thank you for your question.";
}

document.getElementById("botResponse").innerText = response;

}