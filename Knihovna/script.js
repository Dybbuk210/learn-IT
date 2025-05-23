function previewImage(event) {
    const imagePreview = document.getElementById('image-preview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Náhľad knihy">`;
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.innerHTML = `<p>Sem pridajte obrázok knihy</p>`;
    }
}