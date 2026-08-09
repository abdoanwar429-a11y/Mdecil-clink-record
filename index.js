const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// صفحة الرئيسية
app.get('/', (req, res) => {
  res.send('<h1>مرحباً في موقعي!</h1><p>هذا الموقع يعمل بواسطة Node.js و Express</p>');
});

// صفحة جديدة عن المطور
app.get('/about', (req, res) => {
  res.send('<h2>عن المطور</h2><p>أنا أتعلم النشر على Render</p>');
});

// صفحة جديدة للتواصل
app.get('/contact', (req, res) => {
  res.send('<h2>تواصل معنا</h2><p>يمكنك التواصل عبر البريد الإلكتروني</p>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
