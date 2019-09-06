import React, { useState } from 'react';
import PropTypes from 'prop-types';

function HabitForm({ handleSubmit }) {

  const onSubmit = event => {
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={} onChange={} />
      <input type="text" value={} onChange={} />
      <button>Enter</button>


    </form>
  )
}

HabitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default HabitForm;
