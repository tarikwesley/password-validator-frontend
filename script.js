document
  .getElementById('passwordForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault()

    const password = document.getElementById('password').value

    const response = await fetch('http://localhost:8080/validate-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: password }),
    })

    const result = await response.json()
    document.getElementById('result').textContent =
      result.valid === true
        ? 'Password is valid!'
        : 'Password is invalid! ' + result.message
  })

document.getElementById('showPassword').addEventListener('change', function () {
  const passwordField = document.getElementById('password')
  passwordField.type = this.checked ? 'text' : 'password'
})

document.getElementById('password').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    document.querySelector('button[type="submit"]').click()
  }
})
