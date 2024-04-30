import { useEffect, useState } from 'react';
import './Exchanges.css';
import { ExchangeItem } from '../../layout/model/ExchangeItem';
import axios from 'axios';
import ExchangesID from '../ExchangesID/ExchangesID';

function Exchanges(): JSX.Element {
  const [exchanges, setExchanges] = useState<ExchangeItem[]>([]);
  const EXCHANGE_URL = 'http://api.coincap.io/v2/exchanges';

  useEffect(() => {
    axios.get(EXCHANGE_URL).then((result) => {
      setExchanges(result.data.data);
    });
  }, []);
  return (
    <div className='Exchanges'>
      <h1>Exchanges</h1>
      {exchanges.map((item, index) => (
        <ExchangesID key={index} item={item} />
      ))}
    </div>
  );
}

export default Exchanges;
