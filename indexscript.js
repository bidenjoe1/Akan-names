const AkanForm = document.getElementById('AkanForm')
const resultDiv = document.getElementById('result');
const actualAkanName = document.getElementById('realAkanName');

const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleNames = ['Akosia', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

AkanForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);
    const gender = document.getElementById('gender').value;

    if (!birthdate || gender === '') {
        alert('Please proveide both birthdate and gender');
        return;
    }

    // This is ro claculate the dat of the week
    const dayOfWeek = birthdate.getDay();

    let realAkanName;
    if (gender === 'male') {
        realAkanName = maleNames[dayOfWeek];
    } else if (gender === 'female') {
        realAkanName = femaleNames[dayOfWeek];
    }
    actualAkanName.textContent = ` ${realAkanName} `;

});
