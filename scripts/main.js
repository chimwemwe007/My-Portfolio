const navToggle = document.querySelector('.nav-toggle');
const ul = document.querySelector('.links');
const close = document.querySelector('.close');
const closeItems = document.querySelector('.desktop-nav');
const popup = document.querySelector('.bg');

navToggle.addEventListener('click', () => {
  ul.classList.add('d-block');
});

close.addEventListener('click', () => {
  ul.classList.remove('d-block');
});

closeItems.addEventListener('click', () => {
  ul.classList.remove('d-block');
});

const cards = [
  {
    id: 1,
    image: 'images/photo1.png',
    class: 'project-card',
    pop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley ',
    name: 'Tonic',
    languages: ['html', 'CSS', 'JavaScript'],
    description: 'A daily selection of privtely personalized reads; no accounts or sign-ups required',
    links: ['#', '#'],
  },
  {
    id: 2,
    image: 'images/photo2.png',
    class: 'project-cardr',

    name: 'Multi-post Stories',
    languages: ['html', 'CSS', 'JavaScript'],
    description: 'A daily selection of privtely personalized reads; no accounts or sign-ups required',
    links: ['#', '#'],
    pop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    id: 3,
    class: 'project-card',

    image: 'images/photo3.png',
    name: 'Tonic',
    languages: ['html', 'CSS', 'JavaScript'],
    description: 'A daily selection of privtely personalized reads; no accounts or sign-ups required',
    links: ['#', '#'],
    pop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    id: 4,
    class: 'project-cardr',
    image: 'images/photo4.png',
    name: 'Multi-post Stories',
    languages: ['html', 'CSS', 'JavaScript'],
    description: 'A daily selection of privtely personalized reads; no accounts or sign-ups required',
    links: ['#', '#'],
    pop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
];

const cardHolder = document.querySelector('.work-section');

function displayPopup(card) {
  const temp = document.createElement('template');

  temp.innerHTML = `
  <div class="project-card pop-up-card">
            
            <div class="project-card2">
            <span class="close-popup">X</span>
                <h2 class="head">${card.name}</h2>
                <div class="card-detail-box">
                    <ul>
                        <li class="card-detail canopy">CANOPY</li>
                        <li class="card-detail option">
                            <img src="images/bullets.png" alt="bullet" class="circle" /> Back End Dev
                        </li>
                        <li class="card-detail option">
                            <img src="images/bullets.png" alt="bullet" class="circle" /> 2015
                        </li>
                    </ul>
                    <div class="project-card1 ">
                        <img src="${card.image}" alt="First Card" />
                    </div>
                    <div class='pop-text'>

                    <div class='text-pop'>
                    <p>
                      ${card.pop}
                    </p>
                    </div>

                  <div>
                    <div class="language1 inline">
                        <ul>
                        ${card.languages.map((lang) => `<li class="langu">${lang}</li>`).join('')}

                        </ul>
                    </div>
   <div class='pop-btns'>
     <button type="button" class="btn-one">See live 
     <img src="./images/Icon.png" alt="icon">
    </button>
    <button type="button" class="btn-one">See Source 
    <img src="./images/git.png" alt="git">
    </button>
  </div>
</div>
</div>
</div>
        </div>
  
  `;
  popup.innerHTML = '';
  popup.append(temp.content);

  const closePopup = document.querySelector('.close-popup');

  closePopup.addEventListener('click', () => {
    popup.classList.remove('d-popup');
  });
}

function getItemId(id) {
  cards.find((card) => {
    if (Number(card.id) === Number(id)) {
      displayPopup(card);
    }
    return undefined;
  });
}

cards.forEach((card) => {
  const temp = document.createElement('template');
  temp.innerHTML = `
<div class="${card.class}" >
            <div class="project-card1">
                <img src="${card.image}" alt="First Card" />
            </div>
            <div class="project-card2">
                <h2 class="head">${card.name}</h2>
                <div class="card-detail-box">
                    <ul>
                        <li class="card-detail canopy">CANOPY</li>
                        <li class="card-detail option">
                            <img src="images/bullets.png" alt="bullet" class="circle" /> Back End Dev
                        </li>
                        <li class="card-detail option">
                            <img src="images/bullets.png" alt="bullet" class="circle" /> 2015
                        </li>
                    </ul>

                    <p>
                      ${card.description}
                    </p>
                    <div class="language1 inline">
                        <ul>
                        ${card.languages.map((lang) => `<li class="langu">${lang}</li>`).join('')}
                            

                        </ul>
                    </div>
                </div>
                <button id="${card.id}" type="button" class="btn-one seeProject">See project</button>
            </div>
        </div>
`;
  cardHolder.append(temp.content);
});
const btns = document.querySelectorAll('.seeProject');
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    getItemId(e.target.id);
    popup.classList.add('d-popup');
  });
});
