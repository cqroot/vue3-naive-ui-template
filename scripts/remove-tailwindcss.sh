#!/bin/bash

npm uninstall -D tailwindcss postcss autoprefixer

rm -rf postcss.config.js
rm -rf tailwind.config.js
rm -rf src/main.css

sed -i '/main.css/d' src/main.ts
