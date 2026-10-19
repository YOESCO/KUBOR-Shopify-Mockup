import fs from 'node:fs/promises';
import path from 'node:path';
import { check } from '@shopify/theme-check-node';
import { Script } from 'node:vm';
const root = process.cwd();
const findings = await check(path.join(root, 'theme'));
for (const finding of findings) console.error(finding.check + ': ' + finding.message + ' (' + finding.uri + ')');
const files = JSON.parse(await fs.readFile('preview/pages.json', 'utf8'));
const missing = [];
for (const file of files) {
  const html = await fs.readFile(file, 'utf8');
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (!url || url.startsWith('#') || /^(https?:|data:|mailto:|tel:)/.test(url)) continue;
    const target = url.split(/[?#]/)[0];
    if (!target) continue;
    try { await fs.access(path.join(root, target)); } catch { missing.push(file + ' → ' + target); }
  }
}
new Script(await fs.readFile('theme/assets/kubor.js', 'utf8'));
new Script(await fs.readFile('preview/adapter.js', 'utf8'));
const templateDir = await fs.readdir('theme/templates');
const required = ['index.json','product.json','collection.json','cart.json','search.json','page.json','blog.json','article.json','list-collections.json','404.json','password.json','gift_card.liquid'];
for (const file of required) if (!templateDir.includes(file)) missing.push('Missing template: ' + file);
const report = { theme_check_findings: findings.length, preview_pages: files.length, broken_local_links: [...new Set(missing)], javascript_syntax: 'passed' };
await fs.writeFile('docs/validation.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
if (findings.length || missing.length) process.exitCode = 1;
