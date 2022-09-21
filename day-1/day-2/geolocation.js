var x = document.getElementById('demo')

function getlocation()
{
    navigator.geolocation.getCurrentPosition(showPosition)
}

function showPosition(position)
{
    x.innerHTML="Latitude"+ position.coords.latitude +"log"+position.coords.longitude
}