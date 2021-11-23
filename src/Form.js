import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./Form.css";
// import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import RichText from "./RichText";

const currencies = [
    {
        value: 'NONE',
        label: 'None', 
    },
    {
        value: 'BSC',
        label: 'Binance Smart Chain (BSC)',
    },
    {
        value: 'ETH',
        label: 'Ethereum Smart Chain (ETH)',
    },
    {
        value: 'MATIC',
        label: 'Polygon Smart Chain (MATIC)',
    },
    {
        value: 'SOL',
        label: 'Solana Smart Chain (SOL)',
    },
    {
        value: 'ENJ',
        label: 'Enjin Smart Chain (ENJ)',
    },
    {
        value: 'EOS',
        label: 'EOS Smart Chain (EOS)',
    },
    {
        value: 'ONT',
        label: 'Ontology Smart Chain (ONT)',
    },
    {
        value: 'TRX',
        label: 'Tron Smart Chain (TRX)',
    },
    {
        value: 'NEAR',
        label: 'Near Smart Chain (NEAR)',
    },
    {
        value: 'FTM',
        label: 'Fantom Smart Chain (FTM)',
    },
    {
        value: 'KCC',
        label: 'Kucoin Smart Chain (KCC)',
    },
    {
        value: 'DRK',
        label: 'Draken Smart Chain (DRK)',
    },
    {
        value: 'ARB',
        label: 'Arbitrum Smart Chain (ARB)',
    },
];

