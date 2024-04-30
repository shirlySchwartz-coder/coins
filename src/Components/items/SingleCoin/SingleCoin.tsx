import { CoinRate } from '../../layout/model/CoinRate';
import './SingleCoin.css';

function SingleCoin(props: CoinRate): JSX.Element {
  
  return (
    <div className="SingleCoin Box-wide">
      <span style={{color:"white",fontWeight:"bolder",marginRight:"30px"}}>{props.id}</span>  symbol: {props.symbol} currency Symbol: {props.currencySymbol}{" "}
      <span style={{color:"red",marginLeft:"30px"}}> {props.rateUsd} </span>
    </div>
  );
}

export default SingleCoin;
