
console.log('-----------------------------');

function printString(name){

  return new Promise(function(resolve,reject){
   // console.log('Entered promise');
    setTimeout(function(){
      console.log(name);
      resolve();
    },2000 );

  });

}

async function printAll(){
  await printString("Ashok");
  await printString("Durga");
  await printString("Rasipuram");
}


printString('Today').then(()=>{
  console.log('Printing the promise without await');
});


function outer(){
  let a = 10;

  function inner(){
    var b = 20;

    console.log(a+b);
  }

  return inner;
}

var X=outer();

X();

function test(name){
  console.log(this, name);
}

test('Testing bind');

var te = test.bind({"name" : "Ashok"});

te("Binded");

