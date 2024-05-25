// JavaScript code for handling page functionality
// Ensure you have included JQuery library before this script

// JSON object containing party colors
let sym = {
  IND: "./imgs/independent.svg",
  BJP: "./imgs/BJP.webp",
  INC: "./imgs/INC.svg",
  DMK: "./imgs/DMK.webp",
  YSRCP: "./imgs/YSRCP.jpeg",
  AITC: "./imgs/AITC.png",
  SHS: "./imgs/SHS.png",
  "JD(U)": "./imgs/JD(U).png",
  BJD: "./imgs/BJD.png",
  BSP: "./imgs/BSP.jpg",
  TRS: "./imgs/TRS.jpg",
  BRS: "./imgs/BRS.jpg",
  LJP: "./imgs/LJP.jpg",
  NCP: "./imgs/NCP.webp",
  SP: "./imgs/SP.jpg",
  TDP: "./imgs/TDP.webp",
  JKN: "./imgs/JKN.webp",
  IUML: "./imgs/IUML.jpg",
  CPIM: "./imgs/CPIM.png",
  AIMIM: "./imgs/AIMIM.png",
  SAD: "./imgs/SAD.webp",
  CPI: "./imgs/CPI.webp",
  ADAL: "./imgs/ADAL.webp",
  AIUDF: "./imgs/AIUDF.png",
  JMM: "./imgs/JMM.png",
  AJSUP: "./imgs/AJSUP.jpg",
  "JD(S)": "./imgs/JD(S).jpg",
  "KEC(M)": "./imgs/KEC(M).webp",
  "Andaman & Nicobar Islands": "./imgs/Andaman_&_Nicobar_Islands.jpg",
  "Andhra Pradesh": "./imgs/Andhra_Pradesh.webp",
  "Arunachal Pradesh": "./imgs/Arunachal_Pradesh.jpg",
  Assam: "./imgs/Assam.jpg",
  Bihar: "./imgs/Bihar.jpg",
  Chandigarh: "./imgs/Chandigarh.png",
  Chhattisgarh: "./imgs/Chhattisgarh.jpg",
  "Dadra & Nagar Haveli": "./imgs/Dadra_&_Nagar_Haveli.png",
  "Daman & Diu": "./imgs/Daman_&_Diu.jpg",
  Goa: "./imgs/Goa.jpg",
  Gujarat: "./imgs/Gujarat.jpg",
  Haryana: "./imgs/Haryana.jpg",
  "Himachal Pradesh": "./imgs/Himachal_Pradesh.jpg",
  "Jammu & Kashmir": "./imgs/Jammu_&_Kashmir.jpg",
  Jharkhand: "./imgs/Jharkhand.jpg",
  Karnataka: "./imgs/Karnataka.jpg",
  Kerala: "./imgs/Kerala.jpg",
  Lakshadweep: "./imgs/Lakshadweep.gif",
  "Madhya Pradesh": "./imgs/Madhya_Pradesh.jpg",
  Maharashtra: "./imgs/Maharashtra.jpg",
  Manipur: "./imgs/Manipur.jpg",
  Meghalaya: "./imgs/Meghalaya.jpg",
  Mizoram: "./imgs/Mizoram.png",
  Nagaland: "./imgs/Nagaland.png",
  "NCT OF Delhi": "./imgs/NCT_OF_Delhi.jpeg",
  Odisha: "./imgs/Odisha.png",
  Puducherry: "./imgs/Puducherry.png",
  Punjab: "./imgs/Punjab.jpg",
  Rajasthan: "./imgs/Rajasthan.png",
  Sikkim: "./imgs/Sikkim.png",
  "Tamil Nadu": "./imgsTamil_Nadu.jpg",
  Telangana: "./imgs/Telangana.png",
  Tripura: "./imgs/Tripura.png",
  "Uttar Pradesh": "./imgs/Uttar_Pradesh.png",
  Uttarakhand: "./imgs/Uttarakhand.png",
  "West Bengal": "./imgs/West_Bengal.png",
};
let state_codes = {
  "Madhya Pradesh": 23,
  Odisha: 21,
  Mizoram: 15,
  Sikkim: 11,
  Goa: 30,
  Kerala: 32,
  Karnataka: 29,
  Maharashtra: 27,
  Manipur: 14,
  Meghalaya: 17,
  Chhattisgarh: 22,
  Gujarat: 24,
  "Arunachal Pradesh": 12,
  Assam: 18,
  "Andhra Pradesh": 37,
  "Andaman and Nicobar Islands": 35,
  Chandigarh: 4,
  Telangana: 36,
  "Tamil Nadu": 33,
  Rajasthan: 8,
  Punjab: 3,
  Puducherry: 34,
  Jharkhand: 20,
  Tripura: 16,
  Lakshadweep: 31,
  Nagaland: 13,
  Ladakh: 1,
  Bihar: 10,
  "Uttar Pradesh": 9,
  Uttarakhand: 5,
  "Himachal Pradesh": 2,
  Haryana: 6,
  "Jammu and Kashmir": 1,
  "Jammu & Kashmir": 1,
  "NCT Of Delhi": 7,
  "Dadra and Nagar Haveli": 26,
  "West Bengal": 19,
};
const partyColors = {
  BJP: "#FF9933",
  Congress: "#0066CC",
  TMC: "#FF3399",
  DMK: "#FF0000",
  ADMK: "#66FF33",
  AAP: "#F7931E",
  AIMIM: "#2E3192",
  YSR: "#E53935",
  BRS: "#66CC99",
  DMDK: "#FF6600",
  PMK: "#00BFFF",
  CPI: "#FF3333",
  CPM: "#FF6600",
  BJD: "#FF9933",
  IUML: "#008000",
  JKPDP: "#FF6600",
  JJP: "#FF3300",
  KC: "#800000",
  PPA: "#FF6666",
  SP: "#FF0000",
  "Shiv Sena": "#0000FF",
  VCK: "#009900",
  "Puthiya Tamilagam": "#FF9933",
  "Naam Tamilar": "#008000",
};
const stateMaps = {
  BJP: "./imgs/BJP.webp",
  INC: "./imgs/INC.svg",
  DMK: "./imgs/DMK.webp",
  YSRCP: "./imgs/YSRCP.jpeg",
  AITC: "./imgs/AITC.png",
  SHS: "./imgs/SHS.png",
  "JD(U)": "./imgs/JD(U).png",
  BJD: "./imgs/BJD.png",
  BSP: "./imgs/BSP.jpg",
  TRS: "./imgs/TRS.jpg",
  BRS: "./imgs/BRS.jpg",
  LJP: "./imgs/LJP.jpg",
  NCP: "./imgs/NCP.webp",
  SP: "./imgs/SP.jpg",
  TDP: "./imgs/TDP.webp",
  JKN: "./imgs/JKN.webp",
  IUML: "./imgs/IUML.jpg",
  CPIM: "./imgs/CPIM.png",
  AIMIM: "./imgs/AIMIM.png",
  SAD: "./imgs/SAD.webp",
  CPI: "./imgs/CPI.webp",
  ADAL: "./imgs/ADAL.webp",
  AIUDF: "./imgs/AIUDF.png",
  JMM: "./imgs/JMM.png",
  AJSUP: "./imgs/AJSUP.jpg",
  "JD(S)": "./imgs/JD(S).jpg",
  "KEC(M)": "./imgs/KEC(M).webp",
  "Andaman and Nicobar Islands": "./imgs/Andaman_&_Nicobar_Islands.jpg",
  "Andhra Pradesh": "./imgs/Andhra_Pradesh.webp",
  "Arunachal Pradesh": "./imgs/Arunachal_Pradesh.jpg",
  Assam: "./imgs/Assam.jpg",
  Bihar: "./imgs/Bihar.jpg",
  Chandigarh: "./imgs/Chandigarh.png",
  Chhattisgarh: "./imgs/Chhattisgarh.jpg",
  "Dadra and Nagar Haveli": "./imgs/Dadra_&_Nagar_Haveli.png",
  "Daman & Diu": "./imgs/Daman_&_Diu.jpg",
  Goa: "./imgs/Goa.jpg",
  Gujarat: "./imgs/Gujarat.jpg",
  Haryana: "./imgs/Haryana.jpg",
  "Himachal Pradesh": "./imgs/Himachal_Pradesh.jpg",
  "Jammu and Kashmir": "./imgs/Jammu_&_Kashmir.jpg",
  Jharkhand: "./imgs/Jharkhand.jpg",
  Karnataka: "./imgs/Karnataka.jpg",
  Kerala: "./imgs/Kerala.jpg",
  Lakshadweep: "./imgs/Lakshadweep.gif",
  "Madhya Pradesh": "./imgs/Madhya_Pradesh.jpg",
  Maharashtra: "./imgs/Maharashtra.jpg",
  Manipur: "./imgs/Manipur.jpg",
  Meghalaya: "./imgs/Meghalaya.jpg",
  Mizoram: "./imgs/Mizoram.png",
  Nagaland: "./imgs/Nagaland.png",
  "NCT Of Delhi": "./imgs/NCT_OF_Delhi.jpeg",
  "Odisha": "./imgs/Odisha.png",
  "Puducherry": "./imgs/Puducherry.png",
  "Punjab": "./imgs/Punjab.jpg",
  "Rajasthan": "./imgs/Rajasthan.png",
  "Sikkim": "./imgs/Sikkim.png",
  "Tamil Nadu": "./imgsTamil_Nadu.jpg",
  "Telangana": "./imgs/Telangana.png",
  "Tripura": "./imgs/Tripura.png",
  "Uttar Pradesh": "./imgs/Uttar_Pradesh.png",
  "Uttarakhand": "./imgs/Uttarakhand.png",
  "West Bengal": "./imgs/West_Bengal.png",
};

