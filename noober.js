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
  let passengerDropoffAddressLine1
  let passengerDropoffAddressLine2
  let passengerNumberOfPassengers
  let levelOfService
  let outputElement = document.querySelector('.rides')

  for (let i = 0; i < json.length; i++) {
    if (json[i].length > 1) {
      levelOfService = "Noober Pool"
      outputElement.insertAdjacentHTML("beforeend", `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
      </h1>`)
      // nested for loop for 
      for (let leg = 0; leg < json[i].length; leg++) {
        passengerName = `${json[i][leg].passengerDetails.first} ${json[i][leg].passengerDetails.last}`
        passengerPhone = `${json[i][leg].passengerDetails.phoneNumber}`
        passengerNumberofPassengers = json[i][leg].numberOfPassengers
        passengerPickupAddressLine1 = `${json[i][leg].pickupLocation.address}`
        passengerPickupAddressLine2 = `${json[i][leg].pickupLocation.city}, ${json[i][leg].pickupLocation.state} ${json[i][leg].pickupLocation.state}`
        passengerDropoffAddressLine1 = `${json[i][leg].dropoffLocation.address}`
        passengerDropoffAddressLine2 = `${json[i][leg].dropoffLocation.city}, ${json[i][leg].dropoffLocation.state} ${json[i][leg].dropoffLocation.zip}`
        outputElement.insertAdjacentHTML("beforeend", `
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${passengerPhone}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
                ${passengerNumberOfPassengers} passengers
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
    else if (json[i][leg].purpleRequested == true) {
      levelOfService = "Noober Purple"
      outputElement.insertAdjacentHTML("beforeend", `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
      </h1>`)
      outputElement.insertAdjacentHTML("beforeend", `
      <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
        <span class="rounded-xl bg-purple-600 text-white p-2">
          ${passengerNumberOfPassengers} passengers
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
    } else if (json[i][leg].numberOfPassengers > 3) {
      levelOfService = "Noober XL"
      outputElement.insertAdjacentHTML("beforeend", `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
      </h1>`)
      outputElement.insertAdjacentHTML("beforeend", `
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${passengerPhone}</p>
            </div>
            <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${passengerNumberOfPassengers} passengers
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
      outputElement.insertAdjacentHTML("beforeend", `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
      </h1>`)
      outputElement.insertAdjacentHTML("beforeend", `
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${passengerPhone}</p>
            </div>
            <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${passengerNumberOfPassengers} passengers
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

window.addEventListener('DOMContentLoaded', pageLoaded)

