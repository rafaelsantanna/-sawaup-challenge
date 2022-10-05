import React, { useState, useContext } from 'react';
import { Container, Typography, Box, Alert } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CourseCard from '../CourseCard';
import { CoursesContext } from '../../store/CoursesContext';
import type { Course } from '../../types/course';
import type { ModalVideoConfig } from '../../types/modal-video-config';
import type { Tag } from '../../types/tag';
import ModalVideo from '../ModalVideo';
import { CourseModeEnum } from '../../enums/course-mode';
import convertArrayObjectToString from '../../lib/convertArrayObjectToString';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from '../../styles/general.module.css';

const initialModalConfig: ModalVideoConfig = { url: '', title: '' };

type Props = {
  mode: CourseModeEnum
  title: string
  courses: Course[]
}

const getCoursesByTags = (courses: Course[], tags: Tag[]) => {
  let filtered = new Set<Course>([]);
  
  courses?.forEach((course: Course) => {
    const courseTagsToString = convertArrayObjectToString('text', course.tags);

    tags.forEach((tag: Tag) => {
      if(courseTagsToString.includes(tag.text)) {
        filtered.add(course);
      }
    })
  });

  return Array.from(filtered);
}

const getIntersectCourses = (courses: Course[], courseFiltered: Course[]) => {
  return courses?.filter(function(n) {
    return courseFiltered.indexOf(n) == -1
 });
}

const CoursesList = ({ mode, title, courses }: Props) => {
  // Context
  const [state, dispatch] = useContext(CoursesContext);

  // Local State
  const [modalVideo, setModalVideo] = useState<ModalVideoConfig>(initialModalConfig);

  let coursesFiltered: Course[] = []
  const tagsFiltered = state.tags.filter((t: Tag) => t?.filtered) ?? [];

  if (mode === CourseModeEnum.Filtered) {
    if (tagsFiltered.length) {
      coursesFiltered = getCoursesByTags(courses, tagsFiltered).slice(0, 4);
    }
  } else if (mode === CourseModeEnum.Available) {
    let coursesByTags = getCoursesByTags(courses, tagsFiltered);
    coursesFiltered = getIntersectCourses(courses, coursesByTags);
  } else {
    console.error(`Mode ${mode} inexistent`)
    return <>Error mode {mode}. valids: {JSON.stringify(CourseModeEnum)}</>
  }

  return (
    <>
      <Container className={styles.pt_3} maxWidth="xl">
        <Box mb={3}>
          <Typography variant='h4' mb={0}>{title}</Typography>

          {mode === CourseModeEnum.Filtered && !tagsFiltered.length ? (
            <Alert severity="info" style={{ width: '100%', marginTop: 15 }}>No courses to list yet!</Alert>
          ) : (
            <Swiper
              key={`Swiper${mode}`}
              slidesPerView={3}
              spaceBetween={0}
              slidesPerGroup={3}
              loop={false}
              loopFillGroupWithBlank={true}
              navigation={true}
              modules={[Navigation]}
              className={'mySwiper' + ' ' + styles.py_3}
            >
              {coursesFiltered?.map((course: Course, index: number) => (
                <SwiperSlide key={`CourseCard__${index}__${course.name}`}>
                  <CourseCard course={course} onClick={(config: ModalVideoConfig) => setModalVideo(config)} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Box>
        
        {modalVideo.url && (
          <ModalVideo config={modalVideo} onClose={() => setModalVideo(initialModalConfig)} /> 
        )}
      </Container>
    </>
  )
}

export default CoursesList;
