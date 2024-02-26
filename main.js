const projectsData = [
    {
        "project-name": "Monolo",
        "project-description": "A journal, notebook, and knowledge management system. A simple thinking structure for intelligent thinking.",
        "github-link": ".",
        "netlify-link": ".",
    },
    {
        "project-name": "Elaba",
        "project-description": "A language learning app that is based on active learning. Flash-cards maker with spaced repetition and active recall.",
        "github-link": ".",
        "netlify-link": ".",
    },
    {
        "project-name": "Ccat",
        "project-description": "Competitive programming problems practice, problemsets from codeForces and projectEuler.",
        "github-link": ".",
        "netlify-link": ".",
    },
]

const wishedSkillSet = [
    "Programmer", "Full-Stack Developer", "UI/UX Designer",
    "Video Game Developer", "Competitive Programmer", "Android App Developer",
    "Python Developer", "Task Automator", "iOS App Developer"
];
const jobTitles = [
    "Programmer", "Full-Stack Developer", "Competitive Programmer",
    "Python Developer", "Task Automator"
];

// DOM

let backToTop = document.getElementById("back-to-top");
backToTop.onclick = () => {
    document.querySelector("header").scrollIntoView({ behavior: 'smooth' });
}
var scrollHandler = () => {
    if (window.scrollY > 50) {
        backToTop.style.display = '';
    } else {
        backToTop.style.display = "none";
    }
}
scrollHandler()
document.addEventListener("scroll", scrollHandler)


let jobTitleIndex = 0;
let changeJobTitle = () => {
    document.getElementById("job-title-text").textContent = '';
    const curJobTitle = jobTitles[jobTitleIndex];
    jobTitleIndex = (jobTitleIndex + 1) % jobTitles.length;

    let curJobTitleChar = 0;
    let writeNextCharacter = () => {
        curJobTitleChar++;
        document.getElementById("job-title-text").textContent = curJobTitle.slice(0, curJobTitleChar);
        if (curJobTitleChar == curJobTitle.length) {
            setTimeout(changeJobTitle, 3000)
        } else {
            setTimeout(writeNextCharacter, 50)
        }
    }
    setTimeout(writeNextCharacter, 1000)
}
changeJobTitle()

displayProjects()

function displayProjects() {
    let projectsContainer = document.getElementById("projects");
    let newHTML = '';
    for (let proj of projectsData) {
        newHTML += `
        <div class="project">
            <img src="project gifs/${proj["project-name"]}.gif">
            <p>
                ${proj["project-description"]}
            </p>
            <div class="project-action">`
        if (proj["github-link"]) {
            newHTML += `
                <a href="https://github.com/IMAD-Majid/${proj["github-link"]}" target="_blank">
                    <img src="svg icons/code_white_24dp.svg">
                    <span>Source</span>
                </a>`;
        }
        if (proj["netlify-link"]) {
            newHTML += `
                <a href="https://${proj["netlify-link"]}.netlify.app" target="_blank">
                    <span>${proj["project-name"]}</span>
                    <img src="svg icons/north_east_white_24dp.svg">
                </a>`;
        }
        newHTML += `</div></div>`;
    }
    projectsContainer.innerHTML = newHTML;
}
