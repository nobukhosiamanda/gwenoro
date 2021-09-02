var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_NDVI_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3309383.061548, -2253865.235936, 3332557.655791, -2201814.693254]
                            })
                        });var lyr_NDWI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDWI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDWI_1.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3309383.061548, -2253865.235936, 3332557.655791, -2201814.693254]
                            })
                        });var format_leakages1_2 = new ol.format.GeoJSON();
var features_leakages1_2 = format_leakages1_2.readFeatures(json_leakages1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leakages1_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_leakages1_2.addFeatures(features_leakages1_2);var lyr_leakages1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_leakages1_2, 
                style: style_leakages1_2,
                title: '<img src="styles/legend/leakages1_2.png" /> leakages1'
            });var format_DetectedleakagesNDWI_3 = new ol.format.GeoJSON();
var features_DetectedleakagesNDWI_3 = format_DetectedleakagesNDWI_3.readFeatures(json_DetectedleakagesNDWI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DetectedleakagesNDWI_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DetectedleakagesNDWI_3.addFeatures(features_DetectedleakagesNDWI_3);var lyr_DetectedleakagesNDWI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DetectedleakagesNDWI_3, 
                style: style_DetectedleakagesNDWI_3,
                title: '<img src="styles/legend/DetectedleakagesNDWI_3.png" /> DetectedleakagesNDWI'
            });var format_gwenoropipelinenework_4 = new ol.format.GeoJSON();
var features_gwenoropipelinenework_4 = format_gwenoropipelinenework_4.readFeatures(json_gwenoropipelinenework_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gwenoropipelinenework_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_gwenoropipelinenework_4.addFeatures(features_gwenoropipelinenework_4);var lyr_gwenoropipelinenework_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gwenoropipelinenework_4, 
                style: style_gwenoropipelinenework_4,
                title: '<img src="styles/legend/gwenoropipelinenework_4.png" /> gwenoro pipeline nework'
            });var format_DetectedleakagesNDVI_5 = new ol.format.GeoJSON();
var features_DetectedleakagesNDVI_5 = format_DetectedleakagesNDVI_5.readFeatures(json_DetectedleakagesNDVI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DetectedleakagesNDVI_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DetectedleakagesNDVI_5.addFeatures(features_DetectedleakagesNDVI_5);var lyr_DetectedleakagesNDVI_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DetectedleakagesNDVI_5, 
                style: style_DetectedleakagesNDVI_5,
                title: '<img src="styles/legend/DetectedleakagesNDVI_5.png" /> DetectedleakagesNDVI'
            });

