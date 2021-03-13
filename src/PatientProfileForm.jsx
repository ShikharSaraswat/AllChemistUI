import React, { Component } from 'react';
import ProfileTextLine from './Components/ProfileTextLine/ProfileTextLine';

/*
className
patientId
 */

export default class PatientProfileForm extends Component
{
  onFieldChanged = (id, value) =>
  {
    console.log(id, value);
  }

  onApply = () =>
  {

  }

  onClose = () =>
  {

  }

  render()
  {
    console.log(this.props);
    return(
      <div className={this.props.className + ' w-90 '}>
        <div className='b--lightgray br4 shadow-6 bg-lightblue'>
            <div className='flex items-center justify-between'>
              <div className=''>
                
              </div>
              <div className='f-arial-30 bold'>
                {this.props.patient.Name}
              </div>
              <div
                  onClick={this.props.onClose}
                  className='close-nf mr1'
                >
                  &#9746;
              </div>
            </div>
            <div className='flex justify-between ma2'>
              <div className='flex-grow-2 mr2'>
                <ProfileTextLine 
                  id='name'
                  field='Name'
                  type='text'
                  value={this.props.patient.Name}
                  onFieldChanged={this.onFieldChanged}
                  required={true}
                />
                <ProfileTextLine
                  id='address'
                  field='Address'
                  type='text'
                  value={this.props.patient.Address}
                  onFieldChanged={this.onFieldChanged}
                  required={true}
                />
                <ProfileTextLine
                  id='email'
                  field='E-mail'
                  type='text'
                  value={this.props.patient.Email}
                  onFieldChanged={this.onFieldChanged}
                  required={true}
                />
                <ProfileTextLine
                  id='phone'
                  field='Phone'
                  type='text'
                  value={this.props.patient.Phone}
                  onFieldChanged={this.onFieldChanged}
                  required={false}
                />
                <ProfileTextLine
                  id='dob'
                  field='Date of birth'
                  type='datepicker'
                  value={this.props.patient.DOB}
                  onFieldChanged={this.onFieldChanged}
                  required={false}
                />
              </div>
              <div>
                <img src="https://cdn0.iconfinder.com/data/icons/medical-2-4/48/68-512.png" alt='profile' width='150' />
              </div>
            </div>
            <div className='flex justify-around pa3'>
              <button 
                className='w4 bg-buttonblue pa2 br4 shadow-3'
                onClick={this.onApply}
              >
                Apply
              </button>
              <button 
                className='w4 bg-buttonblue pa2 br4 shadow-3'
                onClick={this.props.onClose}
              >
                Close
              </button>
            </div>
        </div>
      </div>      
    )
  }
}