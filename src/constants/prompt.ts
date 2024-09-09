import jsonData from '@/json/exampleTinyDataSensor.json'

export const prompt: string = `Genera un reporte detallado basado en los siguientes datos de los sensores de temperatura y humedad. Incluye la información de los sensores y las mediciones que han tomado. 
    El reporte debe contener:
    
    1. Una introducción con el nombre y la descripción de cada sensor, incluyendo el ID, la ubicación y si está conectado a corriente.
    2. Listar las medidas tomadas por los sensores con un formato claro y comprensible.
    3. Indicar si las mediciones de temperatura y humedad superan los límites especificados. 
    4. Redacta el reporte de manera que sea fácil de leer, usando oraciones completas y explicaciones claras.
    5. Da un resumen final de toda la información recopilada
    
    Datos JSON del sensor: ${JSON.stringify(jsonData)}`
