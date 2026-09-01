// ============================================================
// BRAMPTON MANHOLE SITE ASSESSMENT WEB MAP
// ============================================================



// ============================================================
// 1. CREATE MAP
// ============================================================

const map = L.map("map").setView(
  [43.70, -79.77],
  12
);



// ============================================================
// 2. BASEMAPS
// ============================================================

const streetMap = L.tileLayer(

  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

  {

    maxZoom: 20,

    attribution:
      "&copy; OpenStreetMap contributors"

  }

);



const satelliteMap = L.tileLayer(

  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",

  {

    maxZoom: 20,

    attribution:
      "Tiles &copy; Esri"

  }

);


// Street map starts on by default
streetMap.addTo(map);



// ============================================================
// 3. CITY OF BRAMPTON STORMWATER LAYERS
// ============================================================
//
// City of Brampton ArcGIS REST service:
//
// Layer 0 = Manholes
// Layer 2 = Storm Sewer Lines
//
// These are OVERLAYS.
// Users can turn either layer on/off using the layer control.
//
// They may not appear until you zoom in because the City's
// service has its own display-scale restrictions.
// ============================================================


const bramptonStormLines = L.esri.dynamicMapLayer({

  url:
    "https://maps1.brampton.ca/arcgis/rest/services/Layers/MapServer",

  layers: [2],

  opacity: 0.8

});


const bramptonManholes = L.esri.dynamicMapLayer({

  url:
    "https://maps1.brampton.ca/arcgis/rest/services/Layers/MapServer",

  layers: [0],

  opacity: 0.9

});



// ============================================================
// 4. DEFAULT BRAMPTON LAYERS
// ============================================================
//
// Both layers start ON.
//
// Remove either .addTo(map) line if you would rather have
// that layer OFF when the website first opens.
// ============================================================

bramptonStormLines.addTo(map);

bramptonManholes.addTo(map);



// ============================================================
// 5. MAP LAYER CONTROL
// ============================================================
//
// Radio buttons:
//   Street Map
//   Satellite Imagery
//
// Checkboxes:
//   Brampton Storm Sewer Lines
//   Brampton Manholes
//
// This lets the user turn the City layers on/off independently.
// ============================================================

const baseMaps = {

  "Street Map":
    streetMap,

  "Satellite Imagery":
    satelliteMap

};


const overlayMaps = {

  "Brampton Storm Sewer Lines":
    bramptonStormLines,

  "Brampton Manholes":
    bramptonManholes

};


L.control.layers(

  baseMaps,

  overlayMaps,

  {

    position:
      "topright",

    collapsed:
      false

  }

).addTo(map);



// ============================================================
// 6. SITE ASSESSMENTS
// ============================================================

