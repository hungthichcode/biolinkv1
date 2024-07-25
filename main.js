document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Đang mở liên kết: ' + link.textContent);
        window.open(link.href, '_blank');
    });
});