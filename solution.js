function findOutlier(integers){
  let oddCount=0
  let evenCount=0
  for (i=0; i<integers.length; i++) {
    if (integers[i]%2===0) {
      evenCount ++
    }     
  }
  
  oddCount = integers.length - evenCount
  
  if(oddCount>evenCount) {
    for(i=0; i<integers.length; i++) {
      if(integers[i]%2===0) return integers[i]
    }
  }
  else {
    for(i=0; i<integers.length; i++) {
      if(integers[i]%2!==0) 
      {return integers[i]}
    }
  }
}
