export const CREATE_HABIT = 'CREATE_HABIT';
const createHabt = (habit, description) => {
  type: CREATE_HABIT,
  payload: postHabit(habit, description)
}