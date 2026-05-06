import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read config
const configPath = path.join(__dirname, '../firebase-applet-config.json');
const firebaseConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

const imagesDir = path.join(__dirname, '../public/menu-images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const getSmartImagePath = (name) => {
  const filename = name.toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
  return `/menu-images/${filename}.jpg`;
};

async function downloadImageAndSave(url, localPath) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(path.join(__dirname, '../public', localPath), buffer);
    return true;
  } catch (err) {
    console.error(`Failed to download ${url}:`, err.message);
    return false;
  }
}

async function run() {
  console.log('Fetching menu items from Firestore...');
  const menuSnapshot = await getDocs(collection(db, 'menuItems'));
  
  const documents = [];
  menuSnapshot.forEach(doc => {
    documents.push({ id: doc.id, ...doc.data() });
  });
  
  console.log(`Found ${documents.length} items. Downloading images...`);
  
  let downloadedCount = 0;

  for (const item of documents) {
    if (item.image && item.image.startsWith('http')) {
      // Exclude placeholder images if needed, or download them anyway
      const localPath = getSmartImagePath(item.name);
      console.log(`Downloading: ${item.name}`);
      
      const success = await downloadImageAndSave(item.image, localPath);
      
      if (success) {
        downloadedCount++;
      }
    }
  }
  
  console.log(`Finished processing! Downloaded ${downloadedCount} images.`);
  process.exit(0);
}

run().catch(console.error);
