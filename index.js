class Driver {
  constructor(name, startDate) {
    [this.name, this.startDate] = [name, startDate]
  }
  startDate() {
    return new Date(this.startDate)
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
