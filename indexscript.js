const AkanForm = document.getElementById('AkanForm')
const resultDiv = document.getElementById('result');
const realAkanName = document.getElementById('realAkanName');

const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleNames = ['Akosia', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

AkanForm.addEventListener('submit', function(event) {
    event.preventDefault();
}