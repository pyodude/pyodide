var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="uncertainties.data";var REMOTE_PACKAGE_BASE="uncertainties.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","uncertainties",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/uncertainties","unumpy",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/uncertainties","lib1to2",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/uncertainties/lib1to2","fixes",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","uncertainties-3.1.4-py3.8.egg-info",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:192021,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1419,2835,4258,5429,6804,8182,9497,10816,12124,13518,14861,16271,17788,19162,20538,21843,23164,24570,25755,26957,28312,29581,30960,32144,33435,34559,35704,37013,37825,39285,40709,42238,43730,45184,46500,47708,48981,50089,51293,52465,53764,54923,56281,57618,58869,60220,61482,62899,64277,65629,66929,68211,69374,70522,71676,72828,74033,75207,76558,77899,79316,80500,81736,82705,84147,85535,86549,87772,89204,90558,91906,93104,94420,95750,96640,98022,99170,100556,101530,102848,104231,105395,106476,107599,108695,109767,110712,111954,113255,114762,116132,117100,118302,119231,120074,120751,121692,122300,123437,124615,125526,126466,127496,128536,129798,130838,131956,132963,134158,135246,136210,136963,137731,138953,140259,141328,142537,143550,144496,145685,147012,148101,149491,150896,151909,153031,154188,155310,156763,158025,159021,160388,161668,162934,164115,165329,166624,167864,169227,170588,171838,173159,174591,175974,176843,177633,178795,179656,180827,182250,183488,184861,186272,187443,188827,190082,191150],sizes:[1419,1416,1423,1171,1375,1378,1315,1319,1308,1394,1343,1410,1517,1374,1376,1305,1321,1406,1185,1202,1355,1269,1379,1184,1291,1124,1145,1309,812,1460,1424,1529,1492,1454,1316,1208,1273,1108,1204,1172,1299,1159,1358,1337,1251,1351,1262,1417,1378,1352,1300,1282,1163,1148,1154,1152,1205,1174,1351,1341,1417,1184,1236,969,1442,1388,1014,1223,1432,1354,1348,1198,1316,1330,890,1382,1148,1386,974,1318,1383,1164,1081,1123,1096,1072,945,1242,1301,1507,1370,968,1202,929,843,677,941,608,1137,1178,911,940,1030,1040,1262,1040,1118,1007,1195,1088,964,753,768,1222,1306,1069,1209,1013,946,1189,1327,1089,1390,1405,1013,1122,1157,1122,1453,1262,996,1367,1280,1266,1181,1214,1295,1240,1363,1361,1250,1321,1432,1383,869,790,1162,861,1171,1423,1238,1373,1411,1171,1384,1255,1068,871],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_uncertainties.data")}Module["addRunDependency"]("datafile_uncertainties.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/uncertainties/umath.py",start:0,end:1319,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/umath_core.py",start:1319,end:16130,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/__init__.py",start:16130,end:25485,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/core.py",start:25485,end:151361,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/test_umath.py",start:151361,end:163205,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/test_uncertainties.py",start:163205,end:246896,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/1to2.py",start:246896,end:247280,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/unumpy/test_ulinalg.py",start:247280,end:250141,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/unumpy/ulinalg.py",start:250141,end:250512,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/unumpy/test_unumpy.py",start:250512,end:261214,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/unumpy/__init__.py",start:261214,end:264055,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/unumpy/core.py",start:264055,end:292311,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/lib1to2/__init__.py",start:292311,end:292311,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/lib1to2/test_1to2.py",start:292311,end:299369,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/lib1to2/fixes/fix_std_dev.py",start:299369,end:300406,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/lib1to2/fixes/fix_ufloat.py",start:300406,end:303447,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/lib1to2/fixes/fix_uarray_umatrix.py",start:303447,end:306003,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/lib1to2/fixes/__init__.py",start:306003,end:306003,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties/lib1to2/fixes/fix_std_devs.py",start:306003,end:306493,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties-3.1.4-py3.8.egg-info/PKG-INFO",start:306493,end:322186,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties-3.1.4-py3.8.egg-info/SOURCES.txt",start:322186,end:323334,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties-3.1.4-py3.8.egg-info/requires.txt",start:323334,end:323419,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties-3.1.4-py3.8.egg-info/top_level.txt",start:323419,end:323433,audio:0},{filename:"/lib/python3.8/site-packages/uncertainties-3.1.4-py3.8.egg-info/dependency_links.txt",start:323433,end:323434,audio:0}],remote_package_size:196117,package_uuid:"b02f7ca5-7950-4026-ba75-b086add6d228"})})();