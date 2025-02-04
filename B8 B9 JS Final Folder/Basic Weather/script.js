const API_KEY = "c91c69fc98717a15d6b8b39e9e02ae10"




document.getElementById("actionBtn").addEventListener("click", async(e) => {
    e.preventDefault();




    try {
        let userCity = document.getElementById("userCity").value;
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${API_KEY}&units=metric`)

        console.log(response.data.main)

        document.getElementById("temperature").innerHTML = response.data.main.temp;



    } catch (error) {
        console.log(error)
    }

})