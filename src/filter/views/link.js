import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from "../actions";

const Link = ({action, children, onClick}) => {
  {
    if (action) {
      return <b className="filter selected">{children}</b>;
    } else {
      return (
        <a href="#" className="filter not-selected" onClick={(e) => {
          e.preventDefault();
          onClick();
        }}>
          {children}
        </a>
      );
    }
  }
};

Link.propTypes = {
  action: propTypes.bool.isRequired,
  children: propTypes.node.isRequired,
  onClick: propTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    action: state.filter === ownProps.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Link)