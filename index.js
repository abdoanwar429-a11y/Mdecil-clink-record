const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// خدمة جميع الملفات الثابتة (HTML, CSS, JS)
app.use(express.static(__dirname));

// أي طلب يصل، أرسل له ملف index.html الخاص بالعيادة
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
