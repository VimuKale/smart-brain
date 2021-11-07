import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(

		<div>
			<p className='f4 washed-blue i-ns'>
				{'This Magic Brain will detect faces in your pictures. Give it a try!'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					
					<input className='f4 pa2 w-70 center' type='text' placeholder='Add image URL here' onChange={onInputChange}/>
					
					<button 
					className='w-25 grow f4 link ph3 pv2 dib washed-blue i-ns'
					onClick={onButtonSubmit}>
						Detect
					</button>

				</div>	
			</div>
		</div>

		);
}

export default ImageLinkForm;