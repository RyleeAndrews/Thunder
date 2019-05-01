import './music.scss';
import React from 'react';
import {Button, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { FaSoundcloud } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

class Music extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="music">
        <div className="header">
          <Image className="headimg" src={require('../assets/thunderzombie.png')} size="large"/>
          <Link to="/home">
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
          <div className='musicContainer'>
            <iframe className="soundcloudsongs" width="100%" height="300" scrolling="no" title="dreamworld" frameborder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/597383244&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>
            <iframe className="soundcloudsongs" width="100%" height="300" scrolling="no" title="dopplerknocker" frameborder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/592265871&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>
            <iframe className="soundcloudsongs" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" title="gawdzilla"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/592268934&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>
            <iframe className="soundcloudsongs" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" title="noisecomplaint"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/592270527&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>
            <iframe className="soundcloudsongs" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" title="teakettle22"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/592273032&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Music;
