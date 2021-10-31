// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-active')
})

// Change Header's Background while scrolling
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        header.classList.add('header-background')
    } else {
        header.classList.remove('header-background')
    }
})


// Project===============================================================

// Left side
const projectLeftArr = [
    {
        title: 'YelpCamp on Heroku',
        description: 'Web Development',
        techs: ['NodeJs', 'ExpresJs', 'MongoDB'],
        image: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        title: 'Restaurant Management System',
        description: 'Front-End Development',
        techs: ['Angular 6+', 'Angular Animations', 'Firebase'],
        image: 'https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        title: 'Auction System',
        description: 'Web Development, E-Commerce',
        techs: ['C#, .Net', 'WebRTC, SignalR', 'MVC5'],
        image: 'https://image.freepik.com/free-vector/man-stand-leading-auction-hold-gavel_102902-161.jpg'
    },
]

document.getElementById('project-left').innerHTML = projectLeftArr.map(project =>
    `
    <div class="project">
        <div class="descreption">
            <div class="title">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <!-- <a href='#' target='_blank'><span>Source Code</span></a> -->
            </div>
            <div class="tech">
                ${project.techs.map(tech =>
        `<p>${tech}</p>`
    ).join('')
    }
            </div>
        </div>
        <img src=${project.image} alt="">
    </div> 
    `
).join('')

// Right side
const projecRightArr = [
    {
        title: 'Distance Learning',
        description: 'Web Development',
        techs: ['C#, .Net', 'WebRTC, SignalR', 'MVC5'],
        image: 'https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        title: 'Event Management',
        description: 'Web Development',
        techs: ['NodeJs', 'GraphQL', 'MongoDB'],
        image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        title: 'Personal Portfolio',
        description: 'Website Design',
        techs: ['HTML', 'CSS', 'JavaScript'],
        image: './assets/portfolio-pic.jpg'
    },
]

document.getElementById('project-right').innerHTML = projecRightArr.map(project =>
    `
    <div class="project">
        <div class="descreption">
            <div class="title">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <!-- <a href='#' target='_blank'><span>Source Code</span></a> -->
            </div>
            <div class="tech">
                ${project.techs.map(tech =>
        `<p>${tech}</p>`
    ).join('')
    }
            </div>
        </div>
        <img src=${project.image} alt="">
    </div> 
    `
).join('')


// Story===============================================================
const storyArr = [
    {
        image: './assets/illustrations/undraw_programming_2svr.svg',
        period: 'July\'21 - Continue',
        designation: 'Software Engineer at Amazon',
        description: 'Work collaboratively with clients and in-house agency teams to provide rapid, robust and client-acclaimed front- and back-end web development optimizing user experience'
    },
    {
        image: './assets/illustrations/undraw_Developer_activity_re_39tg.svg',
        period: 'Nov\'18 - June\'21',
        designation: 'Full-stack Developer at Ayuda Media Systems',
        description: 'Work collaboratively with clients and in-house agency teams to provide rapid, robust and client-acclaimed front- and back-end web development optimizing user experience'
    },
    {
        image: './assets/illustrations/undraw_teaching_f1cm.svg',
        period: 'Sep\'16 - June\'18',
        designation: 'Electrical & Computer Science (M. Engg.)',
        description: 'Completed Masters of Engineering in Computer Science with 3.5 CGPA at Concordia University, Montreal, Canada.'
    },
    {
        image: './assets/illustrations/undraw_Code_review_re_woeb.svg',
        period: 'Nov\'14 - Aug\'16',
        designation: 'Software Developer',
        description: 'Experiance working in green-field Project as well as handled routin maintainance, recovery & failover of database server. Design & Developed services for certain task, that save 50% times as well helped solve problems.'
    },
    {
        image: './assets/illustrations/undraw_feeling_proud_qne1.svg',
        period: 'July\'13 - Nov\'14',
        designation: 'Web Developer Intern',
        description: 'Good Development experience using Windows Platforms with ASP.NET with C#, NodeJs, AngularJs.REST APIs development to be consumed by mobile application team.'
    },
]

document.getElementById('story').innerHTML = storyArr.map(story =>
    `<div class="story">
    <div class="story-left">
        <img src=${story.image} alt="" >
    </div>
    <div class="story-right">
        <h4>${story.period}</h4>
        <h3>${story.designation}</h3>
        <p>
            ${story.description}
        </p>
    </div>
    </div>
    `
).join('')


