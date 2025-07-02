const reviews = [
  {
    id: 1,
    name: 'Antonín Pleskač',
    job: 'Frontend & Backend developer - FakturaOnline',
    text: '„Ala is an energetic and motivated young woman who has recently embarked on her journey into coding and front-end development. Although she’s just beginning, she’s a quick learner, and her passion for the field propels her forward. During our collaboration, she proved to be conscientious and detail-oriented, especially when it came to editing content and texts—tasks that require patience and a keen eye. I believe Ala would thrive in a team that provides the right guidance and camaraderie, allowing her to fully develop her potential and grow further. If you’re looking for a reliable colleague with a strong enthusiasm for new technologies, Ala could be the perfect fit."',
  },
  {
    id: 2,
    name: 'Ing. David Šimůnek, PhD.',
    job: 'Head of solutions - Kyndryl',
    text: '„I had the pleasure of working with Alena on multiple technological implementations. She was a great value and support while developing a solution for our most demanding customer. She was able to cover a broad role from requirements gathering, their translation into the target solution and the actual implementation. Her desire for proficiency and education makes her an asset to a team.”',
  },
  {
    id: 3,
    name: 'Ing. Lukáš Marek',
    job: 'Majitel firmy - Mpox',
    text: '„Skvělá a rychlá domluva, web zpracován přesně podle našich představ dle předloženého zadání. Velmi potěšila i blesková odezva při dokončování práce a ladění detailů. Díky!"',
  },
  {
    id: 4,
    name: 'Michaela Kolková',
    job: 'Majitelka salonu - Beauty Misha',
    text: '„S Alcou jsem byla velice spokojená, perfektní komunikace a skvělá spolupráce. Přesně vystihla mou představou o webových stránkách. Je to profesionál a její práce vypadá úžasně. Mohu jedině doporučit. A budu ráda za další spolupráci."',
  },
];
document.addEventListener('DOMContentLoaded', (event) => {
  //the event occurred
  console.log('Alena Zachová - CV');

  document
    .querySelector('.intro__mouse-opposite')
    .addEventListener('click', (e) => {
      e.preventDefault();
      const offsetTop = 0;

      scroll({
        top: offsetTop,
        behavior: 'smooth',
      });
    });

  document.querySelector('.intro__mouse').addEventListener('click', (e) => {
    e.preventDefault();
    const href = document.querySelector('.intro__mouse').getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: 'smooth',
    });
  });
});

let text = document.querySelector('#text');
let author = document.querySelector('#name');
let job = document.querySelector('#job');

let currentItem = 0;

let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');

function loading() {
  showPerson(currentItem);
}
window.addEventListener('DOMContentLoaded', loading);

function increase() {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
}
nextBtn.addEventListener('click', increase);
prevBtn.addEventListener('click', down);

function down() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
}

function showPerson(person) {
  const item = reviews[currentItem];
  author.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
}
