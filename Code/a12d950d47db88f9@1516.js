import define1 from "./fee7fe5d78621cf6@224.js";

function _1(md){return(
md`# www.`
)}

function _2(md){return(
md`## Load data`
)}

function _data(FileAttachment){return(
FileAttachment("data.csv").csv()
)}

function _trade_data(FileAttachment){return(
FileAttachment("trade_matrix.csv").csv()
)}

function _6(md){return(
md`## Generate SVG Object`
)}

function _svg(flags,htl){return(
htl.html`<div id="world">
  <svg width="1550" height="930" id="canvas">

    <style>
      circle {fill: none; stroke-width: 1px; opacity: 100%;}
      text {font-family: "Avenir Next"; fill: black;}
      .old {stroke-linecap: round;}
      .bar {transform-box: fill-box; transform-origin: center;}
      .full {transform-box: fill-box; transform-origin: center;}
      .flag {transform-box: fill-box; transform-origin: center;}
      .innerP {transform-box: fill-box; transform-origin: center;}
      .web {fill: steelblue;}
      #tooltip {position: absolute; z-index: 100; padding: 2px 8px; background-color: rgba(220,220,220,0.7); border: 1px solid #aaa; border-radius: 5px; font-family: Arial, sans-serif; font-size: 12px;}
      #tooltip .TTtitle {font-size: 15px; font-weight: bold;}
      #tooltip .TTsubtitle {font-weight: bold;}
      #controls {
        position: absolute;
        top: 50px;
        left: 50px;
        height: 100%;
        width: 300px;
        font-size: 12px;
        text-align: center;
      }
      #controls button {
        border-radius: 10px;
        border: 1px solid gray;
        margin: 2px;
      }
      #controls button:hover {
        cursor: pointer;
      }
      #dynamics {
        position: absolute;
        top: 50px;
        left: 1250px;
        height: 100%;
        width: 300px;
        font-size: 12px;
        text-align: center;
      }
      #dynamics button {
        border-radius: 10px;
        border: 1px solid gray;
        margin: 2px;
      }
      #dynamics button:hover {
        cursor: pointer;
      }
      #mask {
        position: absolute;
        top: 930px;
        left: 0px;
        height: 100%;
        width: 1550px;
      }
    </style>

<!--     <rect x="0" y="0" width="100%" height="100%" fill="white"></rect> -->
  
    <g id='layer'>
<!--       <circle r="50" cx="1050" cy="100" style="stroke: steelblue;" />
      <circle r="60" cx="1050" cy="100" style="stroke: steelblue; stroke-dasharray: 0.25, 4; stroke-linecap: round;" />
      <circle r="40" cx="1050" cy="100" style="stroke: steelblue; stroke-dasharray: 5, 3;" />
      <circle r="30" cx="1050" cy="100" style="fill: steelblue;" />

      <circle r="25" cx="1050" cy="200" style="fill: steelblue;" />
      <circle r="10" cx="1015" cy="200" style="stroke: steelblue;" />
      <circle r="10" cx="1085" cy="200" style="stroke: steelblue;" />

      <path d="M 0,-15 C 20,-1 80,-1 100,-15 L 100,15 C 80,1 20,1 0,15 Z" style="fill: steelblue; opacity: 0.5;" transform="translate(1050,220) rotate(90)"/> -->
    </g>
    
  </svg>

  <div id="mask">
  </div>

  <div id="controls">
    <h1>Welcome to the World Wide Web!</h1>
    <p>This visualization is designed to facilitate an exploration into how country-level CO2 emissions accountability can be contextualized and understood within the greater landscape of international trade relationships for the 10 largest economies in the world.</p>
    <h2>CO2 Emissions Elements</h2>
    <div>
      &middot; Area and linewidth of rings represent magnitude of CO2 emissions<br />
			&middot; Dotted ring represents 2005 CO2 emissions<br />
      &middot; Solid ring represents current CO2 emissions<br />
      &middot; Dashed ring represents 2030 target CO2 emissions<br />
      &middot; Color of rings and angle of trend bar represent the % change in CO2 emissions since 2005: blue (reduced) to red (increased)<br />
      &middot; Color of inner polygon represents Environmental Performance Index score: red (bad) to green (good)<br />
      &middot; Shape of inner polygon represents continent: circle (Asia), triangle (Europe), & square (North America)<br />
		</div>
    <br/>
    <h2>Economic Indicator Elements</h2>
    <div>
      &middot; Area of circles represents magnitude in US$<br />
			&middot; Red circle on the left represents imports<br />
      &middot; Green circle on the right represents exports<br />
      &middot; Circle in the center represents GDP<br />
      &middot; Color of GDP circle represents net exports: red (net importer) to green (net exporter)<br />
		</div>
    <br/>
    <h2>International Trade Elements</h2>
    <div>
      &middot; Linewidth represents magnitude in US$<br />
			&middot; Starting width represents exports from i to j<br />
      &middot; Ending width represents exports from j to i<br />
      &middot; Opacity represents the overall trade imbalance: clear (perfectly balanced) to opaque (completely imbalanced)<br />
      &middot; Color represents the directional trade imbalance (with respect to the selected country): red (net importer) to green (net exporter)<br />
		</div>
	</div>

  <div id="dynamics">
    <h2>Dynamics</h2>
    <div>
			&middot; Scroll to zoom<br />
      &middot; Drag to pan<br />
      &middot; Hover for tooltips<br />
      &middot; Explore countries via selection panel below<br />
		</div>
<!--     <button id="btn-zoomOut">Reset View</button> -->
    <br/>
    <h2>Select a Country</h2>
		<div>
      <button id="btn-usa">USA ${flags[0]}</button>
      <button id="btn-chn">CHN ${flags[1]}</button>
      <button id="btn-jpn">JPN ${flags[2]}</button>
      <button id="btn-deu">DEU ${flags[3]}</button>
      <button id="btn-ind">IND ${flags[4]}</button>
      <button id="btn-gbr">GBR ${flags[5]}</button>
      <button id="btn-fra">FRA ${flags[6]}</button>
      <button id="btn-ita">ITA ${flags[7]}</button>
      <button id="btn-can">CAN ${flags[8]}</button>
      <button id="btn-kor">KOR ${flags[9]}</button>
      <p>See the impact of a 1% change in the selected country's current CO2 emissions below.</p>
      <button id="btn-showAll">Show All</button>
		</div>
  </div>
    
  <div id="tooltip"></div>
  
</div>`
)}

function _8(md){return(
md`## Country Selection Dynamics`
)}

function _9(d3,svg,weaveFull,selectCountry)
{
  // set the buttons to call the filter function when clicked.
  const btns = d3.select(svg).select("#dynamics");

  // register event listeners
  // btns.select("#btn-zoomOut").on("click", () => zoomOut());
  // btns.select("#btn-clear").on("click", () => clearAll());
  btns.select("#btn-showAll").on("click", () => weaveFull());
  btns.select("#btn-usa").on("click", () => selectCountry("USA"));
  btns.select("#btn-chn").on("click", () => selectCountry("CHN"));
  btns.select("#btn-jpn").on("click", () => selectCountry("JPN"));
  btns.select("#btn-deu").on("click", () => selectCountry("DEU"));
  btns.select("#btn-ind").on("click", () => selectCountry("IND"));
  btns.select("#btn-gbr").on("click", () => selectCountry("GBR"));
  btns.select("#btn-fra").on("click", () => selectCountry("FRA"));
  btns.select("#btn-ita").on("click", () => selectCountry("ITA"));
  btns.select("#btn-can").on("click", () => selectCountry("CAN"));
  btns.select("#btn-kor").on("click", () => selectCountry("KOR"));
}


function _selectCountry(zoomOut,weavePart,showImpact){return(
(country) => {
  zoomOut();
  weavePart(country);
  showImpact(country);
}
)}

