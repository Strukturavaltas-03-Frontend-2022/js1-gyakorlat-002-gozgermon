/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/
const content = ['első', 'második', 'harmadik'];
const content2 = ['első', 'második', 'harmadik','negyedik'];

const generateList=function(tomb)
{
    let eredmeny="<ul> ";

    for(let i=0;i<tomb.length;i=i+1)
    {
        eredmeny=eredmeny+"<li>"+tomb[i]+"</li> " 
    }
    return eredmeny+"</ul>"
}

console.log(generateList(content))
console.log(generateList(content2))