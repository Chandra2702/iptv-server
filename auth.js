function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === 'admin' && pass === '1234') {
    localStorage.setItem('auth', 'true');
    window.location.href = 'index.html';
  } else {
    alert('Login gagal!');
  }
}
