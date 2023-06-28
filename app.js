// Select HTML elements

const sections = document.querySelectorAll('.section'); // select every HTML element with the class named "section"
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content'); // this returns: "<body class="main-content">"


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ''); // className = "control active-btn"; classList = ["control", "active-btn"]
            this.className += ' active-btn'; // this refers to sectBtn[i], "the clicked control"
        })
    }

    // Sections active class
    allSections.addEventListener('click', (event) =>{
        const id = event.target.dataset.id; // possible ids = {home, about, portfolio, contact}
        if(id){
            // Remove selected from the other controls
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
        
            event.target.classList.add('active');

            // Hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();

