const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the APK with correct MIME type
app.get('/grubhub-orders.apk', (req, res) => {
  res.setHeader('Content-Type', 'application/vnd.android.package-archive');
  res.download(path.join(__dirname, 'grubhub-orders.apk'), 'grubhub-orders.apk');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