const siteDetails = {



  "Saint Hubert Dr": {

    traffic:
      "Low traffic; no traffic control signage was considered necessary during the inspection.",

    condition:
      "No debris or sediment observed within the manhole. Ladder appeared to be in good condition.",

    hydraulic:
      "Flowing water with a moderate water level.",

    pipes:
      "No cross-connecting pipes were visible.",

    depth:
      "Approximately 5–7 m from the manhole opening to the water surface.",

    notes:
      ""

  },



  "Sun Pac Blvd": {

    traffic:
      "Moderate traffic; vehicles were able to safely pass around the work area during the inspection.",

    condition:
      "Little to no debris or sediment observed. Ladder appeared to be in good condition.",

    hydraulic:
      "Low flow with a relatively high water level; pooling was observed.",

    pipes:
      "No cross-connecting pipes were visible.",

    depth:
      "Approximately 2 m to an intermediate access platform, followed by approximately 5 m from the platform to the water surface.",

    notes:
      "Two ladder sections are located on opposing sides of the manhole. The offset ladder arrangement and intermediate platform may complicate equipment lowering and retrieval/winch operations."

  },



  "PEB - Calderstone": {

    traffic:
      "Moderate traffic; vehicles were able to safely pass the work area.",

    condition:
      "Two ladder sections are present and appeared to be in generally good condition. Some sediment or debris was observed.",

    hydraulic:
      "Moderate flow and moderate water level.",

    pipes:
      "Cross-connecting pipes are present.",

    depth:
      "Approximately 4–5 m to an intermediate ledge and another 2–3 m from the ledge to the water.",

    notes:
      "The manhole is not a straight vertical drop due to the intermediate ledge and offset ladder arrangement."

  },



  "PEB - Dovehaven East": {

    traffic:
      "Moderate traffic; vehicles were able to safely pass the work area.",

    condition:
      "Moderate sediment and debris observed. Ladder appeared to be in good condition.",

    hydraulic:
      "Moderate flow and moderate water level.",

    pipes:
      "Cross-connecting pipes are present.",

    depth:
      "Straight vertical drop with no major intermediate ledge; approximately 5–6 m to the water surface.",

    notes:
      ""

  },



  "PEB - Dovehaven W": {

    traffic:
      "Moderate traffic; vehicles were able to safely pass the work area.",

    condition:
      "Ladder appeared to be in good condition. Some sediment was observed.",

    hydraulic:
      "Moderate to good flow with a relatively good water level.",

    pipes:
      "Cross-connecting pipes are present.",

    depth:
      "Approximately 3–4 m to the first intermediate bench/ledge, followed by approximately 1 m to the water surface.",

    notes:
      "The intermediate bench/ledge and ladder configuration should be considered when planning equipment access."

  },



  "Westbrook Ave": {

    traffic:
      "Low traffic.",

    condition:
      "Ladder appeared to be in good condition. Little sediment observed.",

    hydraulic:
      "Good water level with visible flow.",

    pipes:
      "No cross-connecting pipes were visible.",

    depth:
      "Approximately 2 m to an intermediate access platform, followed by approximately 3–4 m from the platform to the water surface.",

    notes:
      "The second ladder is located on the opposing side of the structure. The offset ladder/platform configuration may complicate equipment lowering and personnel retrieval/winch operations."

  },



  "Templehill Rd": {

    traffic:
      "Moderate traffic; temporary traffic control may be required during installation.",

    condition:
      "No significant sediment or debris observed. Ladder sections and intermediate access platforms appeared to be in good condition.",

    hydraulic:
      "Flow is not clearly visible from the surface when only this manhole is open because of the depth and internal configuration. Good flow was observed when the adjacent Temple Hill Rd W manhole was also opened.",

    pipes:
      "Connected to the adjacent Temple Hill Rd W manhole.",

    depth:
      "Deep manhole with offset ladder sections and intermediate access platforms.",

    notes:
      "The adjacent Temple Hill Rd W manhole may also need to be opened to provide enough light and viewing access to observe the flow. The offset ladder/platform configuration may complicate equipment lowering and retrieval."

  },



  "Temple Hill rd West": {

    traffic:
      "Moderate traffic; temporary traffic control may be required during installation.",

    condition:
      "No significant sediment or debris observed. Ladder sections and intermediate access platforms appeared to be in good condition.",

    hydraulic:
      "Good flow was observed; however, the flow is difficult to see from the surface unless the adjacent Temple Hill Rd manhole is also opened.",

    pipes:
      "Connected to the adjacent Temple Hill Rd manhole; cross-connections are present.",

    depth:
      "Deep manhole with offset ladder sections and intermediate access platforms.",

    notes:
      "The internal configuration and offset ladder/platform arrangement may complicate equipment lowering and retrieval."

  },



  "Rattlesnake Rd": {

    traffic:
      "Two nearby manholes were inspected.",

    condition:
      "Both structures are relatively deep and contain two sets of ladders with intermediate access platforms. Slight sediment accumulation was visible, but no major debris or obstructions were observed.",

    hydraulic:
      "Flow was present in both structures. One contained a narrower/shallow flow channel, while the second showed greater flow and water depth.",

    pipes:
      "Both manholes were labelled as sanitary, so their connection to the stormwater system could not be confirmed in the field.",

    depth:
      "Relatively deep structures with multiple ladder sections and intermediate access platforms.",

    notes:
      "Further investigation is required to confirm which, if either, structure is connected to the stormwater system. Sewer network mapping should be reviewed before selecting a monitoring location."

  },



  "Jayfield Rd": {

    traffic:
      "Low traffic on a residential street. The manhole is located within the roadway, so temporary traffic control may be required during installation or servicing.",

    condition:
      "Ladder appears to be in generally good condition. Sediment and debris buildup is present on the ledge at the bottom of the ladder.",

    hydraulic:
      "Continuous flow was visible within the main channel. Water level was relatively shallow at the time of inspection, but there appears to be a defined flow.",

    pipes:
      "A catch basin connection enters directly into the manhole from the side. No other significant cross-connecting pipes were visible from the surface.",

    depth:
      "Approximately 3 m from the manhole opening to the lower portion of the structure. A small intermediate ledge is present near the bottom of the ladder.",

    notes:
      "The main waterway appears generally clear, although sediment conditions within the storm pipe could not be confirmed from the surface."

  },



  "Melita Pl": {

    traffic:
      "Dead-end location with no traffic.",

    condition:
      "Significant sediment was observed. Ladder/base appeared to be in good condition.",

    hydraulic:
      "Fast flow with a low water level.",

    pipes:
      "No cross-connecting pipes or nearby catch basins were observed discharging directly into this section.",

    depth:
      "Approximately 2 m from the manhole opening to the water surface.",

    notes:
      ""

  },



  "Archdekin Dr": {

    traffic:
      "Low traffic.",

    condition:
      "Little sediment was observed above the water. Conditions within the flowing water could not be clearly assessed. Ladder appeared to be in good condition.",

    hydraulic:
      "Fast flow with a good water level.",

    pipes:
      "No cross-connecting pipes were visible.",

    depth:
      "Approximately 8 m deep. The manhole is generally cylindrical or silo-shaped with a small channel at the bottom.",

    notes:
      ""

  },



  "Dartford Rd": {

    traffic:
      "Low traffic. The manhole is located within the roadway; temporary traffic control may be required during installation or servicing.",

    condition:
      "Ladder is rusted, with the second step appearing significantly deteriorated and considered unsafe.",

    hydraulic:
      "Fast, well-defined flow was observed, although the water level was relatively low at the time of inspection.",

    pipes:
      "No cross-connecting pipes were visible.",

    depth:
      "Approximately 10 m from the manhole opening to the water surface.",

    notes:
      "Some deposited material and/or surface deterioration is present along the sides of the flow channel. The channel bottom is uneven. Further investigation is recommended because the low water level, uneven channel condition, significant depth, and unsafe ladder may complicate monitoring activities."

  },



  "Bramwin Crt": {

    traffic:
      "General traffic is relatively low; however, the manhole is directly adjacent to an active truck entrance/exit.",

    condition:
      "Ladder appears to be in generally good condition. No significant debris or sediment accumulation was visible.",

    hydraulic:
      "Fast flow was observed, although the water level was relatively low at the time of inspection.",

    pipes:
      "No visible cross-connecting pipes were observed at the manhole opening.",

    depth:
      "Approximately 6 m from the manhole opening to the lower portion of the structure.",

    notes:
      "A winch and work zone set up over the manhole would likely restrict or potentially block truck access. Installation or servicing could significantly interfere with truck movements and would likely require additional traffic/access control."

  },



  "Wilkinson Rd": {

    traffic:
      "The inspected manhole is located within a grassed area and is easily accessible without requiring work directly within the roadway. Other nearby manholes along Wilkinson Road are located within or immediately adjacent to a busy multi-lane roadway.",

    condition:
      "Ladder appears to be in generally acceptable condition. Some sediment/debris is present around the bottom of the structure and adjacent to the channel.",

    hydraulic:
      "No noticeable flow was observed at the time of inspection, and the water level within the channel was very low.",

    pipes:
      "A very narrow channel passes through the bottom of the manhole. No significant cross-connections were apparent.",

    depth:
      "The inspected manhole is relatively shallow. The flow channel is narrow and provides limited space for equipment placement.",

    notes:
      "Although the grassed location provides relatively easy surface access, the very low water level and small channel may make equipment placement difficult. Nearby alternatives would also require substantially more traffic control."

  },



  "Sparrow Crt": {

    traffic:
      "Low traffic because the manhole is located within a residential court. The location provides relatively good access for field crews and equipment.",

    condition:
      "Ladder appeared to be in good condition. No major obstructions or significant sediment/debris were apparent from the surface.",

    hydraulic:
      "Solid flow was observed with a decent water level at the time of inspection.",

    pipes:
      "No cross-connecting pipes were visible.",

    depth:
      "Approximately 6 m from the manhole opening to the water surface. The storm sewer changes direction through the manhole.",

    notes:
      "The bend in the storm sewer should be considered when determining equipment placement. The interior of the pipe should be reviewed to determine whether an appropriate straight section is available."

  },



  "Ironbridge Rd": {

    traffic:
      "Low to moderate traffic. The manhole is located within the roadway near a slight bend and a nearby parking-lot entrance. Appropriate temporary traffic control and advance signage would be required during installation or servicing.",

    condition:
      "Ladder appeared to be in good condition. Some sediment was observed, although it did not appear to significantly obstruct the flow path.",

    hydraulic:
      "Good flow was observed with a relatively high water level in the storm sewer.",

    pipes:
      "No cross-connecting pipes were visible.",

    depth:
      "Approximately 8 m from the manhole opening to the water surface.",

    notes:
      "The roadway location would require traffic-control considerations because of the slight bend and nearby parking-lot entrance."

  },



  "Royal West Dr": {

    traffic:
      "Moderate traffic. The manhole is located within the roadway on a relatively wide residential street. Temporary traffic control and signage would be required during installation or servicing.",

    condition:
      "Ladder appeared to be in good condition. No significant sediment or debris accumulation was observed.",

    hydraulic:
      "Dry at the time of inspection. No standing water or active flow was observed.",

    pipes:
      "PVC storm sewer pipe is present on both sides of the manhole, forming the inlet and outlet. No cross-connecting pipes were visible.",

    depth:
      "Approximately 4 m from the manhole opening to the bottom/invert.",

    notes:
      "Flow conditions during wet weather may need to be considered because no water or observable flow was present during the inspection."

  },



  "Lloyd Sanderson Dr": {

    traffic:
      "Low traffic. The manhole is located within the roadway with good visibility and sufficient space for temporary traffic control.",

    condition:
      "Ladder appeared to be in good condition. Sediment and debris conditions within the sewer could not be adequately assessed because of the high water level.",

    hydraulic:
      "Significantly flooded at the time of inspection. Water level was approximately 2.5 m below the manhole opening and had risen to the first internal ledge. No observable flow was present.",

    pipes:
      "Pipe configuration and potential cross-connections could not be confirmed because the pipes were submerged.",

    depth:
      "Approximately 2.5 m from the manhole opening to the first ledge/water level. Total depth could not be determined due to flooding.",

    notes:
      "A nearby catch basin was also flooded, suggesting the high water level was not isolated to the manhole. The site should be reassessed under more typical water-level conditions."

  },



  "Torrance Woods": {

    traffic:
      "The originally preferred manhole could not be inspected because the cover was bolted shut. An accessible alternative manhole approximately 50 m away near the trailhead was inspected. Traffic at the alternative location was low.",

    condition:
      "Ladder components appeared to be in good condition. The manhole contains multiple ladder sections with intermediate platforms/landings. Minor sediment was observed.",

    hydraulic:
      "Low water level with visible flow at the time of inspection.",

    pipes:
      "Multiple pipes enter the manhole in a Y-shaped configuration, with the flows combining through the manhole.",

    depth:
      "Approximately 8 m to the manhole bottom/invert.",

    notes:
      "Mapping indicates that the alternative manhole is connected toward the preferred off-road location approximately 50 m away. The multiple inflows and ladder/platform configuration should be considered during future monitoring or access."

  },



  "Elizabeth St S": {

    traffic:
      "Low traffic. The manhole is located within the roadway with good visibility along the residential street.",

    condition:
      "Ladder appeared to be in good condition. A moderate amount of sediment was observed along the channel and manhole bottom.",

    hydraulic:
      "Low/slow flow was observed, with a relatively high water level compared with many of the other inspected sites.",

    pipes:
      "No cross-connecting pipes were visible.",

    depth:
      "Approximately 6 m to the manhole bottom/invert.",

    notes:
      "The relatively high water level and sediment accumulation should be considered when determining potential monitoring equipment placement."

  },



  "Regan Rd": {

    traffic:
      "High traffic conditions, with the manhole located within the roadway near a turn/intersection. Temporary traffic control measures would be required for access.",

    condition:
      "Ladder was visibly rusted. A moderate amount of sediment was observed within the manhole and along portions of the ladder.",

    hydraulic:
      "Very high flow was observed at the time of inspection.",

    pipes:
      "No cross-connecting pipes were observed.",

    depth:
      "Approximately 6 m from the manhole opening to the water surface.",

    notes:
      "The combination of very high flow, approximately 6 m depth to the water surface, moderate sediment accumulation, and the rusted ladder should be considered when planning future access or monitoring activities. The roadway location would also require appropriate temporary traffic control measures."

  },



  "Beavervalley Dr": {

    traffic:
      "Moderate residential traffic. The manhole is located within the roadway near an intersection. Temporary traffic control measures would be required for access.",

    condition:
      "Ladder appeared to be in good condition. No significant sediment accumulation was visible from the surface.",

    hydraulic:
      "The manhole was heavily flooded, with a very high water level and little to no visible flow. Water could be heard entering the manhole, although the source was not visible from the surface.",

    pipes:
      "No cross-connecting pipes were visible. The high water level significantly limited visibility within the manhole.",

    depth:
      "Approximately 4–5 m from the manhole opening to the water surface. The depth below the water surface could not be determined due to the high water level.",

    notes:
      "The manhole was substantially flooded at the time of inspection, preventing a clear assessment of the lower manhole, pipe configuration, and invert. The high water level and limited visible flow should be considered when planning future monitoring or access."

  },



  "Worthington Ave": {

    traffic:
      "Very high traffic. The manhole is located within the roadway near multiple mall/parking-lot entrances, creating frequent vehicle movements and limited safe working space. The surrounding road configuration further complicates access.",

    condition:
      "Internal conditions were not assessed because the manhole was not opened.",

    hydraulic:
      "Not assessed.",

    pipes:
      "Not assessed.",

    depth:
      "Not assessed.",

    notes:
      "The manhole was not opened because it could not be safely accessed under the observed traffic conditions. A follow-up inspection would require appropriate temporary traffic control and may require lane restrictions or closure. Internal depth, ladder condition, flow, water level, sediment, and pipe configuration remain to be confirmed."

  }

};



