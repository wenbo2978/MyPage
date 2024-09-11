import { userInfo } from "../data/mainPageData.js";



const generatePage = () => {
  const sectionElement = document.querySelector('.main-box');
  console.log(sectionElement);
  const html = `
        <div class="social-container-outer">
            <img src="images/icon/icon-arrow-right-white.png" class="more-img">
            <div class="social-container-insider">
                <ul>
                    <li><img src="images/icon/email.png"><a href="mailto:${userInfo.email}">${userInfo.email}</a></li>
                    <li><img src="images/icon/github.svg"><a href="${userInfo.gitLink}">github</a></li>
                    <li><img src="images/icon/linkedin.jpg"><a href="${userInfo.linkedin}">Linkedin</a></li>
                </ul>
            </div>
        </div>
        <div class="box box-left">
            <img class="avatar" src="images/my2.jpg">
            <div>
                <p class="intro-p">Hi!</p>
                <p class="intro-p">This is</p>
                <p class="intro-p">Wenbo Chen</p>
            </div>
        </div>
        <div class="box box-right">
            <p class="content-title">SOFTWARE ENGINEER</p>
            <P class="content">${userInfo.skill}</P>
            
            <button class="btn-more">LEARN MORE</button>
        </div>`;

  sectionElement.innerHTML = html;

};

generatePage();


document.getElementsByClassName('btn-more')[0].onclick = ()=>{
  window.location.href='page/Project.html';
}


const socialContainer = document.querySelector('.social-container-outer');
const socialBox = document.querySelector('.social-container-insider');

socialContainer.addEventListener('mouseenter', () => {
    socialBox.style.display = 'block';
});

socialContainer.addEventListener('mouseleave', () => {
    // Delay hiding to allow for moving to the box
    setTimeout(() => {
        if (!socialContainer.matches(':hover')) {
            socialBox.style.display = 'none';
        }
    }, 100); // Adjust delay as needed
});
