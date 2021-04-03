import React from 'react'
import '../components/modulePages.css'


const IMAGES = [
  '/images/codeva.jpeg',
  '/images/codeva2.jpeg',
  '/images/codeva3.jpeg'
];

class SlideShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % IMAGES.length; //this is smart way to get current to be index 0 again if it reached the end to the array...
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = IMAGES[this.state.currentGP];
    return (
      <div className="slideshow">
        <img className = "slides" src={src} />
      </div>
    );
  }
}

export default SlideShow