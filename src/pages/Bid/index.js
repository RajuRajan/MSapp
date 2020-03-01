import React,{useEffect,useState} from 'react'
import ExpansionCard from '../../components/expansionCard'
import './index.scss'
import {userService} from '../../_services'
import {getUserId} from '../../_helpers'

export default function Bid({ history={} }){
const [state,setState]=useState({
    bids:[]
})
useEffect(()=>{
userService.getBids({user_id:getUserId()}).then(
    res=>
    setState({bids:res.data.data})
)
},[])
return(
    <div className="bid-container">
    {state.bids.length?
    state.bids?.map(value=>{
    return <div className="bid-item"><ExpansionCard details={value}/></div>
    }
    ):<div style={{textAlign:"center",marginTop:"200px"}}>Sorry No Bids Available :(</div>
    }
       
        {/* <div className="bid-item"><ExpansionCard /></div>
        <div className="bid-item"><ExpansionCard /></div>
        <div className="bid-item"><ExpansionCard /></div>
        <div className="bid-item"><ExpansionCard /></div>
        <div className="bid-item"><ExpansionCard /></div>
        <div className="bid-item"><ExpansionCard /></div>
        <div className="bid-item"><ExpansionCard /></div>
        <div className="bid-item"><ExpansionCard /></div>
        <div className="bid-item"><ExpansionCard /></div>
        <div className="bid-item"><ExpansionCard /></div>
        <div className="bid-item"><ExpansionCard /></div> */}
         
    </div>
  
)
}