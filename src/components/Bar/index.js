import React from 'react';
import {
    AppBar,
    Toolbar,
    Input
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled(Input)`
    && {
        color: white;
        font-size: 1.5rem;
    }
`;

const StyledIcon = styled(SearchIcon)`
    && {
        margin-right: 1rem;
    }
`;

const Bar = ({onChange}) => (
    <AppBar>
        <Toolbar>
            <StyledIcon />
            <StyledInput
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search article..."
                color="inherit" 
                disableUnderline
            />
        </Toolbar>
    </AppBar>
)

Bar.propTypes = {
    onChange: PropTypes.func
};

export default Bar;