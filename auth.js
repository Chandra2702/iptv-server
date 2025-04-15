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
<body onload="checkLogin(); loadPlaylist();">
  <h1>IPTV Dashboard</h1>
  <button onclick="logout()">Logout</button>
  <div id="playlist"></div>
  <script>
    function checkLogin() {
      if (localStorage.getItem('auth') !== 'true') {
        window.location.href = 'login.html';
      }
    }
function logout() {
  localStorage.removeItem('auth');
  window.location.href = 'login.html';
}
