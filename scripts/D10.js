/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
console.log('La varaibile somma vale: ', sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);
console.log('La varaibile random vale: ', random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: 'Umberto',
  surname: 'Tramontano',
  age: 32,
};

console.log('Oggetto creato: ', me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log('Oggetto "me" senza la proprietà "age" ', me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ['C', 'C#', 'Javascript', 'HTML5', 'CSS3'];
console.log('Aggiungo una proprietà con le skills ', me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('Java');
console.log('La proprietà skills dopo il push(): ', me.skills);
console.log('Oggetto"me" dopo il push() ', me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log('La proprietà skills dopo il pop(): ', me.skills);
console.log('Oggetto"me" dopo il pop() ', me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
  let randomNum = Math.ceil(Math.random() * 6);
  return randomNum;
};
//Chiamata della funzione per eseguirla / questa funzione non ritorna nessun valore
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n2 > n1) {
    return n2;
  } else {
    const str = 'They are the same!';
    return str;
  }
};

//chiamata della funzione con i parametri passati per la sua esecuzione
console.log('Who is bigger? ', whoIsBigger(298, 299));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (str) {
  // split è un metodo delle stringhe che 'taglia' la stringa in altre stringhe
  //seguendo lo schema fornito nelle parentsi (), in questo caso uno spazio vuoto ' ' ;
  const words = str.split(' ');
  return words;
};

console.log(splitMe('Hi I am Umberto Tramontano')); // dovrebbe uscire un array ['Hi', 'I', 'am' 'Umberto']

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (str, bool) {
  if (bool === true) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
};

const myString = deleteOne('EPICODE', true); // stamperà in conosle la stringa 'PICODE'
console.log(myString);

const myOtherString = deleteOne('EPICODE', false); // stamperà in console la stringa 'EPICOD'
console.log(myOtherString);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (str) {
  return str.replace(/[0-9]/g, '');
};

console.log(onlyLetters('I h4ve 4 dogs'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (str) {
  if (str.includes('@') && str.slice(str.indexOf('@')).includes('.')) {
    return true;
  } else {
    return false;
  }
};

console.log(
  'La stringa inserita corrisponde a un indirizzo email valido? ',
  isThisAnEmail('mariorossi@mario.com')
);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function () {
  const date = new Date();
  const today = date.getDay();
  switch (today) {
    case 0:
      console.log('Today is Sunday');
      break;
    case 1:
      console.log('Today is Monday');
      break;
    case 2:
      console.log('Today is Tuesday');
      break;
    case 3:
      console.log('Today is Wednesday');
      break;
    case 4:
      console.log('Today is Thursday');
      break;
    case 5:
      console.log('Today is Friday');
      break;
    case 6:
      console.log('Today is Saturday');
      break;
    default:
      console.log('It is not this day');
  }
};

whatDayIsIt();

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (n) {
  const draw = {
    sum: 0,
    values: [],
  };
  for (let i = 0; i < n; i++) {
    let number = dice();
    draw.sum += number;
    draw.values.push(number);
  }

  console.log(draw);
};

rollTheDices(5);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function() {
  
}
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function (dd, mm) {
  const date = new Date();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();
  if (dd === currentDay && mm === currentMonth + 1) {
    return true;
  } else {
    return false;
  }
};

console.log('Oggi è il mio compleanno? ', isTodayMyBirthday(6, 4));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = function (obj, str) {
  delete obj[str];
  return obj;
};

const io = {
  name: 'Umberto',
  surname: 'Tramontano',
  age: 32,
};

const newObj = deleteProp(io, 'name');
console.log(newObj);

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function (arrayMovies) {
  let newest = arrayMovies[0];
  arrayMovies.forEach((object) => {
    if (parseInt(object.Year) > parseInt(newest.Year)) {
      newest = object;
    }
  });
  return newest;
};

const newest = newestMovie(movies);
console.log('Il film più recente è: ', newest);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function (arr) {
  return arr.length;
};

const numOfMovies = countMovies(movies);
console.log("Film contenuti nell'array: ", numOfMovies);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function (arr) {
  const arrayOfyears = []
  for (let i=0; i<arr.length; i++){
    arrayOfyears.push(arr[i].Year)
  }
  return arrayOfyears
}

console.log('Array con gli anni di uscita dei film in movies: ', onlyTheYears(movies)) 

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function(arr) {
  const onlyNineteens = []
  for (let i=0; i<arr.length; i++){
    if (parseInt(arr[i].Year) < 2000) {
      onlyNineteens.push(arr[i])
    }
  }

  return onlyNineteens
}

console.log('Film usciti prima del 2000: ', onlyInLastMillennium(movies))

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function(arr) {
  let acc = 0 
  for (let i=0; i < arr.length; i++) {
    acc += parseInt(arr[i].Year)
  }
  return acc
}

console.log('La somma degli anni di uscita di tutti i film è: ', sumAllTheYears(movies))

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function(str, arr) {
  const films = []
  for (let i=0; i<arr.length; i++) {
    if (arr[i].Title.includes(str)) {
      films.push(arr[i])
    }
  }

  return films
}

console.log(searchByTitle('Lord', movies))


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = function(str, arr) {
  const obj = {
    match: [],
    unmatch: [],
  }

  for (let i=0; i<arr.length; i++) {
    if (arr[i].Title.includes(str)) {
      obj.match.push(arr[i])
    } else {
      obj.unmatch.push(arr[i])
    }
  }

  return obj
}

console.log(searchAndDivide('Lord', movies))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = function(n,arr) {
  const newArray = []
  for (let i=0; i<arr.length; i++) {
    if (i !== n) {
      newArray.push(arr[i])
    }
  }

  return newArray
}

console.log(removeIndex(0,movies))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const selectContainer = function() {
  const container = document.getElementById('container')
  return container
}

//prova per vedere se ha selezionato l'elemento con id='container'
const container = selectContainer()
console.log(container.textContent)

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selectTd = function() {
  const tdSelected = document.getElementsByTagName('td')
  return tdSelected
}

console.log(selectTd()) // ho inserito nel doc html 4 tag <td></td>. verrà stampata una HTML collection con 4 elementi td al suo interno

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTdContent = function(coll) {
  for (let i=0; i<coll.length; i++) {
    console.log(coll[i].textContent)
  }
}

printTdContent(selectTd())

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const bgLinks = function() {
  const links = document.querySelectorAll('a')
  for (let i=0; i<links.length; i++){
    links[i].style.backgroundColor = 'red'
  }
}

bgLinks()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addNewLi = function() {
  //creo nel document un elemento <li></li>
  const li = document.createElement('li')
  //inserisco del testo nel nuovo li creato
  li.innerText = 'sono un nuovo elemento di lista'
  //seleziono il tag ul che conterrà li appena creato
  const ul = document.getElementById('myList')
  //appendo li creato all' ul di id='myList'
  ul.appendChild(li)

}

//chiamata della funzione
addNewLi()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const removeLi = function() {
  const ul = document.getElementById('myList')
  ul.innerHTML = ''
}

removeLi()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClass = function() {
  //seleziono tutti i tag tr del documento
  const tr = document.getElementsByTagName('tr')
  //ciclo for per aggiungere una classe a tutti gli elementi tr selezioanti che sii trovano in una HTML COLLECTION
  for(let i=0; i<tr.length; i++) {
    tr[i].classList.add('test')
  }
}

addClass()

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = function(n) {
  for (let i=1; i<=n; i++) {
    const leaf = '*'
    console.log(leaf.repeat(i))
  }
}

halfTree(8)


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = function(n) {
  for (let i=1; i<=n; i++) {
    const leaf = '*'
    const margin = ' '
    console.log(margin.repeat(n-i) + leaf.repeat((2 * i) - 1) + margin.repeat(n-i))
  }
  
}

tree(5)

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const numeroPrimo = function(n) {
  if (n !== 0) {
    if (n !== 1) {
      if (n !== 2) {
        if (n%2 === 0) {
          return false
        }
      }
    }
  }
  return true
}

console.log('Il numero inserito è un numero primo? ', numeroPrimo(72))

/* Questo array viene usato per gli esercizi. Non modificarlo. */
