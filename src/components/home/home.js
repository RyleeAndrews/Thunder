import './home.scss';
import React from 'react';
import {Button, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { FaSoundcloud } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){

    return(
      <div>
        <div className="main">
          <div className="header">
            <Image className="headimg" src={require('../assets/thunderzombie.png')} size="large"/>
            <Link to="/">
              <Button className="mainbtn"> Home </Button>
            </Link>
            <Link to="/about">
              <Button className="mainbtn"> About </Button>
            </Link>
            <Link to="/music">
              <Button className="mainbtn"> Music </Button>
            </Link>
            <Button className="mainbtn"> Gallery </Button>
            <a href="https://soundcloud.com/user-735548159" rel="noopener noreferrer" target="_blank">
              <FaSoundcloud className="soundcloud"/>
            </a>
            <a href="https://www.instagram.com/t.hundreds/" rel="noopener noreferrer" target="_blank">
              <FaInstagram className='insta'/>
            </a>
            <Image className="liveimg" src={require('../assets/tracklist.png')} size="large"/>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
