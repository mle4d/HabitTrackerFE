import { connect } from 'react-redux';
import HabitForm from '../components/form/HabitForm';

const mapDispatchToProps = dispatch => ({
  handleSubmit(habit, description) {
    dispatch(createHabit(habit, description));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(HabitForm);
