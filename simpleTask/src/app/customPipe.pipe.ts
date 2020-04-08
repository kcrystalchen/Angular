import {Pipe, PipeTransform } from '@angular/core';


@Pipe({
   name: 'customPipes'
})

export class CustomPipesClass implements PipeTransform{
    transform(value: string, arg?: any){
        if(!value){
            return null;
        }

// solution #1
       let finalValue = '';
       let prepositions = ["the", "of"];
       let word = value.split(' ');

       for(let x = 0; x < word.length; x+=1){

            if(x > 0 && prepositions.includes(word[x])){
                word[x] = word[x].toLowerCase();
            } else{
        //  finalValue += ((word[x][0].toUpperCase()).concat(word[x].slice(1)));
            word[x] = word[x].substr(0,1).toUpperCase()+word[x].substr(1).toLowerCase();
            }
        }
    //return finalValue;
     return word.join(' ');
    }


}


