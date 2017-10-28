import React from 'react';
import { GoodsTable} from './GoodsTable';
import { FormInput} from './FormInput';



export let Main = (props) => {
	let number = props.prod.length;
	return 	<div className="wrapper">
				<h2>
			  		<span className={number == 0 ? 'none' : ''}>{number}
			  		</span> Colored Product<span className={number == 1 ? 'none' : ''}>s</span>
				</h2>
				<a className="github" target="_blank" href="https://github.com/462960/Colored_products">GitHub</a>
				<FormInput {...props} />
				<GoodsTable {...props} />
			</div>
            }


 