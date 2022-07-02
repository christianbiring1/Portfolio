import projects from './list.js';

const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

/* **************************** RENDER PROJECTS SECTION DYNAMICALLY ************************** */

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

/* ********************* POPULATE THE PROJECT STACKS (TECHNOLOGIES) ************************ */

const techList = document.querySelectorAll('.technologies-list');

// Identifier or id of the project li
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

/* ***************** ALGORITHM FOR THE CAROUSSEL ON THE PROJECT LIST **************** */

const projectItem = document.querySelectorAll('.project-item');
projectWrapper.id = 1;
const index = identifier.length - 1;
let position = 0;

// FOR MOBING THE PROJECT LIST ON THE RIGHT

projectItem[0].classList.toggle('active');
const moveRight = () => {
  if (position >= identifier.length - 1) {
    projectItem[0].classList.toggle('active');
    projectItem[index].classList.remove('active');
    position = 0;
  } else {
    projectItem[position].classList.remove('active');
    projectItem[position + 1].classList.toggle('active');
    position += 1;
  }
};

// FOR MOBING THE PROJECT LIST ON THE LEFT

const moveLeft = () => {
  if (position < 1) {
    projectItem[position].classList.toggle('active');
    position = identifier.length - 1;
    projectItem[position].classList.toggle('active');
  } else {
    projectItem[position - 1].classList.toggle('active');
    projectItem[position].classList.remove('active');
    position -= 1;
  }
};

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);