const students = [
    { name: 'adj', birthday: '2000-01-01', course: 'Inglês' },
    { name: 'adj2', birthday: '2000-01-01', course: 'Francês' },
    { name: 'adj3', birthday: '2000-01-01', course: 'Espanhol' },
    // Add more students with their name, birthday, and course as needed
];

const redirectURLs = {
    'Inglês': 'https://docs.google.com/document/d/1Le_mlgkJmlaLZh9_F-3HPGAd5sVMfbq-ELljEGsA3Qo/edit?usp=sharing',
    'Francês': 'https://docs.google.com/document/d/1Le_mlgkJmlaLZh9_F-3HPGAd5sVMfbq-ELljEGsA3Qo/edit?usp=sharing',
    'Espanhol': 'https://docs.google.com/document/d/1Le_mlgkJmlaLZh9_F-3HPGAd5sVMfbq-ELljEGsA3Qo/edit?usp=sharing',
    // Add more courses and their corresponding URLs as needed
};

const courseDropdown = document.getElementById('course');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const nameInput = document.getElementById('name');
const birthdayInput = document.getElementById('birthday');
const h2Element = document.getElementById('popup-header'); // Added this line

students.forEach(student => {
    const option = document.createElement('option');
    option.value = student.course;
    option.textContent = student.course;
    courseDropdown.appendChild(option);
});

document.getElementById('showPopup').addEventListener('click', function(event) {
    if (event.target !== popup) {
        popup.style.display = 'block';
    }
});

closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Prevent closing when interacting with the input fields
nameInput.addEventListener('click', function(event) {
    event.stopPropagation();
});

birthdayInput.addEventListener('click', function(event) {
    event.stopPropagation();
});

courseDropdown.addEventListener('click', function(event) {
    event.stopPropagation();
});

h2Element.addEventListener('click', function(event) {
    event.stopPropagation();
});

// Close the pop-up when clicking outside
document.addEventListener('click', function(event) {
    if (event.target !== popup && event.target !== document.getElementById('showPopup')) {
        popup.style.display = 'none';
    }
});

document.getElementById('submit').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from propagating
    const birthday = birthdayInput.value;
    const name = nameInput.value;
    const selectedCourse = courseDropdown.value;

    const matchedStudent = students.find(student => student.birthday === birthday && student.name === name && student.course === selectedCourse);

    if (matchedStudent) {
        if (redirectURLs[selectedCourse]) {
            // Open the URL in a new tab
            window.open(redirectURLs[selectedCourse], '_blank');
        } else {
            alert('Seleção de curso inválida. Por favor, tente novamente. 🥺');
        }
    } else {
        alert('Credenciais de estudante ou seleção de curso inválidas. Por favor, tente novamente. 🥺');
    }
});

