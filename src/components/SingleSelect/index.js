import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import { colourOptions } from '../../config/menu.js';

export default class SingleSelect extends Component{

   render() {

    return (
      <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={colourOptions[0]}
          name="color"
          options={colourOptions}
        />
      </Fragment>
    );
  }
}