function _showImpact(data,viz,wrap_text_nchar,d3){return(
(country) => {
  let dat = data.filter(d => d['Country Code'] == country);
  let vol = dat[0]['2019 [YR2019]'];
  let numpact = vol*1000/4.6;
  let bymillion = numpact/1000000;
  
  let mySVG = viz.select('#canvas');

  let exports = mySVG.selectAll(".impact")
      .data(dat)
      .join("text")
          .text(d => `If ${d["Country Name"]}'s trade partners were able to incentivize it to reduce its current annual CO2 emissions by just 1%, this would be environmentally equivalent to reducing the number of average US cars on the road by ${Math.round(bymillion)} million. While numbers can be compelling, seeing is believing, so the significance and magnitude of this number might be better understood through the following graphic below where each circle is equivalent to 10,000 average US cars.`)
          .attr("x", 800)
          .attr("y", 950)
          .attr("text-anchor", (d,i) => "middle")
          // .style("font-weight", 300)
          // .text('If ')
          // .append("tspan")
          // .style("font-weight", 700)
          // .text(function(d) {
          //     return d["Country Name"];
          // })
          // .append("tspan")
          // .style("font-weight", 300)
          // .text("'s trade partners were able to incentivize it to reduce its current annual emissions by just ")
          // .append("tspan")
          // .style("font-weight", 700)
          // .text("1%")
          // .append("tspan")
          // .style("font-weight", 300)
          // .text(", this would be equivalent to reducing the number of average US cars on the road by ")
          // .append("tspan")
          // .style("font-weight", 700)
          // .text(`${Math.round((bythousand + Number.EPSILON) * 100) / 100} thousand.`)
          .attr("class", "impact");

  mySVG.selectAll(".impact")
    .each(function(d, i) { wrap_text_nchar(d3.select(this), 120) });

  d3.selectAll(".dot").remove();

  let reps = 50;

  for (var j=0; j<(Math.round(bymillion)*100); j++) {
    mySVG.append("circle")
          .attr("cx", 310+20*j-20*reps*Math.floor(j/reps))
          .attr("cy", 1040+20*Math.floor(j/reps))
          .attr("r", 5)
          .attr("style", (d,i) => `fill: grey;`)
          .attr("class", "dot");
  }

  d3.select("#canvas").attr("height", 1100+20*Math.floor((Math.round(bymillion)*100)/reps))
  
}
)}

function _weavePart(viz,d3,data,makeWeb,rFromArea,tooltip,ttOptions2,myColor){return(
(country) => {
  let mySVG = viz.select('#layer');
  let rScale = 0.04;
  let gdpScale = 0.00001;
  let buffer = 40;

  d3.selectAll(".web").remove();
  d3.selectAll(".export").remove();
  d3.selectAll(".import").remove();
  d3.selectAll(".gdp").remove();
  
  let web = mySVG.selectAll(".web")
      .data(data.filter(d => d['Country Code'] == country))
      .join("g")
          .call(makeWeb)
          .attr("class", "web");

  let exports = mySVG.selectAll(".export")
      .data(data)
      .join("circle")
          .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)) + (rFromArea(d["Exports"]) * gdpScale || 1) + (rFromArea(d["GDP"]) * gdpScale || 1))
          // .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)) + (rFromArea(d["GDP"]) * gdpScale || 1))
          .attr("cy", (d,i) => 500+300*Math.sin((Math.PI/5)*i-(Math.PI/2)))
          .attr("r", d => rFromArea(d["Exports"]) * gdpScale || 1)
          .attr("style", (d,i) => `fill: green;`)
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions2))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "export");
  
  let imports = mySVG.selectAll(".import")
      .data(data)
      .join("circle")
          .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)) - (rFromArea(d["Imports"]) * gdpScale || 1) - (rFromArea(d["GDP"]) * gdpScale || 1))
          // .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)) - (rFromArea(d["GDP"]) * gdpScale || 1))
          .attr("cy", (d,i) => 500+300*Math.sin((Math.PI/5)*i-(Math.PI/2)))
          .attr("r", d => rFromArea(d["Imports"]) * gdpScale || 1)
          .attr("style", (d,i) => `fill: red;`)
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions2))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "import");

  let GDP2 = mySVG.selectAll(".gdp")
      .data(data)
      .join("circle")
          .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)))
          .attr("cy", (d,i) => 500+300*Math.sin((Math.PI/5)*i-(Math.PI/2)))
          .attr("r", d => rFromArea(d["GDP"]) * gdpScale || 1)
          .attr("style", (d,i) => `fill: ${myColor((d["Exports"]-d["Imports"])/Math.max(d["Exports"],d["Imports"]))};`)
          // .attr("fill", d => myColor((d["Exports"]-d["Imports"])/Math.max(d["Exports"],d["Imports"])))
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions2))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "gdp");

  // let web = mySVG.selectAll(".web")
  //     .data(data.filter(d => d['Country Code'] == country))
  //     .join("g")
  //         .call(makeWeb)
  //         .attr("class", "web");
}
)}

function _weaveFull(zoomOut,viz,d3,data,makeWeb,rFromArea,tooltip,ttOptions2,myColor){return(
() => {
  zoomOut();
  
  let mySVG = viz.select('#layer');
  let rScale = 0.04;
  let gdpScale = 0.00001;
  let buffer = 40;

  d3.selectAll(".web").remove();
  d3.selectAll(".export").remove();
  d3.selectAll(".import").remove();
  d3.selectAll(".gdp").remove();

  d3.selectAll(".dot").remove();
  d3.selectAll(".impact").remove();

  d3.select("#canvas").attr("height", "930");
  
  let web = mySVG.selectAll(".web")
      .data(data)
      .join("g")
          .call(makeWeb)
          .attr("class", "web");

  let exports = mySVG.selectAll(".export")
      .data(data)
      .join("circle")
          .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)) + (rFromArea(d["Exports"]) * gdpScale || 1) + (rFromArea(d["GDP"]) * gdpScale || 1))
          // .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)) + (rFromArea(d["GDP"]) * gdpScale || 1))
          .attr("cy", (d,i) => 500+300*Math.sin((Math.PI/5)*i-(Math.PI/2)))
          .attr("r", d => rFromArea(d["Exports"]) * gdpScale || 1)
          .attr("style", (d,i) => `fill: green;`)
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions2))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "export");
  
  let imports = mySVG.selectAll(".import")
      .data(data)
      .join("circle")
          .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)) - (rFromArea(d["Imports"]) * gdpScale || 1) - (rFromArea(d["GDP"]) * gdpScale || 1))
          // .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)) - (rFromArea(d["GDP"]) * gdpScale || 1))
          .attr("cy", (d,i) => 500+300*Math.sin((Math.PI/5)*i-(Math.PI/2)))
          .attr("r", d => rFromArea(d["Imports"]) * gdpScale || 1)
          .attr("style", (d,i) => `fill: red;`)
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions2))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "import");

  let GDP2 = mySVG.selectAll(".gdp")
      .data(data)
      .join("circle")
          .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)))
          .attr("cy", (d,i) => 500+300*Math.sin((Math.PI/5)*i-(Math.PI/2)))
          .attr("r", d => rFromArea(d["GDP"]) * gdpScale || 1)
          .attr("style", (d,i) => `fill: ${myColor((d["Exports"]-d["Imports"])/Math.max(d["Exports"],d["Imports"]))};`)
          // .attr("fill", d => myColor((d["Exports"]-d["Imports"])/Math.max(d["Exports"],d["Imports"])))
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions2))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "gdp");

  // let web = mySVG.selectAll(".web")
  //     .data(data)
  //     .join("g")
  //         .call(makeWeb)
  //         .attr("class", "web");
}
)}

function _15(md){return(
md`## Zoom and Pan Dynamics`
)}

function _viz(d3,svg){return(
d3.select(svg)
)}

function _17(viz,d3,zoomed){return(
viz.select('#canvas').call(d3.zoom()                // the viz svg does the call (could also be a sub group)
  .extent([[0,0],[1550,930]])
  .scaleExtent([1,10])
  .on("zoom", zoomed))
)}

function _zoomed(viz){return(
function zoomed({transform}) {viz.select("#layer").attr("transform", transform).style("stroke-width", 1/transform.k);}
)}

function _zoomOut(d3){return(
() => {
  d3.select("#layer").transition().duration(1000).attr("transform", "");
  d3.select("#canvas").transition().duration(1000).attr("transform", "");
}
)}

function _20(md){return(
md`## Create New Data Fields`
)}

function _EPI(){return(
[51.10, 28.40, 57.20, 62.40, 18.90, 77.70, 62.50, 57.70, 50.00, 46.90]
)}

function _Continent(){return(
['North America', 'Asia', 'Asia', 'Europe', 'Asia', 'Europe', 'Europe', 'Europe', 'North America', 'Asia']
)}

