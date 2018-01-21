import React, { Component } from 'react';
import axios from 'axios';
import './watcher.css';
import Cryptocurrency from './cryptocurrency';


class Watcher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "bitcoin",
                    name: "Bitcoin",
                    symbol: "BTC",
                    price_usd: "1",
                    percent_change_1s: "0",
                    percent_change_1m:  "0",              
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },
                {
                    id: "ethereum",
                    name: "Ethereum",
                    symbol: "ETH",
                    price_usd: "1",
                    percent_change_1s: "0",
                    percent_change_1m:  "0",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },
                {
                    id: "ripple",
                    name: "Ripple",
                    symbol: "XRP",
                    price_usd: "1",
                    percent_change_1s: "0",
                    percent_change_1m:  "0",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                }
            ]
        };
    }
    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
    }

    fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=5")
            .then(response => {
                var wanted = ["bitcoin", "ethereum", "ripple"];
                var result = response.data.filter(currency => wanted.includes(currency.id));
                this.setState({ data: result});
            })
            .catch(err => console.log(err));
    }
    
    render() {
        var tickers = this.state.data.map((currency) =>
        <Cryptocurrency data={currency} key={currency.id} />
        );
        return (
            <div className="watcher-container">
                <ul className="watcher">{tickers}</ul>
                <p>This is the BitCoin's performance against Ethereum & Ripple in RealTime!</p>
           </div>
        );
    }
}

export default Watcher;



