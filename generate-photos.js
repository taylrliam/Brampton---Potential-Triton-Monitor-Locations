const fs = require("fs");
const path = require("path");

const assetsFolder = path.join(__dirname, "assets");

const imageExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp"
];

const sitePhotos = {};


// Get every site folder
const folders = fs.readdirSync(
    assetsFolder,
    { withFileTypes: true }
);


// Go through each folder
folders.forEach(folder => {

    if (!folder.isDirectory()) {
        return;
    }

    const folderName = folder.name;

    const folderPath = path.join(
        assetsFolder,
        folderName
    );


    // Get every image inside the folder
    const photos = fs.readdirSync(folderPath)
        .filter(file => {

            const extension =
                path.extname(file).toLowerCase();

            return imageExtensions.includes(
                extension
            );

        })
        .sort();


    // Create web-friendly paths
    sitePhotos[folderName] = photos.map(
        file =>
            `assets/${folderName}/${file}`
    );

});


// Create the JavaScript file
const output = `const sitePhotos = ${JSON.stringify(
    sitePhotos,
    null,
    4
)};`;


// Save it
fs.writeFileSync(
    path.join(__dirname, "sitePhotos.js"),
    output
);


console.log(
    "Photo list generated successfully!"
);