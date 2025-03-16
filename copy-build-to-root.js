const fs = require('fs');
const path = require('path');

// Function to copy file or directory recursively
function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  
  if (stats.isDirectory()) {
    // Create directory if it doesn't exist
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    // Copy each file in the directory
    const files = fs.readdirSync(src);
    for (const file of files) {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      copyRecursive(srcPath, destPath);
    }
  } else {
    // Copy file
    fs.copyFileSync(src, dest);
  }
}

// Files/directories to exclude from copying to root
const excludeList = [
  '.git',
  'node_modules',
  'src',
  'public',
  'package.json',
  'package-lock.json',
  'README.md',
  'copy-build-to-root.js',
  '.gitignore',
  '.env'
];

// Copy build directory contents to root
const buildDir = path.join(__dirname, 'build');
const files = fs.readdirSync(buildDir);

for (const file of files) {
  const srcPath = path.join(buildDir, file);
  const destPath = path.join(__dirname, file);
  
  // Skip if file/directory already exists in root and is in exclude list
  if (fs.existsSync(destPath) && excludeList.includes(file)) {
    console.log(`Skipping ${file} (in exclude list)`);
    continue;
  }
  
  console.log(`Copying ${file} to root directory`);
  copyRecursive(srcPath, destPath);
}

console.log('Build files copied to root directory successfully!');
