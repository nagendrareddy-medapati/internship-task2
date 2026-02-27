import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function compileTemplates() {
    return {
        name: 'handlebars-templates',
        resolveId(id) {
            if (id === 'virtual-template') return id;
        },
        load(id) {
            if (id === 'virtual-template') {
                const templateDir = path.join(__dirname, 'src/templates');
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

                return `export default ${JSON.stringify(finalHTML)}`;
            }
        },
        transformIndexHtml() {
            const templateDir = path.join(__dirname, 'src/templates');
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

            return finalHTML;
        }
    };
}

export default defineConfig({
    plugins: [compileTemplates()],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: false
    },
    server: {
        port: 5173,
        open: true
    }
});
