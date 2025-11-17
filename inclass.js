let Math = Number(prompt("Enter Math marks: "))
let Eng = Number(prompt("Enter Eng marks: "))
let Sci = Number(prompt("Enter Sci marks: "))

let avg = (Math + Eng + Sci)/3

if (avg <=100 && avg >= 80){
    console.log("A")
}
else if (avg <80 && avg>=70){
    console.log("B")
}
else if (avg <70 && avg >=60){
    console.log("C")
}
else if (avg <60 && avg >=50){
    console.log("D")
}
else if (avg < 50){
    console.log("E")
}
else{
    console.log("Invalid marks")
}

console.log(avg)