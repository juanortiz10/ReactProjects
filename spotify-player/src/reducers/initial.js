export const initial = (state={},action) =>{
  switch (action.type) {
    case 'INIT':
      return action;
    default:
      return state
  }
}
