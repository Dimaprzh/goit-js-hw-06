const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (!email.value || !password.value) {
        return alert('Please fill another field!')
    }
    const userData = { email: email.value, Password: password.value }
    
    console.log(userData)
    event.currentTarget.reset()
}