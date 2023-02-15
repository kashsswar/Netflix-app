import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Cards'
import Sdata from './sdata'


/*function ncard(val,index,arr){
    return <Card imgsrc={val
    .imgsrc}name={val.name} 
    link={val.link} />
}*/
ReactDOM.render(<>
<h1 className='heading'>List of top netflix series</h1>
  <Card imgsrc={Sdata[0].imgsrc}name={Sdata[0].name} 
  link={Sdata[0].link} />
  {Sdata.map((val)=>{
    return(
      <Card 
      imgsrc={val
    .imgsrc}name={val.name} 
    link={val.link} />)
  })}
  {Sdata.map((val)=>{
    return(
      <Card 
      imgsrc={val
    .imgsrc}name={val.name} 
    link={val.link} />)
  })}

   
    
  {/*Sdata.map(ncard)*/};

</>
,
  
  document.getElementById('root')
)