function _collection(d3,sizeSquare,sizeCircle,sizeTriangle){return(
[{'North America': {shape: d3.symbolSquare, size: sizeSquare}, 'Asia': {shape: d3.symbolCircle, size: sizeCircle}, 'Europe': {shape: d3.symbolTriangle, size: sizeTriangle}}]
)}

function _sizeSquare(){return(
(r) => 2*(r**2)
)}

function _sizeCircle(){return(
(r) => Math.PI*(r**2)
)}

function _sizeTriangle(){return(
(r) => (3/4)*Math.sqrt(3)*(r**2)
)}

function _ratios(data)
{
  var d = []
  for(var i=0; i<10; i++){
    d[i] = data[i]["2019 [YR2019]"]/data[i]["2005 [YR2005]"]
  }
  return d
}


function _test()
{
  var data = ''
  for(var i=0; i<5; i++){
    // data = data+"🚗 "
    // data = data+"🚙 "
    // data = data+"🌳 "
  }
  return data
}


function _flags(){return(
['🇺🇸','🇨🇳','🇯🇵','🇩🇪','🇮🇳','🇬🇧','🇫🇷','🇮🇹','🇨🇦','🇰🇷']
)}

function _30(md){return(
md`## Populate the SVG`
)}

function _www(data,EPI,ratios,Continent,flags,viz,makeWeb,rFromArea,tooltip,ttOptions1,myColor2,lwScale,d3,collection,myColor3,ttOptions2,myColor)
{

  data.forEach((d,i)=>{
    d.EPI = EPI[i];
    d.ratios = ratios[i];
    d.Continent = Continent[i];
    d.flags = flags[i];
    d.percents = Math.round((((ratios[i]-1)*100) + Number.EPSILON) * 100) / 100;
    d.balance = Math.round((((d['Exports']-d['Imports'])/1000000000) + Number.EPSILON) * 100) / 100;
    d.GDPb = Math.round(((d['GDP']/1000000000) + Number.EPSILON) * 100) / 100;
    d.importsb = Math.round(((d['Imports']/1000000000) + Number.EPSILON) * 100) / 100;
    d.exportsb = Math.round(((d['Exports']/1000000000) + Number.EPSILON) * 100) / 100;
    d.ofiver = Math.round((Number(d['2005 [YR2005]']) + Number.EPSILON) * 100) / 100;
    d.currentr = Math.round((Number(d['2019 [YR2019]']) + Number.EPSILON) * 100) / 100;
    d.targetr = Math.round((Number(d['Target']) + Number.EPSILON) * 100) / 100;
  });
  
  let mySVG = viz.select('#layer');
  let rScale = 0.04;
  let gdpScale = 0.00001;
  let buffer = 40;

  let web = mySVG.selectAll(".web")
      .data(data)
      .join("g")
          .call(makeWeb)
          .attr("class", "web");

  let wholeCircle = mySVG.selectAll(".whole")
      .data(data)
      .join("circle")
          .attr("cx", (d,i) => 800+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.cos((Math.PI/5)*i-(Math.PI/2)))
          .attr("cy", (d,i) => 500+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.sin((Math.PI/5)*i-(Math.PI/2)))
          .attr("r", d => (Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*(rScale) || 1))
          .attr("style", (d,i) => `stroke: white; fill: white;`)
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions1))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "whole");

  let oldCO2 = mySVG.selectAll(".old")
      .data(data)
      .join("circle")
          .attr("cx", (d,i) => 800+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.cos((Math.PI/5)*i-(Math.PI/2)))
          .attr("cy", (d,i) => 500+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.sin((Math.PI/5)*i-(Math.PI/2)))
          .attr("r", d => rFromArea(d["2005 [YR2005]"]) * rScale || 1)
          .attr("style", (d,i) => `stroke: ${myColor2(d['ratios'])}; stroke-width: ${2*lwScale(d["2019 [YR2019]"]/(data.filter(d => d["Country Code"] == "CHN")[0]["2019 [YR2019]"]))}; stroke-dasharray: ${0.25*lwScale(d["2019 [YR2019]"]/(data.filter(d => d["Country Code"] == "CHN")[0]["2019 [YR2019]"]))}, ${4*lwScale(d["2019 [YR2019]"]/(data.filter(d => d["Country Code"] == "CHN")[0]["2019 [YR2019]"]))};`)
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions1))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "old");

  let currentCO2 = mySVG.selectAll(".current")
      .data(data)
      .join("circle")
          .attr("cx", (d,i) => 800+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.cos((Math.PI/5)*i-(Math.PI/2)))
          .attr("cy", (d,i) => 500+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.sin((Math.PI/5)*i-(Math.PI/2)))
          .attr("r", d => rFromArea(d["2019 [YR2019]"]) * rScale || 1)
          .attr("style", (d,i) => `stroke: ${myColor2(d['ratios'])}; stroke-width: ${2*lwScale(d["2019 [YR2019]"]/(data.filter(d => d["Country Code"] == "CHN")[0]["2019 [YR2019]"]))};`)
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions1))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "current");

  let targetCO2 = mySVG.selectAll(".target")
      .data(data)
      .join("circle")
          .attr("cx", (d,i) => 800+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.cos((Math.PI/5)*i-(Math.PI/2)))
          .attr("cy", (d,i) => 500+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.sin((Math.PI/5)*i-(Math.PI/2)))
          .attr("r", d => rFromArea(d["Target"]) * rScale || 1)
          .attr("style", (d,i) => `stroke: ${myColor2(d['ratios'])}; stroke-width: ${2*lwScale(d["2019 [YR2019]"]/(data.filter(d => d["Country Code"] == "CHN")[0]["2019 [YR2019]"]))}; stroke-dasharray: ${5*lwScale(d["2019 [YR2019]"]/(data.filter(d => d["Country Code"] == "CHN")[0]["2019 [YR2019]"]))}, ${3*lwScale(d["2019 [YR2019]"]/(data.filter(d => d["Country Code"] == "CHN")[0]["2019 [YR2019]"]))};`)
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions1))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "target");

  let fullBar = mySVG.selectAll(".full")
      .data(data)
      .join("rect")
          .attr("width", d => 2*(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*(rScale) || 1))
          .attr("height", d => 6)
          .attr("x", (d,i) => 800+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.cos((Math.PI/5)*i-(Math.PI/2))-(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*(rScale) || 1))
          .attr("y", (d,i) => 500+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.sin((Math.PI/5)*i-(Math.PI/2))-3)
          .attr("style", (d,i) => `fill: ${myColor2(d['ratios'])};`)
          .attr("transform", (d,i) => `rotate(${-90*Math.tanh(d['ratios']-1)})`)
          // .attr("transform", (d,i) => `rotate(${-90*Math.tanh(d['ratios']-1)} ${800+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.cos((Math.PI/5)*i-(Math.PI/2))},${500+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.sin((Math.PI/5)*i-(Math.PI/2))})`)
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions1))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "full");

  // let innerRing = mySVG.selectAll(".innerR")
  //     .data(data)
  //     .join("circle")
  //         .attr("cx", (d,i) => 800+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.cos((Math.PI/5)*i-(Math.PI/2)))
  //         .attr("cy", (d,i) => 500+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.sin((Math.PI/5)*i-(Math.PI/2)))
  //         .attr("r", d => Math.min(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*(rScale-.01) || 1)
  //         .attr("style", (d,i) => `fill: ${myColor3(EPI[i])};`)
  //         .attr("class", "innerR");

  let innerPoly = mySVG.selectAll(".innerP")
      .data(data)
      .join("path")
          .attr("d", (d,i) => d3.symbol().type(collection[0][d['Continent']]['shape']).size(collection[0][d['Continent']]['size'](Math.min(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*(rScale-.01) || 1))())
          .attr("style", (d,i) => `fill: ${myColor3(d['EPI'])};`)
          .attr("transform", (d,i) => `translate(${800+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.cos((Math.PI/5)*i-(Math.PI/2))},${500+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.sin((Math.PI/5)*i-(Math.PI/2))})`)
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions1))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "innerP");

  // let trendBar = mySVG.selectAll("bar")
  //     .data(data)
  //     .join("rect")
  //         .attr("width", d => 2*Math.min(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*(rScale-.01) || 1)
  //         .attr("height", d => 4)
  //         .attr("x", (d,i) => 500+(330+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale))*Math.cos((Math.PI/5)*i-(Math.PI/2))-(Math.min(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*(rScale-.01) || 1))
  //         .attr("y", (d,i) => 500+(330+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale))*Math.sin((Math.PI/5)*i-(Math.PI/2))-2)
  //         .attr("style", (d,i) => `fill: white; transform: rotate(${-90*Math.tanh(ratios[i]-1)});`)
  //         .attr("class", "bar");

  // let countryName = mySVG.selectAll("country")
  //     .data(data)
  //     .join("text")
  //         .text(d => `${d['Country Name']}`)
  //         .attr("text-anchor", "middle")
  //         .attr("x", (d,i) => 500+300*Math.cos((Math.PI/5)*i-(Math.PI/2)))
  //         .attr("y", (d,i) => 500+300*Math.sin((Math.PI/5)*i-(Math.PI/2)))
  //         .attr("style", "font-size: 12px;")
  //         .attr("transform", (d,i) => `rotate(${36*i} ${500+300*Math.cos((Math.PI/5)*i-(Math.PI/2))}, ${500+300*Math.sin((Math.PI/5)*i-(Math.PI/2))})`)
  //         .attr("class", "country");

  let countryName = mySVG.selectAll(".country")
      .data(data)
      .join("text")
          .text(d => `${d['Country Name']}`)
          .attr("text-anchor", "middle")
          .attr("x", (d,i) => 800+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.cos((Math.PI/5)*i-(Math.PI/2)))
          .attr("y", (d,i) => 500+(300+buffer+(Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*rScale)+(rFromArea(d["GDP"]) * gdpScale || 1))*Math.sin((Math.PI/5)*i-(Math.PI/2)) + (Math.max(rFromArea(d["2005 [YR2005]"]),rFromArea(d["2019 [YR2019]"]),rFromArea(d["Target"]))*(rScale) || 1) + 1.7*12)
          .attr("style", "font-size: 12px;")
          .attr("class", "country");

  // let countryFlag = mySVG.selectAll("flag")
  //     .data(data)
  //     .join("text")
  //         .text((d,i) => `${flags[i]}`)
  //         .attr("text-anchor", "middle")
  //         .attr("x", (d,i) => 500+305*Math.cos((Math.PI/5)*i-(Math.PI/2)))
  //         .attr("y", (d,i) => 500+305*Math.sin((Math.PI/5)*i-(Math.PI/2))+12)
  //         .attr("style", "font-size: 24px;")
  //         .attr("class", "flag");

  // let GDP = mySVG.selectAll(".gdp")
  //     .data(data)
  //     .join("circle")
  //         .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)))
  //         .attr("cy", (d,i) => 500+300*Math.sin((Math.PI/5)*i-(Math.PI/2)))
  //         .attr("r", d => rFromArea(d["GDP"]) * gdpScale || 1)
  //         .attr("style", (d,i) => `fill: ${myColor((d["Exports"]-d["Imports"])/Math.max(d["Exports"],d["Imports"]))};`)
  //         // .attr("fill", d => myColor((d["Exports"]-d["Imports"])/Math.max(d["Exports"],d["Imports"])))
  //         .attr("class", "gdp");

  let exports = mySVG.selectAll(".export")
      .data(data)
      .join("circle")
          .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)) + (rFromArea(d["Exports"]) * gdpScale || 1) + (rFromArea(d["GDP"]) * gdpScale || 1))
          // .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)) + (rFromArea(d["GDP"]) * gdpScale || 1))
          .attr("cy", (d,i) => 500+300*Math.sin((Math.PI/5)*i-(Math.PI/2)))
          .attr("r", d => rFromArea(d["Exports"]) * gdpScale || 1)
          .attr("style", (d,i) => `fill: green;`)
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions2))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "export");
  
  let imports = mySVG.selectAll(".import")
      .data(data)
      .join("circle")
          .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)) - (rFromArea(d["Imports"]) * gdpScale || 1) - (rFromArea(d["GDP"]) * gdpScale || 1))
          // .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)) - (rFromArea(d["GDP"]) * gdpScale || 1))
          .attr("cy", (d,i) => 500+300*Math.sin((Math.PI/5)*i-(Math.PI/2)))
          .attr("r", d => rFromArea(d["Imports"]) * gdpScale || 1)
          .attr("style", (d,i) => `fill: red;`)
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions2))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "import");

  let GDP2 = mySVG.selectAll(".gdp")
      .data(data)
      .join("circle")
          .attr("cx", (d,i) => 800+300*Math.cos((Math.PI/5)*i-(Math.PI/2)))
          .attr("cy", (d,i) => 500+300*Math.sin((Math.PI/5)*i-(Math.PI/2)))
          .attr("r", d => rFromArea(d["GDP"]) * gdpScale || 1)
          .attr("style", (d,i) => `fill: ${myColor((d["Exports"]-d["Imports"])/Math.max(d["Exports"],d["Imports"]))};`)
          // .attr("fill", d => myColor((d["Exports"]-d["Imports"])/Math.max(d["Exports"],d["Imports"])))
          .on("mousemove", (e,d) => tooltip.show(e,d,ttOptions2))
          .on("mouseout", () => tooltip.hide())
          .attr("class", "gdp");

  // let testtrees = mySVG.selectAll('tree')
  //   .data([test])
  //   .join("text")
  //   .attr("x", 500)
  //   .attr("y", 500)
  //   .style("font-size", "16px")
  //   .style("text-anchor", "start")
  //   .text(d => d)
  //   .attr("class", "tree");
  
  // mySVG.selectAll("tree")
  //   .each(function(d, i) { wrap_text_nchar(d3.select(this), 60) });

  // return [{'web':web, 'wholeCircle':wholeCircle, 'oldCO2':oldCO2, 'currentCO2':currentCO2, 'targetCO2':targetCO2, 'fullBar':fullBar, 'innerPoly':innerPoly, 'countryName':countryName, 'exports':exports, 'imports':imports, 'GDP2':GDP2}]

  // let web = mySVG.selectAll(".web")
  //     .data(data)
  //     .join("g")
  //         .call(makeWeb)
  //         .attr("class", "web");
  
}


