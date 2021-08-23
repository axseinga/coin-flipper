import React from "react";
import Coin from "./Coin";
import "./CoinFlipper.css";

class CoinFlipper extends React.Component {
    static defaultProps = { sides: ["heads", "tails"] };
    constructor(props) {
        super(props);
        this.state = {
            coin: null,
            flips: 0,
            heads: 0,
            tails: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        this.setState((curState) => ({ flips: curState.flips + 1 }));
        const flipperCoin =
            this.props.sides[
                Math.floor(Math.random() * this.props.sides.length)
            ];
        this.setState({ coin: flipperCoin });
        flipperCoin === "heads"
            ? this.setState({ heads: this.state.heads + 1 })
            : this.setState({ tails: this.state.tails + 1 });
    }

    handleClick() {
        this.flipCoin();
    }

    render() {
        return (
            <div className="CoinFlipper">
                <h1>Let's flip a coin!</h1>
                {this.state.coin && <Coin side={this.state.coin} />}
                <button onClick={this.handleClick}>FLIP MEEE</button>
                <p>
                    Out of {this.state.flips} flips, there have been
                    {this.state.heads} heads and {this.state.tails} tails.
                </p>
            </div>
        );
    }
}

export default CoinFlipper;
