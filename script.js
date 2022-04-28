let numOne = '';
let operator = '';
let numTwo = '';
let resultadoH = '';

const $operator = document.querySelector('#operator');
const $hist = document.querySelector('.history')
const $clearhist = document.querySelector('.apagarH')
const $enviarR = document.querySelector('Enviar')
const $resultado = document.querySelector('.resultado');

const SPREADSHEET_ID = '1pZp9PT-49TLKlnSHwf48m9Qd1C--GB5qmSGUiFK8qAk';
const CLIENT_ID = '322994422313-d63htd69miqsm583h6dgomh979vg3b2j.apps.googleusercontent.com';
const API_KEY = 'AIzaSyD9R6oZE2EEhGHG8fAXA1s9nMMfM07RqH0';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const scriptURL = '<SCRIPT URL>'

const onClickNumber = (number) => () => {
    if (operator) {
        numTwo += number;
    } else {
        numOne += number;
    }
    console.log('numOne : ' + numOne, 'numTwo : ' + numTwo, 'operator : ' + operator);
    $resultado.value += number;

}

const onClickOperator = (op) => () => {
    if (numOne && !numTwo) {
        operator = op;
        $operator.value = op;
        $resultado.value = '';
    } else if (!numOne) {
        alert('숫자를 먼저 입력하세요.');
    }
}

const onClickClear = () => () => {
    console.log('reset');
    $operator.value = '';
    $resultado.value = '';
    numOne = operator = numTwo = '';
}

const onClickDell = () => () => {
    $hist.value = "";

}

const onClickEnviar = () => (e) => {


}

const onClickdelete = () => () => {

    $resultado.value = $resultado.value.substring(0, ($resultado.value.length - 1));
}

const onClickCalculator = () => () => {
    if (operator == '+') {
        $resultado.value = parseInt(numOne) + parseInt(numTwo);
        resultadoH = (numOne + operator + numTwo)
        $hist.value += "\n " + resultadoH + " = " + $resultado.value;
    } else if (operator == '-') {
        $resultado.value = parseInt(numOne) - parseInt(numTwo);
        resultadoH = (numOne + operator + numTwo)
        $hist.value += "\n " + resultadoH + " = " + $resultado.value;
    } else if (operator == '*') {
        $resultado.value = parseInt(numOne) * parseInt(numTwo);
        resultadoH = (numOne + operator + numTwo)
        $hist.value += "\n " + resultadoH + " = " + $resultado.value;
    } else if (operator == '/') {
        $resultado.value = parseFloat(numOne) / parseInt(numTwo);
        resultadoH = (numOne + operator + numTwo)
        $hist.value += "\n " + resultadoH + " = " + $resultado.value;
    } else if (operator == '√') {

        if (numOne < 0) {

            return NaN;
        } else {
            $resultado.value = parseFloat(Math.sqrt(numOne));
            $hist.value += $resultado.value;
            console.log(numOne);
        }

    } else if (operator == 'x2') {

        $resultado.value = parseInt(Math.pow(numOne, numTwo));

        $hist.value += $resultado.value;

    } else if (operator == 'log') {

        $resultado.value = parseFloat(Math.log(numTwo) / Math.log(numOne));
        $hist.value += $resultado.value;

    }

}


document.querySelector('#num-0').addEventListener('click', onClickNumber('0'));
document.querySelector('#num-00').addEventListener('click', onClickNumber('00'));
document.querySelector('#num-1').addEventListener('click', onClickNumber('1'));
document.querySelector('#num-2').addEventListener('click', onClickNumber('2'));
document.querySelector('#num-3').addEventListener('click', onClickNumber('3'));
document.querySelector('#num-4').addEventListener('click', onClickNumber('4'));
document.querySelector('#num-5').addEventListener('click', onClickNumber('5'));
document.querySelector('#num-6').addEventListener('click', onClickNumber('6'));
document.querySelector('#num-7').addEventListener('click', onClickNumber('7'));
document.querySelector('#num-8').addEventListener('click', onClickNumber('8'));
document.querySelector('#num-9').addEventListener('click', onClickNumber('9'));
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#sqr').addEventListener('click', onClickOperator('√'));
document.querySelector('#exp').addEventListener('click', onClickOperator('x2'));
document.querySelector('#lg').addEventListener('click', onClickOperator('log'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#del').addEventListener('click', onClickdelete('D'));
document.querySelector('#clear').addEventListener('click', onClickClear());
document.querySelector('#Dell').addEventListener('click', onClickDell());
document.querySelector('#submeter').addEventListener('click', onClickEnviar());
document.querySelector('#calculate').addEventListener('click', onClickCalculator());