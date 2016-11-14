
var mraa = require("mraa"); //require mraa
//Initialize PWM on Digital Pin #3 (D3) and enable the pwm pin
var pwm3 = new mraa.Pwm(3);
pwm3.enable(true);

//set the period in microseconds.
pwm3.period_us(2000);
var value = 0.0;
var step = 0.3;
setInterval(function () {
    if (value >= 1.0) {
        value = 0.0;
    }
    
    value = value + step;
    pwm3.write(value); //Write duty cycle value. 

    console.log(pwm3.read());//read current value that is set before.
}, 3000);