let stateDataJson;
let allianceJson;
let data = {};
let ftrs, geo ,geo2, map;
let names = {
  "#F47216": "NDA",
  "#7E7BFC": "I.N.D.I.A",
  "#BFC8D0": "Others",
  ndaColor: "#F47216",
  indiaColor: "#7E7BFC",
  othersColor: "#BFC8D0",
};
async function fetchGeoJSON(file) {
  try {
    const response = await fetch(file);
    const geoJson = await response.json();
    ftrs = geoJson.features
      .map((i) => i.properties)
      .sort((a, b) =>
        a.pc_name > b.pc_name ? 1 : a.pc_name < b.pc_name ? -1 : 0
      );
    // Initialize the map and add the GeoJSON layer
    console.log(L);
    map = L.map("map", { attributionControl: false, zoomSnap: 0.2 });
    geo = L.geoJSON(geoJson, {
      onEachFeature: (feature, layer) => {
        layer.on("click", function (event) {
          console.log("first");
          document.getElementById("stateTabeleContainer").style.display = "none";
          document.querySelector("#Constituency-res").style.display = "none";
          document.querySelector("#Candidate-res").style.display = "block";
          breadcrumbState.innerHTML = `<a href="#" onclick="resetstatebread()">${feature.properties.st_name}`;
          breadcrumbState.style.display = "inline";
          breadcrumbConstituency.textContent = feature.properties.pc_name;
          breadcrumbConstituency.style.display = "inline";
          render_table(feature.properties.pc_id,1);
        });
        layer._leaflet_id = feature.properties.pc_id;
      },
    });

    geo.addTo(map);
    geo.setStyle((feature) => ({
      weight: 0.2,
      color: "#000",
      fillColor:
        document.querySelector(`tr[data-pc="${feature.properties.pc_id}"]`)
          ?.dataset.pccolor || "#fff",
      fillOpacity: 0.9,
    }));
    // console.log("rendered");
    updateMapBounds();
    map.on("resize", delayedBoundsUpdate);
    // render_whole_table();
    // document.querySelector("#Constituency-res").style.display = "none";
    var filteredFeatures = geoJson.features.filter(
      (feature) => feature.properties.st_code == 36
    );
    var filteredGeoJson = { ...geoJson, features: filteredFeatures };
    geo2 = L.geoJSON(filteredGeoJson, {
      onEachFeature: (feature, layer) => {
        //   layer.on('mouseover', function(event) {
        //     showBox(feature.properties, layer);
        // });

        // layer.on('mouseout', function(event) {
        //     hideBox();
        // });

        layer.on("click", function (event) {
          console.log("change");
          // document.querySelector("#Constituency-res").style.display =
          //   "none";
          // document.querySelector("#Candidate-res").style.display = "block";
          // breadcrumbConstituency.textContent = feature.properties.pc_name;
          // breadcrumbConstituency.style.display = "inline";
          // render_table(feature.properties.pc_id);
        });
        layer._leaflet_id = feature.properties.pc_id;
      },
    });



  } catch (error) {
    console.error("Error loading GeoJSON:", error);
  }
}
async function fetchJSON(file) {
  try {
    const url = "http://192.168.1.206:4200/constituency-data";
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    stateDataJson = await response.json();
    allianceJson = stateDataJson[2];
    let k = Object.keys(stateDataJson[0]);
    for (let i of k) {
      Object.assign(data, stateDataJson[0][i]);
    }
    stateDataJson = stateDataJson[1];
    // You can process the JSON data here
  } catch (error) {
    console.error("Error fetching the JSON file:", error);
  }
}
// async function fetchData() {
//   //   console.log(`called ${temp++}`);
//   console.log("entered");
//   try {
//     const url = "http://192.168.1.206:4200/constituency-data"; // Replace with the path to your JSON file
//     const response = await fetch(url);
//     stateDataJson = await response.json();
//     allianceJson = stateDataJson[2];
//     stateDataJson = stateDataJson[1];

