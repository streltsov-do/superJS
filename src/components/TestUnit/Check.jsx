import { toHaveStyle } from "@testing-library/jest-dom/matchers";
import React from "react";
import { Container } from "./styles/Check";

const Check = () => {
    {
        console.log(`
            const a = 42;
            const b = null;

            console.log("a || b ", a || b);
            console.log("a && b ", a && b);
        `);
        const a = 42;
        const b = null;

        console.log("a || b ", a || b);
        console.log("a && b ", a && b);
    }
    console.log("-------------------------------------");

    {
        console.log(`
            let x=0;
            let y=1;

            const log = (param: any) => {
                if (param) {
                    console.log(param);
                }
            }
            
            log(x);
            log(y);
        `);

        let x = 0;
        let y = 1;

        const log = (param) => {
            if (param) {
                console.log(param);
            }
        };

        log(x);
        log(y);
        console.log("-------------------------------------");
    }
    {
        console.log(`
            let x = 0;
            let y = 1;

            const logOr = (one: any, two: any) => {
                if (one || two) {
                    console.log("logOr");
                }
            };
            const logAnd= (one: any, two: any) => {
                if (one && two) {
                    console.log("logAnd");
                }
            };

            logOr(x,y);
            logAnd(x,y);
        `);

        let x = 0;
        let y = 1;

        const logOr = (one, two) => {
            if (one || two) {
                console.log("logOr");
            }
        };
        const logAnd = (one, two) => {
            if (one && two) {
                console.log("logAnd");
            }
        };

        logOr(x, y);
        logAnd(x, y);
        console.log("-------------------------------------");
    }
    {
        console.log(`
            
            let y=1;
            let x=y=2;

            alert(x);
        `);
        let y = 1;
        let x = (y = 2);

        // alert(x);
        console.log(x);
        console.log("-------------------------------------");
    }
    {
        console.log(`
            sayHi();
            function sayHi() {
                // alert("Hello");
                console.log("Hello");
            }
        `);
        sayHi();
        function sayHi() {
            // alert("Hello");
            console.log("Hello");
        }
        console.log("-------------------------------------");
    }
    // {
    //     console.log(`
    //         for (let i=0; i<10; i++){
    //             console.log("i inside for ="+i);
    //         }
    //         console.log(i);
    //     `);
    //     for (let i = 0; i < 10; i++) {
    //         console.log("i inside for =" + i);
    //     }
    //     console.log(i);
    //     console.log("-------------------------------------");
    // }
    {
        console.log(`
            const arr1=[1,2,3];
            const arr2=[1,2,3];

            console.log(arr1 == arr2);
            console.log(arr1 === arr2);
        `);
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3];

        console.log(arr1 == arr2);
        console.log(arr1 === arr2);
        console.log("-------------------------------------");
    }
    /*
    {
        console.log(`
            'use strict'
            const user = {
                name: 'Ivan',
                getName(){
                    return this.name;
                }
            }
            const getUserName = user.getName;
            console.log('user name is '+getUserName());
        `);
        // 'use strict'
        const user = {
            name: "Ivan",
            getName() {
                return this.name;
            },
        };
        const getUserName = user.getName;
        console.log("user name is " + getUserName());
        console.log("-------------------------------------");
    } 
    */

    /*
    {
        console.log(`
            'use strict'
            let user = {
                age:12,
                getAge(){
                    return this.age;
                }
            }
            console.log((user.notGetAge = user.getAge)());
        `);
        // 'use strict'
        let user = {
            age:12,
            getAge(){
                return this.age;
            }
        }
        console.log((user.notGetAge = user.getAge)());
        console.log("-------------------------------------");
    } */

    {
        console.log(`
            let x=5;
            console.log(x++);
        `);
        let x = 5;
        console.log(x++);
        console.log("-------------------------------------");
    }
    {
        console.log(`
                let x=5;
                console.log(++x);
            `);
        let x = 5;
        console.log(++x);
        console.log("-------------------------------------");
    }

    /*
    {
        console.log(`
            function getSecondValue([first, second] = [10,20]) {
                return second;
            }
            console.log(getSecondValue([5]));
        `);
        function getSecondValue([first, second] = [10,20]) {
            return second;
        }
        console.log(getSecondValue([5]));
        console.log("-------------------------------------");
    }
    */

    /*
    {
        console.log(
            // function greetings({name, age}){
            //     console.log(`Hello, ${name}. You're ${age}`)
            // }
            // greetings('Vasya',10);
        );
        function greetings({name, age}){
            console.log(`Hello, ${name}. You're ${age}`)
        }
        greetings('Vasya',10);
        console.log("-------------------------------------");
    }
    */

    /*
    {
        console.log(`
        `);

        const details= {
            message: 'some message',
        }

        function getMessage(count) {
            return this.message + count;
        }

        console.log(getMessage.apply(details, 4));
        console.log("-------------------------------------");
    }
    */

    {
        console.log(`
            const arr=[1,2,3,4,5];
            arr.length=2;
            console.log(arr);
        `);
        const arr = [1, 2, 3, 4, 5];
        arr.length = 2;
        console.log(arr);
        console.log("-------------------------------------");
    }

    /*
    {
        console.log(`
            const arr=[1,2,3];
            const myString='my super string';
            arr.something = 5;
            myString.something=5;

            console.log(arr.something);
            console.log(myString.something);
        `);
        const arr=[1,2,3];
        const myString='my super string';
        arr.something = 5;
        myString.something=5;

        console.log(arr.something);
        console.log(myString.something);
        console.log("-------------------------------------");
    }
    */

    {
        console.log(`
            let name = 'Maria';
            const sayName = () => {
                console.log(name);
            }

            setTimeout(() =>{
                let name = 'Kolya';
                sayName();
            }, 1000)
        `);
        let name = "Maria";
        const sayName = () => {
            console.log(name);
        };

        setTimeout(() => {
            let name = "Kolya";
            sayName();
        }, 1000);
        console.log("-------------------------------------");
    }

    {
        console.log(`
            const data = {
                result: 0,
                numbers: [1,2,3],
                computeResult() {
                    const getSum = () => {
                        return this.numbers.reduce((total,value) => total+value, 0)
                    }
                    this.result=getSum();
                }
            }
            data.computeResult();
            console.log(data.result);
        `);
        const data = {
            result: 0,
            numbers: [1, 2, 3],
            computeResult() {
                const getSum = () => {
                    return this.numbers.reduce(
                        (total, value) => total + value,
                        0,
                    );
                };
                this.result = getSum();
            },
        };
        data.computeResult();
        console.log(data.result);
        console.log("-------------------------------------");
    }

    /*
    {
        console.log(`
            const myPromise = () => Promise.resolve().then(() => console.log(1));

            const firstFunction = () => {
                setTimeout(() => console.log('2'),0);
                myPromise();
            }

            async function secondFunction() {
                await new Promise((resolve) => {
                    console.log('3');
                    resolve();
                })
                console.log('4');
            }

            console.log('5');
            firstFunction();
            secondFunction();
        `);
        const myPromise = () => Promise.resolve().then(() => console.log(1));

        const firstFunction = () => {
            setTimeout(() => console.log('2'),0);
            myPromise();
        }

        async function secondFunction() {
            await new Promise((resolve) => {
                console.log('3');
                resolve();
            })
            console.log('4');
        }

        console.log('5');
        firstFunction();
        secondFunction();

        console.log("-------------------------------------");
    }
    */

    /*
    {
        console.log(`
        `);

        const baseURL = 'https://base-url';

        const buildImagePath = () => {
            const baseURL = 'https:/image-url';

            return (url) => {
                return `${baseURL}${url}`
            }
        }

        const getImage = (url) => {
            const baseURL = 'https://image-url-number-2'

            return buildImagePath()(url);
        }

        console.log(getImage('/image/path'));

        console.log("-------------------------------------");
    }
    */

    {
        console.log(`
        `);
        console.log("-------------------------------------");
    }
    return <Container></Container>;
};

export { Check };
