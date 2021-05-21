const loginForm = document.querySelector('.login-form');
const signupBtn = document.getElementById('signup-button');


loginForm.addEventListener('submit', async () => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
})

signupBtn.addEventListener('click', (event) => {
    event.preventDefault();

    document.location.replace('/signup');
})
