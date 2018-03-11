export default function player( state = [], action) {
  switch (action.type) {
    case "COMPLETE_FETCH":
      return [
        action.payload[0],
        action.payload[1],
        action.payload[2],
        action.payload[3],
        action.payload[4],
      ];
    case "ERROR_FETCH":
      return action
    case "COMPLETE_SONG":
      return action
    case "IS_FETCHING":
      return action
    default:
      return state;
  }
}
