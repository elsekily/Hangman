var numberOfTries = 0;
const history = [];

arr = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"];
movies = ['The Shawshank Redemption', 'The Godfather', 'The Godfather Part II', 'Il buono il brutto il cattivo', 'Pulp Fiction', 'Inception', 'Schindler s List', '12 Angry Men', 'One Flew Over the Cuckoo s Nest', 'The Dark Knight', 'Star Wars Episode V The Empire Strikes Back', 'The Lord of the Rings The Return of the King', 'Shichinin no samurai', 'Star Wars', 'Goodfellas', 'Casablanca', 'Fight Club', 'Cidade de Deus', 'The Lord of the Rings The Fellowship of the Ring', 'Rear Window', 'C era una volta il West', 'Raiders of the Lost Ark', 'Toy Story 3', 'Psycho', 'The Usual Suspects', 'The Matrix', 'The Silence of the Lambs', 'Se7en', 'Memento', 'It s a Wonderful Life', 'The Lord of the Rings The Two Towers', 'Sunset Blvd', 'Dr Strangelove or How I Learned to Stop Worrying and Love the Bomb', 'Forrest Gump', 'L on', 'Citizen Kane', 'Apocalypse Now', 'North by Northwest', 'American Beauty', 'American History X', 'Taxi Driver', 'Terminator 2 Judgment Day', 'Saving Private Ryan', 'Vertigo', 'Le fabuleux destin d Am lie Poulain', 'Alien', 'WALL E', 'Lawrence of Arabia', 'The Shining', 'Sen to Chihiro no kamikakushi', 'Paths of Glory', 'A Clockwork Orange', 'Double Indemnity', 'To Kill a Mockingbird', 'The Pianist', 'Das Leben der Anderen', 'The Departed', 'M', 'City Lights', 'Aliens', 'Eternal Sunshine of the Spotless Mind', 'Requiem for a Dream', 'Das Boot', 'The Third Man', 'L A Confidential', 'Reservoir Dogs', 'Chinatown', 'The Treasure of the Sierra Madre', 'Modern Times', 'Monty Python and the Holy Grail', 'La vita bella', 'Back to the Future', 'The Prestige', 'El laberinto del fauno', 'Raging Bull', 'Nuovo Cinema Paradiso', 'Singin in the Rain', 'Some Like It Hot', 'The Bridge on the River Kwai', 'Rash mon', 'All About Eve', 'Amadeus', 'Once Upon a Time in America', 'The Green Mile', 'Full Metal Jacket', 'Inglourious Basterds', '2001 A Space Odyssey', 'The Great Dictator', 'Braveheart', 'Ladri di biciclette', 'The Apartment', 'Up', 'Der Untergang', 'Gran Torino', 'Metropolis', 'The Sting', 'Gladiator', 'The Maltese Falcon', 'Unforgiven', 'Sin City', 'The Elephant Man', 'Mr Smith Goes to Washington', 'Oldeuboi', 'On the Waterfront', 'Indiana Jones and the Last Crusade', 'Star Wars Episode VI Return of the Jedi', 'Rebecca', 'The Great Escape', 'Die Hard', 'Batman Begins', 'Mononoke hime', 'Jaws', 'Hotel Rwanda', 'Slumdog Millionaire', 'Det sjunde inseglet', 'Blade Runner', 'Fargo', 'No Country for Old Men', 'Heat', 'The General', 'The Wizard of Oz', 'Touch of Evil', 'Per qualche dollaro in pi', 'Ran', 'Y jinb', 'District 9', 'The Sixth Sense', 'Snatch', 'Donnie Darko', 'Annie Hall', 'Witness for the Prosecution', 'Smultronst llet', 'The Deer Hunter', 'Avatar', 'The Social Network', 'Cool Hand Luke', 'Strangers on a Train', 'High Noon', 'The Big Lebowski', 'Hotaru no haka', 'Kill Bill Vol 1', 'It Happened One Night', 'Platoon', 'The Lion King', 'Into the Wild', 'There Will Be Blood', 'Notorious', 'Million Dollar Baby', 'Toy Story', 'Butch Cassidy and the Sundance Kid', 'Gone with the Wind', 'Sunrise A Song of Two Humans', 'The Wrestler', 'The Manchurian Candidate', 'Trainspotting', 'Ben Hur', 'Scarface', 'The Grapes of Wrath', 'The Graduate', 'The Big Sleep', 'Groundhog Day', 'Life of Brian', 'The Gold Rush', 'The Bourne Ultimatum', 'Amores perros', 'Finding Nemo', 'The Terminator', 'Stand by Me', 'How to Train Your Dragon', 'The Best Years of Our Lives', 'Lock Stock and Two Smoking Barrels', 'The Thing', 'The Kid', 'V for Vendetta', 'Casino', 'Twelve Monkeys', 'Dog Day Afternoon', 'Ratatouille', 'El secreto de sus ojos', 'Gandhi', 'Star Trek', 'Ikiru', 'Le salaire de la peur', 'Les diaboliques', '8', 'The Princess Bride', 'The Night of the Hunter', 'Judgment at Nuremberg', 'The Incredibles', 'Tonari no Totoro', 'The Hustler', 'Good Will Hunting', 'The Killing', 'In Bruges', 'The Wild Bunch', 'Network', 'Le scaphandre et le papillon', 'A Streetcar Named Desire', 'Les quatre cents coups', 'La strada', 'The Exorcist', 'Children of Men', 'Stalag 17', 'Persona', 'Who s Afraid of Virginia Woolf', 'Ed Wood', 'Dial M for Murder', 'La battaglia di Algeri', 'L t den r tte komma in', 'All Quiet on the Western Front', 'Big Fish', 'Magnolia', 'Rocky', 'La passion de Jeanne d Arc', 'Kind Hearts and Coronets', 'Fanny och Alexander', 'Mystic River', 'Manhattan', 'Barry Lyndon', 'Kill Bill Vol 2', 'Mary and Max', 'Patton', 'Rosemary s Baby', 'Duck Soup', 'Festen', 'Kick Ass', 'Fa yeung nin wa', 'Letters from Iwo Jima', 'Roman Holiday', 'Pirates of the Caribbean The Curse of the Black Pearl', 'Mou gaan dou', 'The Truman Show', 'Crash', 'Hauru no ugoku shiro', 'His Girl Friday', 'Arsenic and Old Lace', 'Harvey', 'Le notti di Cabiria', 'Trois couleurs Rouge', 'The Philadelphia Story', 'A Christmas Story', 'Sleut', 'King Kon', 'Bom yeoreum gaeul gyeoul geurigo bo', 'Rop', 'Monsters', 'Tenk no shiro Rapyut', 'Yeopgijeogin geunye', 'Mulholland D', 'The Man Who Shot Liberty Vala'];

