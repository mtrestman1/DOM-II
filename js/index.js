// Your code goes here

const logoClick = document.querySelector('.logo-heading');
  logoClick.addEventListener('click', event => {
      event.target.style.color = '#CCCC00';
  });

const anchorTags = document.querySelector('.nav-link');
anchorTags.addEventListener("click", event => {
    event.preventDefault();
});

const sizeIncrease = document.querySelector('header p');
sizeIncrease.addEventListener('mouseenter', event => {
    event.target.style.fontSize = '24px';
});
sizeIncrease.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '18px';
});

const fakePrize = document.querySelector('body');
fakePrize.addEventListener('keydown', event => {
alert(alertMessage = `You Just Won a FREE Trip with FunBus! Click the Sign Up Button Below to Choose Which Trip You'd Like to Take!`)
});

const buttonFunction = document.querySelectorAll('.btn');
buttonFunction[0].addEventListener('click', event => {
    alert(alertMessage = `SORRY! You Can't Actually Sign Up. We're Just a Fake Business Josh Made Up.`)
});

buttonFunction[1].addEventListener('click', event => {
    alert(alertMessage = `SORRY! You Can't Actually Sign Up. We're Just a Fake Business Josh Made Up.`)
});

buttonFunction[1].addEventListener('click', event => {
    event.stopPropagation();
})

buttonFunction[2].addEventListener('mouseenter', event => {
    event.target.style.display = 'none';
});

const navLinks = Array.from(document.querySelectorAll('a'));
document.addEventListener('scroll', event => {
    navLinks.forEach(link => {
        link.style.color = '#CCCC00';
    })
    
});

const textSelection = document.querySelector('header p');
textSelection.addEventListener('select', event => {
    event.target.style.color = 'red';
})