lyr_NDVI_0.setVisible(true);lyr_NDWI_1.setVisible(true);lyr_leakages1_2.setVisible(true);lyr_DetectedleakagesNDWI_3.setVisible(true);lyr_gwenoropipelinenework_4.setVisible(true);lyr_DetectedleakagesNDVI_5.setVisible(true);
var layersList = [baseLayer,lyr_NDVI_0,lyr_NDWI_1,lyr_leakages1_2,lyr_DetectedleakagesNDWI_3,lyr_gwenoropipelinenework_4,lyr_DetectedleakagesNDVI_5];
lyr_leakages1_2.set('fieldAliases', {'ec5_uuid': 'ec5_uuid', 'created_at': 'created_at', 'uploaded_a': 'uploaded_a', 'title': 'title', '1_Line_Des': '1_Line_Des', '2_Features': '2_Features', '3_State_of': '3_State_of', '4_Explanat': '4_Explanat', '5_Picture': '5_Picture', 'lat_6_Loca': 'lat_6_Loca', 'long_6_Loc': 'long_6_Loc', 'accuracy_6': 'accuracy_6', 'UTM_Eastin': 'UTM_Eastin', 'UTM_Northi': 'UTM_Northi', 'UTM_Zone_6': 'UTM_Zone_6', });
lyr_DetectedleakagesNDWI_3.set('fieldAliases', {'id': 'id', });
lyr_gwenoropipelinenework_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Diameter': 'Diameter', 'Material': 'Material', 'Comments': 'Comments', 'Shape_Leng': 'Shape_Leng', 'function': 'function', 'LENGTH': 'LENGTH', 'DC_ID': 'DC_ID', 'NODE1': 'NODE1', 'NODE2': 'NODE2', 'ROUGHNESS': 'ROUGHNESS', 'MINORLOSS': 'MINORLOSS', 'RESULT_FLO': 'RESULT_FLO', 'RESULT_VEL': 'RESULT_VEL', 'RESULT_HEA': 'RESULT_HEA', 'STATUS': 'STATUS', 'PROBLEMS': 'PROBLEMS', 'TAG': 'TAG', });
lyr_DetectedleakagesNDVI_5.set('fieldAliases', {'id': 'id', });
lyr_leakages1_2.set('fieldImages', {'ec5_uuid': 'TextEdit', 'created_at': 'TextEdit', 'uploaded_a': 'TextEdit', 'title': 'TextEdit', '1_Line_Des': 'TextEdit', '2_Features': 'TextEdit', '3_State_of': 'TextEdit', '4_Explanat': 'TextEdit', '5_Picture': 'TextEdit', 'lat_6_Loca': 'TextEdit', 'long_6_Loc': 'TextEdit', 'accuracy_6': 'TextEdit', 'UTM_Eastin': 'TextEdit', 'UTM_Northi': 'TextEdit', 'UTM_Zone_6': 'TextEdit', });
lyr_DetectedleakagesNDWI_3.set('fieldImages', {'id': 'TextEdit', });
lyr_gwenoropipelinenework_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Diameter': 'TextEdit', 'Material': 'TextEdit', 'Comments': 'TextEdit', 'Shape_Leng': 'TextEdit', 'function': 'TextEdit', 'LENGTH': 'TextEdit', 'DC_ID': 'TextEdit', 'NODE1': 'TextEdit', 'NODE2': 'TextEdit', 'ROUGHNESS': 'TextEdit', 'MINORLOSS': 'TextEdit', 'RESULT_FLO': 'TextEdit', 'RESULT_VEL': 'TextEdit', 'RESULT_HEA': 'TextEdit', 'STATUS': 'TextEdit', 'PROBLEMS': 'TextEdit', 'TAG': 'TextEdit', });
lyr_DetectedleakagesNDVI_5.set('fieldImages', {'id': 'TextEdit', });
lyr_leakages1_2.set('fieldLabels', {'ec5_uuid': 'no label', 'created_at': 'no label', 'uploaded_a': 'no label', 'title': 'no label', '1_Line_Des': 'no label', '2_Features': 'no label', '3_State_of': 'no label', '4_Explanat': 'no label', '5_Picture': 'no label', 'lat_6_Loca': 'no label', 'long_6_Loc': 'no label', 'accuracy_6': 'no label', 'UTM_Eastin': 'no label', 'UTM_Northi': 'no label', 'UTM_Zone_6': 'no label', });
lyr_DetectedleakagesNDWI_3.set('fieldLabels', {'id': 'no label', });
lyr_gwenoropipelinenework_4.set('fieldLabels', {'OBJECTID': 'no label', 'Diameter': 'no label', 'Material': 'no label', 'Comments': 'no label', 'Shape_Leng': 'no label', 'function': 'no label', 'LENGTH': 'no label', 'DC_ID': 'no label', 'NODE1': 'no label', 'NODE2': 'no label', 'ROUGHNESS': 'no label', 'MINORLOSS': 'no label', 'RESULT_FLO': 'no label', 'RESULT_VEL': 'no label', 'RESULT_HEA': 'no label', 'STATUS': 'no label', 'PROBLEMS': 'no label', 'TAG': 'no label', });
lyr_DetectedleakagesNDVI_5.set('fieldLabels', {'id': 'no label', });
lyr_DetectedleakagesNDVI_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});