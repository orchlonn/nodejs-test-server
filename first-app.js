const person = {
    name: "orrhclon",
    age: 19,
    greet: ()=>{
        console.log('Hi i am ' + this.name);
    }
}

// person.greet();

const nums = [1,2,3];
const coppiedNums = [...nums];
console.log(coppiedNums);