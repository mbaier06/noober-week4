async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  let passengerName
  let passengerPhone
  let passengerPickupAddressLine1
  let passengerPickupAddressLine2
  let passengerDropoffAddressLine1
  let passengerDropoffAddressLine2
  let levelOfService
  let outputElement = document.querySelector('.rides')

  // function to return header for non-purple rides
  function renderLevelOfService(levelOfService) {
    outputElement.insertAdjacentHTML("beforeend", 
    `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService}</span>
    </h1>
    `)
  }
  // function to return header for purple rides
  function renderLevelOfServicePurple(levelOfService) {
    outputElement.insertAdjacentHTML("beforeend", 
    `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${levelOfService}</span>
          </h1>
    `)
  }

  for (let i = 0; i < json.length; i++) {
    let ride = json[i]
    if (ride.length > 1) {
      levelOfService = "Noober Pool"
      renderLevelOfService(levelOfService)
      // nested for loop for passenger data for multiple legs
      for (let leg = 0; leg < ride.length; leg++) {
        passengerName = `${ride[leg].passengerDetails.first} ${ride[leg].passengerDetails.last}`
        passengerPhone = ride[leg].passengerDetails.phoneNumber
        passengerPickupAddressLine1 = ride[leg].pickupLocation.address
        passengerPickupAddressLine2 = `${ride[leg].pickupLocation.city}, ${ride[leg].pickupLocation.state} ${ride[leg].pickupLocation.zip}`
        passengerDropoffAddressLine1 = ride[leg].dropoffLocation.address
        passengerDropoffAddressLine2 = `${ride[leg].dropoffLocation.city}, ${ride[leg].dropoffLocation.state} ${ride[leg].dropoffLocation.zip}`
        
        outputElement.insertAdjacentHTML("beforeend", `
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${passengerPhone}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
                ${ride[leg].numberOfPassengers} passengers
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
      }
    } else if (ride.length == 1 && ride[0].purpleRequested == true) {
          levelOfService = "Noober Purple"
          renderLevelOfServicePurple(levelOfService)
          
          passengerName = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`
          passengerPhone = ride[0].passengerDetails.phoneNumber
          passengerPickupAddressLine1 = ride[0].pickupLocation.address
          passengerPickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`
          passengerDropoffAddressLine1 = ride[0].dropoffLocation.address
          passengerDropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`
          outputElement.insertAdjacentHTML("beforeend", `
          <div class="border-4 border-purple-500 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${passengerPhone}</p>
            </div>
            <div class="w-1/2 text-right">
            <span class="rounded-xl bg-purple-600 text-white p-2">
              ${ride[0].numberOfPassengers} passengers
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
      } else if (ride.length == 1 && ride[0].numberOfPassengers > 3) {
        levelOfService = "Noober XL"
        renderLevelOfService(levelOfService)
        passengerName = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`
        passengerPhone = ride[0].passengerDetails.phoneNumber
        passengerPickupAddressLine1 = ride[0].pickupLocation.address
        passengerPickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`
        passengerDropoffAddressLine1 = ride[0].dropoffLocation.address
        passengerDropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`

        outputElement.insertAdjacentHTML("beforeend", `
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ride[0].numberOfPassengers} passengers
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
      } else {
        levelOfService = "Noober X"
       renderLevelOfService(levelOfService)
       
       passengerName = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`
       passengerPhone = ride[0].passengerDetails.phoneNumber
       passengerPickupAddressLine1 = ride[0].pickupLocation.address
       passengerPickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`
       passengerDropoffAddressLine1 = ride[0].dropoffLocation.address
       passengerDropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`
        outputElement.insertAdjacentHTML("beforeend", `
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ride[0].numberOfPassengers} passengers
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
      } 
  }
}
  
  // 🔥 start here: write code to loop through the rides



window.addEventListener('DOMContentLoaded', pageLoaded)