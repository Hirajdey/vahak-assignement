import React, {useState} from 'react';
import './style.scss';
import amountIcon from './img/rupi.svg';

function PlaceLoadForm() {

	const InitialState = {
		widthpx:80, 
		valuelength:0, 
		fixedchecked:true, 
		negiotablechecked:false,
		isFocusedMob:false,
		isFocusedName:false,
		isFocusedRem:false,
		amount:'',
		priceType:'Fixed Price',
		mobile:'',
		name:'',
		remarks:''
	}
	
	const [state, setState] = useState(InitialState); 

	const handleSubmit = (e) =>{
		const {amount, priceType, mobile, name, remarks} = state
		e.preventDefault()
		const inMobile = '+91'+mobile;
		alert(`Amount : ${amount}
			PriceType : ${priceType}
			Mobile: ${inMobile}
			name: ${name}
			remarks: ${remarks}
		`) 
	}


	const inputValChange = (e) =>{
		setState({
			...state,
			[e.target.name] : e.target.value
		})
		
	}

	const isfocusedMobFun = () => {
		setState({...state,isFocusedMob: true})
	}
	const onBlurMobFun = () => {
		setState({...state,isFocusedMob: false})
	}
	const isfocusedNameFun = () => {
		setState({...state,isFocusedName: true})
	}

	const onBlurNameFun = () => {
		setState({...state,isFocusedName: false})
	}
	const isfocusedRemFun = () => {
		setState({...state,isFocusedRem: true})
	}
	const onBlurRemFun = () => {
		setState({...state,isFocusedRem: false})
	}

	const checkedUnchecked = (e) =>{
		setState((prevState) =>({
			...state,
			fixedchecked:!prevState.fixedchecked,
			negiotablechecked:!prevState.negiotablechecked,
			priceType: e.target.value
		}))
	}

	const widthpxIncrement = (e) =>{
		setState((prevState) =>({
			...state,
			valuelengthPrev: prevState.valuelength,
			valuelength: e.target.value.length, 
			widthpx: prevState.widthpx,
			amount:e.target.value
		}))

		if(state.valuelengthPrev < state.valuelength){
			state.widthpx += 23
		}else{
			state.widthpx -= 23
		}
	}

	const styleWidth ={
		width:state.widthpx
	}


	return (		
		<form onSubmit={handleSubmit}>
			<div className="place-load-form">
					<h2>Place your Load Bid</h2>
					<div className="amountInput input-control" style={styleWidth}>
						<span className="amountIcon">
							<img src={amountIcon} alt=""/>
						</span>
						<input type="text" name="amount" value={state.amount} placeholder="00"  onChange={widthpxIncrement} autoFocus required/>
					</div>

					<div className="priceTypeBox">
						<div className="pricetypeboxinner">		
							<div className="amountTypesBtns">
								<label>
									<input type="radio" name="priceType" value="Fixed Price" onChange={checkedUnchecked} defaultChecked={state.fixedchecked}/>
									<span>Fixed Price</span>
								</label>
							</div>
							
							<div className="amountTypesBtns">
								<label>
									<input type="radio" name="priceType" value="Rate Negiotable" onChange={checkedUnchecked} defaultChecked={state.negiotablechecked}/>   
									<span>Rate Negiotable</span>
								</label>
							</div>
						</div>
					</div>

					<div className="mobileInput input-control cminput">
						<label className={`${state.isFocusedMob ? 'isFocused' : ''}`}>Enter your mobile number*</label>
						<span className={`${state.isFocusedMob ? 'isFocused' : ''}`}>+91</span>
						<input type="tel" name="mobile" maxlength="10" value={state.mobile} placeholder={`${!state.isFocusedMob ? 'Enter your mobile number*' : ''}`} onFocus={isfocusedMobFun} onBlur={onBlurMobFun} onChange={inputValChange} required/>
					</div>

					<div className="input-control cminput">
						<label className={`${state.isFocusedName ? 'isFocused' : ''}`}>Enter your name*</label>
						<input type="text" name="name" value={state.name} placeholder={`${!state.isFocusedName ? 'Enter your name*' : ''}`} onFocus={isfocusedNameFun} onBlur={onBlurNameFun} onChange={inputValChange} required/>
					</div>				

					<div className="input-control cminput">
						<label className={`${state.isFocusedRem ? 'isFocused' : ''}`}>Enter Remarks (optional)</label>
						<input type="text" name="remarks" value={state.remarks} placeholder={`${!state.isFocusedRem ? 'Enter Remarks (optional)' : ''}`} onFocus={isfocusedRemFun} onBlur={onBlurRemFun} onChange={inputValChange}/>
					</div>
			</div>

			<div className="submitBtn">
				<input disabled={state.name.length < 1} className={`${state.name ? 'button-enable' : ''}`} type="submit" value="Bid Now"/>
			</div>
		</form>

	)
}

export default PlaceLoadForm