function _rFromArea(){return(
(area) => Math.sqrt(Number(area)/Math.PI)
)}

function _33(md){return(
md`## Function to Build the International Trade Network`
)}

function _makeWebOriginal(d3,trade_data,rFromArea,data,myColor,tooltip,ttOptions3){return(
function makeWebOriginal(el) {

  // Original version

  el.each(function (d, i) {

    var el = d3.select(this);

    if (d["Country Code"] == "USA") {
      var k = 0;
    } else if (d["Country Code"] == "CHN") {
      var k = 1;
    } else if (d["Country Code"] == "JPN") {
      var k = 2;
    } else if (d["Country Code"] == "DEU") {
      var k = 3;
    } else if (d["Country Code"] == "IND") {
      var k = 4;
    } else if (d["Country Code"] == "GBR") {
      var k = 5;
    } else if (d["Country Code"] == "FRA") {
      var k = 6;
    } else if (d["Country Code"] == "ITA") {
      var k = 7;
    } else if (d["Country Code"] == "CAN") {
      var k = 8;
    } else if (d["Country Code"] == "KOR") {
      var k = 9;
    }

    const gdpScale = 0.00001;
    const lineStartX = 0;
    const innerControlPointHalfWidth = 0.2;
    const a = (300/2)*(Math.sqrt(5)-1);

    var l = k;

    if (i == 0) {

      for (var j=0; j<10; j++) {
        if (l != j) {
          
          const translateX = 800+300*Math.cos((Math.PI/5)*l-(Math.PI/2));
          const translateY = 500+300*Math.sin((Math.PI/5)*l-(Math.PI/2));
          const startHalfWidth = Math.min(((trade_data[l][j])*gdpScale*.005), (rFromArea(data[l]["GDP"])*gdpScale || 1));
          const endHalfWidth = Math.min(((trade_data[j][l])*gdpScale*.005), (rFromArea(data[j]["GDP"])*gdpScale || 1));

          if (j>l) {
            var rotate = 36*l+18*Math.abs(j-l);
          } else {
            var rotate = 36*l+18*Math.abs(9-l)+18*(j+1);
          }
          
          // if (Math.abs((j-l)-5) == 4) { // BAD
          //   var lineLengthX = a;
          // } else if (Math.abs((j-l)-5) == 3) {
          //   var lineLengthX = (a/2)*Math.sqrt(10+2*Math.sqrt(5));
          // } else if (Math.abs((j-l)-5) == 2) {
          //   var lineLengthX = (a/2)*Math.sqrt(14+6*Math.sqrt(5));
          // } else if (Math.abs((j-l)-5) == 1) {
          //   var lineLengthX = a*Math.sqrt(5+2*Math.sqrt(5));
          // } else if (Math.abs((j-l)-5) == 0) {
          //   var lineLengthX = a*(1+Math.sqrt(5));
          // }
  
          // if (Math.abs(Math.abs((j-l))-5) == 4) { // GOOD
          //   var lineLengthX = a;
          // } else if (Math.abs(Math.abs((j-l))-5) == 3) {
          //   var lineLengthX = (a/2)*Math.sqrt(10+2*Math.sqrt(5));
          // } else if (Math.abs(Math.abs((j-l))-5) == 2) {
          //   var lineLengthX = (a/2)*Math.sqrt(14+6*Math.sqrt(5));
          // } else if (Math.abs(Math.abs((j-l))-5) == 1) {
          //   var lineLengthX = a*Math.sqrt(5+2*Math.sqrt(5));
          // } else if (Math.abs(Math.abs((j-l))-5) == 0) {
          //   var lineLengthX = a*(1+Math.sqrt(5));
          // }

          if (Math.abs(j-l) == 1) {
            var lineLengthX = a;
          } else if (Math.abs(j-l) == 2) {
            var lineLengthX = (a/2)*Math.sqrt(10+2*Math.sqrt(5));
          } else if (Math.abs(j-l) == 3) {
            var lineLengthX = (a/2)*Math.sqrt(14+6*Math.sqrt(5));
          } else if (Math.abs(j-l) == 4) {
            var lineLengthX = a*Math.sqrt(5+2*Math.sqrt(5));
          } else if (Math.abs(j-l) == 5) {
            var lineLengthX = a*(1+Math.sqrt(5));
          } else if (Math.abs(j-l) == 6) {
            var lineLengthX = a*Math.sqrt(5+2*Math.sqrt(5));
          }  else if (Math.abs(j-l) == 7) {
            var lineLengthX = (a/2)*Math.sqrt(14+6*Math.sqrt(5));
          } else if ((Math.abs(j-l) == 8)) {
            var lineLengthX = (a/2)*Math.sqrt(10+2*Math.sqrt(5));
          } else if (Math.abs(j-l) == 9) {
            var lineLengthX = a;
          }

          if (lineLengthX != "") {

            const leftControlPointX = lineLengthX*.2;
            const rightControlPointX = lineLengthX*.8;
    
            const tradeBalance = Math.abs(trade_data[l][j]-trade_data[j][l])/Math.max(trade_data[l][j], trade_data[j][l]);
            const tradeBalanceColor = (trade_data[l][j]-trade_data[j][l])/Math.max(trade_data[l][j], trade_data[j][l]);
    
            const tempData = {'Country1': data[l]['Country Name'], 'Country2': data[j]['Country Name'], 'E12': Math.round(((trade_data[l][j]/1000000) + Number.EPSILON) * 100) / 100, 'E21': Math.round(((trade_data[j][l]/1000000) + Number.EPSILON) * 100) / 100, 'diff': Math.round(((Math.abs(trade_data[l][j]-trade_data[j][l])/1000000) + Number.EPSILON) * 100) / 100}
    
            el.append("path")
                  .attr("id", (d,i) => `pass${i}`)
                  .attr("d", `M ${lineStartX},-${startHalfWidth} C ${leftControlPointX},-${innerControlPointHalfWidth} ${rightControlPointX},-${innerControlPointHalfWidth} ${lineLengthX},-${endHalfWidth} L ${lineLengthX},${endHalfWidth} C ${rightControlPointX},${innerControlPointHalfWidth} ${leftControlPointX},${innerControlPointHalfWidth} ${lineStartX},${startHalfWidth} Z`)
                  .attr("style", `opacity: ${tradeBalance}; fill: ${myColor(tradeBalanceColor)};`)
                  .attr("transform", `translate(${translateX},${translateY}), rotate(${rotate})`)
                  .on("mousemove", (e,d) => tooltip.show(e,tempData,ttOptions3))
                  .on("mouseout", () => tooltip.hide());
            
          }
  
          
        }
      }
      
    } else {

      for (var j=0; j<10; j++) {
        if (l != j) {
          const translateX = 800+300*Math.cos((Math.PI/5)*l-(Math.PI/2));
          const translateY = 500+300*Math.sin((Math.PI/5)*l-(Math.PI/2));
          const startHalfWidth = Math.min(((trade_data[l][j])*gdpScale*.005), (rFromArea(data[l]["GDP"])*gdpScale || 1));
          const endHalfWidth = Math.min(((trade_data[j][l])*gdpScale*.005), (rFromArea(data[j]["GDP"])*gdpScale || 1));
          const rotate = 36*l+18*Math.abs(j-l);
  
          if (Math.abs((j-l)-5) == 4) {
            var lineLengthX = a;
          } else if (Math.abs((j-l)-5) == 3) {
            var lineLengthX = (a/2)*Math.sqrt(10+2*Math.sqrt(5));
          } else if (Math.abs((j-l)-5) == 2) {
            var lineLengthX = (a/2)*Math.sqrt(14+6*Math.sqrt(5));
          } else if (Math.abs((j-l)-5) == 1) {
            var lineLengthX = a*Math.sqrt(5+2*Math.sqrt(5));
          } else if (Math.abs((j-l)-5) == 0) {
            var lineLengthX = a*(1+Math.sqrt(5));
          }

          if (lineLengthX != "") {

            const leftControlPointX = lineLengthX*.2;
            const rightControlPointX = lineLengthX*.8;
    
            const tradeBalance = Math.abs(trade_data[l][j]-trade_data[j][l])/Math.max(trade_data[l][j], trade_data[j][l]);
    
            const tempData = {'Country1': data[l]['Country Name'], 'Country2': data[j]['Country Name'], 'E12': Math.round(((trade_data[l][j]/1000000) + Number.EPSILON) * 100) / 100, 'E21': Math.round(((trade_data[j][l]/1000000) + Number.EPSILON) * 100) / 100, 'diff': Math.round(((Math.abs(trade_data[l][j]-trade_data[j][l])/1000000) + Number.EPSILON) * 100) / 100}
    
            el.append("path")
                  .attr("d", `M ${lineStartX},-${startHalfWidth} C ${leftControlPointX},-${innerControlPointHalfWidth} ${rightControlPointX},-${innerControlPointHalfWidth} ${lineLengthX},-${endHalfWidth} L ${lineLengthX},${endHalfWidth} C ${rightControlPointX},${innerControlPointHalfWidth} ${leftControlPointX},${innerControlPointHalfWidth} ${lineStartX},${startHalfWidth} Z`)
                  .attr("style", `opacity: ${tradeBalance};`)
                  .attr("transform", `translate(${translateX},${translateY}), rotate(${rotate})`)
                  .on("mousemove", (e,d) => tooltip.show(e,tempData,ttOptions3))
                  .on("mouseout", () => tooltip.hide());
            
          }
  
          
        }
      }
      
    }

    if (i == 9) {
      d3.selectAll("#pass0").remove();

      let l = 0;

      for (var j=0; j<10; j++) {
        if (l != j) {
          
          const translateX = 800+300*Math.cos((Math.PI/5)*l-(Math.PI/2));
          const translateY = 500+300*Math.sin((Math.PI/5)*l-(Math.PI/2));
          const startHalfWidth = Math.min(((trade_data[l][j])*gdpScale*.005), (rFromArea(data[l]["GDP"])*gdpScale || 1));
          const endHalfWidth = Math.min(((trade_data[j][l])*gdpScale*.005), (rFromArea(data[j]["GDP"])*gdpScale || 1));

          if (j>l) {
            var rotate = 36*l+18*Math.abs(j-l);
          } else {
            var rotate = 36*l+18*Math.abs(9-l)+18*(j+1);
          }

          if (Math.abs(j-l) == 1) {
            var lineLengthX = a;
          } else if (Math.abs(j-l) == 2) {
            var lineLengthX = (a/2)*Math.sqrt(10+2*Math.sqrt(5));
          } else if (Math.abs(j-l) == 3) {
            var lineLengthX = (a/2)*Math.sqrt(14+6*Math.sqrt(5));
          } else if (Math.abs(j-l) == 4) {
            var lineLengthX = a*Math.sqrt(5+2*Math.sqrt(5));
          } else if (Math.abs(j-l) == 5) {
            var lineLengthX = a*(1+Math.sqrt(5));
          } else if (Math.abs(j-l) == 6) {
            var lineLengthX = a*Math.sqrt(5+2*Math.sqrt(5));
          }  else if (Math.abs(j-l) == 7) {
            var lineLengthX = (a/2)*Math.sqrt(14+6*Math.sqrt(5));
          } else if ((Math.abs(j-l) == 8)) {
            var lineLengthX = (a/2)*Math.sqrt(10+2*Math.sqrt(5));
          } else if (Math.abs(j-l) == 9) {
            var lineLengthX = a;
          }

          if (lineLengthX != "") {

            const leftControlPointX = lineLengthX*.2;
            const rightControlPointX = lineLengthX*.8;
    
            const tradeBalance = Math.abs(trade_data[l][j]-trade_data[j][l])/Math.max(trade_data[l][j], trade_data[j][l]);
    
            const tempData = {'Country1': data[l]['Country Name'], 'Country2': data[j]['Country Name'], 'E12': Math.round(((trade_data[l][j]/1000000) + Number.EPSILON) * 100) / 100, 'E21': Math.round(((trade_data[j][l]/1000000) + Number.EPSILON) * 100) / 100, 'diff': Math.round(((Math.abs(trade_data[l][j]-trade_data[j][l])/1000000) + Number.EPSILON) * 100) / 100}
    
            el.append("path")
                  .attr("d", `M ${lineStartX},-${startHalfWidth} C ${leftControlPointX},-${innerControlPointHalfWidth} ${rightControlPointX},-${innerControlPointHalfWidth} ${lineLengthX},-${endHalfWidth} L ${lineLengthX},${endHalfWidth} C ${rightControlPointX},${innerControlPointHalfWidth} ${leftControlPointX},${innerControlPointHalfWidth} ${lineStartX},${startHalfWidth} Z`)
                  .attr("style", `opacity: ${tradeBalance};`)
                  .attr("transform", `translate(${translateX},${translateY}), rotate(${rotate})`)
                  .on("mousemove", (e,d) => tooltip.show(e,tempData,ttOptions3))
                  .on("mouseout", () => tooltip.hide());
            
          }
  
          
        }
      }
      
    }
    
  });
  
}
)}

