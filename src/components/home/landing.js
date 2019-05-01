import './home.scss';
import React from 'react';
import {Button, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';




class Landing extends React.Component {
  constructor(props){
    super(props);

    this.state = {
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
            <Link to='/home'>
              <Button className="landingbtn" onClick={this.toggleClicked}> I want bass </Button>
            </Link>
        </div>
      </div>
    )
  }
}
export default Landing;
