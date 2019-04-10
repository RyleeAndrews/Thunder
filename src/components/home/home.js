import './home.scss';
import React from 'react';
import {Button} from 'semantic-ui-react';



class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      clicked: false,
    };
  }

  toggleClicked = () => {
    this.setState({clicked: true});
  }

  render(){

    return(
      <div>
        {!this.state.clicked ?
          <div className="full">
            <div className="openerwords">
              Enter Into the World Of
            </div>
            <Button className="landingbtn" onClick={this.toggleClicked}> I want bass </Button>
            <div className='openbelow'>
              Thunder
            </div>
        </div>
        :
        <div className="main">
          <div className="header">
            <h4 className="headerWords"> Thunder </h4>
            <Button className="mainbtn"> Home </Button>
            <Button className="mainbtn"> About </Button>
            <Button className="mainbtn"> Music </Button>
            <Button className="mainbtn"> Blog </Button>
            <Button className="mainbtn"> Photography </Button>
            <div className="bottomBar"></div>
          </div>
        </div>
      }
      </div>
    )
  }
}
export default Home;
