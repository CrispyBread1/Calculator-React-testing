import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let runningTotal;
  let equals;
  let add;
  let button4;
  let button1;
  let button7;
  let subtract
  let button3
  let button5
  let mulitply
  let button2
  let divide
  let clear

  beforeEach(() => {
    container = render(<Calculator/>)
    button1 = container.getByTestId('number1')
    button4 = container.getByTestId('number4')
    add = container.getByTestId('operator-add')
    equals = container.getByTestId('operator-equals')
    runningTotal = container.getByTestId('running-total');
    button7 = container.getByTestId('number7')
    subtract = container.getByTestId('operator-subtract')
    mulitply = container.getByTestId('operator-multiply')
    button3 = container.getByTestId('number3')
    button5 = container.getByTestId('number5')
    button2 = container.getByTestId('number2')
    divide = container.getByTestId('operator-divide')
    clear = container.getByTestId('clear')
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    fireEvent.click(button1)
    fireEvent.click(add)
    fireEvent.click(button4)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should subtract 4 from 7 and get 3', () => {
    fireEvent.click(button7)
    fireEvent.click(subtract)
    fireEvent.click(button4)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should multiply 3 by 5 and get 15', () => {
    fireEvent.click(button3)
    fireEvent.click(mulitply)
    fireEvent.click(button5)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should divide 21 by 7 and get 3', () => {
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divide)
    fireEvent.click(button7)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should concatenate multiple number button clicks', () => {
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('21')
  }) 

  it('should chain multiple operations together', () => {
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divide)
    fireEvent.click(button7)
    fireEvent.click(mulitply)
    fireEvent.click(button3)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('9')    
  })

  it('should clear the running total without affecting the calculation', () => {
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divide)
    fireEvent.click(button3)
    fireEvent.click(subtract)
    fireEvent.click(button2)
    fireEvent.click(clear)
    fireEvent.click(button7)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('0')
  })

})









