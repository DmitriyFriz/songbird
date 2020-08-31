import React from 'react';

// style
import './Description.scss';

//Player
import Player from '../Player/Player';


const Description = ({selectedItem}) => {

  if (selectedItem === null) {
    return (
      <div className="description">
        <p>Послушайте плеер.</p>
        <p>Выберите птицу из списка.</p>
      </div>
    )
  }

  const {name, species, description, image, audio} = selectedItem;

  return (
    <div className="description">
      <div className="description-top">
        <img className="description-top__img" src={image} alt="unknown" />
        <div className="description-top__info">
          <p className="description-top__name">{name}</p>
          <p className="description-top__name description-top__name_en">{species}</p>
          <div><Player src={audio} /></div>
        </div>
      </div>
      <div className="description__text">{description}</div>
    </div>
  )
}

export default Description;
