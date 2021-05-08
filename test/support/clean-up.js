const fs= require('fs-extra');
fs.emptyDir('reports/ui');
fs.emptyDir('reports/screenshots');
fs.remove('.tmp')
console.log('Reports & Artifact cleaned ---->>')