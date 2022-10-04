import React, { useState, useEffect, useContext } from 'react'
import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import CoursesProvider from '../../store/CoursesContext'
import MasterClass from '../../components/MasterClass'
import StaticDrawerMenu from '../../components/StaticDrawerMenu'
import CoursesList from '../../components/CoursesList'
import styles from '../../styles/general.module.css'
import useApi from '../../hooks/useApi'
import { CourseModeEnum } from '../../enums/course-mode'
import type { Course } from '../../types/course'
import type { Tag } from '../../types/tag'

const CoursesPage = () => {
  // Custom Hooks
  const [loading, data] = useApi<Course[]>({ route: '/courses', method: 'GET' })
  
  // Local State
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    setCourses(data)
  }, [data])

  if (loading) return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      marginTop: '1rem'
    }}>
      <CircularProgress />
    </Box>
  )

  return (
    <MasterClass title="Sawaup - Courses">
      <CoursesProvider>
        <Box style={{ display: "flex" }}>
          <StaticDrawerMenu />

          <Box className={styles.overflow_hidden} flexDirection="column">
            <CoursesList
              key={'CourseFiltered'}
              mode={CourseModeEnum.Filtered}
              title="Courses based on your skills"
              courses={courses}
            />

            <CoursesList
              key={'CourseAvailable'}
              mode={CourseModeEnum.Available}
              title="Courses available"
              courses={courses}
            />
          </Box>
        </Box>
      </CoursesProvider>
    </MasterClass>
  )
}

export default CoursesPage
