
/** Paste your extension ID here (chrome://extensions → Details → ID) **/
const EXTENSION_ID = "blkdkmabapelijeakldmmchkcanodifg"; // e.g. 'abcdefg123456...'

const btn = document.getElementById('openOptions');
const msg = document.getElementById('extMsg');

btn.addEventListener('click', () => {
  if (!EXTENSION_ID) {
    msg.style.display = 'block';
    msg.textContent = "Add your extension ID in site.js (EXTENSION_ID), then this button will open the Options page.";
    return;
  }
  // Tries to open the options page directly. Works only in Chrome with the extension installed.
  const url = `chrome-extension://${EXTENSION_ID}/options.html`;
  try {
    window.location.href = url;
  } catch (e) {
    msg.style.display = 'block';
    msg.textContent = "Couldn't open the extension from the site. Make sure it's installed and the ID is correct.";
  }
});
