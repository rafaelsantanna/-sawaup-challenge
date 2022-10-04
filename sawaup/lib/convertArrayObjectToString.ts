function convertArrayObjectToString(key: string, arrayObj: any[], delimiter: string = ',') {
  let concatStr = ''

  for (let index = 0; index < arrayObj.length; index++) {
    const element = arrayObj[index];
    
    concatStr += (delimiter + element[key]);
  }

  return concatStr
}

export default convertArrayObjectToString
