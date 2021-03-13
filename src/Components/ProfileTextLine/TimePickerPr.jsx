import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

/*
className=''
id={'start_' + idx.toString()}
style={{width:'40px'}}
value='08:00'
onChange={(e) => this.startTimeChanged(e.target.value, idx)}
 */

class TimePickerPr extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      timeValue: moment(this.props.value,'HH:mm'),
      something: 0
    }
  }

  onChange = (v) =>
  {
    this.setState({timeValue: v});
    this.props.onChange(v.format('HH:mm'));
  }

  render()
  {
    //console.log(this.state)
    return(
      <div 
          className={this.props.className} 
          style={{width: '78px'}}
      >
        <TimePicker 
          id={this.props.id}
          format='HH:mm'
          size='small'
          showNow={false}
          defaultValue={this.state.timeValue}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default TimePickerPr;