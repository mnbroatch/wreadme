import React, { PropTypes } from 'react';
import TaleListEntry from './TaleListEntry';

const TaleList = ({ tales, editTale, removeTale }) => {
  const taleElements = tales.map((el, ind) =>
    (<div key={ind}>
      <TaleListEntry data={el} removeTale={removeTale} editTale={editTale} />
    </div>)
  );

  return (
    <div className="tale-list">
      {taleElements}
    </div>
  );
};

TaleList.propTypes = {
  tales: PropTypes.arrayOf(PropTypes.object).isRequired,
  editTale: PropTypes.func.isRequired,
  removeTale: PropTypes.func.isRequired,
};

export default TaleList;
