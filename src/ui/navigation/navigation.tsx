import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (): JSX.Element => {
  return (
    <div>
      <Link to='/page1'><a>Page 1</a></Link>
      <Link to='/page2'><a>Page 2</a></Link>
    </div>
  )
};

export default Navigation;