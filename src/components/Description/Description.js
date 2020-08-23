import React from 'react';

// style
import './Description.scss';

//DELETE
import unknownImage from '../../image/unknown.jpg';

const Description = () => {

  // return (
  //   <div className="description">
  //     <p>Послушайте плеер.</p>
  //     <p>Выберите птицу из списка.</p>
  //   </div>
  // )

  return (
    <div className="description">
      <div className="description-top">
      <img className="description-top__img" src={unknownImage} alt="unknown" />
      <div className="description-top__info">
        <p className="description-top__name">Ласточка</p>
        <p className="description-top__name description-top__name_en">Delichon urbicum</p>
        <div>Player</div>
      </div>
      </div>
      <div className="description__text">Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.
      </div>
    </div>
  )
}

export default Description;
