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

const eventslist = document.querySelector('.events-list');
const morebtn = document.querySelector('.more-btn');

function loadEvents(pastEventsdata = []) {
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

function loadTwoEvents(pastEventsdata = []) {
  let eventContent = '';

  const firstTwoEvents = pastEventsdata.slice(0, 2);

  firstTwoEvents.forEach((eventsdata) => {
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

window.addEventListener('load', () => {
  const eventslist = document.querySelector('.events-list');

  eventslist.innerHTML = loadTwoEvents(pastEvents);
});
