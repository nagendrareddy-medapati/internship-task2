import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templateDir = path.join(__dirname, 'src/templates');
const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

const layoutPath = path.join(templateDir, 'layout.hbs');
const indexPath = path.join(templateDir, 'index.hbs');

const layoutTemplate = fs.readFileSync(layoutPath, 'utf-8');
const indexTemplate = fs.readFileSync(indexPath, 'utf-8');

const compiledLayout = Handlebars.compile(layoutTemplate);
const compiledIndex = Handlebars.compile(indexTemplate);

const data = {
    title: 'Bootstrap Framework Guide - Internship Task 2',
    currentDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
};

const bodyContent = compiledIndex(data);
const finalHTML = compiledLayout({
    title: data.title,
    body: bodyContent
});

fs.writeFileSync(path.join(distDir, 'index.html'), finalHTML, 'utf-8');

console.log('✅ Templates compiled successfully!');
console.log(`📁 Output: ${path.join(distDir, 'index.html')}`);
