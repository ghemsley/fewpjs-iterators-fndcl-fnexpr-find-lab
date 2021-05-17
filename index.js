const superbowlWin = (array) => {
  const win = array.find((object) => object.result === 'W')
  return typeof win !== 'undefined' ? win.year : win
}