// ============================================================
// 7. PHOTO FOLDER MAPPING
// ============================================================
//
// This connects the Address field in your GeoJSON to the
// existing keys in sitephotos.js.
//
// Do NOT rename your existing folders.
// ============================================================

const photoKeyMap = {

  "Saint Hubert Dr":
    "Saint Huber",

  "Sun Pac Blvd":
    "Sun Pac",

  "PEB - Calderstone":
    "PrinceCalderstone",

  "PEB - Dovehaven East":
    "Dovehaven East",

  "PEB - Dovehaven W":
    "Dovehaven West",

  "Westbrook Ave":
    "Westbrook",

  "Templehill Rd":
    "Temple Hill Rd",

  "Temple Hill rd West":
    "Temple Hill West",

  "Rattlesnake Rd":
    "Rattlesnake Rd",

  "Jayfield Rd":
    "Jayfield",

  "Melita Pl":
    "Melita Pl",

  "Archdekin Dr":
    "Archdekin Dr",

  "Dartford Rd":
    "Dartford Rd",

  "Bramwin Crt":
    "Bramwin Ct",

  "Wilkinson Rd":
    "Wilkinson Rd",

  "Sparrow Crt":
    "Sparrow Ct",

  "Ironbridge Rd":
    "Ironbridge",

  "Royal West Dr":
    "Royal West",

  "Lloyd Sanderson Dr":
    "Lloyd Sanderson",

  "Torrance Woods":
    "Torrence Woods",

  "Elizabeth St S":
    "Elizabeth St",

  "Regan Rd":
    "Regan Rd",

  "Beavervalley Dr":
    "Beavervalley dr",

  "Worthington Ave":
    "Worthington"

};



