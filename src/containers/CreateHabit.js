import { connect } from 'react-redux';
import HabitForm from '../components/form/HabitForm';

const mapDispatchToProps = dispatch => ({
  create() {
    dispatch(createHabit());
  }
});

export default connect(
  mapStateToProps
)(HabitForm);