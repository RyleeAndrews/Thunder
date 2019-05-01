import './home.scss';
import React from 'react';
import {Button, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { FaSoundcloud } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      clicked: false,
      slideCount: 1,
    };
  }

  componentDidMount(){
    this.interval();
  }

  componentDidUpdate(){
    if(this.state.slideCount === 3){
      clearInterval(this.timer);
      setTimeout(this.restart, 3500);
      setTimeout(this.interval, 3500);
    }
  }

  toggleClicked = () => {
    this.setState({clicked: true});
  }

  restart = () => {
    this.setState({slideCount: 1});
  }

  nextSlide = () => {
    this.setState({slideCount: this.state.slideCount + 1});
  }

  interval = () => {
    this.timer = setInterval(this.nextSlide, 3500);
    this.setState({slideCount: 1});
  }

  render(){

    return(
      <div>
        {!this.state.clicked ?
          <div className="full">
          {this.state.slideCount === 1 ?
            <Image className="landingimg" src={require("../assets/noise.png")} size="large"/>
            :
            this.state.slideCount === 2 ?
            <Image className="landingimg" src={require("../assets/greenghost.png")} size="large"/>
            :
            this.state.slideCount === 3 ?
            <Image className="landingimg" src={require("../assets/cashisking.png")} size="large"/>
            :
            null
          }
            <Button className="landingbtn" onClick={this.toggleClicked}> I want bass </Button>
        >
        </div>
        :
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
      }
      </div>
    )
  }
}
export default Home;
