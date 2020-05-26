// Variables for when the count gets to 2 and less and changes sentence structure.
const twoBottlesOfBeer = "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.";
const oneBottleOfBeer =  "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.";
const noBottlesOfBeer = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";

class Lyrics {
    // For calling one verse
    verse(verseNumber) {
        
        let text = "";
        
        if ( verseNumber > 2 ) {
            text = verseNumber + " bottles of beer on the wall, " + verseNumber + " bottles of beer.\n" + "Take one down and pass it around, " + (verseNumber - 1) + " bottles of beer on the wall.";
        } else if ( verseNumber == 2 ) {
            text = twoBottlesOfBeer;
        } else if ( verseNumber == 1 ) {
            text = oneBottleOfBeer;
        } else {
            text = noBottlesOfBeer;
        }
        return text;
    }
    // For calling multiple verses
    verses(startVerse, endVerse) {
        
        let verses = "";
        
        for (let i = startVerse; i >= endVerse; i--) {
            verses += this.verse(i);
            if (i != endVerse) {
                verses += "\n\n";
            }
        }
        return verses;
    }
    // Calling entire song
    song() {
        return this.verses(99, 0);
    }
}

module.exports = Lyrics;