const homeInformation = {
  img: 'my2.jpg',
  name: 'Hi this is Wenbo, welcome to my page',
  title: 'My Introduction',
  content: 'My first time to publish my webpage on github. I will update more about me in this webpage.'
};

const aboutMe = {
  title: 'About me',
  content: 'Hi, I am a master student in StonyBrook University, marjor in Computer Engineering.'
}


const generateHome = () => {
  const sectionElement = document.querySelector('.js-section-home');
  console.log(sectionElement);
  const html = `<img src="images/${homeInformation.img}" class="admin img-fluid" alt="mobile-image">
  <h4>${homeInformation.name}</h4>
  <h2>${homeInformation.title}</h2>
  <p>${homeInformation.content}</p>`;

  sectionElement.innerHTML = html;

};

const generateAbout = () => {
  const sectionElement = document.querySelector('.js-section-about');
  const html = `<h3 class="head-w3ls">${aboutMe.title}</h3>
      <p>${aboutMe.content} </p>`;
  sectionElement.innerHTML = html;
};

generateHome();
generateAbout();