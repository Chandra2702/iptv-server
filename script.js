function loadPlaylist() {
  fetch('playlist/premium.m3u')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      const container = document.getElementById('playlist');
      let title = '';

      lines.forEach(line => {
        if (line.startsWith('#EXTINF')) {
          title = line.split(',')[1];
        } else if (line.startsWith('http')) {
          const div = document.createElement('div');
          div.className = 'channel';
          div.innerHTML = `<strong>${title}</strong><br><video src="${line}" controls width="300"></video>`;
          container.appendChild(div);
        }
      });
    });
}
