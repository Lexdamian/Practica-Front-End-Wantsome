/*Ex 2
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654 },
    { from: 'Sydney', to: 'chittagong', distance: 8858 },
    { from: 'Kolkata', to: 'Sylhet', distance: 670 }
]


const inMiles = distances.map(toMiles => toMiles.distance * 0.621371);
const lowMiles = inMiles.filter(miles => miles < 1000);
const sum = (accumulator, currentValue) => accumulator + currentValue;
const totalDistance = inMiles.reduce(sum);