var word = movies[Math.floor(Math.random() * movies.length)];

function buildInputWord() {
    var output = "";
    for (let i = 0; i < word.length; i++) {
        if (IsLetter(word.charAt(i)))
            output += '-';
        else {
            output += ' ';
        }
    }
    return output;
}
var inputWord = buildInputWord();
document.getElementById("word").innerText = inputWord;

document.addEventListener('keydown', function(event) {

    if (IsLetter(event.key) && !contains(history, event.key)) {

        if (InWord(event.key)) {
            var indeces = getIndicesOf(event.key, word, false);

            for (let i = 0; i < indeces.length; i++) {
                inputWord = setCharAt(inputWord, indeces[i], event.key.toUpperCase());
                document.getElementById("word").innerText = inputWord;
            }
            if (word.toLowerCase() == inputWord.toLowerCase()) {
                if (alert('Winner!\n' + word)) {} else window.location.reload();
            }
        } else {
            document.getElementById(arr[numberOfTries++]).innerText = event.key.toUpperCase();

            if (numberOfTries == arr.length) {
                if (alert('Loser!\n' + word)) {} else window.location.reload();
            }

        }
        history.push(event.key);
    }
});

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

function InWord(letter) {
    return word.toLowerCase().includes(letter.toLowerCase());
}

function IsLetter(letter) {
    return /^[a-zA-Z]+$/.test(letter) && letter.length == 1;
}

function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0,
        index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

function contains(arr, char) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === char) {
            return true;
        }
    }
    return false;
}