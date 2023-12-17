const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const currentText = document.getElementById('current');
const buttons = document.querySelectorAll('.options');
const footer = document.querySelector('footer');

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark_background');

    // Change text color for the current text
    if (body.classList.contains('dark_background')) {
        main.style.backgroundColor = '#303030';
        currentText.style.color = 'white';
        footer.style.backgroundColor = '#303030'; // Set the footer background color in dark mode
    } else {
        main.style.backgroundColor = '';
        currentText.style.color = ''; // Reset to default color
        footer.style.backgroundColor = ''; // Reset the footer background color
    }

    // Change text color for the buttons
    buttons.forEach(button => {
        if (body.classList.contains('dark_background')) {
            button.style.color = 'white';
        } else {
            button.style.color = ''; // Reset to default color
        }
    });
});

