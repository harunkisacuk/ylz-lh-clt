const exampleReducerDefaultState = [];

export default (state = exampleReducerDefaultState, action) => {
  switch (action.type) {
    case 'EXAMPLE':
      return [...state, action.example];
    default:
      return state;
  }
};
