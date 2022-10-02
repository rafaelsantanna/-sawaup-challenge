import React, { createContext, useReducer } from 'react'
import coursesReducer from './reducers'
import type { InitialState } from '../../types/initial-state'

type Props = {
  children: React.ReactNode
}

const initialState: InitialState = {
  tags: [],
  courses: [
    { 
      name: 'Excel for beginners',
      url: 'https://www.youtube.com/watch?v=Vl0H-qTclOg',
      tags: [{ text: 'coding' }, { text: 'coding' }, { text: 'coding' }, { text: 'coding' }],
      favorite: false,
      thumbnail: '',
    },
    { 
      name: 'Intro in Kubernetes',
      url: 'https://www.youtube.com/watch?v=s_o8dwzRlu4',
      tags: [{ text: 'computer' }, { text: 'cloud' }, { text: 'kubernetes' }, { text: 'cloud containers' }],
      favorite: false,
      thumbnail: '',
    },
    { 
      name: 'Statistics',
      url: 'https://www.youtube.com/watch?v=xxpc-HPKN28',
      tags: [{ text: 'math' }, { text: 'statistcs' }, { text: 'calculations' }, { text: 'measure' }],
      favorite: false,
      thumbnail: '',
    },
    { 
      name: 'Prisma ORM',
      url: 'https://www.youtube.com/watch?v=mU8-nKwfw4Y',
      tags: [{ text: 'computer' }, { text: 'ORM' }, { text: 'sql' }, { text: 'javascript' }],
      favorite: false,
      thumbnail: '',
    },
    { 
      name: 'Nextjs Crash course',
      url: 'https://www.youtube.com/watch?v=6fNy0iD3hsk',
      tags: [{ text: 'javascript' }, { text: 'nextjs' }, { text: 'computer' }, { text: 'coding' }],
      favorite: false,
      thumbnail: '',
    },
    { 
      name: 'Chackra UI',
      url: 'https://www.youtube.com/watch?v=s-bIsz-NR3c',
      tags: [{ text: 'UI' }, { text: 'design' }, { text: 'html' }, { text: 'css' }],
      favorite: false,
      thumbnail: '',
    },
    { 
      name: 'Modern Fullstack',
      url: 'https://www.youtube.com/watch?v=PKy2lYEnhgs',
      tags: [{ text: 'UI' }, { text: 'typescript' }, { text: 'nextjs' }, { text: 'Prisma' }],
      favorite: false,
      thumbnail: '',
    },
    { 
      name: 'Conventional commits',
      url: 'https://www.youtube.com/watch?v=lwGcnDgwmFc',
      tags: [{ text: 'git' }, { text: 'coding' }, { text: 'computer' }, { text: 'scripting' }],
      favorite: false,
      thumbnail: '',
    },
  ]
}

const CoursesContext = createContext<InitialState[] | any>(initialState)

const CoursesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(coursesReducer, initialState)

  return <CoursesContext.Provider value={[ state, dispatch ]}>{children}</CoursesContext.Provider>
}

export default CoursesProvider

export { CoursesContext }
