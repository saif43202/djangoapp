import React from "react";
import New from "./New";
import PropTypes from 'prop-types';

export default function My(props) {
    return (
      <div>
          <New try='new component' />
          <h1>my name is {props.name}</h1>
      </div>
    );
  }

  My.propTypes ={
    name:PropTypes.string
  }
  // My.defaultProps={

  // }