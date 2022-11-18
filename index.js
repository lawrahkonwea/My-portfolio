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

// pop-up window

const project = [
  {
    name: 'Tonic',
    li1: 'Canopy',
    li2: 'Back End dev',
    li3: '2015',
    card_image: 'images/webversion.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    li4: 'Html',
    li5: 'Css',
    li6: 'Javascript',
    live_button: 'See live',
    online_button: 'See source',
  },
  {
    name: 'Multi Post Stories',
    li1: 'Canopy',
    li2: 'Back End dev',
    li3: '2015',
    card_image: 'images/webversion2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    li4: 'Html',
    li5: 'Css',
    li6: 'Javascript',
    live_button: 'See live',
    online_button: 'See source',
  },
  {
    name: 'Tonic',
    li1: 'Canopy',
    li2: 'Back End dev',
    li3: '2015',
    card_image: 'images/webversion3.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    li4: 'Html',
    li5: 'Css',
    li6: 'Javascript',
    live_button: 'See live',
    online_button: 'See source',
  },
  {
    name: 'Multi Post Stories',
    li1: 'Canopy',
    li2: 'Back End dev',
    li3: '2015',
    card_image: 'images/webversion4.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    li4: 'Html',
    li5: 'Css',
    li6: 'Javascript',
    live_button: 'See live',
    online_button: 'See source',
  },
];

const div1 = document.createElement('div');

function modalOpen(id) {
  div1.className = 'modal-container';
  document.body.appendChild(div1);

  div1.style.display = 'flex';
  const div2 = document.createElement('div');
  div2.className = 'modal-header';
  div1.appendChild(div2);

  const header = document.createElement('h2');
  header.textContent = `${project[id].name}`;
  div2.appendChild(header);

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '<button id="remove-btn">&times;</button>';
  delBtn.id = 'remove-btn';
  delBtn.addEventListener('click', () => {
    div1.classList.remove('active-modal');
    div1.innerHTML = ' ';
    div1.style.display = 'none';
  });
  div2.appendChild(delBtn);

  const ul = document.createElement('ul');
  ul.className = 'ul-con';
  div1.appendChild(ul);

  const list = document.createElement('li');
  list.className = 'canopy';
  list.textContent = `${project[0].li1}`;
  ul.appendChild(list);

  const lio = document.createElement('li');
  lio.className = 'modal-list';
  lio.innerHTML = '<span class="modal-dot">.</span>';
  ul.appendChild(lio);

  const list2 = document.createElement('li');
  list2.className = 'backend1';
  list2.textContent = `${project[0].li2}`;
  ul.appendChild(list2);

  const lio2 = document.createElement('li');
  lio2.className = 'modal-list';
  lio2.innerHTML = '<span class="modal-dot">.</span>';
  ul.appendChild(lio2);

  const list3 = document.createElement('li');
  list3.className = 'backend2';
  list3.textContent = `${project[0].li3}`;
  ul.appendChild(list3);

  const imageCon = document.createElement('div');
  imageCon.className = 'img-con';
  div1.appendChild(imageCon);

  const modalImage = document.createElement('img');
  modalImage.className = 'modal-image';
  modalImage.setAttribute(
    'src', project[id].card_image,
  );
  imageCon.appendChild(modalImage);

  const div3 = document.createElement('div');
  div3.className = 'description-con';
  div1.appendChild(div3);

  const paragraph = document.createElement('p');
  paragraph.className = 'describe';
  paragraph.textContent = `${project[0].description}`;
  div3.appendChild(paragraph);

  const div5 = document.createElement('div');
  div5.className = 'description-div';
  div3.appendChild(div5);

  const ul2 = document.createElement('ul');
  ul2.className = 'languagess';
  div5.appendChild(ul2);

  const langList = document.createElement('li');
  langList.className = 'lang1';
  langList.textContent = `${project[0].li4}`;
  ul2.appendChild(langList);

  const langList2 = document.createElement('li');
  langList2.className = 'lang1';
  langList2.textContent = `${project[0].li5}`;
  ul2.appendChild(langList2);

  const langList3 = document.createElement('li');
  langList3.className = 'lang1';
  langList3.textContent = `${project[0].li6}`;
  ul2.appendChild(langList3);

  const div4 = document.createElement('div');
  div4.className = 'source-div';
  div5.appendChild(div4);

  const liveButton = document.createElement('button');
  liveButton.className = 'modal-btn';
  liveButton.innerHTML = 'See live <img src="images/vector2 (2).png" alt =\'\'>';
  div4.appendChild(liveButton);

  const onlineButton = document.createElement('button');
  onlineButton.className = 'modal-btn';
  onlineButton.innerHTML = 'See source <img src="images/vector.png" alt =\'\'>';
  div4.appendChild(onlineButton);
}

