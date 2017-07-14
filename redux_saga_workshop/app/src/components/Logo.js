import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fa/lib/Icon';

const Logo = props => (
    <Icon name="building-o" {...props}> Scrum Poker</Icon>
);

Logo.propTypes = {
    size: PropTypes.string,
};

Logo.defaultProps = {
    size: 'lg',
};

export default Logo;
