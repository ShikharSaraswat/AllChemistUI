import React, { Component } from 'react';
import './ProfileTextLine.css'
import Dropdown from './Dropdown.jsx';
import AvailabilityCreator from './AvailabiltyCreator.jsx';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
/*
id
field
value
required: boolean
onFieldChanged(id, value)
 */

export default class ProfileTextLine extends Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      inputDisabled: true,
      inputText: props.value
    }
  }

  getFieldClass = () =>
  {
    if (this.props.required && this.state.inputText === undefined)
      return ' required';

    return '';
  }

  getInputClass = () =>
  {
    if (this.props.required && this.state.inputText === undefined)
      return 'input-required';

    return 'no-border';
  }

  onClick = () =>
  {
    this.setState({inputDisabled: !this.state.inputDisabled});
    this.props.onFieldChanged(this.props.id, this.state.inputText);
  }

  onChange = (event) =>
  {
    this.setState({inputText: event.target.value})
  }

  onKeyPress = (event) =>
  {
    if (event.key === 'Enter')
    {
      this.setState({inputDisabled: true})
      this.props.onFieldChanged(this.props.id, this.state.inputText);
    }
  }

  onComboChange = (e) =>
  {
    this.setState({inputText: e.value});
  }

  onDropdownSelectionChanged = (id, value) =>
  {
    this.setState({inputText: value});
  }

  onAvailabilityChanged = (value) =>
  {
    this.setState({inputText: value});
  }

  onDateChange = (value) =>
  {
    console.log(value);
  }

  renderInput = () =>
  {
    if (this.props.type === 'text')
      return (
          <input 
            className={'w5 ' + this.getInputClass()} 
            disabled={this.state.inputDisabled}
            value={this.state.inputText}
            type='text' 
            id={this.props.id}
            ref={this.state.inputFocus}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />
      )
    else if (this.props.type === 'combo')
     return(
       <div className=''>
         <Dropdown
            className='w5'
            id={this.props.id}
            description=''
            disabled={this.state.inputDisabled}
            required={this.props.required}
            value={this.state.inputText}
            items={['pediatrist','psychologist','pathologist','psychiatrist']}
            onSelectionChanged={this.onDropdownSelectionChanged}
         />
       </div>
     )
    else if (this.props.type === 'datepicker')
    {
      console.log(this.props.value);
      return(
        <div className='w5'>
          <DatePicker
            onChange={this.onDateChange}
            defaultValue={new moment(this.props.value)}
          />
        </div>
      )
    }
    else if (this.props.type === 'custom')
    {
      return(
        <AvailabilityCreator 
            className={'w5'}
            id={this.props.id}
            description=''
            disabled={this.state.inputDisabled}
            required={this.props.required}
            value={this.state.inputText}
            onSelectionChanged={this.onAvailabilityChanged}
        />
      );
    }
  }

  render()
  {
    //console.log(this.state);
    return(
      <div className='flex items-center justify-between mb2'>
        <label className='w4'>{this.props.field}</label>
        {this.renderInput()}
        <div className='pointer' onClick={this.onClick}>✐</div>
      </div>
    )
  }
}