function _offset(){return(
(x,r) => r*Math.sin(Math.acos(x/r))
)}

function _makeWeb(d3,trade_data,rFromArea,data,offset,myColor,tooltip,ttOptions3){return(
function makeWeb(el) {

  // Updated and improved version

  el.each(function (d, i) {

    var el = d3.select(this);

    if (d["Country Code"] == "USA") {
      var k = 0;
    } else if (d["Country Code"] == "CHN") {
      var k = 1;
    } else if (d["Country Code"] == "JPN") {
      var k = 2;
    } else if (d["Country Code"] == "DEU") {
      var k = 3;
    } else if (d["Country Code"] == "IND") {
      var k = 4;
    } else if (d["Country Code"] == "GBR") {
      var k = 5;
    } else if (d["Country Code"] == "FRA") {
      var k = 6;
    } else if (d["Country Code"] == "ITA") {
      var k = 7;
    } else if (d["Country Code"] == "CAN") {
      var k = 8;
    } else if (d["Country Code"] == "KOR") {
      var k = 9;
    }

    const gdpScale = 0.00001;
    const lineStartX = 0;
    const a = (300/2)*(Math.sqrt(5)-1);

    var l = k;

    if (i == 0) {

      for (var j=0; j<10; j++) {
        if (l != j) {
          
          const startHalfWidth = Math.min(((trade_data[l][j])*gdpScale*.005), (rFromArea(data[l]["GDP"])*gdpScale || 1));
          const endHalfWidth = Math.min(((trade_data[j][l])*gdpScale*.005), (rFromArea(data[j]["GDP"])*gdpScale || 1));
          
          var innerControlPointHalfWidth = 0.3*Math.min(startHalfWidth, endHalfWidth);

          const r1 = (rFromArea(data[l]["GDP"])*gdpScale || 1);
          const r2 = (rFromArea(data[j]["GDP"])*gdpScale || 1);
          const leftOffset = offset(startHalfWidth, r1);
          const rightOffset = leftOffset + offset(endHalfWidth, r2);
          
          const translateX = 800+300*Math.cos((Math.PI/5)*l-(Math.PI/2)) + leftOffset;
          const translateY = 500+300*Math.sin((Math.PI/5)*l-(Math.PI/2));

          if (j>l) {
            var rotate = 36*l+18*Math.abs(j-l);
          } else {
            var rotate = 36*l+18*Math.abs(9-l)+18*(j+1);
          }

          if (Math.abs(j-l) == 1) {
            var lineLengthX = a;
          } else if (Math.abs(j-l) == 2) {
            var lineLengthX = (a/2)*Math.sqrt(10+2*Math.sqrt(5));
          } else if (Math.abs(j-l) == 3) {
            var lineLengthX = (a/2)*Math.sqrt(14+6*Math.sqrt(5));
          } else if (Math.abs(j-l) == 4) {
            var lineLengthX = a*Math.sqrt(5+2*Math.sqrt(5));
          } else if (Math.abs(j-l) == 5) {
            var lineLengthX = a*(1+Math.sqrt(5));
          } else if (Math.abs(j-l) == 6) {
            var lineLengthX = a*Math.sqrt(5+2*Math.sqrt(5));
          }  else if (Math.abs(j-l) == 7) {
            var lineLengthX = (a/2)*Math.sqrt(14+6*Math.sqrt(5));
          } else if ((Math.abs(j-l) == 8)) {
            var lineLengthX = (a/2)*Math.sqrt(10+2*Math.sqrt(5));
          } else if (Math.abs(j-l) == 9) {
            var lineLengthX = a;
          }

          if (lineLengthX != "") {

            var lineLengthX2 = lineLengthX - rightOffset;

            var leftControlPointX = lineLengthX2*.2;
            var rightControlPointX = lineLengthX2*.8;
    
            const tradeBalance = Math.abs(trade_data[l][j]-trade_data[j][l])/Math.max(trade_data[l][j], trade_data[j][l]);
            const tradeBalanceColor = (trade_data[l][j]-trade_data[j][l])/Math.max(trade_data[l][j], trade_data[j][l]);
    
            const tempData = {'Country1': data[l]['Country Name'], 'Country2': data[j]['Country Name'], 'E12': Math.round(((trade_data[l][j]/1000000) + Number.EPSILON) * 100) / 100, 'E21': Math.round(((trade_data[j][l]/1000000) + Number.EPSILON) * 100) / 100, 'diff': Math.round(((Math.abs(trade_data[l][j]-trade_data[j][l])/1000000) + Number.EPSILON) * 100) / 100}
    
            el.append("path")
                  .attr("id", (d,i) => `pass${i}`)
                  .attr("d", `M ${lineStartX+translateX},${translateY-startHalfWidth} C ${leftControlPointX+translateX},${translateY-innerControlPointHalfWidth} ${rightControlPointX+translateX},${translateY-innerControlPointHalfWidth} ${lineLengthX2+translateX},${translateY-endHalfWidth} L ${lineLengthX2+translateX},${endHalfWidth+translateY} C ${rightControlPointX+translateX},${innerControlPointHalfWidth+translateY} ${leftControlPointX+translateX},${innerControlPointHalfWidth+translateY} ${lineStartX+translateX},${startHalfWidth+translateY} Z`)
                  .attr("style", `opacity: ${tradeBalance}; fill: ${myColor(tradeBalanceColor)};`)
                  .attr("transform", `rotate(${rotate} ${translateX-leftOffset},${translateY})`)
                  .on("mousemove", (e,d) => tooltip.show(e,tempData,ttOptions3))
                  .on("mouseout", () => tooltip.hide());
            
          }
  
          
        }
      }
      
    } else {

      for (var j=0; j<10; j++) {
        if (l != j) {
          
          const startHalfWidth = Math.min(((trade_data[l][j])*gdpScale*.005), (rFromArea(data[l]["GDP"])*gdpScale || 1));
          const endHalfWidth = Math.min(((trade_data[j][l])*gdpScale*.005), (rFromArea(data[j]["GDP"])*gdpScale || 1));

          var innerControlPointHalfWidth = 0.3*Math.min(startHalfWidth, endHalfWidth);

          const r1 = (rFromArea(data[l]["GDP"])*gdpScale || 1);
          const r2 = (rFromArea(data[j]["GDP"])*gdpScale || 1);
          const leftOffset = offset(startHalfWidth, r1);
          const rightOffset = leftOffset + offset(endHalfWidth, r2);
          
          const translateX = 800+300*Math.cos((Math.PI/5)*l-(Math.PI/2)) + leftOffset;
          const translateY = 500+300*Math.sin((Math.PI/5)*l-(Math.PI/2));
          
          const rotate = 36*l+18*Math.abs(j-l);
  
          if (Math.abs((j-l)-5) == 4) {
            var lineLengthX = a;
          } else if (Math.abs((j-l)-5) == 3) {
            var lineLengthX = (a/2)*Math.sqrt(10+2*Math.sqrt(5));
          } else if (Math.abs((j-l)-5) == 2) {
            var lineLengthX = (a/2)*Math.sqrt(14+6*Math.sqrt(5));
          } else if (Math.abs((j-l)-5) == 1) {
            var lineLengthX = a*Math.sqrt(5+2*Math.sqrt(5));
          } else if (Math.abs((j-l)-5) == 0) {
            var lineLengthX = a*(1+Math.sqrt(5));
          }

          if (lineLengthX != "") {

            var lineLengthX2 = lineLengthX - rightOffset;

            var leftControlPointX = lineLengthX2*.2;
            var rightControlPointX = lineLengthX2*.8;
    
            const tradeBalance = Math.abs(trade_data[l][j]-trade_data[j][l])/Math.max(trade_data[l][j], trade_data[j][l]);
    
            const tempData = {'Country1': data[l]['Country Name'], 'Country2': data[j]['Country Name'], 'E12': Math.round(((trade_data[l][j]/1000000) + Number.EPSILON) * 100) / 100, 'E21': Math.round(((trade_data[j][l]/1000000) + Number.EPSILON) * 100) / 100, 'diff': Math.round(((Math.abs(trade_data[l][j]-trade_data[j][l])/1000000) + Number.EPSILON) * 100) / 100}
    
            el.append("path")
                  .attr("d", `M ${lineStartX+translateX},${translateY-startHalfWidth} C ${leftControlPointX+translateX},${translateY-innerControlPointHalfWidth} ${rightControlPointX+translateX},${translateY-innerControlPointHalfWidth} ${lineLengthX2+translateX},${translateY-endHalfWidth} L ${lineLengthX2+translateX},${endHalfWidth+translateY} C ${rightControlPointX+translateX},${innerControlPointHalfWidth+translateY} ${leftControlPointX+translateX},${innerControlPointHalfWidth+translateY} ${lineStartX+translateX},${startHalfWidth+translateY} Z`)
                  .attr("style", `opacity: ${tradeBalance};`)
                  .attr("transform", `rotate(${rotate} ${translateX-leftOffset},${translateY})`)
                  .on("mousemove", (e,d) => tooltip.show(e,tempData,ttOptions3))
                  .on("mouseout", () => tooltip.hide());
            
          }
  
          
        }
      }
      
    }

    if (i == 9) {
      d3.selectAll("#pass0").remove();

      let l = 0;

      for (var j=0; j<10; j++) {
        if (l != j) {
          
          const startHalfWidth = Math.min(((trade_data[l][j])*gdpScale*.005), (rFromArea(data[l]["GDP"])*gdpScale || 1));
          const endHalfWidth = Math.min(((trade_data[j][l])*gdpScale*.005), (rFromArea(data[j]["GDP"])*gdpScale || 1));

          var innerControlPointHalfWidth = 0.3*Math.min(startHalfWidth, endHalfWidth);

          const r1 = (rFromArea(data[l]["GDP"])*gdpScale || 1);
          const r2 = (rFromArea(data[j]["GDP"])*gdpScale || 1);
          const leftOffset = offset(startHalfWidth, r1);
          const rightOffset = leftOffset + offset(endHalfWidth, r2);
          
          const translateX = 800+300*Math.cos((Math.PI/5)*l-(Math.PI/2)) + leftOffset;
          const translateY = 500+300*Math.sin((Math.PI/5)*l-(Math.PI/2));

          if (j>l) {
            var rotate = 36*l+18*Math.abs(j-l);
          } else {
            var rotate = 36*l+18*Math.abs(9-l)+18*(j+1);
          }

          if (Math.abs(j-l) == 1) {
            var lineLengthX = a;
          } else if (Math.abs(j-l) == 2) {
            var lineLengthX = (a/2)*Math.sqrt(10+2*Math.sqrt(5));
          } else if (Math.abs(j-l) == 3) {
            var lineLengthX = (a/2)*Math.sqrt(14+6*Math.sqrt(5));
          } else if (Math.abs(j-l) == 4) {
            var lineLengthX = a*Math.sqrt(5+2*Math.sqrt(5));
          } else if (Math.abs(j-l) == 5) {
            var lineLengthX = a*(1+Math.sqrt(5));
          } else if (Math.abs(j-l) == 6) {
            var lineLengthX = a*Math.sqrt(5+2*Math.sqrt(5));
          }  else if (Math.abs(j-l) == 7) {
            var lineLengthX = (a/2)*Math.sqrt(14+6*Math.sqrt(5));
          } else if ((Math.abs(j-l) == 8)) {
            var lineLengthX = (a/2)*Math.sqrt(10+2*Math.sqrt(5));
          } else if (Math.abs(j-l) == 9) {
            var lineLengthX = a;
          }

          if (lineLengthX != "") {

            var lineLengthX2 = lineLengthX - rightOffset;

            var leftControlPointX = lineLengthX2*.2;
            var rightControlPointX = lineLengthX2*.8;
    
            const tradeBalance = Math.abs(trade_data[l][j]-trade_data[j][l])/Math.max(trade_data[l][j], trade_data[j][l]);
    
            const tempData = {'Country1': data[l]['Country Name'], 'Country2': data[j]['Country Name'], 'E12': Math.round(((trade_data[l][j]/1000000) + Number.EPSILON) * 100) / 100, 'E21': Math.round(((trade_data[j][l]/1000000) + Number.EPSILON) * 100) / 100, 'diff': Math.round(((Math.abs(trade_data[l][j]-trade_data[j][l])/1000000) + Number.EPSILON) * 100) / 100}
    
            el.append("path")
                  .attr("d", `M ${lineStartX+translateX},${translateY-startHalfWidth} C ${leftControlPointX+translateX},${translateY-innerControlPointHalfWidth} ${rightControlPointX+translateX},${translateY-innerControlPointHalfWidth} ${lineLengthX2+translateX},${translateY-endHalfWidth} L ${lineLengthX2+translateX},${endHalfWidth+translateY} C ${rightControlPointX+translateX},${innerControlPointHalfWidth+translateY} ${leftControlPointX+translateX},${innerControlPointHalfWidth+translateY} ${lineStartX+translateX},${startHalfWidth+translateY} Z`)
                  .attr("style", `opacity: ${tradeBalance};`)
                  .attr("transform", `rotate(${rotate} ${translateX-leftOffset},${translateY})`)
                  .on("mousemove", (e,d) => tooltip.show(e,tempData,ttOptions3))
                  .on("mouseout", () => tooltip.hide());
            
          }
  
          
        }
      }
      
    }
    
  });
  
}
)}

