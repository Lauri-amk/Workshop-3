'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const classname = document.body.classname; 
    if(classname= "light-theme") {
        this.textcontent = "dark"; 
    } else {
        this.textcontent = "light";
    }

     console.log('current class name: ' + classname);
});