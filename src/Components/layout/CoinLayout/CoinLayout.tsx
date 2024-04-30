import { useEffect, useState } from 'react';
import SingleCoin from '../../items/SingleCoin/SingleCoin';
import './CoinLayout.css';
import { CoinRate } from '../model/CoinRate';
import axios from 'axios';

function CoinLayout(): JSX.Element {
  const [coins, setCoins] = useState<CoinRate[]>([]);
  //url of coins rate
  const COIN_RATE_URL = 'http://api.coincap.io/v2/rates';

  useEffect(() => {
    axios.get(COIN_RATE_URL).then((result) => {
      setCoins(result.data.data);
    });
  }, []);
  return (
    <div className='CoinLayout'>
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

export default CoinLayout;
