import React from 'react';
import './Stopwatch.css';

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0
        }
    }

    getSeconds() {
        return ('0' + this.state.secondsElapsed % 60).slice(-2);
    }

    getMinutes() {
        return Math.floor(this.state.secondsElapsed / 60);
    }

    handleStartClick = () => {
        var _this = this;
        this.incrementer = setInterval(function () {
            _this.setState({
                secondsElapsed:
                    (_this.state.secondsElapsed + 1)
            });
        }, 1000)
    }

    handleStopClick = () => {
        clearInterval(this.incrementer);
    }

    handleResetClick = () => {
        this.setState({
            secondsElapsed: 0
        })
    }

    render() {
        return (
            <div className="stopwatch">
                <h1 className="time">{this.getMinutes()}:{this.getSeconds()}</h1>
                <section className="button">
                    <button
                        type="button"
                        onClick={this.handleStartClick}>Start</button>
                    <button
                        type="button"
                        onClick={this.handleStopClick}>Stop</button>
                    <button
                        type="button"
                        onClick={this.handleResetClick}>Reset</button>
                </section>
            </div>
        )
    }
}

export default Stopwatch;