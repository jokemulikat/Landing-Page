const navNames = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

const ul = document.querySelector('#navbar__list');

for (let i = 0; i < navNames.length; i++) {
  const li = document.createElement('li');
  const navLink = document.createElement('a');

  navLink.setAttribute('href', `#section${i+1}`);
  navLink.innerHTML = `${navNames[i]}`;
  li.appendChild(navLink);
  ul.appendChild(li);
}

const sections = document.querySelectorAll('section');
const anchors = document.querySelectorAll('a');

const setToActive = () => {
  for (const section of sections) {

    const rect = section.getBoundingClientRect();

    if (rect.y >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) || rect.y <= 90) {
      section.classList.add('your-active-class');

      anchors.forEach((anchor) => {
        const sectionId = anchor.getAttribute('href').slice(1);

        if (sectionId == section.id) {
          anchor.setAttribute('class', 'menu__active');
        } else {
          anchor.removeAttribute('class', 'menu__active');
        }
      })
    } else {
      section.classList.remove('your-active-class');
    }
  }
}

//DOM listens to the scroll, and runs the setToActive function
document.addEventListener('scroll', () => {
  setToActive();
});

const scrollToAnchor = () => {
  anchors.forEach((anchor) => anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const sectionId = document.getElementById(anchor.getAttribute('href').slice(1));
    sectionId.scrollIntoView({
      behavior: 'smooth'
    });
  }));
}

//run the scrolling to the section by clicking on the anchor/nav link
scrollToAnchor();
