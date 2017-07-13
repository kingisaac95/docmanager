import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

/**
 * @function
 * @param {object} ComposedConmponent
 */
export default function (ComposedConmponent) {
  /**
   * @class
   */
  class Authenticate extends React.Component {
    /**
     * componentWillMount
     * @method
     * @returns {action} - redirect
     */
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.context.router.push('/');
      }
    }

    /**
     * componentWillUpdate
     * @method
     * @param {object} nextProps
     * @returns {action} - redirect
     */
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }

    /**
     * render
     * @method
     * @returns {jsx} - jsx
     */
    render() {
      return (
        <ComposedConmponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  };

  /**
   * @function
   * @param {object} state
   * @returns {object} - exposed state
   */
  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps)(Authenticate);
}
