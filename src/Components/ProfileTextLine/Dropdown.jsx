import React from "react";
import './Dropdown.css'
//import { FormattedMessage } from "react-intl";

/*
className
id
description
disabled
required
value
items=[]

onSelectionChanged
 */

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comboValues: props.items,
      selectedValue: props.value,
      comboWidth: 0,
      showCombo: false
    };
  }

  onComboClick = (e) => {
    const width = e.target.parentNode.offsetWidth
    this.setState({ showCombo: !this.state.showCombo, comboWidth: width });
  };

  onMouseEnterItem = event => {
    //console.log(event.target.id);
    const el = document.getElementById(event.target.id);
    el.setAttribute("class", "item-selected pl2");
  };

  onMouseLeaveItem = event => {
    const el = document.getElementById(event.target.id);
    el.setAttribute("class", "item-unselected pl2");
  };

  onItemSelected = (event) => {
    const cb = document.getElementById("combo" + "_" + this.props.id);
    cb.value = event.target.innerText;
    this.setState({ showCombo: false, selectedValue: cb.value });
    this.props.onSelectionChanged(this.props.id, cb.value);
  };

  getClassName = () =>
  {
    return this.props.disabled ? 'no-border no-background' : 'bg-white no-border'
  }

  isInputRequired = () =>
  {
    return (this.props.required  && this.state.selectedValue === undefined) ?
          'input-required' : '';
  }

  render() {
    return (
      <div className={this.props.className}>
        <label className="" htmlFor="combo">
          {this.props.description}
        </label>
        <div className={"flex justify-between " + this.isInputRequired()}>
          <input
            className={"flex-grow-2 " + this.getClassName()}
            disabled={this.props.disabled}
            id={"combo"+"_"+this.props.id}
            type="text"
            value={this.state.selectedValue}
          />
          <button
            className={this.getClassName()}
            disabled={this.props.disabled}
            onClick={this.onComboClick}
          >
            {this.props.disabled ? '' : '▼'}
          </button>
        </div>
        {this.state.showCombo && (
          <div className="shadow-3 absolute br3 br--bottom" style={{width: this.state.comboWidth}}>
            {this.props.items.map(value => {
              return (
                <div
                  id={'cont'+value}
                  key={value}
                  className="item-unselected pl2"
                  onMouseEnter={this.onMouseEnterItem}
                  onMouseLeave={this.onMouseLeaveItem}
                  onClick={this.onItemSelected}
                >
                  <div id={value}>
                    {value}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
