
import './App.css';
import { useEffect, useState } from "react"
import axios from 'axios'
import TableCoins from './components/TableCoins';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch]= useState('')

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //console.log(res.data)
    setCoins(res.data)

  }

 /* const getDataf = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then((response) => response.json())
      .then(response => {
        const { data } = response
      })
    console.log(data)

  */

  useEffect(() => {
    getData()
  }, [])

  const handleChange =(e)=>{
    setSearch(e.target.value)}

  return (
    <div className="container" >
      <h1>Coin Market</h1>
      <input 
        type="text"
        placeholder='Busca el precio del BICOIN' 
        className='form-control bg-dark text-light border-0 mt-4 text-center'
        onChange={handleChange}
      ></input>
      <div className="row">
        <TableCoins coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
