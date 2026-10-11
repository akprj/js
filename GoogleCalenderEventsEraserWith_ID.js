function deleteEventsInRange() {
  // Replace with your actual non-default Calendar ID
  const calendarId = 'YOUR_GOOGLE_CALENDER_ID SHALL BE PASTED HERE'; 
  const calendar = CalendarApp.getCalendarById(calendarId);
  
  const startDate = new Date('2026-01-01T00:00:00');
  const endDate = new Date('2026-12-31T23:59:59');

  const events = calendar.getEvents(startDate, endDate);

  for (let i = 0; i < events.length; i++) {
    events[i].deleteEvent();
  }

  Logger.log('Deleted ' + events.length + ' events from calendar: ' + calendar.getName());
}
