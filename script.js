document.addEventListener('DOMContentLoaded', () => {
    const audioFileInput = document.getElementById('audioFile');
    const audioPlayer = document.getElementById('audioPlayer');
    const annotationsContainer = document.getElementById('annotations');
    const addAnnotationButton = document.getElementById('addAnnotation');

    let annotations = [];

    audioFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            audioPlayer.src = url;
        }
    });

    addAnnotationButton.addEventListener('click', () => {
        const currentTime = audioPlayer.currentTime;
        const note = prompt('Enter your annotation:');
        if (note) {
            annotations.push({ time: currentTime, note });
            renderAnnotations();
        }
    });

    function renderAnnotations() {
        annotationsContainer.innerHTML = '';
        annotations.forEach((annotation, index) => {
            const div = document.createElement('div');
            div.className = 'annotation';
            div.textContent = `Time: ${annotation.time.toFixed(2)}s - Note: ${annotation.note}`;
            annotationsContainer.appendChild(div);
        });
    }
});
