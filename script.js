
        const typeSelect = document.getElementById("type");
        const genButton = document.getElementById("gen");
        const dispDiv = document.getElementById("disp");
        const hexInput = document.getElementById("hex");

        function getRandomColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        function generateRandomGradient() {
            const numColors = Math.floor(Math.random() * 4) + 2; // Random number of colors between 2 and 5
            const colors = [];
            for (let i = 0; i < numColors; i++) {
                colors.push(getRandomColor());
            }
            return `linear-gradient(45deg, ${colors.join(", ")})`;
        }

        function updateBackgroundColor() {
            const selectedType = typeSelect.value;
            if (selectedType === "Solid") {
                const randomColor = getRandomColor();
                dispDiv.style.background = randomColor;
                hexInput.value = randomColor;
            } else if (selectedType === "Gradient") {
                const randomGradient = generateRandomGradient();
                dispDiv.style.background = randomGradient;
                hexInput.value = randomGradient;
            }
        }

        genButton.addEventListener("click", updateBackgroundColor);

        hexInput.addEventListener("input", function () {
            dispDiv.style.background = hexInput.value;
        });
        copyButton.addEventListener("click", function () {
            hexInput.select();
            document.execCommand("copy");
            copyButton.innerText = "Copied!";
            setTimeout(function () {
                copyButton.innerText = "Copy";
            }, 1500);
        });

        updateBackgroundColor();
