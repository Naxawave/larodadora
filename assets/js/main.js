/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

window.addEventListener('load', function() {
    let loadingScreen = document.getElementById('loading-screen');
    let content = document.getElementById('content');

    loadingScreen.style.opacity = 0;

    setTimeout(function() {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 2000);
});


// Select the buttons and sections
const buttons = document.querySelectorAll(".environments_button");
const sections = document.querySelectorAll(".environment");

// Function to show the corresponding section
function showSection(index) {
  // Hide all sections
  sections.forEach(section => section.classList.remove("active"));
  // Show the selected section
  sections[index].classList.add("active");
}

// Assign a click event to each button
buttons.forEach((button, index) => {
  button.addEventListener("click", () => showSection(index));
});

// By default, show the first environment
showSection(0);

document.getElementById('btnNatural').addEventListener('click', function() {
    let naturalColor = getComputedStyle(document.documentElement).getPropertyValue('--natural');
    document.getElementById('changeColorEnvironments').style.backgroundColor = naturalColor;
});

document.getElementById('btnSocial').addEventListener('click', function() {
    let socialColor = getComputedStyle(document.documentElement).getPropertyValue('--social');
    document.getElementById('changeColorEnvironments').style.backgroundColor = socialColor;
});

document.getElementById('btnParticipatory').addEventListener('click', function() {
    let participatoryColor = getComputedStyle(document.documentElement).getPropertyValue('--participatory');
    document.getElementById('changeColorEnvironments').style.backgroundColor = participatoryColor;
});

document.getElementById('btnPaleontologyDome').addEventListener('click', function() {
    let paleontologyColor = getComputedStyle(document.documentElement).getPropertyValue('--paleontology_dome');
    document.getElementById('changeColorEnvironments').style.backgroundColor = paleontologyColor;
});

document.getElementById('btnArtic').addEventListener('click', function() {
    let articColor = getComputedStyle(document.documentElement).getPropertyValue('--artic');
    document.getElementById('changeColorEnvironments').style.backgroundColor = articColor;
});

document.getElementById('btnGarden').addEventListener('click', function() {
    let gardenColor = getComputedStyle(document.documentElement).getPropertyValue('--garden');
    document.getElementById('changeColorEnvironments').style.backgroundColor = gardenColor;
});


function checkOpenStatus() {
    const day = new Date().getDay();
    const hour = new Date().getHours();
    
    let status = "Cerrados";
    
    if ((day === 3 || day === 5) && (hour >= 9 && hour < 17)) {
       status = "Abiertos";
    } else if ((day === 6 || day === 0) && (hour >= 11 && hour < 19)) {
       status = "Abiertos";
    }

    document.getElementById('status').innerText = status;
 }

 window.onload = checkOpenStatus;
 setInterval(checkOpenStatus, 1000);



 document.addEventListener("DOMContentLoaded", function() {
    const btnShow = document.getElementById("showButton");
    const btnHide = document.getElementById("hideButton");
    const myFrame = document.getElementById("scheduleFrame");

    const modal = document.getElementById("myModal");

    btnShow.addEventListener("click", function() {
        myFrame.classList.remove("hide");
        modal.classList.remove("show");
    });

    btnHide.addEventListener("click", function() {
        myFrame.classList.add("hide");
        modal.classList.add("show");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const btnHide = document.getElementById("closeRodaShop");
    const rodaFrame = document.getElementById("rodaShop");

    setTimeout(function() {
        rodaFrame.classList.remove("hide");
    }, 15000)

    btnHide.addEventListener("click", function() {
        rodaFrame.classList.add("hide");
    });
});



// Hermano estoy orgulloso de mi pagina JAJAJAJJA solo queda las demas paginas y mas funciones 4/mar/25 2:00 A.M.