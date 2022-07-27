import projects from './list.js';

const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
let closebtn;

/* **************************** RENDER PROJECTS SECTION DYNAMICALLY ************************** */

const projectWrapper = document.querySelector('.project-list');
projects.forEach((project) => {
  const li = document.createElement('li');
  li.classList.add('project-item');
  li.setAttribute('id', project.id);
  li.innerHTML = `<img src="${project.image}" class="${project.class}"/>
                  <div class="project-details">
                    <h3>${project.projectName}</h3>
                    <p>${project.projectDescription}</p>
                    <ul class="technologies-list ${project.class}">
                    </ul>
                    <button class="see-project">See Project<img src="${project.image}" class="${project.class}"/></button>
                  <div>`;
  projectWrapper.appendChild(li);

  const layer = document.querySelector('.layer');
  const modal = document.createElement('div');
  modal.setAttribute('class', 'popup');
  const popCreator = document.querySelectorAll(`.${project.class}`);
  popCreator.forEach((image) => {
    image.addEventListener('click', () => {
      modal.innerHTML = `
                            <div class="modal-header">
                              <h2>${project.projectName}</h2>
                              <button class="close-button">&times;</button>
                            </div>
                            <img src="${image.getAttribute('src')}" class="modal-image">
                            <div class="modal-body">
                              <p>${project.projectDescription}</p>
                            </div>
                            <ul class="technologies-list ${project.class}">
                            </ul>
                            <div class="modal-bottom">
                              <button class="live">
                                <a href="${project.liveDemo}">See live</a>
                                <img src="./images/liveicon.png"/>
                              </button>
                              <button class="source">
                                <a href="${project.sourceCode}">Source Code</a>
                                <img src="./images/sourcevector.png"/>
                              </button>
                            </div>
                              `;
      layer.appendChild(modal);
      layer.classList.toggle('active');
      modal.classList.toggle('active');
      closebtn = document.querySelectorAll('.close-button');
      closebtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          layer.classList.remove('active');
          modal.classList.remove('active');
        });
      });
    });
  });
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

// FOR MOVING THE PROJECT LIST ON THE RIGHT

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

// FOR MOVING THE PROJECT LIST ON THE LEFT

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

rightBtn.addEventListener('click', moveLeft);
leftBtn.addEventListener('click', moveRight);
