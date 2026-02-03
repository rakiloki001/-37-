
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 1️⃣ 找到 HTML 里的挂载点
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root not found in index.html');
}

// 2️⃣ 创建 React 18 的 root
const root = ReactDOM.createRoot(rootElement);

// 3️⃣ 渲染 App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