// ============================================================
// 8. GET PHOTOS FOR SITE
// ============================================================

function getPhotosForSite(siteName) {

  const photoKey =
    photoKeyMap[siteName];


  if (!photoKey) {

    console.warn(
      "No photo mapping for:",
      siteName
    );

    return [];

  }


  if (
    typeof sitePhotos === "undefined"
  ) {

    console.error(
      "sitephotos.js did not load."
    );

    return [];

  }


  return sitePhotos[photoKey] || [];

}



// ============================================================
// 9. SITE TYPE HELPERS
// ============================================================

function normalizeType(type) {

  if (!type) {
    return "Unknown";
  }


  const value =
    String(type)
      .trim()
      .toLowerCase();


  if (value === "ici") {
    return "ICI";
  }


  if (
    value === "res" ||
    value === "residential"
  ) {
    return "Res";
  }


  if (
    value === "flooding" ||
    value === "flood"
  ) {
    return "Flooding";
  }


  return type;

}



function getTypeName(type) {

  const normalized =
    normalizeType(type);


  if (normalized === "ICI") {
    return "ICI";
  }


  if (normalized === "Res") {
    return "Residential";
  }


  if (normalized === "Flooding") {
    return "Flooding";
  }


  return normalized;

}



function getMarkerClass(type) {

  const normalized =
    normalizeType(type);


  if (normalized === "ICI") {
    return "marker-ici";
  }


  if (normalized === "Flooding") {
    return "marker-flooding";
  }


  return "marker-res";

}



