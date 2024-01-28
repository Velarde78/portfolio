let allAnchors = document.querySelectorAll('a');
const linkColor = 'white';

for (let i = 0; i < allAnchors.length; i++) {
    allAnchors[i].style.color = linkColor;
    allAnchors[i].style.textDecoration = 'none';
    allAnchors[i].style.fontWeight = 'bold';
    allAnchors[i].style.textDecoration = 'underline';

}

const aboutSection = document.getElementById('content');
const skillsSection = document.getElementById('skills');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');
