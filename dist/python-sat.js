var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="python-sat.data";var REMOTE_PACKAGE_BASE="python-sat.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","pysat",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/pysat","examples",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","python_sat-0.1.6.dev6-py3.8.egg-info",true,true);Module["FS_createPath"]("/","bin",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:1082341,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1403,2155,3005,3916,4673,5545,6869,8303,9789,11330,12582,13763,14636,15837,16758,17564,18679,19528,20435,21612,22938,24309,25709,27095,28480,29865,31200,32626,34036,35398,36972,38381,38577,39470,40837,42348,42792,44120,45513,46894,48293,49664,50461,51142,51750,52614,53556,54404,55235,56146,57118,58039,59122,60078,60979,61926,62905,63860,64916,65882,66924,67923,68925,69954,70926,71904,72950,73946,74946,75952,77012,78038,78833,79469,80132,80746,81439,82186,83220,84016,84789,85429,86530,87187,87849,88430,89266,90160,91007,91857,92728,93602,94555,95496,96445,97252,98112,99019,99954,100883,101896,102751,103765,104695,105647,106619,107607,108513,109504,110430,111419,112366,113369,114364,115308,115939,116607,117373,117988,118687,119459,121277,122496,123623,125263,126908,128465,129697,131170,132508,133831,135006,136501,137691,139004,140447,141299,142948,144389,146006,147578,149111,150528,152112,153689,154968,156281,157679,159229,160750,162121,163741,165366,166919,168231,169637,170760,172310,173781,174688,175971,177362,178626,180156,181630,183015,184207,185726,187243,188594,190059,191249,192831,194336,195857,197117,198737,200285,201918,203090,204624,206042,207348,208902,210497,212111,213684,215129,216336,217734,218685,219990,221272,222654,223381,224500,225884,227316,228747,230293,231782,233326,234535,235390,236554,237893,239223,240583,241993,243098,243938,244961,246426,247840,249012,250524,252005,253344,254445,255620,256729,257832,258821,259460,260065,260661,261300,261958,262593,263216,263814,264403,265e3,265581,266201,266764,267275,267798,268376,268983,269976,270708,271465,272197,273157,274079,275193,276286,277037,277800,279022,279767,280455,281431,282187,283354,283900,284768,285874,287370,288920,290483,292038,293601,294183,295049,296290,297877,299254,300740,302201,303811,305154,305905,306471,307198,308512,310009,311597,312724,314056,314973,315889,316824,317779,318717,319656,320245,320883,321713,322693,323639,324742,325500,326408,327130,328303,329683,331247,332582,334096,335313,336663,337906,339450,340744,342298,343518,345050,346511,348074,349604,351087,352667,354159,355464,356645,358238,359779,361047,362301,363787,365256,366847,368327,369964,371589,373096,374355,375422,376521,377777,378803,379401,380121,380793,382193,383414,384556,386090,387471,388907,390128,391702,393387,394820,396405,397952,399258,400902,402431,403875,405304,406915,408335,409472,410236,411223,412658,414239,415488,416684,417887,419371,420806,422100,423484,424983,426461,427939,429479,430980,431966,433475,435092,436708,437874,439239,440265,440867,441533,442258,442961,444001,445529,447014,448607,449547,450445,451649,453055,453831,454549,455376,456550,458118,459710,461263,462822,464186,465734,467216,468280,469751,471493,473093,474702,476119,477679,479240,480802,481953,483537,485191,486678,488308,489953,491407,492435,493377,494594,495811,496516,497191,498433,499867,501464,502922,504547,505964,507477,508924,510136,511678,513385,515030,516589,518070,519635,521183,522764,523753,525258,526800,528450,529847,530848,531827,533085,534209,534929,535818,536874,537989,539524,540863,542332,543948,545594,547027,548587,550081,551701,553178,554691,555946,557623,559014,560543,562140,563049,564292,565744,566462,567174,568421,569808,571436,572887,574376,575845,577246,578639,580139,581638,583260,584775,586427,587953,589021,590275,591561,592210,593202,594444,595970,597466,599014,600613,602194,603692,605333,606816,608500,609940,610988,612266,613609,614830,615742,617194,618784,620008,621538,623104,624622,626116,627619,629221,630842,632502,633899,635088,635957,637240,638685,639888,641167,642204,643472,644725,645975,647130,648436,649524,650795,652002,653162,654446,655581,656847,658052,659209,660492,661629,662910,664214,665379,666564,667723,669145,670335,671674,672679,673802,675246,676444,677729,678746,680037,681268,682474,683781,684924,686218,686840,687831,689081,690080,691070,692223,693411,694573,695745,696850,697884,698916,699947,700965,701321,701839,702574,703480,704341,705284,706190,707077,707940,708792,709705,710408,710628,711335,711756,713104,714456,715645,716684,717752,718776,719862,720806,722086,723066,724174,725220,726497,727567,728802,729779,730826,732113,733272,734424,735850,737336,738637,739908,741190,742469,743785,744964,746158,747364,748499,749718,750876,751896,753305,754613,755955,757422,758681,759918,761127,762179,763293,764342,765445,766701,767800,768826,770038,771159,772296,773384,774463,775601,776716,777723,778676,779971,781061,782216,783151,784306,785611,786612,787802,788890,789952,791386,792770,793940,795197,796484,797727,798848,799986,801338,802728,803923,805132,806368,807630,808452,809589,810852,811960,813033,814233,815416,816391,817413,818269,819322,820392,821462,822274,823171,824126,825144,825890,826729,827681,828662,829441,830286,831251,832244,833130,834002,835004,835670,836585,837489,838511,839217,840059,841016,842005,842771,843611,844569,845387,846247,847157,848013,848751,849673,850572,851492,852182,853063,854113,855521,856778,857992,859250,860538,861671,862889,864144,865597,866772,868012,869248,870574,871867,873084,874322,875446,876681,878165,879409,880663,881931,883087,884068,885384,886754,888080,889358,890600,891841,893058,894355,895636,896887,897922,899368,900716,901987,903180,904319,905510,906730,907851,909344,910554,911732,913008,914267,915507,916704,917907,918933,920343,921586,922650,924083,925359,926625,927936,929137,930630,931978,933244,934515,935797,937081,938156,939341,940448,941518,942738,943941,945154,946363,947661,948951,950191,951400,952602,953774,955033,956246,957567,958687,959871,961163,962390,963599,964678,965739,967014,968055,969046,970093,971210,972178,973327,974416,975588,976979,978151,978808,980130,981338,982656,983887,985075,986297,987464,988736,989991,991381,992516,993880,995272,996439,997835,998809,1000110,1001120,1002565,1003796,1005013,1006269,1007543,1008806,1010077,1011312,1012548,1013676,1015150,1016485,1017709,1018840,1020112,1021282,1022383,1023694,1025013,1026296,1027517,1028761,1030023,1031266,1032475,1033702,1034832,1036178,1037419,1038669,1040022,1041344,1042545,1043797,1045081,1046393,1047804,1049141,1050366,1051632,1052865,1053891,1055126,1056289,1057257,1058551,1059786,1061051,1062120,1063439,1064731,1065960,1066964,1068124,1069314,1070531,1071875,1073186,1074302,1075472,1076719,1077811,1079022,1080084,1081204,1082301],sizes:[1403,752,850,911,757,872,1324,1434,1486,1541,1252,1181,873,1201,921,806,1115,849,907,1177,1326,1371,1400,1386,1385,1385,1335,1426,1410,1362,1574,1409,196,893,1367,1511,444,1328,1393,1381,1399,1371,797,681,608,864,942,848,831,911,972,921,1083,956,901,947,979,955,1056,966,1042,999,1002,1029,972,978,1046,996,1e3,1006,1060,1026,795,636,663,614,693,747,1034,796,773,640,1101,657,662,581,836,894,847,850,871,874,953,941,949,807,860,907,935,929,1013,855,1014,930,952,972,988,906,991,926,989,947,1003,995,944,631,668,766,615,699,772,1818,1219,1127,1640,1645,1557,1232,1473,1338,1323,1175,1495,1190,1313,1443,852,1649,1441,1617,1572,1533,1417,1584,1577,1279,1313,1398,1550,1521,1371,1620,1625,1553,1312,1406,1123,1550,1471,907,1283,1391,1264,1530,1474,1385,1192,1519,1517,1351,1465,1190,1582,1505,1521,1260,1620,1548,1633,1172,1534,1418,1306,1554,1595,1614,1573,1445,1207,1398,951,1305,1282,1382,727,1119,1384,1432,1431,1546,1489,1544,1209,855,1164,1339,1330,1360,1410,1105,840,1023,1465,1414,1172,1512,1481,1339,1101,1175,1109,1103,989,639,605,596,639,658,635,623,598,589,597,581,620,563,511,523,578,607,993,732,757,732,960,922,1114,1093,751,763,1222,745,688,976,756,1167,546,868,1106,1496,1550,1563,1555,1563,582,866,1241,1587,1377,1486,1461,1610,1343,751,566,727,1314,1497,1588,1127,1332,917,916,935,955,938,939,589,638,830,980,946,1103,758,908,722,1173,1380,1564,1335,1514,1217,1350,1243,1544,1294,1554,1220,1532,1461,1563,1530,1483,1580,1492,1305,1181,1593,1541,1268,1254,1486,1469,1591,1480,1637,1625,1507,1259,1067,1099,1256,1026,598,720,672,1400,1221,1142,1534,1381,1436,1221,1574,1685,1433,1585,1547,1306,1644,1529,1444,1429,1611,1420,1137,764,987,1435,1581,1249,1196,1203,1484,1435,1294,1384,1499,1478,1478,1540,1501,986,1509,1617,1616,1166,1365,1026,602,666,725,703,1040,1528,1485,1593,940,898,1204,1406,776,718,827,1174,1568,1592,1553,1559,1364,1548,1482,1064,1471,1742,1600,1609,1417,1560,1561,1562,1151,1584,1654,1487,1630,1645,1454,1028,942,1217,1217,705,675,1242,1434,1597,1458,1625,1417,1513,1447,1212,1542,1707,1645,1559,1481,1565,1548,1581,989,1505,1542,1650,1397,1001,979,1258,1124,720,889,1056,1115,1535,1339,1469,1616,1646,1433,1560,1494,1620,1477,1513,1255,1677,1391,1529,1597,909,1243,1452,718,712,1247,1387,1628,1451,1489,1469,1401,1393,1500,1499,1622,1515,1652,1526,1068,1254,1286,649,992,1242,1526,1496,1548,1599,1581,1498,1641,1483,1684,1440,1048,1278,1343,1221,912,1452,1590,1224,1530,1566,1518,1494,1503,1602,1621,1660,1397,1189,869,1283,1445,1203,1279,1037,1268,1253,1250,1155,1306,1088,1271,1207,1160,1284,1135,1266,1205,1157,1283,1137,1281,1304,1165,1185,1159,1422,1190,1339,1005,1123,1444,1198,1285,1017,1291,1231,1206,1307,1143,1294,622,991,1250,999,990,1153,1188,1162,1172,1105,1034,1032,1031,1018,356,518,735,906,861,943,906,887,863,852,913,703,220,707,421,1348,1352,1189,1039,1068,1024,1086,944,1280,980,1108,1046,1277,1070,1235,977,1047,1287,1159,1152,1426,1486,1301,1271,1282,1279,1316,1179,1194,1206,1135,1219,1158,1020,1409,1308,1342,1467,1259,1237,1209,1052,1114,1049,1103,1256,1099,1026,1212,1121,1137,1088,1079,1138,1115,1007,953,1295,1090,1155,935,1155,1305,1001,1190,1088,1062,1434,1384,1170,1257,1287,1243,1121,1138,1352,1390,1195,1209,1236,1262,822,1137,1263,1108,1073,1200,1183,975,1022,856,1053,1070,1070,812,897,955,1018,746,839,952,981,779,845,965,993,886,872,1002,666,915,904,1022,706,842,957,989,766,840,958,818,860,910,856,738,922,899,920,690,881,1050,1408,1257,1214,1258,1288,1133,1218,1255,1453,1175,1240,1236,1326,1293,1217,1238,1124,1235,1484,1244,1254,1268,1156,981,1316,1370,1326,1278,1242,1241,1217,1297,1281,1251,1035,1446,1348,1271,1193,1139,1191,1220,1121,1493,1210,1178,1276,1259,1240,1197,1203,1026,1410,1243,1064,1433,1276,1266,1311,1201,1493,1348,1266,1271,1282,1284,1075,1185,1107,1070,1220,1203,1213,1209,1298,1290,1240,1209,1202,1172,1259,1213,1321,1120,1184,1292,1227,1209,1079,1061,1275,1041,991,1047,1117,968,1149,1089,1172,1391,1172,657,1322,1208,1318,1231,1188,1222,1167,1272,1255,1390,1135,1364,1392,1167,1396,974,1301,1010,1445,1231,1217,1256,1274,1263,1271,1235,1236,1128,1474,1335,1224,1131,1272,1170,1101,1311,1319,1283,1221,1244,1262,1243,1209,1227,1130,1346,1241,1250,1353,1322,1201,1252,1284,1312,1411,1337,1225,1266,1233,1026,1235,1163,968,1294,1235,1265,1069,1319,1292,1229,1004,1160,1190,1217,1344,1311,1116,1170,1247,1092,1211,1062,1120,1097,40],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_python-sat.data")}Module["addRunDependency"]("datafile_python-sat.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/pycard.so",start:0,end:69761,audio:0},{filename:"/lib/python3.8/site-packages/pysolvers.so",start:69761,end:1250611,audio:0},{filename:"/lib/python3.8/site-packages/pysat/__init__.py",start:1250611,end:1251264,audio:0},{filename:"/lib/python3.8/site-packages/pysat/_fileio.py",start:1251264,end:1257078,audio:0},{filename:"/lib/python3.8/site-packages/pysat/_utils.py",start:1257078,end:1258418,audio:0},{filename:"/lib/python3.8/site-packages/pysat/card.py",start:1258418,end:1286831,audio:0},{filename:"/lib/python3.8/site-packages/pysat/formula.py",start:1286831,end:1354174,audio:0},{filename:"/lib/python3.8/site-packages/pysat/pb.py",start:1354174,end:1369249,audio:0},{filename:"/lib/python3.8/site-packages/pysat/solvers.py",start:1369249,end:1484421,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/__init__.py",start:1484421,end:1484421,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/fm.py",start:1484421,end:1502194,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/genhard.py",start:1502194,end:1521184,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/hitman.py",start:1521184,end:1534580,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/hornify.py",start:1534580,end:1537160,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/lbx.py",start:1537160,end:1557578,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/lsu.py",start:1557578,end:1572840,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/mcsls.py",start:1572840,end:1592338,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/models.py",start:1592338,end:1597625,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/musx.py",start:1597625,end:1608145,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/rc2.py",start:1608145,end:1671853,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/sudoku.py",start:1671853,end:1686724,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/usage.py",start:1686724,end:1688907,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/PKG-INFO",start:1688907,end:1690184,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/SOURCES.txt",start:1690184,end:1694207,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/dependency_links.txt",start:1694207,end:1694208,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/requires.txt",start:1694208,end:1694265,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/top_level.txt",start:1694265,end:1694288,audio:0},{filename:"/bin/fm.py",start:1694288,end:1712064,audio:0},{filename:"/bin/genhard.py",start:1712064,end:1731057,audio:0},{filename:"/bin/lbx.py",start:1731057,end:1751478,audio:0},{filename:"/bin/lsu.py",start:1751478,end:1766743,audio:0},{filename:"/bin/mcsls.py",start:1766743,end:1786244,audio:0},{filename:"/bin/models.py",start:1786244,end:1791534,audio:0},{filename:"/bin/musx.py",start:1791534,end:1802057,audio:0},{filename:"/bin/rc2.py",start:1802057,end:1865768,audio:0}],remote_package_size:1086437,package_uuid:"d134633c-6eae-4508-8ba1-f3429d70f983"})})();