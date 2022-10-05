import { Dispatch } from 'react';
import type { Action } from '../../types/action';
import type { Tag } from '../../types/tag';
import type { Course } from '../../types/course';

const setTags = (dispatch: Dispatch<Action>, payload: Tag[]) => {
  dispatch({
    type: 'SET_TAGS',
    payload,
  })
}

const addFilterTag = (dispatch: Dispatch<Action>, payload: Tag) => {
  dispatch({
    type: 'ADD_FILTER_TAG',
    payload,
  })
}

const removeFilterTag = (dispatch: Dispatch<Action>, payload: Tag) => {
  dispatch({
    type: 'REMOVE_FILTER_TAG',
    payload,
  })
}

const setCourses = (dispatch: Dispatch<Action>, payload: Course[]) => {
  dispatch({
    type: 'SET_COURSES',
    payload,
  })
}

export { setTags, addFilterTag, removeFilterTag, setCourses };
