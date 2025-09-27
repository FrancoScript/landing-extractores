function vistaPrevia(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}

function cerrarPreview() {
    document.getElementById('lightbox').style.display = 'none';
}

document.getElementById('lightbox-img').addEventListener('click', function (event) {
    event.stopPropagation();
});