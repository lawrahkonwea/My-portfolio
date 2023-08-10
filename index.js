const hamburger = document.querySelector('.hamburgers');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav');
for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
}

document.addEventListener('aos:in', ({ detail }) => {
  console.log('animated in', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
  console.log('animated out', detail);
});

const projectList = [

  {
    name: 'Leaderboard',
    li1: 'Microverse',
    li2: 'Frontend dev',
    li3: '2023',
    id: 1,
    project_image: 'images/leaderboard.png',
    source_icon: 'images/github.jpg',
    live_icon: 'images/Vector.png',
    description: "This is JavaScript project for the Leaderboard list app, using webpack and ES6 features. API class with adding and removing(A create function for id) respective methods for showing data in Dom refresh function.",
    li4: 'API',
    li5: 'React',
    li6: 'JavaScript',
    live_button: 'https://app-leaderboard.netlify.app/',
    display_button: 'see project',
    source_code: 'https://github.com/lawrahkonwea/A-leaderboard-App',
  },
  {
    name: 'Space Traveler',
    li1: 'Microverse',
    li2: 'Frontend dev',
    li3: '2023',
    id: 2,
    project_image: 'images/spacehubs.png',
    source_icon: 'images/github.jpg',
    live_icon: 'images/Vector.png',
    description: "Space Traveler hub was fetched through API, to reserve rockets and cancel reservations and same goes for missions. Unit testings was carred out to ensure better functionality of code.",
    li4: 'API',
    li5: 'React',
    li6: 'JavaScript',
    live_button: 'https://spacetravelsapp.netlify.app/',
    display_button: 'see project',
    source_code: 'https://github.com/lawrahkonwea/space-travelHub',
  },
  {
    name: 'Book-Store',
    li1: 'Microverse',
    li2: 'Frontend dev',
    li3: '2023',
    id: 3,
    project_image: 'images/bookstoreapp.png',
    source_icon: 'images/github.jpg',
    live_icon: 'images/Vector.png',
    description: "A Single Page Application website that lets users to: Add a book, Remove a selected book, and Display a list of books.",
    li4: 'Webpack',
    li5: 'React',
    li6: 'Javascript',
    live_button: 'https://savebookstoreproject.netlify.app/',
    display_button: 'see project',
    source_code: 'https://github.com/lawrahkonwea/book-store',
  },

  {
    name: 'To-Do List',
    li1: 'Microverse',
    li2: 'Frontend dev',
    li3: '2023',
    id: 4,
    project_image: 'images/todolist.png',
    source_icon: 'images/github.jpg',
    live_icon: 'images/Vector.png',
    description: "This To-do list App is built using webpack and served by webpack dev server. A user can append and delete a task. built with JavaScript, HTML & CSS",
    li4: 'Webpack',
    li5: 'React',
    li6: 'JavaScript',
    live_button: 'https://the-to-do-list-app.netlify.app/',
    display_button: 'see project',
    source_code: 'https://github.com/lawrahkonwea/To-Do-List-App',
  },

  

  {
    name: 'Crypto Cash',
    li1: 'Microverse',
    li2: 'Frontend dev',
    li3: '2023',
    id: 5,
    project_image: 'images/cryptoapp.png',
    source_icon: 'images/github.jpg',
    live_icon: 'images/Vector.png',
    description: "A single-page web application (SPA) that allows users to check world crypto currency exchange information, examples; coin name, logo, website, market value and many more.",
    li4: 'API',
    li5: 'React',
    li6: 'JavaScript',
    live_button: 'https://crypto-cash-website.netlify.app/',
    display_button: 'see project',
    source_code: 'https://github.com/lawrahkonwea/crypto-app',
  },
];


function projects() {
  let allProjects = '';
  projectList.filter((card) => card.id >= 0).forEach((card) => {

    allProjects += `
  <div data-aos="fade-up" 
  data-aos-mirror="true"
  data-aos-once="true"
  >
   <div class="project-container">
      <div class="image-div"><img class="project-image" src="${card.project_image}" alt=""></div>
      <div class="block">
        <div>
          <div class="project-review">
            <label>${card.name}</label>
          </div>
          <ul class="backend-dev">
            <li class="canopy">${card.li1}</li>
            <li class="backend1">${card.li2}</li>
            <li class="backend2">${card.li3}</li>
          </ul>
          <div class="access-project">
            <p>${card.description}</p>
          </div>
          <ul class="project-lang">
          <li class="lang">${card.li4}</li>
          <li class="lang">${card.li5}</li>
          <li class="lang">${card.li6}</li>
          </ul>
          <div><button class="project-btn" id="cta">${card.display_button}</button></div>
        </div>
      </div>
    </div>
  </div>
`;
  });
  document.querySelector('.container-project').innerHTML = allProjects;
};

projects();

const projectContainer = document.createElement('div');
const modalOpen = (id) => {
  projectContainer.id = 'modal-con';
  const closeButton = '&times';
  projectContainer.innerHTML = `
  <div class="modal-bag">
      <div class="modal-header">
        <p class="modal-title">${projectList[id].name}</p>
        <button id="remove-btn" onClick="closeModal()"><span>${closeButton}</span></button>
      </div>
      <ul class="modal-heading">
        <li class="modal-list1">${projectList[id].li1}</li>
        <li class="modal-list2">${projectList[id].li2}</li>
        <li class="modal-list3">${projectList[id].li3}</li>
      </ul>
      <div class="whole-con">
        <div class="img-con">
          <img class="modal-image" alt="potfolioProjects img" src="${projectList[id].project_image}" />
        </div>
        <div class="modal-description">
          <div class="debug2">
            <p class="modal-p">${projectList[id].description}</p>
          </div>
          <div class="debug">
            <div class="button-con">
              <button class="modal-btn"><a href="${projectList[id].source_code}">Github</a><img alt="github icon" src="${projectList[id].source_icon}" /></button>
              <button class="modal-btn"><a href="${projectList[id].live_button}">Live demo</a><img alt="github icon" src="${projectList[id].live_icon}" /></button>
            </div>
          </div>
        </div>
      </div>
  </div>
    `;
  document.body.appendChild(projectContainer);
};
const modalButtons = document.querySelectorAll('[id^="cta"]');

modalButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modalOpen(index);
  });
});

