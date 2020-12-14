// btn toggle
const toggleBtn = document.querySelector('.btn');
const linksContainer = document.querySelector('.links-container');
const navList = document.querySelector('.nav-list');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('show-list')
})

// fixed nav
const navbar = document.querySelector('.nav')
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    linksContainer.style.display="block";
    linksContainer.style.top = 0;
  } else {
    linksContainer.style.display="none";
  }
  if (scrollHeight > 500) {
    topLink.classList.add('show-list');
  } else {
    topLink.classList.remove('show-list');
  }
})

// click links

const moveToLinks = document.querySelectorAll('.move-to');
moveToLinks.forEach(link => {
  link.addEventListener('click', e=>{
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    let location = document.getElementById(id).offsetTop;
    const navHeight = navbar.offsetHeight;
    const listHeight = navList.offsetHeight;
    location = location-listHeight -listHeight -listHeight;

    if (listHeight > 94) {
      console.log(navHeight)
      console.log(listHeight)

      location = location + listHeight + listHeight+ listHeight-93;
    }
    window.scrollTo({top:location});

    navList.classList.remove('show-list')
  })
})
