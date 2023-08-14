class Calculator {
    constructor() {
        this.methods = {
            '+': ( a, b ) => a + b,
            '-': ( a, b ) => a - b,
            '*': ( a, b ) => a * b,
            '/': ( a, b ) => a / b,
        }
    }


    multiplyAndDivide( str ) {
        if ( /[*/]/.test( str ) ) {
            return this.multiplyAndDivide(
                str.replace( /(\d+\.?\d*)([*/])(\d+\.?\d*)/, ( match, operand1, operator, operand2 ) => {
                    return this.methods[ operator ]( parseFloat( operand1 ), parseFloat( operand2 ) )
                } )
            )
        }
        return str
    }

    addAndSubtract( str ) {
        if ( /[-+]/.test( str ) ) {
            return this.addAndSubtract(
                str.replace( /(\d+\.?\d*)([-+])(\d+\.?\d*)/, ( match, operand1, operator, operand2 ) => {
                    return this.methods[ operator ]( parseFloat( operand1 ), parseFloat( operand2 ) )
                } )
            )
        }
        return str
    }

    calc( input ) {
        const sanitizedInput = input.replace( /,/g, '.' ).replace( /\s/g, '' )
        const multipliedAndDivided = this.multiplyAndDivide( sanitizedInput )

        return parseFloat( this.addAndSubtract( multipliedAndDivided ) )
    }
}

const calculator = new Calculator()

console.log( calculator.calc( '1.1+3.2-1,4*4.2/2' ) )