function getBadgeClass(type) {

  const normalized =
    normalizeType(type);


  if (normalized === "ICI") {
    return "badge-ici";
  }


  if (normalized === "Flooding") {
    return "badge-flooding";
  }


  return "badge-res";

}



function getListSymbolClass(type) {

  const normalized =
    normalizeType(type);


  if (normalized === "ICI") {
    return "ici";
  }


  if (normalized === "Flooding") {
    return "flooding";
  }


  return "res";

}



// ============================================================
// 10. CREATE SITE MARKER
// ============================================================

function createSiteIcon(type) {

  const markerClass =
    getMarkerClass(type);


  return L.divIcon({

    className:
      "site-marker",

    html:
      `<div class="marker-symbol ${markerClass}"></div>`,

    iconSize:
      [22, 22],

    iconAnchor:
      [11, 11]

  });

}



// ============================================================
// 11. VARIABLES
// ============================================================

let siteLayer = null;

let allFeatures = [];



// ============================================================
// 12. LOAD ASSESSMENT GEOJSON
// ============================================================

fetch(
  "data/triton_sites.geojson"
)

.then(response => {

  if (!response.ok) {

    throw new Error(
      `Could not load GeoJSON: ${response.status}`
    );

  }

  return response.json();

})

.then(data => {

  allFeatures =
    data.features;


  drawSites(
    allFeatures
  );


  buildSiteList(
    allFeatures
  );


  if (
    siteLayer &&
    siteLayer.getBounds().isValid()
  ) {

    map.fitBounds(

      siteLayer.getBounds(),

      {
        padding:
          [30, 30]
      }

    );

  }

})

