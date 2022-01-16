// simple add & remove from local storage helpers

/**
 -> add word of the day to 
    local storage

 -> add each guess to local 
    storage as well 

 -> when the app loads, the 
    main component should
    fetch the word of the
    day and put it in storage
*/
export const addItemToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const getItemFromLocalStorage = (key: string) => {
  localStorage.getItem(key)
}
