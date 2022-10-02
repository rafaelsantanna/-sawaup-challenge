import React from 'react'
import CoursesProvider from '../../store/CoursesContext'
import MasterClass from '../../components/MasterClass'
import StaticDrawerMenu from '../../components/StaticDrawerMenu'
import CoursesList from '../../components/CoursesList'

const CoursesPage = () => {
  return (
    <MasterClass title="Sawaup - Courses">
      <CoursesProvider>
        <div style={{ display: 'flex' }}>
          <StaticDrawerMenu />
          <CoursesList />
        </div>
      </CoursesProvider>
    </MasterClass>
  )
}

export default CoursesPage
