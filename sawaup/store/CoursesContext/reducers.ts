import type { Action } from '../../types/action'
import type { InitialState } from '../../types/initial-state'
import type { Tag } from '../../types/tag'
import { TypesEnum } from '../../enums/types'

const coursesReducer = (state: InitialState, action: Action) => {
  if (action.type === TypesEnum.SetTags) {
    state.tags = action.payload
    return { ...state }
  }

  if (action.type === TypesEnum.AddFilterTag) {
    const tagFiltered: any = state.tags.find((tag: Tag) => tag.text === action.payload.text)
    tagFiltered.filtered = true
    return { ...state }
  }

  if (action.type === TypesEnum.RemoveFilterTag) {
    const tagFiltered: any = state.tags.find((tag: Tag) => tag.text === action.payload.text)
    tagFiltered.filtered = false
    return { ...state }
  }

  return state
}

export default coursesReducer
