import './Rates.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SingleCoin from '../../items/SingleCoin/SingleCoin';
import { CoinRate } from '../../layout/model/CoinRate';

function Rates(): JSX.Element {
  //useState => will render the component again, once we will have a data....
  //const [variable name, set method name] = useState<variable type>(variable init)
  const [coins, setCoins] = useState<CoinRate[]>([]);
  //url of coins rate
  const COIN_RATE_URL = 'http://api.coincap.io/v2/rates';

  //   const getCoinRateData = async () => {
  //     const result = await axios.get(COIN_RATE_URL);
  //     console.log(result.data.data);
  //     //setCoins(result.data.data);
  //   };

  useEffect(() => {
    axios.get(COIN_RATE_URL).then((result) => {
      console.log(result.data.data);
      setCoins(result.data.data);
    });
  }, []);

  return (
    <div className='CoinLayout'>
      <h1>Rates</h1>
      {coins.map((item, index) => (
        <SingleCoin
          key={index}
          id={item.id}
          symbol={item.symbol}
          currencySymbol={item.currencySymbol}
          rateUsd={item.rateUsd}
          type={item.type}
        />
      ))}
    </div>
  );
}

export default Rates;
