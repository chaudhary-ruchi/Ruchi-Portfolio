
const username = "chaudhary-ruchi";

const projectList = document.getElementById("project-list");

const projects = [
    {
        name: "Digital Clock",
        link: "https://chaudhary-ruchi.github.io/Digital-Clock/"
    },
    {
        name: "Stone Paper Scissors",
        link: "https://chaudhary-ruchi.github.io/Stone-Paper-Scissors-Game/"
    },
    {
        name: "Weather App",
        link: "https://chaudhary-ruchi.github.io/Weather-App/"
    },
    {
        name: "To To List App",
        link: "https://chaudhary-ruchi.github.io/Todo-List-App/"
    },
    {
        name: "Age Calculator",
        link: "https://chaudhary-ruchi.github.io/Age-Calculator/"
    },
    {
        name: "Tip Calculator",
        link: "https://chaudhary-ruchi.github.io/Tip-Calculator/"
    },
    {
        name: "Calculator App",
        link: "https://chaudhary-ruchi.github.io/Calculator-App/"
    },
    {
        name: "Tic Tac Toe Game",
        link: "https://chaudhary-ruchi.github.io/Tic-Tac-Toe-Game/"
    }
];

projects.forEach(project => {
    const card = document.createElement("div");

    card.className = "project-card";

    card.innerHTML = `
        <h3>${project.name}</h3>
        <p>Built using HTML, CSS and JavaScript.</p>
        <a href="${project.link}" target="_blank">
            View Live Project →
        </a>
    `;

    projectList.appendChild(card);
});
