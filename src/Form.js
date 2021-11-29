import React, { useState } from "react";

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import axios from 'axios';

const currencies = [
    {
        value: 'NONE',
        label: 'Not Applicable'
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
        axios.post("https://coinstronaut-admin.herokuapp.com/create-coin", {
            coin: state
        }).then(
          (res) => {
              if(res.status === 200){
                  alert("Coin Added! Thank You for Contributing :)")
              }
          }
        ).catch((err)=>{

            if(err.response.status === 400){
                alert("This Coin already exists! Please add another Coin.")
            }
            else{
                alert("Something is wrong, Please contact the Dev.")
            }

        })

        setState({
            owner: "619e4b0b3716fb3f46ef0770",
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
        })
    };

    const handleDateInput = (value) => {
        console.log(value.toUTCString())
    }

    const dispatcher = name => event => {
        setState({ ...state, [name]: event.target.value });
    };

    const [startDate, setStartDate] = useState(new Date());
    const [preStartDate, setPreStartDate] = useState(new Date());
    const [preEndDate, setPreEndDate] = useState(new Date());


    return (
        <div className="App p-5" style= {{maxWidth: "100vw"}}>
            <h1 className="display-4 mb-3">CRYPTO COIN DATA FORM</h1>
            <h5 className="mb-5"><strong>Please carefully fill all the required (<span style={{color: "red"}}>*</span>) fields, you are most welcome to fill other fields as well :)</strong></h5>
           
            <form className="row" onSubmit={handleFormSubmit}>
            
            <div class="form-group col-lg-4 mb-4">
                <label for="name">Name<span style={{color: "red"}}> *</span></label>
                <input
                    type="text"
                    id="name"
                    name="firstname"
                    placeholder="Name"
                    class="form-control"
                    value={state.name}
                    onChange={dispatcher("name")}
                    required
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="price">Price<span style={{color: "red"}}> *</span></label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    placeholder="Price (input price without adding currency)"
                    class="form-control"
                    value={state.price}
                    onChange={dispatcher("price")}
                    required
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="marketCap">Market Cap<span style={{color: "red"}}> *</span></label>
                <input
                    type="number"
                    id="marketCap"
                    name="marketCap"
                    placeholder="MarketCap"
                    class="form-control"
                    value={state.marketCap}
                    onChange={dispatcher("marketCap")}
                    min="0"
                    required
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="symbol">Symbol<span style={{color: "red"}}> *</span></label>
                <input
                    type="text"
                    id="symbol"
                    name="symbol"
                    placeholder="Symbol"
                    class="form-control"
                    value={state.symbol}
                    onChange={dispatcher("symbol")}
                    required
                />
            </div>

            
            <div className="col-lg-4 mb-4">
                <label for="launchDate">Launch Date<span style={{color: "red"}}> *</span> (Please select atleast once)</label>
                <DatePicker
                        id="launchDate"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        onSelect={date => setState({ ...state, launchDate: date})}
                        showTimeInput
                    />
            </div>

            <div className="col-lg-4 mb-4">
                <label for="networkChain">Network/Chain<span style={{color: "red"}}> *</span></label>
                <div class="input-group mb-4" id="networkChain">
                    <select class="custom-select" id="inputGroupSelect02"  
                        value={state.network}
                        onChange={dispatcher("network")} required>
                        <option value="" disabled></option>

                        {currencies.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                    </select>
                </div>
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="totalSupply">Total Supply</label>
                <input
                    type="number"
                    id="totalSupply"
                    name="totalSupply"
                    placeholder="Total Supply"
                    value={state.totalSupply}
                    onChange={dispatcher("totalSupply")}
                    class="form-control"
                    min="0"
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="totalBurned">Total Burned</label>
                <input
                    type="number"
                    id="totalBurned"
                    name="totalBurned"
                    value={state.totalBurned}
                    onChange={dispatcher("totalBurned")}
                    placeholder="Total Burned"
                    class="form-control"
                    min="0"
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="decimals">Decimals</label>
                <input
                    type="number"
                    id="decimals"
                    name="decimals"
                    placeholder="Decimals"
                    value={state.decimals}
                    onChange={dispatcher("decimals")}
                    class="form-control"
                    min="0"
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="contractAddress">Contract Address<span style={{color: "red"}}> *</span></label>
                <input
                    type="text"
                    id="contractAddress"
                    name="contractAdress"
                    placeholder="0x000000000000000ABCDE"
                    value={state.contractAddress}
                    onChange={dispatcher("contractAddress")}
                    class="form-control"
                    required
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="logoURL">Logo URL<span style={{color: "red"}}> *</span></label>
                <input
                    type="text"
                    id="logoURL"
                    name="logoURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.logoURL}
                    onChange={dispatcher("logoURL")}
                    required
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="coinmarketcapURL">Coinmarketcap URL</label>
                <input
                    type="text"
                    id="coinmarketcapURL"
                    name="coinmarketcapURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.coinMarketCapURL}
                    onChange={dispatcher("coinMarketCapURL")}
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="coingeckoURL">Coingecko URL</label>
                <input
                    type="text"
                    id="coingeckoURL"
                    name="coingeckoURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.coinGeckoURL}
                    onChange={dispatcher("coinGeckoURL")}
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="whitepaperURL">Whitepaper</label>
                <input
                    type="text"
                    id="whitepaperURL"
                    name="whitepaperURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.whitePaperURL}
                    onChange={dispatcher("whitePaperURL")}
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="renouncedURL">Renounced URL</label>
                <input
                    type="text"
                    id="renouncedURL"
                    name="renouncedURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.renouncedTXHash}
                    onChange={dispatcher("renouncedTXHash")}
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="lpLockedURL">LP Locked URL</label>
                <input
                    type="text"
                    id="lpLockedURL"
                    name="lpLockedURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.lpLockedURL}
                    onChange={dispatcher("lpLockedURL")}
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="auditedURL">Audited URL</label>
                <input
                    type="text"
                    id="auditedURL"
                    name="auditedURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.auditedURL}
                    onChange={dispatcher("auditedURL")}
                    
                />
            </div>

            <label className="text-center col-12"><h3>Social URLs</h3></label>

            <div class="form-group col-lg-4 mb-4">
                <label for="websiteURL">Website URL<span style={{color: "red"}}> *</span></label>
                <input
                    type="text"
                    id="websiteURL"
                    name="websiteURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.website}
                    onChange={dispatcher("website")}
                    required
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="facebookURL">Facebook URL</label>
                <input
                    type="text"
                    id="facebookURL"
                    name="facebookURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.facebookURL}
                    onChange={dispatcher("facebookURL")}
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="mediumURL">Medium URL</label>
                <input
                    type="text"
                    id="mediumURL"
                    name="mediumURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.mediumURL}
                    onChange={dispatcher("mediumURL")}
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="telegramURL">Telegram URL<span style={{color: "red"}}> *</span></label>
                <input
                    type="text"
                    id="telegramURL"
                    name="telegramURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.telegramId}
                    onChange={dispatcher("telegramId")}
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="redditURL">Reddit URL</label>
                <input
                    type="text"
                    id="redditURL"
                    name="redditURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.redditURL}
                    onChange={dispatcher("redditURL")}
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="githubURL">Github URL</label>
                <input
                    type="text"
                    id="githubURL"
                    name="githubURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.githubURL}
                    onChange={dispatcher("githubURL")}
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="twitterURL">Twitter URL</label>
                <input
                    type="text"
                    id="twitterURL"
                    name="twitterURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.twitterURL}
                    onChange={dispatcher("twitterURL")}
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="discordURL">Discord URL</label>
                <input
                    type="text"
                    id="discordURL"
                    name="discordURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.discordURL}
                    onChange={dispatcher("discordURL")}
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="youtubeURL">Youtube Channel URL</label>
                <input
                    type="text"
                    id="youtubeURL"
                    name="youtubeURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.youtubeURL}
                    onChange={dispatcher("youtubeURL")}
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="introduceVideoURL">Introduction Video URL</label>
                <input
                    type="text"
                    id="introduceVideoURL"
                    name="introduceVideoURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.introduceVideoURL}
                    onChange={dispatcher("introduceVideoURL")}
                    
                />
            </div>

            <label className="text-center col-12"><h3>Presale Information</h3></label>

            <div className="col-lg-4 mb-4">
                <label for="startTimestamp">Pre Sale Start Date Time (UTC)</label>
                <DatePicker
                        id="startTimestamp"
                        selected={preStartDate}
                        onChange={(date) => setPreStartDate(date)}
                        onSelect={date => setState({ ...state, startTimestamp: date})}
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        showTimeInput
                    />
            </div>

            <div className="col-lg-4 mb-4">
                <label for="endTimestamp">Pre Sale End Date Time (UTC)</label>
                <DatePicker
                        id="endTimestamp"
                        selected={preEndDate}
                        onChange={(date) => setPreEndDate(date)}
                        onSelect={date => setState({ ...state, endTimestamp: date})}
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        showTimeInput
                    />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="whitelistURL">Whitelist URL</label>
                <input
                    type="text"
                    id="whitelistURL"
                    name="whitelistURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.whitelistURL}
                    onChange={dispatcher("whitelistURL")}
                    
                />
            </div>

            <div class="form-group col-lg-4 mb-4">
                <label for="presaleBuyURL">Presale Buy URL</label>
                <input
                    type="text"
                    id="presaleBuyURL"
                    name="presaleBuyURL"
                    placeholder="https://www.example.com"
                    class="form-control"
                    value={state.presaleBuyURL}
                    onChange={dispatcher("presaleBuyURL")}
                    
                />
            </div>

            <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary btn-lg p-3" style={{maxWidth: "5rem"}}>Submit</button>
            </div>

            </form>

        </div>
    );
}