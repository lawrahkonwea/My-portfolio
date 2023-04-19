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
    name: 'Tonic',
    li1: 'Microverse',
    li2: 'Front-end dev',
    li3: '2023',
    project_image: 'images/bookstore.png',
    source_icon: 'images/github.jpg',
    live_icon: 'images/Vector.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    li4: 'Webpack',
    li5: 'React',
    li6: 'Javascript',
    live_button: 'https://savebookstoreproject.netlify.app/',
    display_button: 'see project',
    source_code: 'https://github.com/lawrahkonwea/book-store',
  },
  // {
  //   name: 'Multi Post Stories',
  //   li1: 'Canopy',
  //   li2: 'Back End dev',
  //   li3: '2015',
  //   card_image: 'images/webversion2.png',
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   li4: 'Html',
  //   li5: 'Css',
  //   li6: 'Javascript',
  //   live_button: 'See live',
  //   online_button: 'See source',
  // },
  // {
  //   name: 'Tonic',
  //   li1: 'Canopy',
  //   li2: 'Back End dev',
  //   li3: '2015',
  //   card_image: 'images/webversion3.png',
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   li4: 'Html',
  //   li5: 'Css',
  //   li6: 'Javascript',
  //   live_button: 'See live',
  //   online_button: 'See source',
  // },
  // {
  //   name: 'Multi Post Stories',
  //   li1: 'Canopy',
  //   li2: 'Back End dev',
  //   li3: '2015',
  //   card_image: 'images/webversion4.png',
  //   description: "Lorem Ipsum is simply dummy text of the prin{
  //   name: 'Multi Post Stories',
  //   li1: 'Canopy',
  //   li2: 'Back End dev',
  //   li3: '2015',
  //   card_image: 'images/webversion2.png',
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   li4: 'Html',
  //   li5: 'Css',
  //   li6: 'Javascript',
  //   live_button: 'See live',
  //   online_button: 'See source',
  // },
  // {
  //   name: 'Tonic',
  //   li1: 'Canopy',
  //   li2: 'Back End dev',
  //   li3: '2015',
  //   card_image: 'images/webversion3.png',
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   li4: 'Html',
  //   li5: 'Css',
  //   li6: 'Javascript',
  //   live_button: 'See live',
  //   online_button: 'See source',
  // },
  // {
  //   name: 'Multi Post Stories',
  //   li1: 'Canopy',
  //   li2: 'Back End dev',
  //   li3: '2015',
  //   card_image: 'images/webversion4.png',
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   li4: 'Html',
  //   li5: 'Css',
  //   li6: 'Javascript',
  //   live_button: 'See live',
  //   online_button: 'See source',
  // },ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   li4: 'Html',
  //   li5: 'Css',
  //   li6: 'Javascript',
  //   live_button: 'See live',
  //   online_button: 'See source',
  // },
];

const projects = () => {
  const getProjects = document.querySelector('.project-main-wrapper1');
  const allProjects = document.createElement('div');
  allProjects.className = 'project-container';
  projectList.forEach((work) => {
    allProjects.innerHTML = `
<div class="project-container1">
      <div class="developer"><img class="project_img" src="${work.project_image}" alt=""></div>
      <div class="block">
        <div class="postcollection1">
          <div class="project-review1">
            <label>${work.name}</label>
          </div>
          <ul class="ul">
            <li class="canopy">${work.li1}</li>
            <li class="backend1">${work.li2}</li>
            <li class="backend2">${work.li3}</li>
          </ul>
          <div class="access-project">
            <p>${work.description}</p>
          </div>
          <ul class="languagess">
          <li class="lang1">${work.li4}</li>
          <li class="lang1">${work.li5}</li>
          <li class="lang1">${work.li6}</li>
          </ul>
          <div class="project-btn"><button id="cta">${work.display_button}</button></div>
        </div>
      </div>
    </div>
`;
  })
  getProjects.appendChild(allProjects);
};

projects();

const projectContainer = document.createElement('div');
const modalOpen = (id) => {
  projectContainer.id = 'modal-con';
  const closeButton = '&times';
  projectContainer.innerHTML = `
      <div class="modal-header">
        <p class="modal-title">${projectList[id].name}</p>
        <button id="close-btn" onClick="closeModal()"><span>${closeButton}</span></button>
      </div>
      <ul class="modal-list">
        <li class="modal-list1">${projectList[id].li1}</li>
        <li class="modal-list">${projectList[id].li2}</li>
        <li class="modal-list">${projectList[id].li3}</li>
      </ul>
      <div class="whole-con">
        <div class="img-div">
          <img class="modal-img" alt="potfolioProjects img" src="${projectList[id].project_image}" />
        </div>
        <div class="modal-description">
          <div class="debug2">
            <p class="modal-p">${projectList[id].description}</p>
          </div>
          <div class="debug">
            <ul class="all-lang-con">
              <li class="lang-list">${projectList[id].li4}</li>
              <li class="lang-list">${projectList[id].li5}</li>
              <li class="lang-list">${projectList[id].li6}</li>
            </ul>
            <div class="button-con">
              <button class="modal-btn"><a href="${projectList[id].source_code}">Github</a><img alt="github icon" src="${projectList[id].source_icon}" /></button>
              <button class="modal-btn"><a href="${projectList[id].live_button}">Live demo</a><img alt="github icon" src="${projectList[id].live_icon}" /></button>
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
    userInfo[key] = inputElement.value.trim();
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
