function setEvents(element, events){
  events.forEach(event => {
    element.addEventListener(event.type, event.func)
  });
  
  return true
}

export { setEvents } 