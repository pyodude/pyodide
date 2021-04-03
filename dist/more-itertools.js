var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="more-itertools.data";var REMOTE_PACKAGE_BASE="more-itertools.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","more_itertools",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","more_itertools-8.5.0-py3.8.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:84815,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1238,2490,3708,4893,6010,7475,8842,10086,11153,12406,13763,15153,16473,17578,18863,20116,21287,22177,23383,24701,25974,27243,28551,29930,31195,32448,33816,35018,35921,36832,37923,39251,40174,41507,42557,43812,45149,46537,47630,48876,50124,51159,52553,53723,54880,56144,57547,58703,59923,61319,62589,63741,65128,66378,67654,69054,70349,71632,72575,73929,74223,74530,74826,75137,75465,75787,76088,76368,76659,77011,77348,77657,77976,78995,80153,81250,82421,83620],sizes:[1238,1252,1218,1185,1117,1465,1367,1244,1067,1253,1357,1390,1320,1105,1285,1253,1171,890,1206,1318,1273,1269,1308,1379,1265,1253,1368,1202,903,911,1091,1328,923,1333,1050,1255,1337,1388,1093,1246,1248,1035,1394,1170,1157,1264,1403,1156,1220,1396,1270,1152,1387,1250,1276,1400,1295,1283,943,1354,294,307,296,311,328,322,301,280,291,352,337,309,319,1019,1158,1097,1171,1199,1195],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_more-itertools.data")}Module["addRunDependency"]("datafile_more-itertools.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/more_itertools/more.py",start:0,end:106781,audio:0},{filename:"/lib/python3.8/site-packages/more_itertools/recipes.py",start:106781,end:121823,audio:0},{filename:"/lib/python3.8/site-packages/more_itertools/__init__.py",start:121823,end:121905,audio:0},{filename:"/lib/python3.8/site-packages/more_itertools-8.5.0-py3.8.egg-info/dependency_links.txt",start:121905,end:121906,audio:0},{filename:"/lib/python3.8/site-packages/more_itertools-8.5.0-py3.8.egg-info/PKG-INFO",start:121906,end:161217,audio:0},{filename:"/lib/python3.8/site-packages/more_itertools-8.5.0-py3.8.egg-info/SOURCES.txt",start:161217,end:161730,audio:0},{filename:"/lib/python3.8/site-packages/more_itertools-8.5.0-py3.8.egg-info/top_level.txt",start:161730,end:161745,audio:0}],remote_package_size:88911,package_uuid:"99c56eb8-f11a-4aa9-a35e-a44c1855d1b0"})})();