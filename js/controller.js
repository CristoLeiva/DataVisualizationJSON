
document.getElementById("load-bardata").onclick = function(e) {
    processBarURL(document.getElementById("barJSON").value);
    e.preventDefault();  
};

function processBarURL(url){
    loadJSON(url,
    function(data) { 
        bardataobj.data = data.data;
        bardataobj.title = data.title;
        bardataobj.hTitle = data.hTitle;
        bardataobj.vTitle = data.vTitle;
        drawBarChart(); 
    },
    function(xhr) { console.error(xhr); } );
}

document.getElementById("load-columndata").onclick = function(e) {
    processColumnURL(document.getElementById("columnJSON").value);
    e.preventDefault();  
};

function processColumnURL(url){
    loadJSON(url,
    function(data) { 
        columndataobj.data = data.data;
        columndataobj.title = data.title;
        columndataobj.hTitle = data.hTitle;
        columndataobj.vTitle = data.vTitle;
        drawColumnChart();
    },
    function(xhr) { console.error(xhr); } );
}

document.getElementById("load-linedata").onclick = function(e) {
    processLineURL(document.getElementById("lineJSON").value);
    e.preventDefault();  
};

function processLineURL(url){
    loadJSON(url,
    function(data) { 
        linedataobj.data = data.data;
        linedataobj.title = data.title;
        linedataobj.hTitle = data.hTitle;
        linedataobj.vTitle = data.vTitle;
        linedataobj.columndata = data.columndata;
        drawLineChart();
    },
    function(xhr) { console.error(xhr); } );
}

document.getElementById("load-areadata").onclick = function(e) {
    processAreaURL(document.getElementById("areaJSON").value);
    e.preventDefault();  
};

function processAreaURL(url){
    loadJSON(url,
    function(data) { 
        areadataobj.data = data.data;
        areadataobj.title = data.title;
        areadataobj.hTitle = data.hTitle;
        areadataobj.vTitle = data.vTitle;
        drawAreaChart();
    },
    function(xhr) { console.error(xhr); } );
}

function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}


