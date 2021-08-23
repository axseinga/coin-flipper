import React from "react";
import "./Coin.css";

const url = `https://tinyurl.com/react-coin-`;

class Coin extends React.Component {
    render() {
        let imgSrc = `${url}${this.props.side}-jpg`;
        return <img src={imgSrc} className="Coin" alt={this.props.side}></img>;
    }
}

export default Coin;
