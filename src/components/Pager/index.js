import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {
    MoreHoriz
} from '@material-ui/icons';

const Pager = ({onClickMore, page, pages}) => (
    <div>
        {page < pages - 1 && 
            <Button color="primary" onClick={onClickMore}>
            Load more <MoreHoriz/>
        </Button>
        }
    </div>
)

Pager.propTypes = {
    onClickMore: PropTypes.func,
    page: PropTypes.number,
    pages: PropTypes.number
};

export default Pager;