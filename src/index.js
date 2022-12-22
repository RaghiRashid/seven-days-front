document.querySelectorAll('.favoritar').forEach((el) =>
    el.addEventListener('click', function () {
        el.classList.toggle('text-coracao');
    })
);