export default function Form() {
    const [state, setState] = useState({
        owner: "619b7caffc337e241d2ceea0",
        name: "",
        price: "",
        marketCap: "",
        symbol: "",
        launchDate: "",
        network: "",
        totalSupply: "",
        totalBurned: "",
        decimals: "",
        contractAddress: "",
        logoURL: "",
        coinMarketCapURL: "",
        coinGeckoURL: "",
        whitePaperURL: "",
        renouncedTXHash: "",
        lpLockedURL: "",
        auditedURL: "",
        website: "",
        facebookURL: "",
        mediumURL: "",
        telegramId: "",
        twitterURL: "",
        discordURL: "",
        youtubeURL: "",
        introduceVideoURL: "",
        redditURL: "",
        githubURL: "",
        startTimestamp: "",
        endTimestamp: "",
        whitelistURL: "",
        presaleBuyURL: "",
    });
    // const [currency, setCurrency] = React.useState('EUR');

    const handleFormSubmit = event => {
        event.preventDefault();
        axios.post("https://coinstronaut-admin.herokuapp.com/create-or-update-coin", {
            coin: state
        }).then(
          (res) => console.log(res)
        )
    };

    const dispatcher = name => event => {
        setState({ ...state, [name]: event.target.value });
    };

    return (
        <div className="App">
            <p>TOKEN BASIC INFORMATION</p>
            <div>
                <form action="#">
                    <label>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="firstname"
                        placeholder="Your name.."
                        value={state.name}
                        onChange={dispatcher("name")}
                    />
                    <label>Price</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="price...."
                        value={state.price}
                        onChange={dispatcher("price")}
                    />

                    <label>Market Cap</label>
                    <input
                        type="text"
                        id="marketCap"
                        name="marketCap"
                        placeholder="Your MarketCap"
                        value={state.marketCap}
                        onChange={dispatcher("marketCap")}
                    />
                    <label>Symbol</label>
                    <input
                        type="text"
                        id="symbol"
                        name="symbol"
                        placeholder="Your symbol"
                        value={state.symbol}
                        onChange={dispatcher("symbol")}
                        style={{marginBottom:'23px'}}
                    />
                    <TextField
                        id="launchDate"
                        label="launch Date"
                        type="date"
                        value={state.launchDate}
                        onChange={dispatcher("launchDate")}
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{marginBottom:'23px'}}
                    />
                    <br />
                    {/* <label>Network</label> */}
                    {/* <TextField
                        id="network"
                        select
                        label="Network/Chain"
                        placeholder="Binance Smart Chain (BSC)"
                        value={state.network}
                        onChange={dispatcher("network")}
                        helperText="Please select"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField> */}
                    <TextField
                        id="network"
                        select
                        label="Native select"
                        value={state.network}
                        onChange={dispatcher("network")}
                        SelectProps={{
                            native: true,
                        }}
                        // helperText="Please select"
                    >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <br />
                    <TextField
                        id="totalSupply"
                        label="Total Supply"
                        type="number"
                        value={state.totalSupply}
                        onChange={dispatcher("totalSupply")}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />
                    <TextField
                        id="totalBurned"
                        label="Total Burned"
                        type="number"
                        value={state.totalBurned}
                        onChange={dispatcher("totalBurned")}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />
                    <TextField
                        id="decimals"
                        label="decimals"
                        type="number"
                        value={state.decimals}
                        onChange={dispatcher("decimals")}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />
                    <label>contractAddress</label>
                    <input
                        type="text"
                        id="contractAddress"
                        name="contractAddress"
                        placeholder="Your address.."
                        value={state.contractAddress}
                        onChange={dispatcher("contractAddress")}
                    />
                    <br />
                    <label>Logo URL</label>
                    <input
                        type="text"
                        id="logoURL"
                        name="logoURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.logoURL}
                        onChange={dispatcher("logoURL")}
                    />
                    <label>Coinmarketcap URL</label>
                    <input
                        type="text"
                        id="coinMarketCapURL"
                        name="coinMarketCapURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.coinMarketCapURL}
                        onChange={dispatcher("coinMarketCapURL")}
                    />
                    <label>Coingecko URL</label>
                    <input
                        type="text"
                        id="coinGeckoURL"
                        name="coinGeckoURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.coinGeckoURL}
                        onChange={dispatcher("coinGeckoURL")}
                    />
                    <label>White Paper URL</label>
                    <input
                        type="text"
                        id="whitePaperURL"
                        name="whitePaperURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.whitePaperURL}
                        onChange={dispatcher("whitePaperURL")}
                    />
                    <label>Renounced URL</label>
                    <input
                        type="text"
                        id="renouncedTXHash"
                        name="renouncedTXHash"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.renouncedTXHash}
                        onChange={dispatcher("renouncedTXHash")}
                    />
                    <label>LP Locked URL</label>
                    <input
                        type="text"
                        id="lpLockedURL"
                        name="lpLockedURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.lpLockedURL}
                        onChange={dispatcher("lpLockedURL")}
                    />
                    <label>Audited URL</label>
                    <input
                        type="text"
                        id="auditedURL"
                        name="auditedURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.auditedURL}
                        onChange={dispatcher("auditedURL")}
                    />

                    <p>Social</p>
                    <label>Website URL</label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.website}
                        onChange={dispatcher("website")}
                    />
                    <label>Facebook URL</label>
                    <input
                        type="text"
                        id="facebookURL"
                        name="facebookURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.facebookURL}
                        onChange={dispatcher("facebookURL")}
                    />
                    <label>Medium URL</label>
                    <input
                        type="text"
                        id="mediumURL"
                        name="mediumURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.mediumURL}
                        onChange={dispatcher("mediumURL")}
                    />
                    <label>Telegram URL</label>
                    <input
                        type="text"
                        id="telegramId"
                        name="telegramId"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.telegramId}
                        onChange={dispatcher("telegramId")}
                    />
                    <label>Reddit URL</label>
                    <input
                        type="text"
                        id="redditURL"
                        name="redditURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.redditURL}
                        onChange={dispatcher("redditURL")}
                    />
                    <label>Github URL</label>
                    <input
                        type="text"
                        id="githubURL"
                        name="githubURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.githubURL}
                        onChange={dispatcher("githubURL")}
                    />
                    <label>Twitter URL</label>
                    <input
                        type="text"
                        id="twitterURL"
                        name="twitterURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.twitterURL}
                        onChange={dispatcher("twitterURL")}
                    />
                    <label>Discord URL</label>
                    <input
                        type="text"
                        id="discordURL"
                        name="discordURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.discordURL}
                        onChange={dispatcher("discordURL")}
                    />
                    <label>Youtube Channel URL</label>
                    <input
                        type="text"
                        id="youtubeURL"
                        name="youtubeURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.youtubeURL}
                        onChange={dispatcher("youtubeURL")}
                    />
                    <label>Introduce Video:</label>
                    <input
                        type="text"
                        id="introduceVideoURL"
                        name="introduceVideoURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.introduceVideoURL}
                        onChange={dispatcher("introduceVideoURL")}
                    />

                    <p>PRSESALE INFORMATION</p>
                    {/* <label>Presale Start Date Time (UTC)</label> */}
                    <TextField
                        id="startTimestamp"
                        label="Presale Start Date Time (UTC)"
                        type="datetime-local"
                        placeholder="yyyy/mm/dd"
                        value={state.startTimestamp}
                        onChange={dispatcher("startTimestamp")}
                        defaultValue="2017-05-24T10:30"
                        sx={{ width: 250 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{marginBottom:'23px'}}
                    />
                    <br />
                    <TextField
                        id="endTimestamp"
                        label="Presale End Date Time (UTC)"
                        type="datetime-local"
                        placeholder="yyyy/mm/dd"
                        value={state.endTimestamp}
                        onChange={dispatcher("endTimestamp")}
                        defaultValue="2017-05-24T10:30"
                        sx={{ width: 250 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{marginBottom:'23px'}}
                    />
                    <br />
                    <label>Whitelist URL</label>
                    <input
                        type="text"
                        id="whitelistURL"
                        name="whitelistURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.whitelistURL}
                        onChange={dispatcher("whitelistURL")}
                    />
                    <label>Presale Buy URL</label>
                    <input
                        type="text"
                        id="presaleBuyURL"
                        name="presaleBuyURL"
                        placeholder="Ex: https://coinstronaut/logo-100x100.png"
                        value={state.presaleBuyURL}
                        onChange={dispatcher("presaleBuyURL")}
                    />
                    <br />
                    <RichText />
                    <br />
                    <input type="submit" onClick={handleFormSubmit} value="Submit" />
                </form>
            </div>
        </div>
    );
}