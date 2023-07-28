const projectBox = [{
  project_name: 'E-commerce cara',
  project_link: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-b0160.appspot.com/o/cara%20video.mp4?alt=media&token=50bb27f9-c243-4c37-9306-3b0db41f5c81',
  project_desc: "Cara",
  techologies: "Html , css , js , firebase",
  link: "https://github.com/rohitkrthakur/rohitkrthakur-e-commerce-website"
},
{
  project_name: 'Netflix clone',
  project_link: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-b0160.appspot.com/o/Netflix%20Clone%20-%20Google%20Chrome%202023-06-30%2015-19-57.mp4?alt=media&token=1cfadecb-471a-4175-bbb5-dcabd0fa5519',
  project_desc: "Netflix",
  techologies: "Html , css , java script , Api",
  link: "https://github.com/rohitkrthakur/Netflix-Clone/tree/main/Netflix%20clon"
},
{
  project_name: 'Weather-aap',
  project_link: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-b0160.appspot.com/o/My%20Weather%20APP%20-%20Google%20Chrome%202023-06-30%2015-09-33.mp4?alt=media&token=e956b26c-677e-44e1-a106-aebdb8807c77',
  project_desc: "weather app",
  techologies: "Html , css , java script , Api",
  link: "https://github.com/rohitkrthakur/Weather-aap"
},
{
  project_name: 'Todo-app',
  project_link: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-b0160.appspot.com/o/TO-DO%20App%20-%20Google%20Chrome%202023-06-30%2015-00-16.mp4?alt=media&token=ff491512-2ff5-411b-aa71-815f48b811a7',
  project_desc: "Todo",
  techologies: "Html , css , java script",
  link: "https://github.com/rohitkrthakur/Todo-app"
},
{

  project_name: 'Tip Calculator',
  project_link: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-b0160.appspot.com/o/Tip%20Calculator%20-%20Google%20Chrome%202023-06-30%2014-46-49.mp4?alt=media&token=bf3e02f5-6866-4e20-b5f7-5bd7f40e994f',
  project_desc: "Bill split calculator",
  techologies: "Html , css, java script",
  link: "https://github.com/rohitkrthakur/Bill-split-calculator"
},
{
  project_name: 'Social media buttons',
  project_link: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-b0160.appspot.com/o/Social%20Media%20Button%20With%20Tooltip%20-%20Google%20Chrome%202023-06-30%2013-45-11.mp4?alt=media&token=3d96be73-c2b5-4c98-a178-e3fe924ed9d7',
  project_desc: "Buttons",
  techologies: "Html , css ",
  link: "https://github.com/rohitkrthakur/social-media-buttons"


}]
const clickmeBtn = document.querySelector('.btn')
const modal = document.querySelector('.modal__inner')
const cencle = document.querySelector('.modal__close')

function showModal() {
  modal.classList.add('modal__inner--show')


}
function removeModal() {
  modal.classList.remove('modal__inner--show')
}


function getProjectbox() {
  projectBox.map((projectBox, index) => {
    document.querySelector('.portfolioitemcontainer').innerHTML += `
        <div class="projectsbox">
        <h2 class="projectName">${projectBox.project_name}</h2>
        <video class="projectvid"src="${projectBox.project_link}"controls></video>
        <button id="modalButton" onclick="showModal(${index})" class="viewMore">View more <i class="uil uil-arrow-right"></i></button>
        
       </div>
        `
  })

}
getProjectbox()


var modalContainer = document.getElementById("modalContainer");

function showModal(index) {
  var modalContainer = document.getElementById('modalContainer');
  modalContainer.style.display = "block"; // Show the modal

  var modalContent = document.createElement('div');
  modalContent.id = "modalContent";

  modalContent.innerHTML = `
      <span class="close">&times;</span>
      <center>
        <h2 class="">${projectBox[index].project_name}</h2>
      </center>
      <video class="modalVideo" src="${projectBox[index].project_link}" controls></video>
      
      <span>${projectBox[index].project_desc}</span>
      <h3>Technologies Used:</h3>
      <span>${projectBox[index].techologies}</span>
      <h3>Code link:</h3>
      <a href="${projectBox[index].link}" target="_blank">click</a>
      <!-- Add the code link here -->
    `;

  modalContainer.innerHTML = ''; // Clear previous content
  modalContainer.appendChild(modalContent);

  // Close the modal when the close button is clicked
  var closeButton = document.getElementsByClassName("close")[0];
  closeButton.addEventListener("click", function () {
    modalContainer.style.display = "none"; // Hide the modal
  });

  // Close the modal when the user clicks outside of it
  window.addEventListener("click", function (event) {
    if (event.target == modalContainer) {
      modalContainer.style.display = "none"; // Hide the modal
    }
  });
}






