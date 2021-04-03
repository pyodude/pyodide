var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="soupsieve.data";var REMOTE_PACKAGE_BASE="soupsieve.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","soupsieve",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","soupsieve-2.0.1-py3.8.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:63761,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1322,2225,3208,4186,5333,6007,7156,8294,9439,10456,11320,12133,12947,13803,14733,15803,16842,17894,18850,19885,20908,22119,22858,23780,24936,26198,27483,28552,29895,31040,32043,33013,34050,35123,36168,36690,37654,38659,39621,40410,41322,42001,42923,44060,45154,46027,47052,48149,48983,49747,50796,52060,53655,54490,55820,56985,58070,59407,60694,61961,62979,63603],sizes:[1322,903,983,978,1147,674,1149,1138,1145,1017,864,813,814,856,930,1070,1039,1052,956,1035,1023,1211,739,922,1156,1262,1285,1069,1343,1145,1003,970,1037,1073,1045,522,964,1005,962,789,912,679,922,1137,1094,873,1025,1097,834,764,1049,1264,1595,835,1330,1165,1085,1337,1287,1267,1018,624,158],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_soupsieve.data")}Module["addRunDependency"]("datafile_soupsieve.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/soupsieve/css_match.py",start:0,end:52152,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve/css_parser.py",start:52152,end:95352,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve/css_types.py",start:95352,end:103923,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve/util.py",start:103923,end:107129,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve/__init__.py",start:107129,end:110670,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve/__meta__.py",start:110670,end:117251,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve-2.0.1-py3.8.egg-info/dependency_links.txt",start:117251,end:117252,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve-2.0.1-py3.8.egg-info/PKG-INFO",start:117252,end:123375,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve-2.0.1-py3.8.egg-info/requires.txt",start:123375,end:123430,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve-2.0.1-py3.8.egg-info/SOURCES.txt",start:123430,end:127347,audio:0},{filename:"/lib/python3.8/site-packages/soupsieve-2.0.1-py3.8.egg-info/top_level.txt",start:127347,end:127357,audio:0}],remote_package_size:67857,package_uuid:"1ae707a1-0416-4d54-9b86-006049296ee0"})})();