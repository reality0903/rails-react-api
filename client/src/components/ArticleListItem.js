import React from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import '../styles/ArticleListItem.css';

export default () => {
  return (
    <div id="article-list-item">
      <ListGroupItem>
        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
        <ListGroupItemText>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </ListGroupItemText>
      </ListGroupItem>
    </div>
  )
}
