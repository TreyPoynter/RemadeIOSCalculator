import { StyleSheet, Text, View } from 'react-native';
import CalculatorButton from './components/CalculatorButton';
import { useState } from 'react';

export default function App() {

  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);

  const handleDigitPress = (digit) => {
    if(displayValue === '0' && digit !== '.') {
      setDisplayValue(digit);
    } else if(displayValue.length < 9) {
      setDisplayValue(displayValue + digit);
    }
  }

  const handleOperatorPress = (op) => {
    console.log(op);
    setOperator(op);
    setOperand(parseFloat(displayValue));
    setDisplayValue('0');
  }

  const handleValueChanger = () => {
    let numberValue = Number.parseFloat(displayValue);

    numberValue *= -1;

    setDisplayValue(numberValue.toString())
  }

  const handleClearCalculator = () => {
    setDisplayValue('0');
    setOperand(null);
    setOperator(null);
  }

  const handleDecimalPress = () => {
    if(!displayValue.includes('.'))
      setDisplayValue(displayValue + '.');
  }

  const handlePercentageConverter = () => {
    let numberValue = Number.parseFloat(displayValue);

    numberValue /= 100;

    setDisplayValue(numberValue.toString())
  }

  const handleEqualsPress =() => {
    const currentOperend = parseFloat(displayValue);
    let result;

    switch(operator){
      case '+':
        result = operand + currentOperend;
        break;
      case '-':
        result = operand - currentOperend;
        break;
      case 'X':
        result = operand * currentOperend;
        break;
      case '÷':
        result = operand / currentOperend;
        break;
      default:
        result = currentOperend;
    }
    setDisplayValue(result.toString());
    setOperator(null);
    setOperand(null);
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CalculatorButton value={'AC'} onPress={handleClearCalculator} btnColor={'#a5a5a5'} textColor={'#000'}/>
        <CalculatorButton value={'+/-'} btnColor={'#a5a5a5'} textColor={'#000'}/>
        <CalculatorButton value={'%'} btnColor={'#a5a5a5'} textColor={'#000'}/>
        <CalculatorButton value={'+/-'} onPress={handleValueChanger} btnColor={'#a5a5a5'} textColor={'#000'}/>
        <CalculatorButton value={'%'} onPress={handlePercentageConverter} btnColor={'#a5a5a5'} textColor={'#000'}/>
        <CalculatorButton value={'÷'} onPress={() => handleOperatorPress('÷')} btnColor={'#ff9f0a'}/>
        <CalculatorButton value={'7'} onPress={() => handleDigitPress('7')} btnColor={'#333333'}/>
        <CalculatorButton value={'8'} onPress={() => handleDigitPress('8')} btnColor={'#333333'}/>
        <CalculatorButton value={'9'} onPress={() => handleDigitPress('9')} btnColor={'#333333'}/>
        <CalculatorButton value={'X'} onPress={() => handleOperatorPress('X')} btnColor={'#ff9f0a'}/>
        <CalculatorButton value={'4'} onPress={() => handleDigitPress('4')} btnColor={'#333333'}/>
        <CalculatorButton value={'5'} onPress={() => handleDigitPress('5')} btnColor={'#333333'}/>
        <CalculatorButton value={'6'} onPress={() => handleDigitPress('6')} btnColor={'#333333'}/>
        <CalculatorButton value={'-'} onPress={() => handleOperatorPress('-')} btnColor={'#ff9f0a'}/>
        <CalculatorButton value={'1'} onPress={() => handleDigitPress('1')} btnColor={'#333333'}/>
        <CalculatorButton value={'2'} onPress={() => handleDigitPress('2')} btnColor={'#333333'}/>
        <CalculatorButton value={'3'} onPress={() => handleDigitPress('3')} btnColor={'#333333'}/>
        <CalculatorButton value={'+'} onPress={() => handleOperatorPress('+')} btnColor={'#ff9f0a'}/>
        <CalculatorButton value={'0'} onPress={() => handleDigitPress('0')} btnColor={'#333333'} width={'46%'}/>
        <CalculatorButton value={'.'} onPress={() => handleDecimalPress('.')} btnColor={'#333333'}/>
        <CalculatorButton value={'='} onPress={handleEqualsPress} btnColor={'#ff9f0a'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  inputContainer: {
    marginHorizontal: 40,
    height: '30%',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  displayText: {
    color: '#fff',
    fontSize: 90
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-between',
    height: '70%',
    alignContent: 'flex-end',
    marginHorizontal: 10,
  }
});