// eslint-disable-next-line
const closeModal = () => {
  projectContainer.remove();
};

// form validation

const userData = JSON.parse(localStorage.getItem('userData')) || {
  username: '',
  email: '',
  textArea: '',
};

function saveInputToLocalStorage(inputElement, key) {
  inputElement.addEventListener('input', () => {
    userData[key] = inputElement.value.trim();
    localStorage.setItem('userData', JSON.stringify(userData));
  });
}

const mail = document.getElementById('email');
const username = document.getElementById('text');
const textArea = document.getElementById('message');
const form = document.querySelector('form');
const errorMsg = document.querySelector('.error');

form.addEventListener('click', (event) => {
  if (mail.value !== mail.value.toLowerCase()) {
    errorMsg.textContent = 'Email address must be in lowercase';
    event.preventDefault();
  } else {
    errorMsg.textContent = '';
  }
});

mail.value = userData.email;
username.value = userData.username;
textArea.value = userData.textArea;

saveInputToLocalStorage(username, 'username');
saveInputToLocalStorage(mail, 'email');
saveInputToLocalStorage(textArea, 'textArea');

// code for data preservation in browser

if (localStorage.getItem('userData')) {
  const json = JSON.parse(localStorage.getItem('userData'));
  userData.email = json.email;
  userData.username = json.username;
  userData.textArea = json.textArea;
  mail.value = userData.email;
  username.value = userData.username;
  textArea.value = userData.textArea;
}

username.addEventListener('input', () => {
  userData.username = username.value.trim();
  localStorage.setItem('userData', JSON.stringify(userData));
});
mail.addEventListener('input', () => {
  userData.email = mail.value.trim();
  localStorage.setItem('userData', JSON.stringify(userData));
});
textArea.addEventListener('input', () => {
  userData.textArea = textArea.value.trim();
  localStorage.setItem('userData', JSON.stringify(userData));
});
