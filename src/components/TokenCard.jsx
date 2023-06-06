import React ,{useState,useEffect} from 'react'
//import axios from'axios'
const TokenCard = ({id}) => {
    const [tokenData,setTokenData]=useState(null);
    const[isLoading,setIsLoading]=useState(false);
    useEffect(() => {
      setIsLoading(true);
  
      fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setTokenData(data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, []);
  
if(isLoading){
    return(
        <div>Loading</div>
    )
}
  return (
    <div className='token-container'>{
        tokenData &&(<div className='token-info'>
    
        <div className='token-title-container'>
            <span className='token.title'>
{tokenData.name}
            </span>
            <span className='token-title-long'>
              {tokenData.asset_platform_id}
            </span>
        </div>
        <div className='token-amount-container'>
            <div className='token-amount'>10 </div>
     <div className='token-amount-long'>
        <div className='token-price'>
        
        </div>
       
     </div>
        </div>
    </div>)
    }
        
    </div>
  )
}

export default TokenCard