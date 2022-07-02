const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const projectContainer = document.querySelector('.container');
// Images are from unsplash
const pictures = ['https://images.unsplash.com/photo-1537000092872-06bbf7b64f60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14d2fe1244b43a1841569da918066fc4&auto=format&fit=crop&w=1050&q=80', 'https://images.unsplash.com/photo-1537005081207-04f90e3ba640?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffb71f2a2843e802e238c5ff8e4bbb8c&auto=format&fit=crop&w=764&q=80', 'https://images.unsplash.com/photo-1536873602512-8e88cc8398b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60a351868d0839e686c8c5a286265f8d&auto=format&fit=crop&w=1050&q=80'];

const projects = [
  {
    image: './images/Covid-App.png',
    id: 1,
    projectName: 'Covid-19 App',
    stack: ['HTML5', 'CSS3', 'React', 'Redux', 'Covid API'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
    class: 'covidApp',
  },

  {
    image: './images/bookstore-react.png',
    id: 2,
    projectName: 'BookStore',
    stack: ['HTML5', 'CSS3', 'React', 'Redux', 'API'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
    class: 'bookstore',
  },

  {
    image: './images/chris-math-magician.png',
    id: 3,
    projectName: 'Math magician',
    stack: ['HTML5', 'CSS3', 'React'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
    class: 'mathmagician',
  },

  {
    image: './images/movieposter.png',
    id: 4,
    projectName: 'Movie poster',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'TVMaze API'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
    class: 'movie',
  },

  {
    image: './images/leader-board.png',
    id: 5,
    projectName: 'Leader board',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'API'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
    class: 'leaderboard',
  },

  {
    image: './images/To-Do_list.png',
    id: 6,
    projectName: 'To Do list',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
    class: 'todolist',
  },

  {
    image: './images/Genuine-charity.png',
    id: 7,
    projectName: 'Genuine Charity',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
    class: 'genuineCharity',
  },
];

console.log(projectContainer);
const projectWrapper = document.querySelector('.project-list');
projects.forEach((project) => {
  const li = document.createElement('li');
  li.classList.add('project-item');
  li.innerHTML = `<img src="${project.image}"/>
                  <div class="project-details">
                    <h2>${project.projectName}</h2>
                    <p>${project.projectDescription}</p>
                    <ul class="technologies-list ${project.class}">
                    </ul>
                  <div>`;
  projectWrapper.appendChild(li);
});

const techList = document.querySelectorAll('.technologies-list');

projects.forEach((project) => {
  Array.from(techList).forEach((element) => {
    if (element.classList.contains(project.class)) {
      element.setAttribute('id', project.id);
      project.stack.forEach((stack) => {
        const techItem = document.createElement('li');
        techItem.classList.add('tech-item');
        techItem.textContent = stack;
        element.appendChild(techItem);
      });
    }
  });
});

[img.src] = [pictures[0]];
let position = 0;

const moveRight = () => {
  if (position >= pictures.length - 1) {
    position = 0;
    img.src = pictures[position];
    return;
  }
  img.src = pictures[position + 1];
  position += 1;
};

const moveLeft = () => {
  if (position < 1) {
    position = pictures.length - 1;
    img.src = pictures[position];
    return;
  }
  img.src = pictures[position - 1];
  position -= 1;
};

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);