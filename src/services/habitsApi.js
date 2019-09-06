let token = null;
export const setToken = newToken => {
  token = newToken;
}

export const postHabits = (habit, description) => {
  return fetch(`${process.env.API_URL}/api/v1/habit`, {
    method: 'POST',
    body: JSON.stringify({ habit, description }),
    headers: {
      'Content-type': 'apllication/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => {
      if(!res.ok) throw 'Could not create habit';

      return res.json();
    });
};
