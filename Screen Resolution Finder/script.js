function updateResolution() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = window.devicePixelRatio;
    
    document.getElementById('resolution').textContent = `${width} × ${height}`;
    document.getElementById('pixel-ratio').textContent = ratio.toFixed(2);
}

// Update on page load
updateResolution();

// Update when window is resized
window.addEventListener('resize', updateResolution);

// Update when refresh button is clicked
document.getElementById('refresh').addEventListener('click', updateResolution);

