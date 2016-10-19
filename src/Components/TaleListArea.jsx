import React, { PropTypes } from 'react';
import TaleList from './TaleList';

const TaleListArea = ({ editTale, removeTale, tales }) =>
  (<div className="tale-list-area">
    <h2 className="tale-list-area__headline">
      Top Tales
    </h2>
    <TaleList
      tales={tales}
      removeTale={removeTale}
      editTale={editTale}
    />
  </div>);

TaleListArea.propTypes = {
  editTale: PropTypes.func.isRequired,
  removeTale: PropTypes.func.isRequired,
  tales: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaleListArea;
