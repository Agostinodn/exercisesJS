function calculate() {

    let risultato = 0;
    return {
        add(number) {
            risultato = risultato + number;
            return this;
        },
        multiply(number) {
            risultato = risultato * number;
            return this;
        },
        sub(number) {
            risultato = risultato - number;
            return this;
        },
        divide(number) {
            risultato = risultato / number;
            return this;
        },
        printResult() {
            console.log(risultato);
            return this;
        }
    };

}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7