import React from "react"
import CoinRow from "./CoinRow"

const titles = ['#','Name','Price', 'Price Change', '24 Hs Volume']

const TableCoins = ({coins, search})=>{
    console.log(search)
    
    const filteredCoins = coins.filter((coin)=>{
        return(
            coin.name.toLowerCase().includes(search.toLowerCase())
            | coin.symbol.toLowerCase().includes(search.toLowerCase()
            )
        )
    })

    return (
        <table className="table table-dark mt-4 table-hover">
            
            <thead>
                <tr>{titles.map((item,index)=>{
                        return(
                            <td key={index}>{item}</td>
                        )})
                    }</tr>
            </thead>
            
            <tbody>
                {filteredCoins.map((coin, index)=>{
                    return(
                      <CoinRow coin={coin} key={index} index={index + 1 }/>
                    )
                })}
            </tbody>
        </table>
    )
}




export default TableCoins