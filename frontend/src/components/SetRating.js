import React from 'react';
import { RatingComponent } from '@syncfusion/ej2-react-inputs';

const SetRating = ({ value, onChange }) => {

  const handleValueChanged = (args) => {
    onChange(args.value);
  };

  return (
    <div className='control-pane'>
      <div id="default-rating-control">
        <div className="rating-content">
          <RatingComponent
            id='rating2'
            precision='Half'
            value={value}
            valueChanged={handleValueChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default SetRating;
