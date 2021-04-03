var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="python-dateutil.data";var REMOTE_PACKAGE_BASE="python-dateutil.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","dateutil",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/dateutil","parser",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/dateutil","tz",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/dateutil","zoneinfo",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","python_dateutil-2.8.1-py3.8.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:303846,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1464,3031,4368,5459,6482,7455,8500,9190,9985,10898,11497,12171,12952,14279,15535,16426,17297,18298,19682,20786,21796,22977,24017,24807,25661,26302,27404,28470,29398,30247,31051,31886,32869,34219,35520,36346,37268,38255,39239,40147,41361,42282,43329,44460,45251,45966,47303,48653,49912,51199,52220,53128,54318,55390,56954,58346,59183,60099,61315,62352,63407,64426,65452,66470,67653,68871,70063,70934,71845,72929,73940,74813,76091,77402,78564,79706,80978,82182,83468,84198,85149,85859,86957,88196,89422,90637,91720,92711,93823,95164,96439,97459,98640,99633,100741,101944,103066,104266,105423,106409,107729,108935,110023,111242,112383,113363,114145,115023,116212,117222,117967,118998,120220,121601,122983,124165,125280,126567,127868,128975,130396,131706,132905,134114,135261,136411,137446,138449,140159,142207,144255,146303,148351,150405,152453,154501,156558,158613,160661,162717,164755,166809,168857,170906,172954,175002,177057,179105,181153,183201,185220,187268,189324,191381,193429,195486,197534,199582,201639,203687,205735,207783,209831,211879,213927,215975,218031,220085,222128,224135,226183,228231,230288,232345,234393,236441,238489,240537,242585,244633,246681,248729,250777,252825,254863,256911,258968,261016,263064,265112,267159,269207,271255,273303,275351,277399,279456,281504,283552,285608,287656,289704,291752,293345,294732,296048,297216,298234,299405,300690,302073,303236],sizes:[1464,1567,1337,1091,1023,973,1045,690,795,913,599,674,781,1327,1256,891,871,1001,1384,1104,1010,1181,1040,790,854,641,1102,1066,928,849,804,835,983,1350,1301,826,922,987,984,908,1214,921,1047,1131,791,715,1337,1350,1259,1287,1021,908,1190,1072,1564,1392,837,916,1216,1037,1055,1019,1026,1018,1183,1218,1192,871,911,1084,1011,873,1278,1311,1162,1142,1272,1204,1286,730,951,710,1098,1239,1226,1215,1083,991,1112,1341,1275,1020,1181,993,1108,1203,1122,1200,1157,986,1320,1206,1088,1219,1141,980,782,878,1189,1010,745,1031,1222,1381,1382,1182,1115,1287,1301,1107,1421,1310,1199,1209,1147,1150,1035,1003,1710,2048,2048,2048,2048,2054,2048,2048,2057,2055,2048,2056,2038,2054,2048,2049,2048,2048,2055,2048,2048,2048,2019,2048,2056,2057,2048,2057,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2056,2054,2043,2007,2048,2048,2057,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2038,2048,2057,2048,2048,2048,2047,2048,2048,2048,2048,2048,2057,2048,2048,2056,2048,2048,2048,1593,1387,1316,1168,1018,1171,1285,1383,1163,610],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_python-dateutil.data")}Module["addRunDependency"]("datafile_python-dateutil.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/dateutil/easter.py",start:0,end:2684,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/relativedelta.py",start:2684,end:27588,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/rrule.py",start:27588,end:94327,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tzwin.py",start:94327,end:94386,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/utils.py",start:94386,end:96345,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/_common.py",start:96345,end:97277,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/_version.py",start:97277,end:97419,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/__init__.py",start:97419,end:97641,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/parser/isoparser.py",start:97641,end:110739,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/parser/_parser.py",start:110739,end:169543,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/parser/__init__.py",start:169543,end:171309,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/tz.py",start:171309,end:234241,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/win.py",start:234241,end:247176,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/_common.py",start:247176,end:260153,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/_factories.py",start:260153,end:262722,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/__init__.py",start:262722,end:263166,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/zoneinfo/dateutil-zoneinfo.tar.gz",start:263166,end:416481,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/zoneinfo/rebuild.py",start:416481,end:418200,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/zoneinfo/__init__.py",start:418200,end:424089,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/dependency_links.txt",start:424089,end:424090,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/PKG-INFO",start:424090,end:433409,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/requires.txt",start:433409,end:433418,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/SOURCES.txt",start:433418,end:435486,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/top_level.txt",start:435486,end:435495,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/zip-safe",start:435495,end:435496,audio:0}],remote_package_size:307942,package_uuid:"c905d652-5cc7-4a1e-bb2a-562067526c70"})})();