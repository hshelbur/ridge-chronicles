import React from 'react';
import Image from '../layout/image.js';

const ImagePage = props => (
	
      <main className="image-page">
      
        {props.images.map(function(image){
          return <Image key={image.id} photo={image.photo} />
        })}

      </main>
)

export default ImagePage;