.catch(error => {

  console.error(error);


  document.getElementById(
    "site-list"
  ).innerHTML = `

    <div style="
      padding:20px;
      color:#a33;
    ">

      <strong>
        Could not load site data.
      </strong>

      <br><br>

      Make sure
      <strong>
        data/triton_sites.geojson
      </strong>
      exists and open the project
      using Live Server.

    </div>

  `;

});



// ============================================================
// 13. DRAW ASSESSMENT SITES
// ============================================================

function drawSites(features) {

  if (siteLayer) {

    map.removeLayer(
      siteLayer
    );

  }


  const collection = {

    type:
      "FeatureCollection",

    features:
      features

  };


  siteLayer =
    L.geoJSON(

      collection,

      {

        pointToLayer:
          function(
            feature,
            latlng
          ) {

            const type =
              normalizeType(
                feature.properties.type
              );


            return L.marker(

              latlng,

              {
                icon:
                  createSiteIcon(type)
              }

            );

          },


        onEachFeature:
          function(
            feature,
            layer
          ) {

            const name =
              feature.properties.Address ||
              "Unnamed Site";


            const type =
              normalizeType(
                feature.properties.type
              );


            layer.bindTooltip(

              `
                <strong>${name}</strong>
                <br>
                ${getTypeName(type)}
              `,

              {
                direction:
                  "top",

                offset:
                  [0, -8]
              }

            );


            layer.on(
              "click",

              function() {

                showSiteDetails(
                  feature
                );

                highlightSiteInList(
                  name
                );

              }
            );

          }

      }

    )
    .addTo(map);

}



// ============================================================
// 14. BUILD SITE LIST
// ============================================================

