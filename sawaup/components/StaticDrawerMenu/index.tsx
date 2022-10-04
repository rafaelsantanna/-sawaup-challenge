import React, { useContext, useEffect, useState } from 'react'
import Drawer from '@mui/material/Drawer'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';
import styles from '../../styles/StaticDrawerMenu.module.css'
import { CoursesContext } from '../../store/CoursesContext'
import { setTags, addFilterTag, removeFilterTag } from '../../store/CoursesContext/actions'
import useApi from '../../hooks/useApi'
import type { Tag } from '../../types/tag'
import type { HttpRequest } from '../../types/http-request'

const drawerWidth = 240;
const minRequiredSkills = 2;
const maxSkillsAllowedFiltered = 10;

const StaticDrawerMenu: React.FC = (): JSX.Element => {
  // Custom Hooks
  const [loading, data] = useApi<Tag[]>({ route: '/tags', method: 'GET' })

  // Context
  const [state, dispatch] = useContext(CoursesContext)

  // Local State
  const [snackbar, setSnackbar] = useState('')

  // Data filtered
  const tags = state.tags.filter((t: Tag) => !t?.filtered) ?? []
  const tagsFiltered = state.tags.filter((t: Tag) => t?.filtered) ?? []
  
  const isMininumRequiredSkills = () => tagsFiltered.length < minRequiredSkills

  const isMaximumAllowedHit = () => tagsFiltered.length >= maxSkillsAllowedFiltered

  // Add a new filtered tag
  const handleAddTag = (tag: Tag) => {
    if (isMininumRequiredSkills()) {
      setSnackbar(`Minimum ${minRequiredSkills} filters needed to search for courses`)
      addFilterTag(dispatch, tag)
      return
    }

    if (isMaximumAllowedHit()) {
      setSnackbar(`Maximum ${maxSkillsAllowedFiltered} filters allowed`)
      return
    }

    setSnackbar(`${tagsFiltered.length + 1} Skills Selected`)
    addFilterTag(dispatch, tag)
  }

  // Remove tag filtered
  const handleRemoveTag = (tag: Tag) => {
    setSnackbar(`Removed skill ${tag.text} with success`)
    removeFilterTag(dispatch, tag)
  }

  useEffect(() => {
    if (data) {
      setTags(dispatch, data)
    }
  }, [data])

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          position: 'inherit',
          height: 'calc(100vh - 64px)',
        },
      }}
      variant="persistent"
      anchor="left"
      open
    >
      <h3 className={styles.tag__title}>
        Selected Skills
        {' '}
        <Tooltip title="User can select min 2 skills and 10 skills maximum">
          <HelpOutlineIcon style={{ width: '20px', marginLeft: '5px' }} />
        </Tooltip>
      </h3>
      
      <Stack direction="row" flexWrap="wrap" padding={1} rowGap={1} columnGap={0.5}>
        {!tagsFiltered.length && <Alert severity="info" style={{ width: '100%' }}>No filtered tags</Alert>}

        {tagsFiltered?.map((tag: Tag) => (
          <Chip
            key={`ChipSelectedSkill__${tag.text}`}
            label={tag.text}
            onClick={() => handleRemoveTag(tag)}
            onDelete={() => handleRemoveTag(tag)}
          />
        ))}
      </Stack>

      <h3 className={styles.tag__title}>Skills Available</h3>

      <Stack direction="row" flexWrap="wrap" padding={1} rowGap={1} columnGap={0.5}>
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}><CircularProgress /></Box>
        )}

        {tags?.map((tag: Tag) => (
          <Chip
            key={`ChipSkillAvailable__${tag.text}`}
            label={tag.text}
            variant="outlined"
            onClick={() => handleAddTag(tag)}
          />
        ))}
      </Stack>

      {snackbar && <Snackbar
        open
        autoHideDuration={2000}
        message={snackbar}
        onClose={() => setSnackbar('')}
      />}
    </Drawer>
  )
}

export default StaticDrawerMenu
