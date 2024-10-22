const StartingX = 1.5;
const EndingX = 3.5;
const Step = 0.4;
const ArrayOfX = [1.9, 2.15, 2.34, 2.74, 3.16];

function getBaseLog(base: number, numb: number): number {
    return Number((Math.log(numb)/Math.log(base)).toFixed(2));
}


function MainFunction(a:number, b:number, x:number) : number {

    let top = a*Math.pow(x, 1.0/3) - b*getBaseLog(5, x);
    let bottom = Math.pow(Math.log10(x-1), 3.0);
    let result = (top/bottom).toFixed(2);
    return Number(result);
    
}

function taskA (startingX:number, endingX:number, step:number) : [number[], number[]]{
    
    const A = 4.1;
    const B = 2.7;

    let x: number[] = [];
    let y: number[] = [];

    for (let i = startingX; i <= endingX; i += step){
        x.push(Number(i.toFixed(2)));
        y.push(MainFunction(A, B, i));

    }

    return [x, y];

}

function taskB (arrayOfX: number[]): [number[], number[]] {
    
    const A = 4.1;
    const B = 2.7;

    let x: number[] = [];
    let y: number[] = [];


    for (let i = 0; i < arrayOfX.length; i ++){
        x.push(arrayOfX[i]);
        y.push(MainFunction(A, B, arrayOfX[i]));
    }

    return [x,y];

}

console.log("Задача A");
let [x, y] = taskA(StartingX, EndingX, Step);
for (var i of y){
    console.log(`При x = ${x[y.indexOf(i)]} y = ${i}`);
}


console.log("Задача B");
[x,y] = taskB(ArrayOfX);
for (var i of y) {
    console.log(`При x = ${x[y.indexOf(i)]} y = ${i}`);
}

export {MainFunction,taskA,taskB};