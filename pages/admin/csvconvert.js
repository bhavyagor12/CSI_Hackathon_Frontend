// import React , { useState} from 'react';

// function csvconvert(){
//     const [csvFile, setCsvFile] = useState();

//     return(
//         <form id='csv-form'>
//             <input
//                 type='file'
//                 accept='.csv'
//                 id='csvFile'
//                 onChange={(e) => {
//                     setCsvFile(e.target.files[0])
//                 }}
//             >
//             </input>
//             <br/>
//             <button>
//                 Submit
//             </button>
//         </form>
//     );

// }
// export default csvconvert;

// import Papa from "papaparse";

// function csvconvert() {
//   return (
//     <div className="csvconvert">
//       <input
//         type="file"
//         accept=".csv"
//         onChange={(e) => {
//           const files = e.target.files;
//           console.log(files);
//           if (files) {
//             console.log(files[0]);
//             Papa.parse(files[0], {
//               complete: function(results) {
//                 console.log("Finished:", results.data);
//               }}
//             )
//           }
//         }}
//       />
//     </div>
//   );
// }

// let csvToJson = require('convert-csv-to-json');

// let json = csvToJson.getJsonFromCsv("myInputFile.csv");
// for(let i=0; i<json.length;i++){
//     console.log(json[i]);
// }

// export default csvconvert;
import Papa from "papaparse";

function csvconvert() {
  return (
    <div className="App">
      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          const files = e.target.files;
          console.log(files);
          if (files) {
            console.log(files[0]);
            Papa.parse(files[0], {
              complete: function(results) {
                console.log("Finished:", results.data);
              }}
            )
          }
        }}
      />
    </div>
  );
}
export default csvconvert;