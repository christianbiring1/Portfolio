/* ******************************** PROJECTS LIST ********************************************** */

const projects = [
  {
    image: './images/budgetapp.png',
    id: 1,
    projectName: 'Budget App',
    stack: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap', 'CSS'],
    projectDescription: ' This project is about building a mobile web application where the user can manage their budget: they have a list of transactions associated with a category, so that they can see how much money they spent and on what.',
    liveDemo: 'https://budget-app-4zi2.onrender.com',
    sourceCode: 'https://github.com/christianbiring1/Budget_App',
    class: 'budjetApp',
    anime: 'flip-left'
  },

  {
    image: './images/Covid-App.png',
    id: 2,
    projectName: 'Covid-19 App',
    stack: ['ReactJS', 'Redux', 'Covid API', 'CSS'],
    projectDescription: 'This project is about building a mobile web application to check a list of metrics (numeric values) that I had to create making use of React and Redux. I have selected an API that provides numeric data about a the covid-19 views case in the world per country then build the webapp around it',
    liveDemo: 'https://glittering-centaur-5e199f.netlify.app',
    sourceCode: 'https://github.com/christianbiring1/metrics-webapp',
    class: 'covidApp',
  },
  {
    image: './images/space_traveler.png',
    id: 3,
    projectName: 'Space_traveler',
    stack: ['ReactJS', 'SCSS', 'JSX'],
    projectDescription: 'In this project, I have worked with the real live data from the SpaceX API to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    liveDemo: 'https://fancy-elf-c0882d.netlify.app/',
    sourceCode: 'https://github.com/christianbiring1/space_traveler',
    class: 'space_traveler',
  },

  {
    image: './images/bookstore-react.png',
    id: 4,
    projectName: 'BookStore',
    stack: ['ReactJS', 'Redux', 'API', 'CSS'],
    projectDescription: `The Bookstore is a website similar to the "Awesome Books" website built in the previous module. I had to create an MVP version of it that allows the user to:
                        Display a list of books.
                        Add a book.
                        Remove a selected book`,
    liveDemo: 'https://kaleidoscopic-flan-8dba08.netlify.app',
    sourceCode: 'https://github.com/christianbiring1/bookstore',
    class: 'bookstore',
  },

  // {
  //   image: './images/movieposter.png',
  //   id: 6,
  //   projectName: 'Movie poster',
  //   stack: ['JavaScript', 'TVMaze API', 'Webpack', 'HTML5', 'CSS3'],
  //   projectDescription: 'This project was about building my own web application based on an external API. I had to select an API of TVMaze that provides data about the movie show and then build the webapp around it.',
  //   liveDemo: 'https://christianbiring1.github.io/Movies_poster-Capstone2/',
  //   sourceCode: 'https://github.com/christianbiring1/Movies_poster-Capstone2',
  //   class: 'movie',
  // },

  {
    image: './images/leader-board.png',
    id: 7,
    projectName: 'Leader board',
    stack: ['JavaScript', 'API', 'Webpack', 'HTML5', 'CSS3'],
    projectDescription: 'In this activity I had to set up the project for the Leaderboard list app, using webpack and ES6 features, notably modules. I had to develop the version of the app following a wireframe',
    liveDemo: 'https://christianbiring1.github.io/Leaderboard/',
    sourceCode: 'https://github.com/christianbiring1/Leaderboard',
    class: 'leaderboard',
  },

  {
    image: './images/To-Do_list.png',
    id: 8,
    projectName: 'To Do list',
    stack: ['JavaScript', 'LocalStorage', 'Webpack', 'HTML5', 'CSS3'],
    projectDescription: 'In this project, I had to build a simple HTML list of To Do tasks. The user will be able to create, update and delete (CRUD)the tasks. This simple web page was built using webpack and served by a webpack dev server.',
    liveDemo: 'https://christianbiring1.github.io/To-Do_list/',
    sourceCode: 'https://github.com/christianbiring1/To-Do_list',
    class: 'todolist',
  },

  {
    image: './images/Genuine-charity.png',
    id: 9,
    projectName: 'Genuine Charity',
    stack: ['JavaScript', 'HTML5', 'CSS3'],
    projectDescription: 'This project I have built was based on an online website for a conference. I have been provided some design guidelines to create the website, but I have personalized the content, and some features, i.e, instead of a conference web App I have built a website for charity and care.',
    liveDemo: 'https://christianbiring1.github.io/Capstone_project-module1/',
    sourceCode: '',
    class: 'genuineCharity',
  },
];

export default projects;