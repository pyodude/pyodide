var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="attrs.data";var REMOTE_PACKAGE_BASE="attrs.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","attr",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","attrs-20.1.0-py3.8.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:91910,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1172,2245,3361,4488,5822,7041,8201,9432,10531,11699,12800,13520,14878,15952,17220,18199,19411,20015,21136,22580,24037,25437,26756,28152,29379,30651,31730,32935,34107,35163,36249,37534,38633,39545,40783,42150,43593,45006,46468,47935,49247,50388,51284,52544,53671,54843,55749,57040,58207,59376,60500,61490,62012,62618,63855,65080,66239,67372,68309,69682,71065,72367,73538,74708,75926,77406,77992,78532,79075,79977,81164,82338,83746,85107,86540,87745,89120,90454,91622],sizes:[1172,1073,1116,1127,1334,1219,1160,1231,1099,1168,1101,720,1358,1074,1268,979,1212,604,1121,1444,1457,1400,1319,1396,1227,1272,1079,1205,1172,1056,1086,1285,1099,912,1238,1367,1443,1413,1462,1467,1312,1141,896,1260,1127,1172,906,1291,1167,1169,1124,990,522,606,1237,1225,1159,1133,937,1373,1383,1302,1171,1170,1218,1480,586,540,543,902,1187,1174,1408,1361,1433,1205,1375,1334,1168,288],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_attrs.data")}Module["addRunDependency"]("datafile_attrs.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/attr/converters.py",start:0,end:2214,audio:0},{filename:"/lib/python3.8/site-packages/attr/converters.pyi",start:2214,end:2594,audio:0},{filename:"/lib/python3.8/site-packages/attr/exceptions.py",start:2594,end:4544,audio:0},{filename:"/lib/python3.8/site-packages/attr/exceptions.pyi",start:4544,end:5083,audio:0},{filename:"/lib/python3.8/site-packages/attr/filters.py",start:5083,end:6181,audio:0},{filename:"/lib/python3.8/site-packages/attr/filters.pyi",start:6181,end:6395,audio:0},{filename:"/lib/python3.8/site-packages/attr/py.typed",start:6395,end:6395,audio:0},{filename:"/lib/python3.8/site-packages/attr/setters.py",start:6395,end:7829,audio:0},{filename:"/lib/python3.8/site-packages/attr/setters.pyi",start:7829,end:8396,audio:0},{filename:"/lib/python3.8/site-packages/attr/validators.py",start:8396,end:19893,audio:0},{filename:"/lib/python3.8/site-packages/attr/validators.pyi",start:19893,end:21761,audio:0},{filename:"/lib/python3.8/site-packages/attr/_compat.py",start:21761,end:29087,audio:0},{filename:"/lib/python3.8/site-packages/attr/_config.py",start:29087,end:29601,audio:0},{filename:"/lib/python3.8/site-packages/attr/_funcs.py",start:29601,end:41241,audio:0},{filename:"/lib/python3.8/site-packages/attr/_make.py",start:41241,end:125374,audio:0},{filename:"/lib/python3.8/site-packages/attr/_next_gen.py",start:125374,end:128152,audio:0},{filename:"/lib/python3.8/site-packages/attr/_version_info.py",start:128152,end:130314,audio:0},{filename:"/lib/python3.8/site-packages/attr/_version_info.pyi",start:130314,end:130523,audio:0},{filename:"/lib/python3.8/site-packages/attr/__init__.py",start:130523,end:132091,audio:0},{filename:"/lib/python3.8/site-packages/attr/__init__.pyi",start:132091,end:144543,audio:0},{filename:"/lib/python3.8/site-packages/attrs-20.1.0-py3.8.egg-info/dependency_links.txt",start:144543,end:144544,audio:0},{filename:"/lib/python3.8/site-packages/attrs-20.1.0-py3.8.egg-info/not-zip-safe",start:144544,end:144545,audio:0},{filename:"/lib/python3.8/site-packages/attrs-20.1.0-py3.8.egg-info/PKG-INFO",start:144545,end:160239,audio:0},{filename:"/lib/python3.8/site-packages/attrs-20.1.0-py3.8.egg-info/requires.txt",start:160239,end:160500,audio:0},{filename:"/lib/python3.8/site-packages/attrs-20.1.0-py3.8.egg-info/SOURCES.txt",start:160500,end:162316,audio:0},{filename:"/lib/python3.8/site-packages/attrs-20.1.0-py3.8.egg-info/top_level.txt",start:162316,end:162321,audio:0}],remote_package_size:96006,package_uuid:"a67e634d-de7e-4de0-95e3-6bc56afc780a"})})();