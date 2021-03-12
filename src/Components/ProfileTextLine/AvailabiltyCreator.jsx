import React, { Component } from 'react'
import moment from 'moment';
import TimePickerPr from './TimePickerPr';

export default class AvailabilityCreator extends Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      Availability: props.value,
      Checks: this.createChecksArray()
    }
  }

  createChecksArray = () =>
  {
    const res = [0,1,2,3,4,5,6].map(
      (d) =>
      {
        return ({check: false, start: '08:00', end: '22:00'})
      }
    );

    if (this.props.value !== undefined)
    {
      this.props.value.forEach(
        (av) =>
        {
          res[av.Day] = {
            check: true,
            start: av.Start,
            end: av.End
          }
        }
      )
    }

    return res;
  }

  getClass = () =>
  {
    //console.log(this.state.Availability.length)
    //console.log(this.props);
    if (this.props.required &&((this.state.Availability === undefined) ||
                               (this.state.Availability.length === 0)) )
      return 'input-required';

    return 'no-border';
  }

  getCurrentAvailability = () =>
  {
    let av = [];

    this.state.Checks.forEach(
      (c,idx) =>
      {
        if (c.check)
        {
          av.push({
            Day: idx,
            Start: c.start,
            End: c.end
          });
        }
      }
    )

    this.setState({Availability: av});

    return av;
  }

  onDayChecked = (checked, idx) =>
  {
    const check = this.state.Checks;

    check[idx].check = checked;

    this.setState({Checks: check});

    this.props.onSelectionChanged(this.getCurrentAvailability());
  }

  startTimeChanged = (value, idx) =>
  {
    const check = this.state.Checks;

    check[idx].start = value;

    this.setState({Checks: check});

    if (check[idx].check)
    {
      this.props.onSelectionChanged(this.getCurrentAvailability());
    }
  }

  endTimeChanged = (value, idx) =>
  {
    const check = this.state.Checks;

    check[idx].end = value;

    this.setState({Checks: check});

    if (check[idx].check)
    {
      this.props.onSelectionChanged(this.getCurrentAvailability());
    }
  }

  days = [0,1,2,3,4,5,6].map(
    (d) =>
    {
      return moment().locale('en-us').weekday(d).format('dddd')
    }
  )

  short_Days = [0,1,2,3,4,5,6].map(
    (d) =>
    {
      return moment().locale('en-us').weekday(d).format('ddd')
    }
  );

  renderAvailabilityForm = () =>
  {

    return(
      <div className='w5'>
        <div
          className='ba'
          style={{height: '24px', overflow: 'auto'}}
        >
          {this.getAvailabilityString()}
        </div>
        <div className=''>
          <div className='flex-grow-2 mt1'>
          {
            this.days.map(
              (d,idx) =>
              {
                if (idx === 0)
                  return '';

                return(
                  <div className='flex items-center justify-between mb1'>
                    <div className='w-50'>
                      <input
                        className='mr1'
                        type='checkbox'
                        checked={this.state.Checks[idx].check}
                        onChange={(e) => this.onDayChecked(e.target.checked, idx)}
                      />
                      <label
                        className=''
                      >
                        {d}
                      </label>
                    </div>
                    <TimePickerPr 
                      value={this.state.Checks[idx].start}
                      disabled={!this.state.Checks[idx].check}
                      onChange={(e) => this.startTimeChanged(e, idx)}
                    />
                    <span>{' - '}</span>
                    <TimePickerPr 
                      value={this.state.Checks[idx].end}
                      disabled={!this.state.Checks[idx].check}
                      onChange={(e) => this.endTimeChanged(e, idx)}
                    />
                  </div>
                );
              }
            )
          }
          </div>
        </div>
      </div>
    )
  }

  getAvailabilityString = () =>
  {
    let res = '';

    this.state.Checks.forEach(
      (check, idx) =>
      {
        res = res + 
          (check.check 
              ? this.short_Days[idx] + ' ' + check.start + ' - ' + check.end + ', '
              : ''
          );
      }
    )

    res = res.replace(/,\s*$/,'');

    return res;
  }

  render()
  {
    //console.log(this.props);
    return(
      <div className={' '}>
        {
          this.props.disabled 
            ? <div
                className={'w5 ' + this.getClass()}
                style={{height:'24px', overflow: 'auto'}}
              >
                {this.getAvailabilityString()}
              </div>
            : this.renderAvailabilityForm()
        }
      </div>
    )
  }
}