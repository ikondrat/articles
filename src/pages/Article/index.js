import React from 'react';
import Article from '../../containers/Article';

export default (match) => (
    <div>
        <Article {...match}/>
    </div>
)