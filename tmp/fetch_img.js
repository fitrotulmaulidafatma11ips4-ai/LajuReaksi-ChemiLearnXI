const https = require('https');

https.get('https://www.kompasiana.com/image/ikaniamah5580/6980d206ed64150ace1575a4/ika-chemrate?page=1', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const match = data.match(/<img[^>]+src="([^">]+)"[^>]*>/g);
    if (match) {
      match.forEach(m => {
        if (m.includes('assets.kompasiana.com/items/album/')) {
          console.log(m);
        }
      });
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
