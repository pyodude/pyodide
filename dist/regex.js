var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="regex.data";var REMOTE_PACKAGE_BASE="regex.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","regex",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","regex-2020.7.14-py3.8.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:512875,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1348,2381,3771,4742,5884,7243,8393,9243,10309,11393,12631,13842,14937,16280,17578,18822,19985,20789,21603,21995,22832,23670,24382,25183,25919,26584,27182,27886,28516,29075,29541,30269,30979,32019,33051,34010,34782,35389,36322,36670,36998,37708,38366,39082,39625,40365,41035,41709,42375,42933,43676,44632,45065,45619,46283,46816,47650,48635,49374,49993,50773,51565,52446,53e3,53709,54531,55296,55884,56577,57419,58240,59226,60329,61313,62309,63279,64087,64841,65599,66218,67006,67667,68410,69148,69945,70691,71321,71943,72396,73241,74113,75013,75911,76968,78135,78874,79558,80437,80997,81474,82496,83425,83900,84819,85778,86653,87391,88533,89341,89947,90584,91272,91537,92219,93533,94578,95214,95580,96066,97248,98561,99743,100775,101415,102092,103058,104079,105309,106522,107550,108569,109561,110556,111557,112554,113552,114548,115548,116543,117544,118538,119534,120616,121895,122946,124064,125138,126664,127871,129082,130091,131374,132724,134154,135791,137001,138228,139539,140821,142134,143338,144432,145377,145820,146562,147545,148289,149287,150081,151036,152044,153205,154745,155831,156921,158337,159550,160121,160864,162018,162997,163966,164956,165886,166946,167706,168294,169378,170479,171710,172961,173930,175324,176438,177387,178676,179917,180833,182256,183272,184256,185340,186531,187670,188882,189869,191188,192592,193566,194650,195648,196665,197631,198514,199393,199849,200311,201032,201737,202328,203642,205002,205955,206947,208292,209308,210711,211780,212786,213530,213984,214462,214781,215347,216014,216447,217022,218331,219540,220676,221533,222309,222909,223455,224109,224462,225560,227083,228466,229792,230913,232315,233847,235341,236485,237894,239062,240434,241686,242944,244304,245856,247286,248748,250321,251280,252046,253346,254522,255483,256496,257484,258295,259260,260039,261355,262203,262985,264211,265768,266972,268404,269859,271187,272754,274238,275639,276437,277320,278449,279301,280030,280688,281350,282021,282668,283132,283767,284524,284754,284951,285137,285323,285514,285700,285886,286077,286247,286437,286630,286812,286995,287390,288482,288987,289731,290374,290983,291368,291831,292543,293278,293735,294134,294761,295022,296370,297086,297858,298823,299722,300378,301206,301931,302789,303437,304294,305160,306458,307121,308067,309427,310010,310583,311239,311848,312450,312910,314084,315278,316075,316272,317265,318127,318503,318944,319366,319901,320531,321125,321725,322254,322794,322992,323554,323835,324221,324970,326197,327070,327984,328877,330034,330752,331674,332266,333206,334067,334875,335980,336414,336767,337167,337488,338454,339244,340225,340647,341696,342490,343857,344628,345060,346304,347015,347637,348605,349313,350261,350586,351123,351621,352160,353070,353260,353923,354703,355632,356558,357363,357839,358814,359538,360223,360959,361783,362525,363381,364129,364841,365667,366441,367212,368115,369008,369781,370471,371121,371975,372332,373041,373652,374215,374697,375229,375761,376261,376893,377478,378240,378823,379302,379875,380394,380938,381488,382163,382953,383744,384541,385308,386042,386769,387474,387995,388900,389716,390454,391248,391957,392663,393391,394395,395316,396118,396824,397661,398472,399529,400323,401818,403866,405914,407884,409806,411594,413533,415581,417445,418753,420164,421556,422832,424e3,424845,425659,426864,427837,428772,429834,430763,431795,432629,433690,434775,435881,436830,437855,438925,440055,441009,442162,443413,444398,445440,446761,447796,448676,449749,450728,451657,452338,453354,454298,455399,456486,457633,458592,459480,460413,461537,462492,463512,464573,465576,466388,467412,468485,469657,470745,471553,472611,473691,474836,475990,476827,477762,478768,479852,480884,481632,482400,483435,484662,485900,487122,488247,489590,490666,491896,493110,494064,495107,496139,496951,497870,498466,499371,500472,501524,502653,503712,504838,506071,507056,508011,508991,510007,511051,512195],sizes:[1348,1033,1390,971,1142,1359,1150,850,1066,1084,1238,1211,1095,1343,1298,1244,1163,804,814,392,837,838,712,801,736,665,598,704,630,559,466,728,710,1040,1032,959,772,607,933,348,328,710,658,716,543,740,670,674,666,558,743,956,433,554,664,533,834,985,739,619,780,792,881,554,709,822,765,588,693,842,821,986,1103,984,996,970,808,754,758,619,788,661,743,738,797,746,630,622,453,845,872,900,898,1057,1167,739,684,879,560,477,1022,929,475,919,959,875,738,1142,808,606,637,688,265,682,1314,1045,636,366,486,1182,1313,1182,1032,640,677,966,1021,1230,1213,1028,1019,992,995,1001,997,998,996,1e3,995,1001,994,996,1082,1279,1051,1118,1074,1526,1207,1211,1009,1283,1350,1430,1637,1210,1227,1311,1282,1313,1204,1094,945,443,742,983,744,998,794,955,1008,1161,1540,1086,1090,1416,1213,571,743,1154,979,969,990,930,1060,760,588,1084,1101,1231,1251,969,1394,1114,949,1289,1241,916,1423,1016,984,1084,1191,1139,1212,987,1319,1404,974,1084,998,1017,966,883,879,456,462,721,705,591,1314,1360,953,992,1345,1016,1403,1069,1006,744,454,478,319,566,667,433,575,1309,1209,1136,857,776,600,546,654,353,1098,1523,1383,1326,1121,1402,1532,1494,1144,1409,1168,1372,1252,1258,1360,1552,1430,1462,1573,959,766,1300,1176,961,1013,988,811,965,779,1316,848,782,1226,1557,1204,1432,1455,1328,1567,1484,1401,798,883,1129,852,729,658,662,671,647,464,635,757,230,197,186,186,191,186,186,191,170,190,193,182,183,395,1092,505,744,643,609,385,463,712,735,457,399,627,261,1348,716,772,965,899,656,828,725,858,648,857,866,1298,663,946,1360,583,573,656,609,602,460,1174,1194,797,197,993,862,376,441,422,535,630,594,600,529,540,198,562,281,386,749,1227,873,914,893,1157,718,922,592,940,861,808,1105,434,353,400,321,966,790,981,422,1049,794,1367,771,432,1244,711,622,968,708,948,325,537,498,539,910,190,663,780,929,926,805,476,975,724,685,736,824,742,856,748,712,826,774,771,903,893,773,690,650,854,357,709,611,563,482,532,532,500,632,585,762,583,479,573,519,544,550,675,790,791,797,767,734,727,705,521,905,816,738,794,709,706,728,1004,921,802,706,837,811,1057,794,1495,2048,2048,1970,1922,1788,1939,2048,1864,1308,1411,1392,1276,1168,845,814,1205,973,935,1062,929,1032,834,1061,1085,1106,949,1025,1070,1130,954,1153,1251,985,1042,1321,1035,880,1073,979,929,681,1016,944,1101,1087,1147,959,888,933,1124,955,1020,1061,1003,812,1024,1073,1172,1088,808,1058,1080,1145,1154,837,935,1006,1084,1032,748,768,1035,1227,1238,1222,1125,1343,1076,1230,1214,954,1043,1032,812,919,596,905,1101,1052,1129,1059,1126,1233,985,955,980,1016,1044,1144,680],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_regex.data")}Module["addRunDependency"]("datafile_regex.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/regex/regex.py",start:0,end:31907,audio:0},{filename:"/lib/python3.8/site-packages/regex/test_regex.py",start:31907,end:245089,audio:0},{filename:"/lib/python3.8/site-packages/regex/_regex.so",start:245089,end:980290,audio:0},{filename:"/lib/python3.8/site-packages/regex/_regex_core.py",start:980290,end:1120445,audio:0},{filename:"/lib/python3.8/site-packages/regex/__init__.py",start:1120445,end:1120510,audio:0},{filename:"/lib/python3.8/site-packages/regex-2020.7.14-py3.8.egg-info/dependency_links.txt",start:1120510,end:1120511,audio:0},{filename:"/lib/python3.8/site-packages/regex-2020.7.14-py3.8.egg-info/PKG-INFO",start:1120511,end:1168081,audio:0},{filename:"/lib/python3.8/site-packages/regex-2020.7.14-py3.8.egg-info/SOURCES.txt",start:1168081,end:1168663,audio:0},{filename:"/lib/python3.8/site-packages/regex-2020.7.14-py3.8.egg-info/top_level.txt",start:1168663,end:1168669,audio:0}],remote_package_size:516971,package_uuid:"0103e9e2-7d60-4110-ab09-701839e22e4d"})})();