const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const projectContainer = document.querySelector('.container');
// Images are from unsplash
const pictures = ['https://images.unsplash.com/photo-1537000092872-06bbf7b64f60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14d2fe1244b43a1841569da918066fc4&auto=format&fit=crop&w=1050&q=80', 'https://images.unsplash.com/photo-1537005081207-04f90e3ba640?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffb71f2a2843e802e238c5ff8e4bbb8c&auto=format&fit=crop&w=764&q=80', 'https://images.unsplash.com/photo-1536873602512-8e88cc8398b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60a351868d0839e686c8c5a286265f8d&auto=format&fit=crop&w=1050&q=80'];

const projects = [
  {
    image: './images/Covid-App.png',
    class: '',
    projectName: 'Covid-19 App',
    stack: ['HTML5', 'CSS3', 'React', 'Redux', 'API'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
  },

  {
    image: './images/bookstore-react.png',
    class: '',
    projectName: 'BookStore',
    stack: ['HTML5', 'CSS3', 'React', 'Redux', 'API'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
  },

  {
    image: './images/chris-math-magician.png',
    class: '',
    projectName: 'Math magician',
    stack: ['HTML5', 'CSS3', 'React'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
  },

  {
    image: './images/movieposter.png',
    class: '',
    projectName: 'Movie poster',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'TVMaze API'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
  },
  {
    images: './images/leader-board.png',
    class: '',
    projectName: 'Leader board',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'API'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
  },

  {
    image: './images/To-Do_list_ (1).png',
    class: '',
    projectName: 'To Do list',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'localStorage'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
  },

  {
    image: './images/Genuine-charity.png',
    class: '',
    projectName: 'Genuine Charity',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    projectDescription: '',
    liveDemo: '',
    sourceCode: '',
  },
];

console.log(projectContainer);

projects.forEach((project) => {
  const list = document.querySelector('.project-list');
  list.textContent = `<li class="project-list">
                      <img src= "${project.image}" alt="${project.name}-screenshot" class="projet">
                      <div>
                        <h2>${project.projectName}</h2>
                        <div>
                        <p>${project.projectDescription}</p>
                        <ul>
                        </ul>
                        </div>
                      </div>
                    </li>`;
  const listItem = document.createElement('li');
  listItem.classList.add('project-list');
  // projectContainer.appendChild(list); */
  console.log(project.stack);
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