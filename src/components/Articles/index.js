import React from 'react';
import Divider from '@material-ui/core/Divider'
import { PropTypes } from 'prop-types'
import {
    Link
} from 'react-router-dom'
import {
    List,
    ListItem
} from '@material-ui/core'
import {
    Progress,
    Pager,
    Bar
} from '../../components';

const Articles = ({fetchArticles, fetchMore, list, isFetching, pages, page, query}) => (
    <div>
        <Bar onChange={(v) => fetchArticles({query: v})}/>
        <Divider/>
        {list && list.length > 0 &&
            <List component="nav">
            {list.map(({objectID, title}, i) => (
                <ListItem button key={i}>
                <Link to={`/articles/${objectID}`}>
                    {title}
                </Link>
                </ListItem>
            ))}
            </List>
        }
        {isFetching &&
            <Progress/>
        }
        <Divider/>
        {pages > page + 1 &&
            <Pager 
                pages={pages}
                onClickMore={(p) => fetchMore({page: page, query: query})}
                page={page}
            />
        }
    </div>
)

Articles.propTypes = {
    onChange: PropTypes.func,
    list: PropTypes.array,
    isFetching: PropTypes.bool,
    pages: PropTypes.number,
    page: PropTypes.number,
    fetchArticles: PropTypes.func,
};

export default Articles;