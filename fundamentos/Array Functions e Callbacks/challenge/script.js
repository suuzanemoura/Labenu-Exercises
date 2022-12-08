

//resolução professor Vinicius

let startYear = +(prompt("Insert a starting Year:"))
let endYear = +(prompt("Insert a ending Year:"))

function generate13th(startYear, endYear) {
    if(!startYear || !endYear){
      console.log("Please insert the necessary parameters.")
    }
    if(endYear <= startYear) {
      console.log("Please insert valid parameters, the second parameter must be greater than first.")
    }
  
    for (let year = startYear; year <= endYear; year++) {
      for (let month = 0; month < 11; month++) {
        let simuteDate = new Date(year, month, 13);
        if (simuteDate.getDay() === 5) {
          let monthArray = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
          console.log(`There is a Friday 13th in: ${monthArray[month]}, ${year}`);
        }
      }
    }
  }
  
  console.clear()
  generate13th(startYear, endYear)