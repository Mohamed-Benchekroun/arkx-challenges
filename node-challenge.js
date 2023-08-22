// hh



const colors = require('colors') ;
const { stdin, stdout } = require('process');
const readline = require('readline') ;

const insertNameAndNumber = () => {

    const terminal = readline.createInterface({
        input : process.stdin , 
        output : process.stdout ,
    }) ;
    

    console.log('choose your request');
    console.log('1: leave');
    console.log('2: enter number') ;

    const myArray = [
        {name:'mohamed', number:'0665842226'},
        {name:'imane', number:'0665845426'},
        {name:'youness', number:'0667842226'},
    ]

    terminal.question('what\'s your request'.green, function (number){


        if(number == 1){
            terminal.close()


        } 
        else if(number == 2){


            terminal.question('enter your name', function(name){
                console.log(name)


                terminal.question('enter your number', function(phoneNumber){
                    console.log(phoneNumber)


                    myArray.push({name:name, number:phoneNumber});

                    console.log(myArray)
                })

                

            })
   

        }
        
        
    })

}
insertNameAndNumber()