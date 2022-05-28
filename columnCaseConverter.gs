//Ingresa las columnas cuyos valores desees convertir
const colsConvert = [
  'Nombre'
  , 'Sexo'
];

const typeConversion = 'upper'; //Puede ser upper para mayúsculas y lower para minúsculas.











//El encabezado del dataset por defecto se encuentra en la fila 1. De preferencia, evita moverlo.
const filaEncabezado = 1;
function convertCase() {

  const app = SpreadsheetApp;
  const ss =  app.getActiveSpreadsheet();
  const actionSheet = ss.getActiveSheet();
  const headers = actionSheet.getRange(filaEncabezado, 1, 1, actionSheet.getLastColumn()).getValues()[0];

  let colsUpperIndex = colsConvert.map(h=>headers.indexOf(h));

  colsUpperIndex.forEach(index => {
    let tgtColData = actionSheet.getRange((filaEncabezado + 1), (index + 1), actionSheet.getLastRow() - 1, 1).getValues();
    tgtColData = tgtColData.map(item => {
      
      if (typeConversion === 'upper') {
        return [item[0].toUpperCase()]
      } else if (typeConversion === 'lower') {
        return [item[0].toLowerCase()]
      }else {
        return [item[0]]
      }
      
    });
    actionSheet.getRange((filaEncabezado + 1), (index + 1), actionSheet.getLastRow() - 1, 1).setValues(tgtColData);   
  });
}
