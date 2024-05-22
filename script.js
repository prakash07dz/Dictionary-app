document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchWord();
    };
});
async function searchWord() {
    const word = document.getElementById('search-input').value;
    if (word) {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!response.ok) {
                throw new Error('Word not found');
            }
            const data = await response.json();
            const definition = data[0].meanings[0].definitions[0].definition;
            document.getElementById('definition').innerText = definition;
        } catch (error) {
            document.getElementById('definition').innerText = 'Definition not found. Please try another word.';
        }
    } else {
        document.getElementById('definition').innerText = "Please enter a word to search.";
    }
}