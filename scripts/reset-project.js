#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
const appExampleDir = path.join(__dirname, '..', 'app-example');

// Only move if app directory exists and app-example doesn't
if (fs.existsSync(appDir) && !fs.existsSync(appExampleDir)) {
  fs.renameSync(appDir, appExampleDir);
  console.log('✅ Moved app to app-example');
}

// Create new app directory
fs.mkdirSync(appDir, { recursive: true });
fs.writeFileSync(path.join(appDir, '_layout.tsx'), 'export default function RootLayout() {\n  return null;\n}\n');
console.log('✅ Created new app directory');
