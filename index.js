window.addEventListener('DOMContentLoaded',function(){

    const navToggle = document.querySelector('.nav-toggle');
    
    const navBox = document.querySelector('.nav-box');

    
    navToggle.addEventListener('click', function(){
        navBox.classList.toggle('nav-center');
    })

    
    
    const btnEl  = document.querySelector('.btn');
    const showEdu = document.querySelector('.show-edu');
    const closeSch = document.querySelector('.close-school');
    
        btnEl.addEventListener('click',function(){
            showEdu.classList.add('display-edu');
        });
        
        closeSch.addEventListener('click',function(){
            showEdu.classList.remove('display-edu');
        });
    
    const btnElem  = document.querySelector('.btn1');
    const showColg = document.querySelector('.show-colg');
    const closeColg = document.querySelector('.close-colg');
    
        btnElem.addEventListener('click',function(){
            showColg.classList.add('display-colg');
        });
        
        closeColg.addEventListener('click',function(){
            showColg.classList.remove('display-colg');
        });
    
    
        const openJob = document.querySelector('.open-job');
        const jobsEl  = document.querySelector('.jobs');
        const closeJob = document.querySelector('.close-job');
    
    openJob.addEventListener('click',function(){
    
        jobsEl.classList.add('show-jobs');
    });
    
    closeJob.addEventListener('click', function(){
    
        jobsEl.classList.remove('show-jobs');
    });
    
    displaySkills();
    
    showProjects();
    
    });
    

    //running title
    const titleEl = document.querySelector('.title');
    
    const displayItem = 'Curriculum Vitae';
    
    let index=0;
    
        function displayTitle(){
                
                titleEl.innerText = displayItem.slice(0,index);
    
                index++;
    
                if(index > displayItem.length){
                    index = 0;
                }
                
            }
    
        setInterval(displayTitle,500);

    //running title
    
    //     function takeMenu(){
    
    //         const show = document.querySelectorAll('.shows');
    
    // show.forEach(function(links){
    //     links.addEventListener('click',function(e){
    //         e.preventDefault();
    //         const elementEl = e.currentTarget.getAttribute('href').slice(1);
    //         console.log(elementEl);
    //         const selection = document.getElementById(elementEl);
    //         let valueEl = selection.getBoundingClientRect();
    //         console.log(valueEl);
    
    //         window.scrollTo({
    //        left=0,
    //        top= valueEl,
    //         });
    
    //     });
    // });
    //     }
    

    // projects
    const projects =[
        {title:'Weather App',link:'https://vairamuthudg.github.io/weather/',img:'./projects/weather.jpeg'},
        {title:'Menu',link:'https://vairamuthudg.github.io/menuss/',img:'./projects/menu.jpeg'},
        {title:'Review',link:'https://vairamuthudg.github.io/reviews/',img:'./projects/review.jpeg'},
        {title:'Flames',link:'https://vairamuthudg.github.io/flames/',img:'./projects/flames.jpeg'},
        {title:'Password',link:'https://vairamuthudg.github.io/mypass/',img:'./projects/pass.jpeg'},
        {title:'Lorem',link:'https://vairamuthudg.github.io/loremipsum/',img:'./projects/lorem.jpeg'},
        {title:'Counter',link:'https://vairamuthudg.github.io/counter/',img:'./projects/count.jpeg'},
        {title:'Color flipper',link:'https://vairamuthudg.github.io/colorflipper/',img:'./projects/color.jpeg'},
        {title:'BMI',link:'https://vairamuthudg.github.io/mybmicalculator/',img:'./projects/bmi.jpeg'},
        {title:'Date & Time',link:'https://vairamuthudg.github.io/datentime/',img:'./projects/date.jpeg'},
        {title:'Word Counter',link:'https://vairamuthudg.github.io/wordcount/',img:'./projects/word.jpeg'}
        ];
    
    function showProjects(){
        const projectEl = document.querySelector('.projects');

        let displayPro = projects.map((item)=>{
            return `<div class="mine">
            <a href="${item.link}"><img src='${item.img}' class='img-pro'>
            <h3>${item.title}</h3></a>
        </div>`;
        }).join(" ");

        projectEl.innerHTML = displayPro;
    }

    // Skills
    const myskills = [
        {category:'one',value:'Proficient'},{category:'two',value:'Intermediate-Advanced'},{category:'three',value:'Beginner-Intermediate'}];
    
   function displaySkills(){
    
            const buttonSkill = document.querySelectorAll('.btn-skill');
            
            buttonSkill.forEach((btn)=>{
    
                btn.addEventListener('click',function(e){
                 
                    const choice = e.currentTarget.dataset.id;
    
                    const highlight = myskills.filter((item)=>{
                        if( choice === item.category){
                            return item;
                        }
                    });
                   
                    selectionChoice(highlight);
                    
                });
    
            });
    
        }
    
        function selectionChoice(item){
            const displaySk   = document.querySelector('.publish-skill');
            let myValue = item.map((display)=>{
             return `${display.value}`;
            });
            displaySk.innerText = myValue;
        }

    // Skills

    // Areas of Intrest
    
        const images = ['image0','image1','image2','image3','image4','image5'];

        let count = 0;
    
        function loadImages(){

        const myintrest = document.querySelector('.intrest');

        myintrest.style.backgroundImage = `url('image${count}.jpg')`;

                count +=1;
                
                    if(count >= images.length-1){
                    
                        count = 0;
                    }

        }

        setInterval(loadImages,1000);
                    
     //Areas of Intrest 

     //Questions
        
        const questionBox = document.querySelectorAll('.questions');
        
        const  answerBox = document.querySelector('.ans-box');

        questionBox.forEach((question)=>{
            const btn = question.querySelector('.qstn-btn');
            
            btn.addEventListener('click',function(){
                
                questionBox.forEach((item)=>{

                    if(item !== question){
                        item.classList.remove('show');
                    }
                })
                question.classList.toggle('show');
            })
        
        //Questions

        });


      