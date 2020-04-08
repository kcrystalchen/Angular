export class TitleCaseClassHero {
    constructor(
        public id: number, 
        public name: string, 
        public power: string, 
        public alterEgo?: string
    ){

    }
}

//The TypeScript compiler generates a public field for each public constructor
// parameter and automatically assigns the parameter’s value to that field 
//when you create heroes.

// The alterEgo is optional, so the constructor lets you omit it; note the question mark (?) in alterEgo?.


// let myHero =  new TitleCaseClassHero(42, 'SkyDog',
//'Fetch any object at any distance',
//'Leslie Rollover');
//console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"