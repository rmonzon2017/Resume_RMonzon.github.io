function Calc(myform) {
	var tempAmount=document.Chill.OutdoorTemp.value
	var tempAmount=parseInt(tempAmount,10)
	if (isNaN(tempAmount) || (tempAmount<=0)) {
		alert ("The temperature is not a valid number!")
		document.Chill.OutdoorTemp.value=" "
		document.Chill.OutdoorTemp.focus()
		}
	else {
		var speed=document.Chill.windSpeed.value
		var speed=parseFloat(speed)
	if (isNaN(speed) || (speed<=0)) {
		alert("The wind speed is not a valid number!")
		document.Chill.windSpeed.value=" "
		document.Chill.windSpeed.focus()
		}
	
		}
		
	}