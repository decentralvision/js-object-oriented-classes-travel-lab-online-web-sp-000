class Driver {
  constructor(name, startDate) {
    [this.name, this.startDate] = [name, new Date(startDate)]
  }
  startDate() {
    return this.startDate
  }
  yearsExperienceFromBeginningOf(year) {
    return (year - startDate)
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    [this.beginningLocation, this.endingLocation] = [beginningLocation, endingLocation]
  }
  blocksTravelled() {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

  }
  estimatedTime() {

  }
}
