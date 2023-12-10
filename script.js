// Banner animation
const bannerImg = document.querySelector('.banner img');
const bannerTagline = document.querySelector('.banner .tagline');

bannerImg.onload = function() {
  bannerImg.style.display = 'block';
  bannerTagline.style.opacity = 1;
};

// Navigation fade animation
const navigation = document.querySelector('.navigation');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    navigation.classList.add('active');
  } else {
    navigation.classList.remove('active');
  }
});

// Card flip animation
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', function() {
    card.classList.toggle('flipped');
  });
});
