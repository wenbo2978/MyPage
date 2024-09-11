import { projectList } from "../data/projectData.js";

const loadProjects = ()=> {
  let myHtml = "";
  const divElement = document.querySelector('.card-div');
  projectList.forEach((Project) => {
    myHtml += `<div class="card">
                <a href="${Project.pageLink}">
                  <img
                    class="card-image"
                    src="../images/${Project.img}"
                    alt="profile picture"></img>
                </a>
                
                <h4 class="card-name">${Project.name}</h4>
                <p class="card-category">${Project.category}</p>
              </div>`
  });
  divElement.innerHTML = myHtml;
}


loadProjects();