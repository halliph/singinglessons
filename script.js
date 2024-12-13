const genres = [
    { genre: "Pop" },
    { genre: "Rock" },
    { genre: "Jazz" },
    { genre: "Classical" },
    { genre: "Country" },
    { genre: "Blues" },
    { genre: "R&B" },
    { genre: "Disney" },
    { genre: "Musical Theater" },
];

document.getElementById("generateBtn").addEventListener("click", function () {
    const spinnerElement = document.getElementById("spinner");
    const genreTitleElement = document.getElementById("songTitle");

    // Show spinner and hide the result initially
    spinnerElement.style.display = "block";
    genreTitleElement.textContent = "";

    // Simulate a delay (e.g., fetching the genre)
    setTimeout(function () {
        // Hide the spinner
        spinnerElement.style.display = "none";

        // Get a random genre
        const randomGenre = genres[Math.floor(Math.random() * genres.length)];
        genreTitleElement.textContent = randomGenre.genre;
    }, 3000); // 3-second delay
});