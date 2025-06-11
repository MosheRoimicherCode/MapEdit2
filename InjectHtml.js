function injectTerrainModificationUI_IE() {
    var body = document.getElementById("Body");

    if (!body) {
        alert("Element with ID 'Body' not found.");
        return;
    }

    // Create and append <script> tags
    var scriptSources = [
        "https://cdn.jsdelivr.net/gh/MosheRoimicherCode/MapEdit2/jquery/jquery-3.1.1.min.js",
        "https://cdn.jsdelivr.net/gh/MosheRoimicherCode/MapEdit2/getSGWorld.js",
        "https://cdn.jsdelivr.net/gh/MosheRoimicherCode/MapEdit2/snapIE.js",
        "https://cdn.jsdelivr.net/gh/MosheRoimicherCode/MapEdit2/splitTool.js",
        "https://cdn.jsdelivr.net/gh/MosheRoimicherCode/MapEdit2/ToolsCommon73.js"
    ];

    for (var i = 0; i < scriptSources.length; i++) {
        var script = document.createElement("script");
        script.setAttribute("language", "javascript");
        script.setAttribute("src", scriptSources[i]);
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    // Clear existing content
    body.innerHTML = "";

    // Construct and inject HTML manually using IE-compatible DOM methods
    var h3 = document.createElement("h3");
    h3.innerText = "Terrain Modification with File Upload";
    body.appendChild(h3);

    var p = document.createElement("p");
    p.innerText = "Effortlessly create terrain modifications by uploading a KML file.";
    body.appendChild(p);

    var table = document.createElement("table");
    var td = document.createElement("td");

    var hiddenDiv = document.createElement("div");
    hiddenDiv.style.display = "none";
    var fileInput = document.createElement("input");
    fileInput.setAttribute("id", "file");
    fileInput.setAttribute("class", "file");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("value", "3");
    fileInput.setAttribute("size", "5");
    fileInput.setAttribute("accept", ".kml, .kmz");
    fileInput.setAttribute("onchange", "document.all['fileText'].value=this.value;");
    hiddenDiv.appendChild(document.createTextNode("\u00A0")); // &nbsp;
    hiddenDiv.appendChild(fileInput);
    td.appendChild(hiddenDiv);

    var fileDiv = document.createElement("div");
    fileDiv.setAttribute("id", "filediv");
    fileDiv.appendChild(document.createTextNode("\u00A0")); // &nbsp;
    var fileText = document.createElement("input");
    fileText.setAttribute("id", "fileText");
    fileText.setAttribute("type", "text");
    fileText.setAttribute("value", "");
    fileText.setAttribute("size", "2");
    fileDiv.appendChild(fileText);

    var img = document.createElement("img");
    img.setAttribute("style", "cursor:pointer");
    img.setAttribute("src", "img/Browse.png");
    img.setAttribute("onclick", "document.all['file'].click();");
    img.setAttribute("alt", "File");
    fileDiv.appendChild(img);

    td.appendChild(fileDiv);
    table.appendChild(td);
    body.appendChild(table);

    var addButton = document.createElement("button");
    addButton.setAttribute("id", "add");
    addButton.setAttribute("onclick", "AddEvent()");
    addButton.innerText = "Add Event";
    body.appendChild(addButton);



    var note = document.createElement("p");
    note.innerText = "Note: Your KML file should contain a single polygon geometry.";
    body.appendChild(note);

    var logo = document.createElement("img");
    logo.setAttribute("class", "logo");
    logo.setAttribute("src", "./KavLogo.png");
    logo.setAttribute("alt", "Logo");
    logo.setAttribute("height", "65px");
    logo.setAttribute("width", "auto");
    body.appendChild(logo);
}


injectTerrainModificationUI_IE();

