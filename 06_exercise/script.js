let arr = [1,4,6,3,2]

function weekNumberstoWords(arr) {
    let outArr = [];
    arr.forEach(element => {
        let day;
        switch(element) {
            case 1: {
                day = "Monday"
                break;
            }
            case 2: {
                day = "Tuesday"
                break;                
            }
            case 3: {
                day = "Wednesday"
                break;                
            }
            case 4: {
                day = "Thursday"
                break;                
            }
            case 5: {
                day = "Friday"
                break;                
            }
            case 6: {
                day = "Saturday"
                break;                
            }
            case 7: {
                day = "Sunday"
                break;
            }
            default:{
                break;
            }
        }
        outArr.push(day);
        
    });
    return outArr;
}
weekNumberstoWords(arr);