import React from 'react';
import createReactClass from 'create-react-class';


export let FormInput = createReactClass({
	componentDidMount(){
		    this.name.focus();
	},
	handleInput(e){
		e.preventDefault();
		const product = this.name.value;
		const lettersNumbers = /^[0-9a-zA-Z]+$/;
		const red = this.red.checked;
		const green = this.green.checked;
		const blue = this.blue.checked;
		const colors = [red, green, blue].filter(y => y == false);
		if( !product.match(lettersNumbers) ) {
			    alert('Only letters and numbers, please!');
        	} else if (product.length < 4 || product.length > 8 ){
        	    alert('Please, 4-8 characters in total!');	
        	} else if (colors.length == 3) {
        		alert(`You can't create colorless product!`);
        	} else {
			this.props.addProduct(product,red,green,blue);
		}
		this.inputForm.reset();
	},
	render(){
		return(
			<form className="prod_input" ref={x => this.inputForm = x} onSubmit={this.handleInput}>
				<input type="text" ref={x => this.name = x} placeholder="Product name"/>
				<p>Name the product and pick colors</p>
				<ul className="checkbox_holder">
					<li>
						<input type="checkbox" ref={x => this.red = x} value="true"/>
					</li>
					<li>
						<input type="checkbox" ref={x => this.green = x} value="true"/>
					</li>
					<li>
						<input type="checkbox" ref={x => this.blue = x} value="true"/>
					</li>

				</ul>
				<input type="submit" hidden/>
			</form>
			)
	}
})