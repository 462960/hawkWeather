import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Loader } from "Components/Loader";

export class DataContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillReceiveProps(nextProps) {
    this.props.data !== nextProps.data &&
      this.setState({
        isLoading: false
      });
    this.props.variant !== nextProps.variant &&
      this.setState({
        isLoading: true
      });
  }

  render() {
    return (
      <Fragment>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Fragment>{this.props.children}</Fragment>
        )}
      </Fragment>
    );
  }
}

DataContainer.propTypes = {
  variant: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};
