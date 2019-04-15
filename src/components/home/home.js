import './home.scss';
import React from 'react';
import {Button, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';



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
            <Image className="headimg" src={require('../assets/psy.png')} size="large"/>
            <Button className="mainbtn"> Home </Button>
            <Link to="/about">
              <Button className="mainbtn"> About </Button>
            </Link>
            <Button className="mainbtn"> Music </Button>
            <Button className="mainbtn"> Blog </Button>
            <Button className="mainbtn"> Photography </Button>
            <div className="bottomBar"></div>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" className="soundcloud"
            allow="autoplay"
            title="soundcloud"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/283338997&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <p className="intro"> Thunder Skye Morales, 21, is a Pacific North West based producer residing in the heart of the Rocky Mountains.
             He has been producing for about as long as he's been DJing, totaling out around three and a half years.
             His sets usually consist of a lot of his independent work, up and coming artists, local support, doubles, chops,
             and a little bit of greed. Thunder's typical set times run about an hour, but are jammed packed full of low frequency shakers
             and crowd bending madness. If you aren't satisfied with the set within the immediate first fifteen minutes, dubstep obviously isn't your cup of tea. </p>
            <Image className="liveimg" src={require('../assets/live.png')} size="large"/>
          </div>
        </div>
      }
      </div>
    )
  }
}
export default Home;
