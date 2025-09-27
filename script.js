function vistaPrevia(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}

function cerrarPreview() {
    document.getElementById('lightbox').style.display = 'none';
}