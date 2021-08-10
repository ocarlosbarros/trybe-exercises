const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const onError = (messageError) => console.log(messageError);

// definição da função sendMarsTemperature...
sendMarsTemperature = (onSuccess, onError) => {
  const temperature = getMarsTemperature();
  setTimeout( () => {
    const delay = messageDelay();
    if(delay >= 3000){
      onSuccess(temperature);
    }else{
      const errorMessage = 'Message not send, Curiosity is busy';
      onError(errorMessage);
    }
  });
};


sendMarsTemperature(temperatureInFahrenheit, onError); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet, onError); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo