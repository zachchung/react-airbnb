import React from "react";
import "./flat.css";
// API: https://github.com/lewagon/flats-boilerplate/blob/master/flats.json

class Flat extends React.Component {
  render() {
    const title = `${this.props.flat.price} ${this.props.flat.priceCurrency} - ${this.props.flat.name}`;

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    }; // backgroundImage instead of background-image

    return (
      <div className="flat" onClick={this.handleClick}>
        <div className="flat-picture" style={style}></div>
        <div className="flat-title">
          {title}
        </div>
      </div>
    ); // use className instead of class (class is a reserved word)
  } // className for css

  handleClick = () => {
    // call the parent method selectFlat ???????????
    this.props.selectFlat(this.props.flat);
  }
} // onclick?????

export default Flat;
