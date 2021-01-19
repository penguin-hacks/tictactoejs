let answer = "d"
let ac = true

function isAcceptableInput() {
    let acceptableAnswers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
    for (let i = 0; i < acceptableAnswers.length; ++i) {
        let inputNumber = acceptableAnswers[i];
        console.log("inputNumber !==  a happened, inputNumber is "+inputNumber+" and a is "+a);
        if (inputNumber !==  answer){
            console.log("inputNumber !==  a happened, inputNumber is "+inputNumber+" and a is "+a);
            ac = false;
        } else {
            console.log("inputNumber !==  a did NOT happen, inputNumber is "+inputNumber+" and a is "+a);
            if (inputNumber === 1) ac = true;
            else if (inputNumber === 2) ac = true;
            else if (inputNumber === 3) ac = true;
            else if (inputNumber === 4) ac = true;
            else if (inputNumber === 5) ac = true;
            else if (inputNumber === 6) ac = true;
            else if (inputNumber === 7) ac = true;
            else if (inputNumber === 8) ac = true;
            else if (inputNumber === 9) ac = true;
        };
    };
    console.log(ac)
};
isAcceptableInput()