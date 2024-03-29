// noinspection JSUnusedLocalSymbols

import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'
import { CalendarContainer, FormEntryContainer } from './style'
import { getContest } from '../../api/contestget.api'
import { FormLabel } from '../formBox/style'
import ContestTable from './contestTable'

function InputCalendar () {
  const [mark, setMark] = useState([])
  const [info, setInfo] = useState([])
  const [overlap, setOverlap] = useState([])
  const [selection, setSelection] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const contestInfo = await getContest()
      setInfo(contestInfo)
      let contestDates = []
      contestInfo.forEach((element) => {
        contestDates.push(moment(element.date).format('DD-MM-YYYY'))
      })
      setMark(contestDates)
    }
    fetchData()
  }, [])
  return (
    <CalendarContainer>
      <input type="hidden" name="date" value={selection}/>
      <FormEntryContainer>
        <FormLabel>Date</FormLabel>

        <Calendar
          width="500px"
          calendarType="US"
          tileClassName={({ date, view }) => {
            if (mark.find((x) => x === moment(date).format('DD-MM-YYYY'))) {
              return 'highlight'
            }
          }}
          onClickDay={(value, event) => {
            setSelection(value)
            let ocuppied = false
            let contests = []

            info.forEach((element) => {
              if (element.date === moment(value).format('YYYY-MM-DD')) {
                ocuppied = true
                contests.push(element)
                console.log(contests)
              }
            })
            setOverlap(contests)
            if (ocuppied) {
              console.log('Choose another date')
              console.log(overlap)
            }
          }}
        />
      </FormEntryContainer>

      {overlap.length > 0 ? <ContestTable contests={overlap}/> : <></>}

    </CalendarContainer>
  )
}

//moment(date).format("DD-MM-YYYY")
export default InputCalendar
