function createSkillsGrid(container, heading, skills) {
    const skillsSubheading = document.createElement('h3');
    skillsSubheading.textContent = heading;
    container.appendChild(skillsSubheading);

    const skillsGrid = document.createElement('div');
    skillsGrid.classList.add('skills-grid');
    container.appendChild(skillsGrid);

    skills.forEach(skill => {
        const skillBox = document.createElement('div');
        skillBox.classList.add('skill-box');
        skillBox.textContent = skill;
        skillsGrid.appendChild(skillBox);
    });
}

function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const skillsList = document.getElementById('skills-list');
    const programmingSkills = ["HTML", "CSS", "JavaScript", "Python", "C++", "SQL", "Prolog"];
    const softSkills = ["Problem Solving", "Communication", "Teamwork", "Critical Thinking", "Adaptability"];
    const tools = ["GitHub", "VS Code", "PyCharm", "MySQL"];

    createSkillsGrid(skillsList, "Programming Languages", programmingSkills);
    createSkillsGrid(skillsList, "Soft Skills", softSkills);
    createSkillsGrid(skillsList, "Tools and Frameworks", tools);

    skillsList.appendChild(programmingGrid.skillsSubheading);
    skillsList.appendChild(programmingGrid.skillsGrid);
    skillsList.appendChild(softSkillsGrid.skillsSubheading);
    skillsList.appendChild(softSkillsGrid.skillsGrid);
    skillsList.appendChild(toolsGrid.skillsSubheading);
    skillsList.appendChild(toolsGrid.skillsGrid);

    addSmoothScrolling();
});