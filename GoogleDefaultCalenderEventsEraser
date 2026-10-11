function deleteEventsInRange() {
  const calendar = CalendarApp.getDefaultCalendar();
  const startDate = new Date('2026-01-01T00:00:00');
  const endDate = new Date('2026-12-31T23:59:59');

  const events = calendar.getEvents(startDate, endDate);

  for (let i = 0; i < events.length; i++) {
    events[i].deleteEvent();
  }

  Logger.log('Deleted ' + events.length + ' events.');
}
