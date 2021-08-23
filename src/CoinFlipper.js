import React from "react";
import Coin from "./Coin";
import "./CoinFlipper.css";

class CoinFlipper extends React.Component {
    static defaultProps = { sides: ["heads", "tails"] };
    constructor(props) {
        super(props);
        this.state = {
            coin: "",
            flips: 0,
            heads: 0,
            tails: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    countSides() {
        this.state.coin === "heads"
            ? this.setState({ tails: this.state.tails + 1 })
            : this.setState({ heads: this.state.heads + 1 });
    }

    flipCoin() {
        const flipperCoin =
            this.props.sides[
                Math.floor(Math.random() * this.props.sides.length)
            ];
        this.setState({ coin: flipperCoin });
    }

    handleClick() {
        this.setState((curState) => ({ flips: curState.flips + 1 }));
        this.flipCoin();
        this.countSides();
    }

    render() {
        return (
            <div className="CoinFlipper">
                <h1>Let's flip a coin!</h1>
                <Coin side={this.state.coin} />
                <button onClick={this.handleClick}>FLIP MEEE</button>
                <p>
                    Out of {this.state.flips} flips, there have been{" "}
                    {this.state.heads} heads and {this.state.tails} tails.
                </p>
            </div>
        );
    }
}

export default CoinFlipper;
