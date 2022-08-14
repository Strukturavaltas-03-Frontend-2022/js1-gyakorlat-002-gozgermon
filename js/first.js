/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/
const a_tomb = [90, 8, 70, 32, 54, 9];
const b_tomb=[0,0,0,0,0,0];
const c_tomb=[10,10,10,10,10,10,10,10,10,10];

const brutto= function(tomb)
{
    let eredmeny=0;
    for(let i=0; i<tomb.length; i=i+1)
    {
        eredmeny=eredmeny+tomb[i]*1.27
    }
    return Math.round(eredmeny)
}

console.log(brutto(a_tomb))
console.log(brutto(b_tomb))
console.log(brutto(c_tomb))