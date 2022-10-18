/*let colors = ['red','blue'];
colors[2] = 'green';
console.log(colors);*/




/*const schedule = ['wakeup','eat','file a video','watch things on netflix '];
schedule.push('hey a new thing');
schedule.pop();
schedule.shift();
schedule.unshift('new thing');
const film =schedule.indexOf("file a video");
console.log(schedule[film]);*/


/*let day;
let x = prompt("enter the number")
if(x==1){
    day="monday";
}
else if(x==2){
    day="tuesday";
}
else if(x==3){
    day="wednesday";
}
else if(x==4){
    day="thurday";
}
else if(x==5){
    day="friday";
}

alert(day);*/

/*let day;
let a= prompt("enter number");
switch(parseInt(a)){
    case 1:
        day="Monday";
    break;

    case 2:
        day="Tuesday";
        break;

        case 3:
            day="Wednesday";
            break;
            case 4:
                day="Thurday";
                break;
                case 5:
                    day="Friday";
                    break; 
        
                                 
}
alert(day);*

for(let i=0; i<5; i++){
console.log("hello esp ");
}

 /*let n =prompt(" enter the number");
 let m =prompt("enter the number");
 sum=0;
 for(let i=1; i<9;i++){
    sum=n+m;
    alert(sum);
 }



 let arr: number[] = [];

for (let i = 0; i < 5; i++) {
    arr[i] = i * 2;
    console.log(arr);
}*/

/*let x=[];
for(let i=0;i<10000;i++){
    if(i/2==0){
        x.push(i);
    }
}
console.log(x);




var netbrain=[];
var bigsur=[];
var studentName= prompt("enter student's name");
if(bigsur.indexOf(studentName)>=0){
    alert('${studentName} is in the bigsur');

}else if(netbrain.indexOf(studentName)>=0){
    alert('${studentName} is in the netbrain');
}else{
alert('${studentName} is in the netbrain');
}*/


const products =[
    {
        id:1,
        name:"akarabo",
        price:"1200",
        exp:"2022/12/23",
    },
    {
        id:2,
        name:'inyange',
        price:"1000",
        exp:"2022/12/23",
    },
    {
        id:3,
        name:"nice",
        price:"100",
        exp:"2022/12/23",
    },

];
var id=prompt("enter id");
const productExit = products.filter(function(p){
return p["id"]!=id;
});
console.table(productExit);






























/*Push()
pop()
concat()
slice()
reduce()
map()*/