function _37(md){return(
md`## Create Linear Scales for Colors and Linewidths`
)}

function _myColor(d3){return(
d3.scaleLinear().domain([-1., 0., 1.]).range(["red", "lightgrey", "green"])
)}

function _myColor2(d3,ratios){return(
d3.scaleLinear().domain([Math.min(...ratios)*0.8,1.,Math.max(...ratios)*1.2]).range(["blue", "lightgrey", "red"])
)}

function _myColor3(d3){return(
d3.scaleLinear().domain([0.,50.,100.]).range(["red", "lightgrey", "green"])
)}

function _lwScale(d3){return(
d3.scaleLinear().domain([0.028, 1.]).range([0.5,1.])
)}

function _42(md){return(
md`## Set Tooltip Options for Different Element Types`
)}

function _ttOptions1(){return(
{
  title: {dataName: "Country Name"},
  subtitle: "CO2 Emissions Statistics",
  fields: [
    {displayName: "Environmental Performance Index", dataName: "EPI", prefix: "", suffix: "", text: ""},
    {displayName: "2005 Emissions", dataName: "ofiver", prefix: "", suffix: " kt", text: ""},
    {displayName: "Current Emissions", dataName: "currentr", prefix: "", suffix: " kt", text: ""},
    {displayName: "Target Emissions", dataName: "targetr", prefix: "", suffix: " kt", text: ""},
    {displayName: "% Change Since 2005", dataName: "percents", prefix: "", suffix: "%", text: ""}
  ]
}
)}

