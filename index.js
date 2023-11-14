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

const projectList = [
  {
    name: 'Get-Linked',
    li1: 'Linked',
    li2: 'Frontend dev',
    li3: '2023',
    id: 4,
    project_image: 'images/getlinked.png',
    source_icon: 'images/github.jpg',
    live_icon: 'images/Vector.png',
    description: 'This is a project created with React, Redux and API dor a hackathon competition by getlinkedai.',
    li4: 'Webpack',
    li5: 'React',
    li6: 'JavaScript',
    live_button: 'https://getlinkkedd.netlify.app/',
    display_button: 'see project',
    source_code: 'https://github.com/lawrahkonwea/getlinked',
  },

  {
    name: 'Budget App',
    li1: 'Budget',
    li2: 'Frontend dev',
    li3: '2023',
    id: 3,
    project_image: 'images/newbudget.png',
    source_icon: 'images/github.jpg',
    live_icon: 'images/Vector.png',
    description: 'This mobile web application is a powerful budget management tool, designed to help you take control of your finances. With an intuitive interface, it allows you to efficiently track and manage your expenses based on different categories, providing valuable insights into your spending habits.',
    li4: 'Webpack',
    li5: 'React',
    li6: 'Javascript',
    live_button: 'https://budget-tracker-7y1z.onrender.com/',
    display_button: 'see project',
    source_code: 'https://github.com/lawrahkonwea/Budget_APP',
  },

 
  {
    name: 'Resort Booking App',
    li1: 'Bookings',
    li2: 'Full Stack',
    li3: '2023',
    id: 2,
    project_image: 'images/booking-capture.png',
    source_icon: 'images/github.jpg',
    live_icon: 'images/Vector.png',
    description: 'Resort booking is a full-stack web app that allows a user to manage their bookings, pick a resort destination, reserve, delete, register the number of expected guests as well ',
    li4: 'API',
    li5: 'React',
    li6: 'Ruby on Rails',
    live_button: 'https://resort-booking-front-end-c8l1.onrender.com/',
    display_button: 'see project',
    source_code: 'https://github.com/Thinus01/Resort_Booking_Front-end',
  },
 
  {
    name: 'Crypto Cash',
    li1: 'Crypto',
    li2: 'Frontend dev',
    li3: '2023',
    id: 5,
    project_image: 'images/cryptcashlist.png',
    source_icon: 'images/github.jpg',
    live_icon: 'images/Vector.png',
    description: 'A single-page web application (SPA) that allows users to check world crypto currency exchange information, examples; coin name, logo, website, market value and many more.',
    li4: 'API',
    li5: 'React',
    li6: 'JavaScript',
    live_button: 'https://crypto-cash-website.netlify.app/',
    display_button: 'see project',
    source_code: 'https://github.com/lawrahkonwea/crypto-app',
  },

  {
    name: 'Leaderboard',
    li1: 'Leaderboard',
    li2: 'Frontend dev',
    li3: '2023',
    id: 1,
    project_image: 'images/leaderscreen.png',
    source_icon: 'images/github.jpg',
    live_icon: 'images/Vector.png',
    description: 'This is JavaScript project for the Leaderboard list app, using webpack and ES6 features. API class with adding and removing(A create function for id) respective methods for showing data in Dom refresh function.',
    li4: 'API',
    li5: 'React',
    li6: 'JavaScript',
    live_button: 'https://app-leaderboard.netlify.app/',
    display_button: 'see project',
    source_code: 'https://github.com/lawrahkonwea/A-leaderboard-App',
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
}

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
              <a href="${projectList[id].source_code}"><button class="modal-btn">Github<img alt="github icon" src="${projectList[id].source_icon}" /></button></a>
              <a href="${projectList[id].live_button}"><button class="modal-btn">Live demo<img alt="github icon" src="${projectList[id].live_icon}" /></button></a>
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
