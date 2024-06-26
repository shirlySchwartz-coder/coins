import { useParams } from 'react-router-dom';
import { ExchangeItem } from '../../layout/model/ExchangeItem';
import './ExchangesID.css';
import axios from 'axios';
import { useState } from 'react';

interface SingleItem {
  item?: ExchangeItem;
}

function ExchangesID(props: SingleItem): JSX.Element {
  const EXCHANGE_ID_URL = 'http://api.coincap.io/v2/exchanges/';
  const [exchangeItem, setItem] = useState<ExchangeItem>();

  const params = useParams();
  const nFormat = new Intl.NumberFormat();
 
  if (params.id?.length != undefined && exchangeItem == undefined) {
    axios.get(EXCHANGE_ID_URL + params.id).then((result) => {
      setItem(result.data.data);
      console.log("repeat");
    });
  }


  return (
    <div className='ExchangesID Box'>
      <br />
      {props.item ? props.item.id : exchangeItem?.id}
      <br />
      {props.item ? props.item.name : exchangeItem?.name}
      <br />
      {props.item ? props.item.rank : exchangeItem?.rank}
      <br />
      {props.item
        ? nFormat.format(Number(props.item.percentTotalVolume))
        : nFormat.format(Number(exchangeItem?.percentTotalVolume))}
      <br />
      {props.item
        ? nFormat.format(Number(props.item.volumeUsd))
        : nFormat.format(Number(exchangeItem?.volumeUsd))}
      <br />
      {props.item ? props.item.tradingPairs : exchangeItem?.tradingPairs}
      <br />
      <a
        href={
          props.item
            ? props.item.exchangeUrl.toString()
            : exchangeItem?.exchangeUrl.toString()
        }
      >visit site</a>
    </div>
  );
}

export default ExchangesID;
