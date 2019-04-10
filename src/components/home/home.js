import './home.scss';
import React from 'react';
import {Button} from 'semantic-ui-react';



class Home extends React.Component {
  render(){

    return(
      <div className="full">
        <div>
          <div className="openerwords">
            Enter Into the World Of
          </div>
          <Button> I want bass </Button>
          <div className='openbelow'>
            Thunder
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
