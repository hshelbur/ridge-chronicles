import React from 'react';
import ChroniclesLayout from '../layout/chronicleslayout.js';

const ChroniclesGallery = props => (
	
      <main className="chronicles-gallery">
      
        {props.galleries.map(function(gallery){
          return <ChroniclesLayout key={gallery.id} title={gallery.title} date={gallery.date} images={gallery.images} description={gallery.description} />
        })}

      </main>
)

export default ChroniclesGallery