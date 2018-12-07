import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ContentContainer.css';

export default class ContentContainer extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.element,
      PropTypes.string,
    ]).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
  };

  render() {
    const { props } = this;

    return (
      <div className={classNames(props.className, styles.ContentContainer)}>{props.children}</div>
    );
  }
}