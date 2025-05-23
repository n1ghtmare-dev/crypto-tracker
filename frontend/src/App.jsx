import React, { useEffect } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Spin } from 'antd';
import axios from 'axios';
import CryptocurrencyCard from './components/CryptocurrencyCard';


const App = () => {

  const [currencies, setCurrencies] = React.useState([])
  const [currencyId, setCurrencyId] = React.useState(1)
  const [currencyData, setCurrencyData] = React.useState(null)

  const fetchCurrencies = () => {
    axios.get('http://127.0.0.1:8000/cryptocurrencies').then(r => {
      const currenciesResponse = r.data
      const menuItems = [
        {
          key: 'sub1',
          label: 'Список криптовалют',
          children: currenciesResponse.map(c => ({
            label: c.name, key: c.id.toString()
          })),
          type: 'group',
        },
      ]
      setCurrencies(menuItems)
    })
  }

  const fetchCurrency = () => {
    axios.get(`http://127.0.0.1:8000/cryptocurrencies/${currencyId}`).then(r => {
      setCurrencyData(r.data)
    })
  }

  useEffect(() => {
    fetchCurrencies()
  }, []);

  useEffect(() => {
    setCurrencyData(null)
    fetchCurrency()
  }, [currencyId]);

  const onClick = e => {
    setCurrencyId(e.key)
  };
  return (
    <div className='flex'>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={currencies}
        className='h-screen overflow-scroll'
      />
      <div className='mx-auto my-auto shadow-xl/30 rounded-lg p-8'>
        {currencyData ? <CryptocurrencyCard currency={currencyData} /> : <Spin size="large" />}
      </div>
    </div>
  );
};
export default App;
