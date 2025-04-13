import { Card } from "antd"
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

function CryptocurrencyCard(props) {

  const { currency } = props

  const price = Math.round(currency.quote.USD.price)
  const volume_change_24h = currency.quote.USD.volume_change_24h

  return (
    <div className="">
      <Card className="border-0" title={
        <div className="flex items-center gap-3 p-2">
          <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} />
          < span className="text-2xl"> {currency.name}</span>
        </div>
      }
        style={{ minWidth: 400, border: 0 }}>
        <p className="text-lg">Текущая цена: <Text type="success" style={{ fontSize: "1.2rem" }}>{price}$</Text></p>
        <p className="text-lg">Изменение за последние 24 часа:<Text type={volume_change_24h >= 0 ? "success" : "danger"} style={{ fontSize: "1.2rem" }}> {currency.quote.USD.volume_change_24h}$</Text></p>
      </Card >
    </div >
  )
}

export default CryptocurrencyCard
