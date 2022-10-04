import React, { createContext, useReducer } from 'react'
import coursesReducer from './reducers'
import type { InitialState } from '../../types/initial-state'

type Props = {
  children: React.ReactNode
}

const initialState: InitialState = {
  tags: [],
  courses: []
}

const CoursesContext = createContext<InitialState[] | any>(initialState)

const CoursesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(coursesReducer, initialState)

  return <CoursesContext.Provider value={[ state, dispatch ]}>{children}</CoursesContext.Provider>
}

export default CoursesProvider

export { CoursesContext }
