import React from 'react';

import Number from './number';

import Operation from './operation'

import NumberInput from './number-input';

import './calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',

      // numbers: range(9).map(num => {text: `${num}`})
      numbers: [{
        text: '7'
      },{
        text: '8'
      },{
        text: '9'
      },{
        text: '4'
      },{
        text: '5'
      },{
        text: '6'
      },{
        text: '1'
      },{
        text: '2'
      },{
        text: '3'
      }
      ],
      operations: [{
        text: '+',
      },{
        text: '-',
      },{
        text: '/',
      },{
        text: '*',
      }]
    };

    this.onChange = this.onChange.bind(this);
    this.onEqual = this.onEqual.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onSquare = this.onSquare.bind(this);
    this.onSquareRoot = this.onSquareRoot.bind(this);
    this.onBackSpace = this.onBackSpace.bind(this);
    this.onZero = this.onZero.bind(this);
    this.onDecimal = this.onDecimal.bind(this);
    this.onModulus = this.onModulus.bind(this);

  }
  onChange(e) {
    this.setState({currentValue: e.target.value})
  }

  onButton(num) {
      this.setState({currentValue: this.state.currentValue + num})
  }

  onEqual() {
       this.setState({currentValue: eval(this.state.currentValue)})
  }

  onClear() {
       this.setState({currentValue: ''})
  }

  onSquare() {
       this.setState({currentValue: eval(this.state.currentValue * this.state.currentValue)})
  }

  onSquareRoot() {
       this.setState({currentValue: Math.sqrt(this.state.currentValue)})
  }

  onBackSpace() {
       this.setState({currentValue: this.state.currentValue.slice(0, -1)})
  }

   onZero() {
       this.setState({currentValue: this.state.currentValue + '0'})
  }

  onDecimal() {
       this.setState({currentValue: this.state.currentValue + '.'})
  }
  onModulus() {
       this.setState({currentValue: this.state.currentValue + '%'})
  }

  

  render() {
    const numbers = this.state.numbers.map((number, index) => {
      return <Number key={index} {...number} onButtonClick={this.onButton.bind(this, number.text)} />
    });

    const operations = this.state.operations.map((operation, index) => {
      return <Operation key={index} {...operation} onButtonClick={this.onButton.bind(this, operation.text)} />
    });

    return (
      <div className='calculator'>
        <NumberInput id="input-value" label=" " value={this.state.currentValue}
        onChange={this.onChange}/>

        <section className ='button-section'>
              
          <button className ='clear-button' onClick={this.onClear}> Clear </button>
          <button className ='backspace-button' onClick={this.onBackSpace}> ⌫ </button>
          <div className='advanced-operations'>
            <button className ='square-button' onClick={this.onSquare}> x² </button>
            <button className ='squareRoot-button' onClick={this.onSquareRoot}> √ </button>
            <button className ='Modulus-button' onClick={this.onModulus}> Modulus </button>
            {numbers}
          </div>
          <div className ='operations'>
            {operations}
          </div>
          <div className ='bottom-div'>
            <button className ='zero-button' onClick={this.onZero}> 0 </button>
            <button className ='decimal-button' onClick={this.onDecimal}> . </button>
            <button className ='equal-button' onClick={this.onEqual}> = </button>
          </div>
        </section>
      </div> 
    )
    }
}