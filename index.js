const baseURL = 'https://api.covid19api.com/summary';
const tableData = document.querySelector('tbody');

function fetchCovidStats(){
    fetch(baseURL)
    .then(res => res.json())
    .then(json => {
        displayCovidStats(json.Countries);
    })
}

fetchCovidStats();

function displayCovidStats(covid){
    let i = 0;
    h1 = document.querySelector('h1');
    let today = new Date();
    h1.innerText = 'Global Covid Statistics on ' + today;
    covid.forEach(c => {
        let county = c.Country;
        let newCases = c.NewConfirmed;
        let newRow = document.createElement('tr');
        let countryData = '<td>' + c.Country + '</td>';
        let newConfirmedData = '<td>' + c.NewConfirmed + '</td>';
        let newDeathsData = '<td>' + c.NewDeaths + '</td>';
        let newRecoveredData = '<td>' + c.NewRecovered + '</td>';
        let totalConfirmedData = '<td>' + c.TotalConfirmed + '</td>';
        let totalDeaths = '<td>' + c.TotalDeaths + '</td>';
        let percent = (c.TotalDeaths / c.TotalConfirmed * 100).toFixed(1);
        let percentDeathsToConfirmedTotal = '<td>' + percent + '%</td>';
        let totalRecovered = '<td>' + c.TotalRecovered + '</td>';
        newRow.innerHTML = countryData + newConfirmedData + newDeathsData + newRecoveredData + totalConfirmedData + totalDeaths + percentDeathsToConfirmedTotal + totalRecovered;
        if((i % 2) == 0){
            newRow.classList.add('rowHighlight');
        }
        i++;
        tableData.appendChild(newRow);
    }
    )
}
