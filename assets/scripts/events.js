const pastEvents = [
  {
    id: 1,
    image: 'event-2.jpg',
    name: 'Anual general meeting',
    location: 'Upper Hill, Nairobi',
    details:
      'Everyone is welcome as we reflect on our progress and plan for the future',
  },
  {
    id: 2,
    image: 'event-4.jpg',
    name: 'Feed the needy',
    location: 'Nairobi city',
    details: 'A walk around the city helping the needy with food and clothing',
  },
  {
    id: 3,
    image: 'event-3.jpg',
    name: 'Run for the needy',
    location: 'Lewa downs, Meru',
    details: 'Lets run and raise funds for lewa childrens home',
  },
  {
    id: 4,
    image: 'event-5.jpg',
    name: 'Exchange programme',
    location: 'South Africa',
    details: 'Venue at St. Marys church',
  },
  {
    id: 5,
    image: 'event-6.jpg',
    name: 'Fundraising',
    location: 'Makueni',
    details: 'Venue at the main town hall.',
  },
  {
    id: 6,
    image: 'event-1.jpg',
    name: 'School drive',
    location: 'Kisumu',
    details: 'Venue at Maseno Secondary school',
  },
];

function loadEvents(pastEventsdata = [], startIndex = 0, count = 2) {
  let eventContent = '';
  const endIndex = Math.min(startIndex + count, pastEventsdata.length);

  for (let i = startIndex; i < endIndex; i += 1) {
    const eventsdata = pastEventsdata[i];
    eventContent += `
      <div class="project">
        <img src="/first-capstone-project/assets/images/${eventsdata.image}" />
        <div class="info">
          <h4>${eventsdata.name}</h4>
          <p>${eventsdata.location}.</p>
          <hr />
          <p class="project-details">${eventsdata.details}</p>
        </div>
      </div>`;
  }

  return eventContent;
}

function loadEventsDesktop(pastEventsdata = []) {
  let eventContent = '';
  pastEventsdata.forEach((eventsdata) => {
    eventContent += `
            <div class="project">
                <img src="/first-capstone-project/assets/images/${eventsdata.image}" />
                <div class="info">
                    <h4>${eventsdata.name}</h4>
                    <p>${eventsdata.location}.</p>
                    <hr />
                    <p class="project-details">${eventsdata.details}</p>
                </div>
            </div>`;
  });

  return eventContent;
}

document.addEventListener('DOMContentLoaded', () => {
  const eventsContainer = document.querySelector('.events-list');
  const showMoreBtn = document.getElementById('more-btn');
  const showLessBtn = document.getElementById('less-btn');

  // show the first two events
  if (window.innerWidth <= 767) {
    eventsContainer.innerHTML = loadEvents(pastEvents);
  } else {
    eventsContainer.innerHTML = loadEventsDesktop(pastEvents);
    showMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'none';
  }

  let startIndex = 2;
  const countToShow = 4;

  showMoreBtn.addEventListener('click', () => {
    const moreEventsContent = loadEvents(pastEvents, startIndex, countToShow);
    eventsContainer.innerHTML += moreEventsContent;
    startIndex += countToShow;

    if (startIndex >= pastEvents.length) {
      showMoreBtn.style.display = 'none';
      showLessBtn.style.display = 'flex';
    }
  });

  showLessBtn.addEventListener('click', () => {
    eventsContainer.innerHTML = loadEvents(pastEvents, 0, countToShow - 2);
    startIndex = 0;
    showMoreBtn.style.display = 'flex';
    showLessBtn.style.display = 'none';
  });
});
