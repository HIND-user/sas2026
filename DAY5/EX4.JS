let person =[
{name : "hind",age : 18 },
{ name : "anass",age :  13 },
{  name : "aya",age : 15}
]
let Max = person[0]
let indice = 0
for (let i = 0; i < person.length; i++) {
    if (person[i].age > Max) {
        
        indice = i

    }
}
console.log(person[indice].name)
console.log(person[indice].age)