//     // console.log("entered ");
//     // console.log(stateDataJson);
//     // **Run the rest of your code here using the imported `data`**
//   } catch (error) {
//     console.error(error);
//   }
//   console.log("exited");
// }

const initialView = [22, 82.5];
const initialZoom = 5;
$(document).ready(async function () {
  await fetchJSON("./election2019.json");
  await fetchGeoJSON("geo.json");
  //   let intervalId = setInterval(async () => {
  //     await fetchData();
  //     // handleStateClick(lastClickedState);
  //   }, 10000);
  console.log(data);
  console.log(stateDataJson);
  console.log(allianceJson);
  // Function to render India map with statewise colors
  function renderIndiaMap() {
    // Implement the logic to render India map using SVG or any other method
    // Add paths to the SVG map
    //alert("aa");
    document.getElementById("india-map").innerHTML =
      '<svg id="india-svg" viewBox="0 100 1000 1150" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"></svg>';
    var pathsStr = "";
    for (let state in paths) {
      pathsStr += `<path id="${states[state]}" d="${paths[state]}"></path>`;
    }
    document.getElementById("india-svg").innerHTML =
      '<svg id="india-svg" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">' +
      pathsStr +
      "</svg>";
  }

  // Function to render alliance results in tabular format
  function renderAllianceResults() {
    // Implement the logic to fetch and display alliance results

    const tbody = document.getElementById("allianceBody");
    const referenceRow = document.getElementById("referenceRow");

    for (const state in stateDataJson) {
      let nda = 0,
        india = 0,
        others = 0;
      const stateMap = document.getElementById(state);

      const newRow = referenceRow.cloneNode(true);
      const cells = newRow.getElementsByTagName("td");
      cells[0].innerHTML = `<img id="stateLogo" src='${stateMaps[state]}'>${state}`;
      for (const consti in stateDataJson[state]) {
        const leadingCandidate = stateDataJson[state][consti][0];
        if (leadingCandidate.alliance === "NDA") nda++;
        else if (leadingCandidate.alliance === "OTH") others++;
        else india++;
      }

      cells[1].textContent = nda;
      cells[2].textContent = india;
      cells[3].textContent = others;
      stateMap.style.fill =
        nda >= india && nda >= others
          ? names.ndaColor
          : india > nda && india >= others
          ? names.indiaColor
          : names.othersColor;

      tbody.appendChild(newRow);
    }
  }

  // Function to render party-wise results in tabular format
  function renderPartyResults() {
    // Implement the logic to fetch and display party-wise results
  }

  // Function to handle click event on state in India map
  function handleStateClick(state) {
    let nda = 0,
      india = 0,
      others = 0;
      document.getElementById("breadcrumb-india").style.display="block";
      breadcrumbState.innerHTML = `<a href="#" onclick="resetstatebread2()">${state}`;
      breadcrumbState.style.display = "inline";
      breadcrumbConstituency.style.display = "none";
    state_map(state_codes[state], state);
    // Implement the logic to fetch and display state-wise results
    const constituencyTable = document.getElementById("stateTable");
    const cells = constituencyTable.getElementsByTagName("th");
    for (const consti in stateDataJson[state]) {
      const leadingCandidate = stateDataJson[state][consti][0];
      if (leadingCandidate.alliance === "NDA") nda++;
      else if (leadingCandidate.alliance === "OTH") others++;
      else india++;
    }
    updateBar([nda, india, others]);
  }

  // Function to render state results page
  function renderStateResults(state) {
    // Implement the logic to render state-wise results page
  }

  // Initial rendering of landing page
  renderIndiaMap();
  // renderAllianceResults();
  renderPartyResults();

  // Example click event handler for state in India map
  $("#india-map").on("click", "path", function () {
    const state = $(this).attr("id");
    handleStateClick(state);
  });

  function updateBar(values) {
    const barContainer = document.getElementById("bar-container");
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");
    bar1.style.display = "block";
    bar2.style.display = "block";
    bar3.style.display = "block";

    const word1 = document.getElementById("word1");
    const word2 = document.getElementById("word2");
    const word3 = document.getElementById("word3");
    const barLabel = document.getElementById("bar-label");
    const barText = document.getElementById("bar-text");

    const total = values.reduce((acc, val) => acc + val, 0);

    // Create an array of objects to sort by value
    const bars = [
      { element: bar1, value: values[0], color: "#F47216" }, // Blue
      { element: bar2, value: values[1], color: "#7E7BFC" }, // Green
      { element: bar3, value: values[2], color: "#BFC8D0" }, // Red
    ];

    // Sort bars by value in descending order
    bars.sort((a, b) => b.value - a.value);

    // Clear existing bars from the container
    barContainer.innerHTML = "";

    // Append sorted bars to the container
    bars.forEach((bar, index) => {
      const width = (bar.value / total) * 100;
      bar.element.style.width = width + "%";
      bar.element.style.backgroundColor = bar.color;
      bar.element.innerText = `${bar.value}`;
      barContainer.appendChild(bar.element);
      if (bar.value === 0) bar.element.style.display = "none";
    });
    word2.textContent = names[bars[1].color];
    word2.style.cssText = `left:${(bars[0].value / total) * 100}%;
    color:${bars[1].color}`;

    word1.textContent = names[bars[0].color];
    word1.style.color = bars[0].color;

    word3.textContent = names[bars[2].color];
    word3.style.color = bars[2].color;

    // Update the label text
  }

  renderAllianceResults(stateDataJson);

  // Example usage: updating the bar with specific values
  //   const exampleValues = [335, 65, 81]; // Change these values to see different results
  updateBar(Object.values(allianceJson));

  // ------------Search in state table-------------------------------
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#allianceBody tr").filter(function () {
      var text = $(this).text().toLowerCase();
      var words = text.split(/\s+/); // Split text into words
      var match = words.some(function (word) {
        return word.startsWith(value);
      });
      $(this).toggle(match);
    });
  });
});
