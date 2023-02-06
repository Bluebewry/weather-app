const getFormData = async (event) => {
    event.preventDefault()
    const zip = event.target.zip.value
    console.log(zip)
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=&units=imperial`

    const res = await fetch(url)
    const data = await res.json()

    const name = data.name
    let high = data.main.temp_max
    let low = data.main.temp_min
    const forecast = data.weather[0].main
    const humidity = data.main.humidity

    const myData = {
        name: name,
        high: high,
        low: low,
        forecast: forecast,
        humidity: humidity
    }
    addToPage(myData)
}

const addToPage = (p) => {
    const card = document.createElement('div')
    card.innerHTML = 
    `<h2 class="d-flex justify-content-center mt-4 mb-3">${p.name}</h2>
    
    <div class="card mb-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-center bg-danger text-white">High</h5>
             <p class="card-text d-flex justify-content-center">${p.high}</p>
        </div>
    </div>
    
    
    <div class="card mb-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-center bg-primary text-white">Low</h5>
             <p class="card-text d-flex justify-content-center">${p.low}</p>
        </div>
    </div>
    
    
    <div class="card mb-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-center bg-info text-white">Forecast</h5>
             <p class="card-text d-flex justify-content-center">${p.forecast}</p>
        </div>
    </div>
    
    <div class="card mb-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-center bg-success text-white">Humidity</h5>
             <p class="card-text d-flex justify-content-center">${p.humidity}</p>
        </div>
    </div>
    `
    const container = document.querySelector('.container')
    if (container.innerHTML !== ''){
        container.innerHTML = ''
    }
    container.append(card)

}


const myForm = document.getElementById('myForm')
myForm.addEventListener('submit', getFormData)