const mainWrapper = document.querySelector('.project-main-wrapper1');
const div = document.createElement('div');
div.innerHTML = `
<div class="project-container1">
        <picture>
          <source media="(min-width: 768px )" srcset="images/webversion.png">
          <source media="(max-width: 768px )" srcset="images/Snapshoot Portfolio 1.png">
          <img class="snapshoot-img" src="images/Snapshoot Portfolio 1.png" alt="project-image">
        </picture>
        <div class="postcollection1">
          <div class="project-review1">
            <h3>Tonic</h3>
          </div>
          <ul class="ul">
            <li><span class="canopy">CANOPY</span></li>
            <img src="images/Counter (1).png" alt="">
            <li class="backend1">Back End Dev</li>
            <img src="images/Counter (1).png" alt="">
            <li class="backend2">2015</li>
          </ul>
          <div class="access-project">
            <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
          </div>
          <ul class="languagess">
            <li class="lang1">html</li>
            <li class="lang1">css</li>
            <li class="lang1">javaScript</li>
          </ul>
          <div>
            <button class="project-btn" id="cta"><a href="#">See Project</a></button>
          </div>
        </div>
      </div>


      <div class="project-container2">

        <picture>
          <source media="(min-width: 768px )" srcset="images/webversion2.png">
          <source media="(max-width: 768px )" srcset="images/Snapshoot Portfolio 1.png">
          <img class="snapshoot-img" src="images/Snapshoot Portfolio (2).png" alt="project-image">
        </picture>
        <div class="postcollection1">
          <div class="project-review1">
            <h3>Multi-Post Stories</h3>
          </div>
          <ul class="ul">
            <li><span class="canopy">CANOPY</span></li>
            <img src="images/Counter (1).png" alt="">
            <li class="backend1">Back End Dev</li>
            <img src="images/Counter (1).png" alt="">
            <li class="backend2">2015</li>
          </ul>
          <div class="access-project">
            <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
          </div>
          <ul class="languagess">
            <li class="lang1">html</li>
            <li class="lang1">css</li>
            <li class="lang1">javaScript</li>
          </ul>
          <div>
            <button class="project-btn" id="cta2"><a href="#">See Project</a></button>
          </div>
        </div>
      </div>

      <div class="project-container3">

        <picture>
          <source media="(min-width: 768px )" srcset="images/webversion3.png">
          <source media="(max-width: 768px )" srcset="images/Snapshoot Portfolio 1.png">
          <img class="snapshoot-img" src="images/Snapshoot Portfolio (3).png" alt="project-image">
        </picture>
        <div class="postcollection1">
          <div class="project-review1">
            <h3>Tonic</h3>
          </div>
          <ul class="ul">
            <li><span class="canopy">CANOPY</span></li>
            <img src="images/Counter (1).png" alt="">
            <li class="backend1">Back End Dev</li>
            <img src="images/Counter (1).png" alt="">
            <li class="backend2">2015</li>
          </ul>
          <div class="access-project">
            <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
          </div>
          <ul class="languagess">
            <li class="lang1">html</li>
            <li class="lang1">css</li>
            <li class="lang1">javaScript</li>
          </ul>
          <div>
            <button class="project-btn" id="cta3"><a href="#">See Project</a></button>
          </div>
        </div>
      </div>


      <div class="project-container4">
        <picture>
          <source media="(min-width: 768px )" srcset="images/webversion4.png">
          <source media="(max-width: 768px )" srcset="images/Snapshoot Portfolio 1.png">
          <img class="snapshoot-img" src="images/Snapshoot Portfolio (4).png" alt="project-image">
        </picture>
        <div class="postcollection1">
          <div class="project-review1">
            <h3>Tonic</h3>
          </div>
          <ul class="ul">
            <li><span class="canopy">CANOPY</span></li>
            <img src="images/Counter (1).png" alt="">
            <li class="backend1">Back End Dev</li>
            <img src="images/Counter (1).png" alt="">
            <li class="backend2">2015</li>
          </ul>
          <div class="access-project">
            <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
          </div>
          <ul class="languagess">
            <li class="lang1">html</li>
            <li class="lang1">css</li>
            <li class="lang1">javaScript</li>
          </ul>
          <div>
            <button class="project-btn" id="cta4"><a href="#">See Project</a></button>
          </div>
        </div>
      </div>
`;
mainWrapper.appendChild(div);

const openModal = document.getElementById('cta');

openModal.addEventListener('click', () => {
  modalOpen(0);
});

const openSecondModal = document.getElementById('cta2');

openSecondModal.addEventListener('click', () => {
  modalOpen(1);
});

const openThirdModal = document.getElementById('cta3');

openThirdModal.addEventListener('click', () => {
  modalOpen(2);
});

const openFourthModal = document.getElementById('cta4');

openFourthModal.addEventListener('click', () => {
  modalOpen(3);
});

// javascript form validation


const userName = document.getElementById('text');
const mail = document.getElementById('email');
const textArea = document.getElementById('message');
const form = document.querySelector('form');
const errorMsg = document.querySelector('.div-span');

form.addEventListener('click', (event) => {
  if (mail.value !== mail.value.toLowerCase()) {
    errorMsg.textContent = 'Email address must be in lowercase';
    event.preventDefault();
  } else {
    errorMsg.textContent = '';
  }
});
const userInfo = {
  username: '',
  email: '',
  textArea: '',
};