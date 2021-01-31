async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides

  // let levelOfService
  let passengerName
  let passengerPhone
  let passengerPickupAddressLine1
  let passengerPickupAddressLine2
  let passengerNumberofPassengers
  let passengerDropoffAddressLine1
  let passengerDropoffAddressLine2
  let levelOfService
  let outputElement = document.querySelector('.rides')

  for (let i = 0; i < json.length; i++) {
    if (json[i].length > 1) {
      levelOfService = "Noober Pool"
      outputElement.insertAdjacentHTML("beforeend", `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
      </h1>
      `)
      for (let leg = 0; leg < json[i].length; leg++)
        passengerName = `${json[i][leg].passengerDetails.first} ${json[i][leg].passengerDetails.last}`
        passengerPhone = `${json[i][leg].passengerDetails.phoneNumber}`
        passengerPickupAddressLine1 = `${json[i][leg].pickupLocation.address}`
        passengerPickupAddressLine2 = `${json[i][leg].pickupLocation.city}, ${json[i][leg].pickupLocation.state} ${json[i][leg].pickupLocation.state}`
        passengerDropoffAddressLine1 = `${json[i][leg].dropoffLocation.address}`
        passengerDropoffAddressLine2 = `${json[i][leg].dropoffLocation.city}, ${json[i][leg].dropoffLocation.state} ${json[i][leg].dropoffLocation.state}`
        passengerNumberofPassengers = `${numberOfPassengers}`
        outputElement.insertAdjacentHTML("beforeend", `
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${passengerPhone}</p>
            </div>
            <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${numberOfPassengers} passengers
            </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${passengerPickupAddressLine1}</p>
              <p>${passengerPickupAddressLine2}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${passengerDropoffAddressLine1}</p>
              <p>${passengerDropoffAddressLine2}</p>
            </div>
          </div>
        </div>`)
    } else if 
  }


  // let renderLevelofService = function(ride) {
  //   return `
  //   <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  //   <i class="fas fa-car-side"></i>
  //   <span>${ride.levelOfService}</span>
  // </h1>
  // //   `
  // // }

  // for (let i = 0; i < rides.length; i++) {
  //   let ride = rides[i]
  //   if (ride.length > 1) {
  //     ride.levelOfService = 'Noober Pool'
  //   } else if (ride.purpleRequested) {
  //     ride.levelOfService = 'Noober Purple'
  //   } else if (ride.numberOfPassengers > 3) {
  //     ride.levelOfService = 'Noober XL'
  //   } else {
  //     ride.levelOfService = 'Noober X'
  //   }
  //   console.log(ride.levelOfService)
  //   let element = document.querySelector('.rides')
  //   element.insertAdjacentHTML('beforeend', renderLevelofService(ride.levelOfService))
  // }

  // let renderRideInfo = function(ride) {
  //   return `
  //   <div class="border-4 border-gray-900 p-4 my-4 text-left">
  //   <div class="flex">
  //     <div class="w-1/2">
  //       <h2 class="text-2xl py-1">${ride.name}</h2>
  //       <p class="font-bold text-gray-600">(312) 555-1212</p>
  //     </div>
  //     <div class="w-1/2 text-right">
  //       <span class="rounded-xl bg-gray-600 text-white p-2">
  //         5 passengers
  //       </span>
  //     </div>
  //   </div>
  //   <div class="mt-4 flex">
  //     <div class="w-1/2">
  //       <div class="text-sm font-bold text-gray-600">PICKUP</div>
  //       <p>123 Main St</p>
  //       <p>Chicago, IL 60603</p>
  //     </div>
  //     <div class="w-1/2">
  //       <div class="text-sm font-bold text-gray-600">DROPOFF</div>
  //       <p>123 Main St</p>
  //       <p>Chicago, IL 60603</p>
  //     </div>
  //   </div>
  // </div>
  //   `
  // }


}

window.addEventListener('DOMContentLoaded', pageLoaded)

