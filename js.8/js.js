//  CallBack Object, Distructization
//  CallBack - bu bir function bajarilgandan so'ng ishlaydigan function.


// const firstLog = () => {
//     setTimeout(function() {
//     console.log(1);
//     }, 2000)
    
    
// }

// const secondLog = () => {
//     console.log(2);
    
// }

// firstLog()
// secondLog()


// function hello(CallBack) {
//     console.log("Hello world!");
//     CallBack()
// }

// hello(function() {
//     console.log(1);
    
// })

// function CallBack() {
//     console.log(2);
    
// }

// hello(CallBack)


const person = {
    name: 'Asad',
    lastname:'Kamolov',
    age: 23,
    hobbies: {
        sport: 'football',
        music: 'Rock'
    }
}
// console.log(Object.keys(person).length); - Objectning uzunligi.

// Iteration - ichidagi ma'lumotlarni olish.

// in - for Object, of - for Arrays.
for(let key in person) {
    // console.log(Property ${key}: Value: ${person[key]});
    // console.log(typeof person[key]);
    
    if(typeof person[key] === 'object'){
        for(let i in person[key]){
            console.log(Property ${i}: Value: ${person[key][i]});
            
        }
    } else{
        Property ${key}: Value: ${person[key]}
    }

}

// console.log(Object.keys(person));