
export default function todos(state = ['haha'], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.title
      ];
    default:
      return state;
  }
};