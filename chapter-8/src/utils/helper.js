export function filterData(restaurants,searchText){
    const filterData = restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText)
    );
    return filterData
  }
  