function buildSiteList(features) {

  const siteList =
    document.getElementById(
      "site-list"
    );


  siteList.innerHTML =
    "";


  const sortedFeatures =
    [...features].sort(

      (a, b) => {

        const nameA =
          a.properties.Address || "";

        const nameB =
          b.properties.Address || "";

        return nameA.localeCompare(
          nameB
        );

      }

    );


  sortedFeatures.forEach(
    feature => {

      const properties =
        feature.properties;


      const name =
        properties.Address ||
        "Unnamed Site";


      const type =
        normalizeType(
          properties.type
        );


      const item =
        document.createElement(
          "div"
        );


      item.className =
        "site-item";


      item.dataset.site =
        name;


      item.innerHTML = `

        <div class="site-name">
          ${name}
        </div>

        <div class="site-type">

          <span
            class="
              type-symbol
              ${getListSymbolClass(type)}
            "
          ></span>

          ${getTypeName(type)}

        </div>

      `;


      item.addEventListener(
        "click",

        function() {

          zoomToFeature(
            feature
          );

          showSiteDetails(
            feature
          );

          highlightSiteInList(
            name
          );

        }
      );


      siteList.appendChild(
        item
      );

    }

  );

}



// ============================================================
// 15. SHOW SITE DETAILS
// ============================================================

function showSiteDetails(feature) {

  const properties =
    feature.properties;


  const name =
    properties.Address ||
    "Unnamed Site";


  const type =
    normalizeType(
      properties.type
    );


  const details =
    siteDetails[name] || {

      traffic:
        "Assessment information not yet entered.",

      condition:
        "Assessment information not yet entered.",

      hydraulic:
        "Assessment information not yet entered.",

      pipes:
        "Assessment information not yet entered.",

      depth:
        "Assessment information not yet entered.",

      notes:
        ""

    };


  const coordinateText =
    properties.COORDINATE ||
    "";


  const panel =
    document.getElementById(
      "site-content"
    );


  panel.innerHTML = `

    <div class="site-heading">

      <h2>
        ${name}
      </h2>

      <span
        class="
          site-badge
          ${getBadgeClass(type)}
        "
      >

        ${getTypeName(type)}

      </span>

    </div>


    ${
      coordinateText
      ?
      `

      <div class="assessment-section">

        <h3>
          Coordinates
        </h3>

        <p>
          ${coordinateText}
        </p>

      </div>

      `
      :
      ""
    }


    <div class="assessment-section">

      <h3>
        Traffic / Access
      </h3>

      <p>
        ${details.traffic}
      </p>

    </div>


    <div class="assessment-section">

      <h3>
        Manhole Condition
      </h3>

      <p>
        ${details.condition}
      </p>

    </div>


    <div class="assessment-section">

      <h3>
        Hydraulic Conditions
      </h3>

      <p>
        ${details.hydraulic}
      </p>

    </div>


    <div class="assessment-section">

      <h3>
        Pipe Configuration
      </h3>

      <p>
        ${details.pipes}
      </p>

    </div>


    <div class="assessment-section">

      <h3>
        Depth / Geometry
      </h3>

      <p>
        ${details.depth}
      </p>

    </div>


    ${
      details.notes
      ?
      `

      <div
        class="
          assessment-section
          extra-notes
        "
      >

        <h3>
          Extra Notes
        </h3>

        <p>
          ${details.notes}
        </p>

      </div>

      `
      :
      ""
    }


    <div class="photo-section">

      <h3>
        Site Photographs
      </h3>

      <div
        id="photo-gallery"
      ></div>

    </div>

  `;


  loadPhotos(
    getPhotosForSite(name)
  );

}



// ============================================================
// 16. LOAD SITE PHOTOS
// ============================================================

function loadPhotos(photos) {

  const gallery =
    document.getElementById(
      "photo-gallery"
    );


  if (!gallery) {
    return;
  }


  gallery.innerHTML =
    "";


  if (
    !photos ||
    photos.length === 0
  ) {

    gallery.innerHTML = `

      <p class="no-photos">
        No photographs linked to this site.
      </p>

    `;

    return;

  }


  photos.forEach(
    photo => {

      const img =
        document.createElement(
          "img"
        );


      if (
        typeof photo === "string"
      ) {

        img.src =
          photo;

        img.alt =
          "Site photograph";

      }

      else {

        img.src =
          photo.src;

        img.alt =
          photo.caption ||
          "Site photograph";

        if (
          photo.caption
        ) {

          img.title =
            photo.caption;

        }

      }


      img.loading =
        "lazy";


      img.addEventListener(
        "click",

        function() {

          window.open(
            img.src,
            "_blank"
          );

        }
      );


      img.addEventListener(
        "error",

        function() {

          console.error(
            "Could not load photo:",
            img.src
          );

          img.style.display =
            "none";

        }
      );


      gallery.appendChild(
        img
      );

    }

  );

}



