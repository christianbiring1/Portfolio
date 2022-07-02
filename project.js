import projects from './list.js';

const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

const projectWrapper = document.querySelector('.project-list');
projects.forEach((project) => {
  const li = document.createElement('li');
  li.classList.add('project-item');
  li.setAttribute('id', project.id);
  li.innerHTML = `<img src="${project.image}"/>
                  <div class="project-details">
                    <h3>${project.projectName}</h3>
                    <p>${project.projectDescription}</p>
                    <ul class="technologies-list ${project.class}">
                    </ul>
                    <button class="see-project">See Project</button>
                  <div>`;
  projectWrapper.appendChild(li);
});

const techList = document.querySelectorAll('.technologies-list');

const identifier = [];
let i = 0;
projects.forEach((project) => {
  identifier.push(i);
  i += 1;
  techList.forEach((element) => {
    if (element.classList.contains(project.class)) {
      element.setAttribute('id', project.id);
      project.stack.forEach((stack) => {
        const techItem = document.createElement('li');
        techItem.classList.add('tech-item');
        const span = document.createElement('span');
        span.textContent = stack;
        techItem.appendChild(span);
        element.appendChild(techItem);
      });
    }
  });
});

projectWrapper.id = 1;
const index = identifier.length - 1;

const projectItem = document.querySelectorAll('.project-item');
let fit = 0;

projectItem[0].classList.toggle('active');
const moveRight = () => {
  if (fit >= identifier.length - 1) {
    projectItem[0].classList.toggle('active');
    projectItem[index].classList.remove('active');
    fit = 0;
  } else {
    projectItem[fit].classList.remove('active');
    projectItem[fit + 1].classList.toggle('active');
    fit += 1;
  }
};

const moveLeft = () => {
  if (fit < 1) {
    projectItem[fit].classList.toggle('active');
    fit = identifier.length - 1;
    projectItem[fit].classList.toggle('active');
  } else {
    projectItem[fit - 1].classList.toggle('active');
    projectItem[fit].classList.remove('active');
    fit -= 1;
  }
};

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);