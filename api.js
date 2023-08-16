const setupElement = document.querySelector('#setup');
const punchlineElement = document.querySelector('#punch-line');
const ErrorElement = document.querySelector('#err-message');
const fetchBtn = document.querySelector('#get-punchline-btn');

fetchBtn.addEventListener('click', () => {
    fetch('https://official-joke-api.appspot.com/random_joke').then(function(data) {
        console.log(data);
        return data.json();
    }).then(function(response) {
        console.log(response);
        ErrorElement.style.display = 'none';
        setupElement.textContent = response.setup;
        punchlineElement.textContent = `punchline - ${response.punchline}`;
    }).catch(function(err) {
        console.log(err);
        setupElement.textContent = '';
        punchlineElement.textContent = '';
        ErrorElement.style.display = 'block';
     });
});