// ============================================================
// 17. ZOOM TO SITE
// ============================================================

function zoomToFeature(feature) {

  const geometry =
    feature.geometry;


  if (
    !geometry ||
    geometry.type !== "Point"
  ) {

    return;

  }


  const lng =
    geometry.coordinates[0];


  const lat =
    geometry.coordinates[1];


  map.flyTo(

    [lat, lng],

    18,

    {
      duration:
        0.7
    }

  );

}



// ============================================================
// 18. HIGHLIGHT SITE LIST ITEM
// ============================================================

function highlightSiteInList(name) {

  document
    .querySelectorAll(
      ".site-item"
    )
    .forEach(
      item => {

        item.classList.remove(
          "active"
        );


        if (
          item.dataset.site ===
          name
        ) {

          item.classList.add(
            "active"
          );


          item.scrollIntoView(

            {
              behavior:
                "smooth",

              block:
                "nearest"
            }

          );

        }

      }
    );

}



// ============================================================
// 19. FILTER SITES
// ============================================================

function applyFilters() {

  const searchValue =
    document
      .getElementById(
        "search"
      )
      .value
      .trim()
      .toLowerCase();


  const selectedType =
    document
      .getElementById(
        "type-filter"
      )
      .value;


  const filtered =
    allFeatures.filter(
      feature => {

        const properties =
          feature.properties;


        const name =
          String(
            properties.Address || ""
          )
          .toLowerCase();


        const type =
          normalizeType(
            properties.type
          );


        const matchesSearch =
          name.includes(
            searchValue
          );


        const matchesType =
          selectedType === "All" ||
          type === selectedType;


        return (
          matchesSearch &&
          matchesType
        );

      }
    );


  drawSites(
    filtered
  );


  buildSiteList(
    filtered
  );

}



// ============================================================
// 20. SEARCH + FILTER EVENTS
// ============================================================

document
  .getElementById(
    "search"
  )
  .addEventListener(
    "input",
    applyFilters
  );


document
  .getElementById(
    "type-filter"
  )
  .addEventListener(
    "change",
    applyFilters
  );



// ============================================================
// 21. SHOW ALL
// ============================================================

document
  .getElementById(
    "show-all"
  )
  .addEventListener(
    "click",

    function() {

      document
        .getElementById(
          "search"
        )
        .value =
        "";


      document
        .getElementById(
          "type-filter"
        )
        .value =
        "All";


      drawSites(
        allFeatures
      );


      buildSiteList(
        allFeatures
      );


      if (
        siteLayer &&
        siteLayer
          .getBounds()
          .isValid()
      ) {

        map.fitBounds(

          siteLayer.getBounds(),

          {
            padding:
              [30, 30]
          }

        );

      }

    }
  );



// ============================================================
// 22. CLOSE SITE PANEL
// ============================================================

document
  .getElementById(
    "close-panel"
  )
  .addEventListener(
    "click",

    function() {

      document
        .getElementById(
          "site-content"
        )
        .innerHTML = `

        <div class="empty-state">

          <h2>
            Select a Site
          </h2>

          <p>
            Click a site on the map or choose a
            location from the site list to view
            the field assessment.
          </p>

        </div>

      `;


      document
        .querySelectorAll(
          ".site-item"
        )
        .forEach(
          item =>
            item.classList.remove(
              "active"
            )
        );

    }
  );



// ============================================================
// 23. SITE TYPE LEGEND
// ============================================================

const legend =
  L.control({

    position:
      "bottomright"

  });



legend.onAdd =
  function() {

    const div =
      L.DomUtil.create(
        "div",
        "map-legend"
      );


    div.innerHTML = `

      <div class="map-legend-title">
        Site Type
      </div>


      <div class="legend-row">

        <span
          class="
            legend-marker
            legend-ici
          "
        ></span>

        <span>
          ICI
        </span>

      </div>


      <div class="legend-row">

        <span
          class="
            legend-marker
            legend-res
          "
        ></span>

        <span>
          Residential
        </span>

      </div>


      <div class="legend-row">

        <span
          class="
            legend-marker
            legend-flooding
          "
        ></span>

        <span>
          Flooding
        </span>

      </div>

    `;


    return div;

  };


legend.addTo(
  map
);