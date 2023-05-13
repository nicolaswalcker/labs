import { format } from 'date-fns'

const updateDateAndHour = () => {
  const now = new Date()
  const actualDateAndHour = format(now, 'dd/MM/yyy HH:mm:ss')
  document.getElementById('date').textContent = actualDateAndHour
}

setInterval(updateDateAndHour, 1000)
