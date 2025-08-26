// getters and setters in typescript

// class User {
//     private _courseCount = 1;

//     readonly city: string = 'Rahul';
//     constructor(
//         public name: string,
//         public email: string,
        
//     ){   
//     }

//     get getCourseName(): string {
//         return `public name ${this.name}`
//     }

//     set courseCount(courseNum: number){ // in setters you dont specify the return type because it doesnt return anything
//         if(courseNum <= 1){
//             throw new Error('Error courseNum should not be less than 1')
//         }
//         this._courseCount = courseNum;
//     }


// }

// abstract class
// it doesn't let you create an object instead it is used by other classes and extend it

abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
    ){   
    }

    abstract getSepia(): void

    getReelTime():number{
        return 8
    }

}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode : string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log('sepia')
    }
}

//----------------------------------------------------------------------------------
// Generics

const score :Array<number> = []
const names :Array<string> = []

function identityOne(val: boolean | string): boolean | string{
    return val
}

// here we want to take an input of type either boolean or string and the return type would be either bool or string
// but if the data type is changed than it will need to be changed again and again

// so you think lets use any

function identityTwo(val:any): any{
    return val
}

// but suppose the input val type is string and the return type is number
// then there is the problem to encounter this here comes generic 

function identityThree<Type>(val: Type): Type{
    return val;
}

// here if the first element inputed is string than the generic "Type" becomes string so the val type becomes string
// and if the first element taken an input is number than the the remaining as follows

identityThree(3)

function identityFour<T>(val: T): T{
    return val
}

// instead of writing Type you can use letter T which is most commonly used or you can use any letter or word you want
// but keep in mind that at all the places the letter and word reamins same

interface Bottle {
    brand: string,
    type: string,
}

identityFour<Bottle>({brand:"bisleri", type:"glass"})

// Generics in array

function getSearchProducts<T>(products: T[]): T{
    return products[3];
}