import React from 'react';

export let GoodsTable = (props) => {
    const goods = props.prod;
    const goodsList = goods.map(( x, i )=> 
    		<li key={i}>
	        	<span>{x.name}</span>
				<button className="remove-prod"
				onClick={props.removeProduct.bind(null, goods, i)}>
					&times;	
				</button>
				<ul className="colors_holder">
	            	<li className={x.red ? 'block red' : 'none'}></li>
	            	<li className={x.green ? 'block green' : 'none'}></li>
	            	<li className={x.blue ? 'block blue' : 'none'}></li>
	           </ul>
			</li>)
    return  <ul className="prod_holder">
            	{goodsList}
            </ul>

};
	
     
	

