const artistContainer = document.querySelector('.artists')
const featureArtist = document.querySelector('.feature-artists');
let spany = document.createElement('span');
spany = ``;
let content = ``;

const menuIcon = document.querySelector('.burger');
const menuContainer = document.querySelector('.menu-container');
const closeButton = document.querySelector('.closeIcon');
const navs = document.querySelectorAll('.menu-container .side-link');

menuIcon.addEventListener('click', () => {
  menuContainer.classList.toggle('isActive');
});

closeButton.addEventListener('click', () => {
  menuContainer.classList.remove('isActive');
});

const bandMenbers = [
  {
    image: '/assets/images/angelo.jpg',
    job: 'Music Instructor at Universite de Montagne, Musician',
    name: 'Ivan Joel',
    decription: 'Ivan has a B.A in music. He graduated from Oxford in 2018 with First Class.',
    instrument: 'Bass Guitar',
  },
  {
    image: '/assets/images/cruz.jpg',
    job: 'Session Musician at Bell Labs, Musician',
    name: 'Lucia Chen',
    decription: 'Lucia is a PhD holder in Music from University College London (UCL) ',
    instrument: 'Singer',
  },
  {
    image: '/assets/images/ben.jpg',
    job: 'Recording Engineer at Apple, Musician',
    name: 'Jordan Philip',
    decription: 'Jordan graduated from MIT back in 2018. His unparallel piano skills make him a a core member in the band',
    instrument: 'Electronic Keyboard',
  },
  {
    image: '/assets/images/barry.jpg',
    job: 'Music composer at the Univerity of Buea, Musician',
    name: 'Barry Paul',
    decription: `Barry is an excellent composer. He is the brain behind all the wonderful songs you have been hearing. He is just the best
    Barry plays the drum.`,
    instrument: 'Drum',
  },
  {
    image: '/assets/images/nany.jpg',
    job: 'Music Publicist, Musician',
    name: 'Brielle Laeticia',
    decription: 'Brielle Graduated from Cambridge several years back. She works closely with media outlets, marketers and venues, She also plays the guitar',
    instrument: 'Electric Guitar',
  },
  {
    image: '/assets/images/scot.jpg',
    job: 'Sound Engineer at EA, Musician',
    name: 'Jefferey Glen',
    decription: `Jefferey is a sound engineer at EA. He joined the Band 5 years ago and is responsible for mixing sounds and other playback stuff. he is 
    very talented`,
    instrument: 'Mixer',
  },
  
];

const createContent = () => {
  for (let i = 0; i < bandMenbers.length; i++) {
    content += `
      <ul class="u-listi">
        <li class="criteria primary-color"><img class="member-face image-dimension" src=${bandMenbers[i].image} alt=""></li>
        <li class="exp">
          <p class="highlight secondary-color">${bandMenbers[i].name}</p> 
          <div class="instrument primary-color">
            ${bandMenbers[i].job}
            </div>
          <div class="ze-line"></div>
          <div class="more-info">
            <p class="sub-highlight secondary-color">
            ${bandMenbers[i].decription}
            </p>
            <div class="instrument primary-color">
            ${bandMenbers[i].instrument}
            </div>
          </div>
        </li>
      </ul>
    `;
  }

  content += `
  <div class="d-flex a-btn">
    <button type="button" id="theBtn" class="exp-btn program-btn">See more</button>
  </div>
  `;
  artistContainer.innerHTML = content;
}

window.onload =  createContent();