const metroStations = {
'Chennai Airport Metro': {'Meenambakkam Metro': 8,},
'Meenambakkam Metro': {'Chennai Airport Metro': 8,'Nanganallur Road': 16,},
'Nanganallur Road': {'Alandur': 8,'Meenambakkam Metro': 16,},
'Alandur': {'St Thomas Mount': 8,'Nanganallur Road': 8,'Ekkatuthangal': 8,'Guindy': 8,},
'St Thomas Mount': {'Alandur': 8,},
'Ekkatuthangal': {'Alandur': 8,'Ashok Nagar': 16,},
'Guindy': {'Alandur': 8,'Little Mount': 8,},
'Ashok Nagar': {'Ekkatuthangal': 16,'Vadapalani': 8,},
'Little Mount': {'Guindy': 8,'Saidapet': 8,},
'Vadapalani': {'Ashok Nagar': 8,'Arumbakkam': 8,},
'Saidapet': {'Little Mount': 8,'Nandanam': 8,},
'Arumbakkam': { 'Vadapalani':8 ,'CMBT': 8,},
'Nandanam': {'Saidapet': 8,'Teynampet': 8,},
'CMBT': {'Arumbakkam': 8,'Koyambedu' : 8,},
'Teynampet': {'Nandanam': 8,'AG-DMS': 8,},
'Koyambedu': {'CMBT': 8,'Thirumangalam': 8,},
'AG-DMS': {'Teynampet': 8,'Thousand Lights': 8,},
'Thirumangalam': {'Koyambedu': 8,'Annanagar Tower': 8,},
'Thousand Lights': {'AG-DMS': 8,'LIC': 8,},
'Annanagar Tower': {'Thirumangalam': 8,'Annanagar East': 8,},
'LIC': {'Thousand Lights': 8,'Government Estate': 8,},
'Annanagar East': {'Annanagar Tower': 8,'Shenoy Nagar': 8,},
'Government Estate': {'Central Metro': 8,'LIC': 8,},
'Pachaiyappa': {'Shenoy Nagar': 8,'Kilpauk': 8,},
'Shenoy Nagar': {'Annanagar East': 8,'Pachaiyappa': 8,},
'Kilpauk': {'Pachaiyappa': 8,'Nehru Park': 8,},
'Nehru Park': {'Kilpauk': 8,'Egmore': 8,},
'Egmore': {'Nehru Park': 8,'Central Metro': 8,},
'Central Metro': {'Government Estate': 8,'Egmore': 8,'High Court': 8,},
'High Court': {'Central Metro': 8,'Mannadi': 8,},
'Mannadi': {'High Court': 8,'Washermanpet': 8,},
'Washermanpet': {'Mannadi': 8,'Theagaraya college': 8,},
'Theagaraya college': {'Washermanpet': 8,'Tondiarpet': 8,},
'Tondiarpet': {'Theagaraya college': 8,'New Washermanpet': 8,},
'New Washermanpet': {'Tondiarpet': 8,'Tollgate': 8,},
'Tollgate': {'New Washermanpet': 8,'kaladipet': 8,},
'Kaladipet': {'Tollgate': 8,'Theradi': 8,},
'Theradi': {'Kaladipet': 8,'Thiruvottriyur': 8,},
'Thiruvottriyur': {'Theradi': 8,'Wimco Nagar': 8,},
'Wimco Nagar': {'Thiruvottriyur': 8,'Wimco Nagar Depot': 8,},
'Wimco Nagar Depot': {'Wimco Nagar': 8,},
};

function calculate() {
const sourceStation = document.getElementById('source').value;
const destinationStation = document.getElementById('destination').value;
if (sourceStation === '' || destinationStation === '') {
alert('Please select source and destination stations.');
return;
}
const stations = Object.keys(metroStations);
const INF = Number.MAX_SAFE_INTEGER;
const distances = {};
stations.forEach((station) => (distances[station] = INF));
distances[sourceStation] = 0;
const visited = {};
const path = {};
while (true) {
let currentStation = null;
stations.forEach((station) => {
if (!visited[station] &&(currentStation === null ||distances[station] < distances[currentStation])) {
currentStation = station;
}
});
if (currentStation === null || distances[currentStation] === INF) {
break;
}
visited[currentStation] = true;
for (const neighbor in metroStations[currentStation]) {
const distance =
distances[currentStation] + metroStations[currentStation][neighbor];
if (distance < distances[neighbor]) {
distances[neighbor] = distance;
path[neighbor] = currentStation;
}
}
}
const route = [];
let current = destinationStation;
while (current !== sourceStation) {
route.unshift(current);
current = path[current];
}
route.unshift(sourceStation);
const fare = distances[destinationStation];
document.getElementById('route').textContent = route.join(' -> ');
}