function _ttOptions2(){return(
{
  title: {dataName: "Country Name"},
  subtitle: "Economic Statistics",
  fields: [
    {displayName: "GDP", dataName: "GDPb", prefix: "", suffix: " Billion US$", text: ""},
    {displayName: "Imports", dataName: "importsb", prefix: "", suffix: " Billion US$", text: ""},
    {displayName: "Exports", dataName: "exportsb", prefix: "", suffix: " Billion US$", text: ""},
    {displayName: "Net Exports", dataName: "balance", prefix: "", suffix: " Billion US$", text: ""}
  ]
}
)}

function _ttOptions3(){return(
{
  title: 'International Trade Web',
  // subtitle: "",
  fields: [
    {displayName: "", dataName: "", prefix: "", suffix: "", text: "1"},
    {displayName: "", dataName: "", prefix: "", suffix: "", text: "2"},
    {displayName: "", dataName: "", prefix: "", suffix: "", text: "3"}
  ]
}
)}

function _tooltip(mydvTooltip,d3,svg){return(
new mydvTooltip(d3.select(svg).select("#tooltip"))
)}

function _47(tooltip){return(
tooltip.hide()
)}

function _mydvTooltip(){return(
class mydvTooltip {
  constructor(selection) {
    if (!selection || !selection.size()) {
      throw "Requires a tooltip div element selection";
    }
    this._selection = selection;
  }

  get selection() {
    return this._selection;
  }

  set selection(sel) {
    if (sel && sel.size()) {
      this._selection = sel;
    } else {
      throw "selection must be a non-empty selected element";
    }
  }
  
  show(evt, d, options) {
    let thisElem = evt.currentTarget;
    //let parentSVG = d3.select(thisElem).select(function() {return this.closest("svg")});
    //let topNode = parentSVG.node().parentNode;
    let mouseLoc = {x: evt.offsetX+1, y: evt.offsetY+1};
    
    if (typeof(options) === "undefined") {options = {}}
    if (typeof(options.fields) === "undefined") {options.fields = ""}
    if (typeof(options.title) === "undefined") {options.title = ""}
    if (typeof(options.subtitle) === "undefined") {options.subtitle = ""}
  
    let ttContents = "";
  
    if (options.title != "") {
      ttContents += "<div class='TTtitle'>";
      if (typeof(options.title) === "object") {ttContents += d[options.title.dataName]}
      else {ttContents += options.title}
      ttContents += "</div>";
    }
  
    if (options.subtitle != "") {
      ttContents += "<div class='TTsubtitle'>";
      if (typeof(options.subtitle) === "object") {ttContents += d[options.subtitle.dataName]}
      else {ttContents += options.subtitle}
      ttContents += "</div>";
    }
  
    if (options.fields != "") {
      options.fields.forEach(field => {
        if (field.displayName != "") {ttContents += field.displayName + ": "}
        if (field.prefix != "") {ttContents += field.prefix}
        if (field.dataName != "") {ttContents += d[field.dataName]};
        if (field.suffix != "") {ttContents += "" + field.suffix}
        if (field.text == "1") {ttContents += `Exports from ${d['Country1']}: ${d['E12']} Billion US$`}
        if (field.text == "2") {ttContents += `Exports from ${d['Country2']}: ${d['E21']} Billion US$`}
        if (field.text == "3") {ttContents += `Trade Imbalance: ${d['diff']} Billion US$`}
        ttContents += "<br />";
      })
    } else {
      ttContents = d;
    }
    
    this.selection
      .style("visibility","visible")
      .style("left", mouseLoc.x + "px")
      .style("top", mouseLoc.y + "px")
      .html(ttContents);
    
  }

  hide() {
    this.selection.style("visibility","hidden").html("");
  }
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["data.csv", {url: new URL("./files/654561ba92c694a10d8dcc6987313a01a6daf1cacfdb1813110493894095ab4d83e158966747cea066ac1a2e5c76960e206c43cbd6fcac8d2d33927669739229.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["trade_matrix.csv", {url: new URL("./files/2c035ca7d90945e64de4bfe068bce2862ed7313663850bc8803478923a6239a0e7cbf2dcfe729249e70ecd31f878808463ebab14c4820d34449f8e2290ad523c.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("data")).define("data", ["FileAttachment"], _data);
  main.variable(observer("trade_data")).define("trade_data", ["FileAttachment"], _trade_data);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer("svg")).define("svg", ["flags","htl"], _svg);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["d3","svg","weaveFull","selectCountry"], _9);
  main.variable(observer("selectCountry")).define("selectCountry", ["zoomOut","weavePart","showImpact"], _selectCountry);
  main.variable(observer("showImpact")).define("showImpact", ["data","viz","wrap_text_nchar","d3"], _showImpact);
  const child1 = runtime.module(define1);
  main.import("wrap_text", child1);
  main.import("wrap_text_nchar", child1);
  main.variable(observer("weavePart")).define("weavePart", ["viz","d3","data","makeWeb","rFromArea","tooltip","ttOptions2","myColor"], _weavePart);
  main.variable(observer("weaveFull")).define("weaveFull", ["zoomOut","viz","d3","data","makeWeb","rFromArea","tooltip","ttOptions2","myColor"], _weaveFull);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer("viz")).define("viz", ["d3","svg"], _viz);
  main.variable(observer()).define(["viz","d3","zoomed"], _17);
  main.variable(observer("zoomed")).define("zoomed", ["viz"], _zoomed);
  main.variable(observer("zoomOut")).define("zoomOut", ["d3"], _zoomOut);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer("EPI")).define("EPI", _EPI);
  main.variable(observer("Continent")).define("Continent", _Continent);
  main.variable(observer("collection")).define("collection", ["d3","sizeSquare","sizeCircle","sizeTriangle"], _collection);
  main.variable(observer("sizeSquare")).define("sizeSquare", _sizeSquare);
  main.variable(observer("sizeCircle")).define("sizeCircle", _sizeCircle);
  main.variable(observer("sizeTriangle")).define("sizeTriangle", _sizeTriangle);
  main.variable(observer("ratios")).define("ratios", ["data"], _ratios);
  main.variable(observer("test")).define("test", _test);
  main.variable(observer("flags")).define("flags", _flags);
  main.variable(observer()).define(["md"], _30);
  main.variable(observer("www")).define("www", ["data","EPI","ratios","Continent","flags","viz","makeWeb","rFromArea","tooltip","ttOptions1","myColor2","lwScale","d3","collection","myColor3","ttOptions2","myColor"], _www);
  main.variable(observer("rFromArea")).define("rFromArea", _rFromArea);
  main.variable(observer()).define(["md"], _33);
  main.variable(observer("makeWebOriginal")).define("makeWebOriginal", ["d3","trade_data","rFromArea","data","myColor","tooltip","ttOptions3"], _makeWebOriginal);
  main.variable(observer("offset")).define("offset", _offset);
  main.variable(observer("makeWeb")).define("makeWeb", ["d3","trade_data","rFromArea","data","offset","myColor","tooltip","ttOptions3"], _makeWeb);
  main.variable(observer()).define(["md"], _37);
  main.variable(observer("myColor")).define("myColor", ["d3"], _myColor);
  main.variable(observer("myColor2")).define("myColor2", ["d3","ratios"], _myColor2);
  main.variable(observer("myColor3")).define("myColor3", ["d3"], _myColor3);
  main.variable(observer("lwScale")).define("lwScale", ["d3"], _lwScale);
  main.variable(observer()).define(["md"], _42);
  main.variable(observer("ttOptions1")).define("ttOptions1", _ttOptions1);
  main.variable(observer("ttOptions2")).define("ttOptions2", _ttOptions2);
  main.variable(observer("ttOptions3")).define("ttOptions3", _ttOptions3);
  main.variable(observer("tooltip")).define("tooltip", ["mydvTooltip","d3","svg"], _tooltip);
  main.variable(observer()).define(["tooltip"], _47);
  main.variable(observer("mydvTooltip")).define("mydvTooltip", _mydvTooltip);
  return main;
}
