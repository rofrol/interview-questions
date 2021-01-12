/*
Title Case
Napisz funkcję toTitleCase, która przyjmuje ciąg znaków, zamienia pierwszą literę
każdego wyrazu na wielką. Pozostałe litery zamienia na małe, a następnie zwraca go.
Na przykład: “jan Maria ROKITA” → “Jan Maria Rokita”
*/

function toTitleCase(str) {
    // if (!!str) return str;
    str = str.toLowerCase();//.toTitleCase();
    return str.split(' ').map(word => [word[0].toUpperCase(), ...(word.slice(1,))].join('')).join(' ');
}

console.log(toTitleCase('jan Maria ROKITA'));