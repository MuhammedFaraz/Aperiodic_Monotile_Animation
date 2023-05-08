function drawTile(context) {
    const colors = ["#f44336", "#2196f3", "#4caf50", "#ffc107"];
    const tileSize = 50;

    context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    context.fillRect(0, 0, tileSize, tileSize);
}

function drawCanvas() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const tiles = [];
    const tileSize = 50;
    const rows = Math.ceil(height / tileSize);
    const cols = Math.ceil(width / tileSize);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            tiles.push({ x: col * tileSize, y: row * tileSize });
        }
    }

    tiles.sort(() => Math.random() - 0.5);

    tiles.forEach(({ x, y }) => {
        context.save();
        context.translate(x, y);
        drawTile(context);
        context.restore();
    });
}

function animate() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const interval = 1000;

    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawCanvas();
    }, interval);
}

animate();
