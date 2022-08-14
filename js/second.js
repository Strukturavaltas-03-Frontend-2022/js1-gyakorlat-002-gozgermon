/*
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges 
típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként 
megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, 
ha nem, akkor -1 legyen az értéke
- `allElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömb minden eleme number típusú-e vagy sem
- `someElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömbben van-e number típusú elem vagy sem
*/

const content3 = ['első', 'második', 'harmadik','negyedik'];
const test_prim="második"

const content4 = ['első', 'második', 5,'negyedik'];
const test_prim2="második"

const content5 = [2, 5, 5,8];
const test_prim3="második"

const checker=function(tomb,prim)
{
    let result_obj={
        exists:false,
        index:-1,
        allElementsAreNumbers:true,
        someElementsAreNumbers:false
    }
    for(let i=0;i<tomb.length;i=i+1)
    {
     if(tomb[i]===prim)
     {
        result_obj.exists=true;
        result_obj.index=i;
     } 
         
     if(Number.isInteger(tomb[i]))
     {
        result_obj.someElementsAreNumbers=true;
     }
     else
     {
        result_obj.allElementsAreNumbers=false;
     }

    }
    return result_obj
}

console.log(checker(content3,test_prim))
console.log(checker(content4,test_prim2))
console.log(checker(content5,test_prim3))