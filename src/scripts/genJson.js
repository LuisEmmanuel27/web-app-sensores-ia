function generarDatosSensores(nombreUsuario, cantidadSensores, cantidadMedidas) {
  const sensores = [];

  for (let i = 0; i < cantidadSensores; i++) {
    const id = (Math.floor(Math.random() * 100000000000)).toString();
    const nombre = `sensor-demo-${i + 1}`;
    const conectadoCorriente = Math.random() < 0.5;
    const conectadoRed = Math.random() < 0.5;
    const bateria = Math.floor(Math.random() * 101);
    const maxLimitTemperatura = 20;
    const maxLimitHumedad = 30;
    const minLimitTemperatura = null;
    const minLimitHumedad = null;
    const latitud = 19.4270206;
    const longitud = -99.1688868;

    const medidas = [];
    const now = new Date();
    for (let j = 0; j < cantidadMedidas; j++) {
      const dateTime = new Date(now.getTime() + j * 10 * 60000).toISOString(); // Incrementa en intervalos de 10 minutos
      const temperatura = Math.floor(Math.random() * 30);
      const humedad = Math.floor(Math.random() * 50);
      medidas.push({
        date_time: dateTime,
        temperatura,
        humedad
      });
    }

    sensores.push({
      id,
      nombre,
      conectado_corriente: conectadoCorriente,
      conectado_red: conectadoRed,
      bateria,
      max_limit_temperatura: maxLimitTemperatura,
      max_limit_humedad: maxLimitHumedad,
      min_limit_temperatura: minLimitTemperatura,
      min_limit_humedad: minLimitHumedad,
      posicion: {
        latitud,
        longitud
      },
      medidas
    });
  }

  return {
    usuario: nombreUsuario,
    sensores
  };
}

// Ejemplo de uso
const nombreUsuario = 'Jhon Dee';
const cantidadSensores = 3;
const cantidadMedidas = 30;

const datosSensores = generarDatosSensores(nombreUsuario, cantidadSensores, cantidadMedidas);
console.log(JSON.stringify(datosSensores, null, 2));
