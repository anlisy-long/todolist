export interface StateProps{
  id: number,
  text: string,
  isDone: boolean
}

export interface ActionProps{
  type: string,
  [key:string]:any
}

export const reducer = (state: StateProps[], action: ActionProps) => {
  switch(action.type){
    case 'ADD':
      return [...state, action.todo]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    case 'CHANGE_FINISHED':
      return state.map(item=>{
        if(item.id === action.id){
          return {
            ...item,
            isDone: !item.isDone
          }
        }else{
          return item
        }
      })
    default:
      return state
  }
}