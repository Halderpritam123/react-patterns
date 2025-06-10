// server.js
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
});

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./src/App').default;

const app = express();

app.get('/', (req, res) => {
  const content = ReactDOMServer.renderToString(React.createElement(App));

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  res.send(html);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
