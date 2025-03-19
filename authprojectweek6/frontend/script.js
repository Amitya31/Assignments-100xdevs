const apiUrl = 'http://localhost:3000'; // Backend base URL

// Sign Up function
async function signup() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch(`${apiUrl}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const result = await response.json();
  document.getElementById('message').textContent = result.message;
}

// Sign In function
async function signin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch(`${apiUrl}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const result = await response.json();

  if (response.ok) {
    localStorage.setItem('token', result.token);
    document.getElementById('message').textContent = 'Sign in successful!';
    showMePage();
  } else {
    document.getElementById('message').textContent = result.message;
  }
}

// Show "Me" page
async function showMePage() {
  const token = localStorage.getItem('token');

  const response = await fetch(`${apiUrl}/me`, {
    method: 'GET',
    headers: { token },
  });

  const result = await response.json();

  if (response.ok) {
    document.getElementById('auth-container').innerHTML = `
      <h2>Welcome Back, ${result.username}!</h2>
      <p>Your password is: ${result.password}</p>
      <button onclick="logout()">Logout</button>
    `;
  } else {
    document.getElementById('message').textContent = result.message;
  }
}

// Logout function
function logout() {
  localStorage.removeItem('token');
  location.reload();
}
