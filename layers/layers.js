var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMap_1 = new ol.layer.Tile({
            'title': 'Google Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_StPatrickCounty_3 = new ol.format.GeoJSON();
var features_StPatrickCounty_3 = format_StPatrickCounty_3.readFeatures(json_StPatrickCounty_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StPatrickCounty_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StPatrickCounty_3.addFeatures(features_StPatrickCounty_3);
var lyr_StPatrickCounty_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StPatrickCounty_3, 
                style: style_StPatrickCounty_3,
                interactive: true,
                title: '<img src="styles/legend/StPatrickCounty_3.png" /> St. Patrick County'
            });
var format_VictoriaCounty_4 = new ol.format.GeoJSON();
var features_VictoriaCounty_4 = format_VictoriaCounty_4.readFeatures(json_VictoriaCounty_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VictoriaCounty_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VictoriaCounty_4.addFeatures(features_VictoriaCounty_4);
var lyr_VictoriaCounty_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VictoriaCounty_4, 
                style: style_VictoriaCounty_4,
                interactive: true,
                title: '<img src="styles/legend/VictoriaCounty_4.png" /> Victoria County'
            });
var format_ElectoralDistricts_5 = new ol.format.GeoJSON();
var features_ElectoralDistricts_5 = format_ElectoralDistricts_5.readFeatures(json_ElectoralDistricts_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectoralDistricts_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectoralDistricts_5.addFeatures(features_ElectoralDistricts_5);
var lyr_ElectoralDistricts_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElectoralDistricts_5, 
                style: style_ElectoralDistricts_5,
                interactive: true,
    title: 'Electoral Districts<br />\
    <img src="styles/legend/ElectoralDistricts_5_0.png" /> BARRACKPORE WEST<br />\
    <img src="styles/legend/ElectoralDistricts_5_1.png" /> BRONTE<br />\
    <img src="styles/legend/ElectoralDistricts_5_2.png" /> DEBE EAST/L\'ESPERANCE/UNION HALL<br />\
    <img src="styles/legend/ElectoralDistricts_5_3.png" /> DEBE SOUTH<br />\
    <img src="styles/legend/ElectoralDistricts_5_4.png" /> LA FORTUNE/DEBE NORTH<br />\
    <img src="styles/legend/ElectoralDistricts_5_5.png" /> LA ROMAINE<br />\
    <img src="styles/legend/ElectoralDistricts_5_6.png" /> PALMISTE/HERMITAGE<br />\
    <img src="styles/legend/ElectoralDistricts_5_7.png" /> PENAL<br />\
    <img src="styles/legend/ElectoralDistricts_5_8.png" /> QUINAM/ MORNE DIABLO<br />\
    <img src="styles/legend/ElectoralDistricts_5_9.png" /> ROCHARD/BARRACKPORE EAST<br />'
        });
var format_Parcels_6 = new ol.format.GeoJSON();
var features_Parcels_6 = format_Parcels_6.readFeatures(json_Parcels_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcels_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcels_6.addFeatures(features_Parcels_6);
var lyr_Parcels_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcels_6, 
                style: style_Parcels_6,
                interactive: true,
                title: '<img src="styles/legend/Parcels_6.png" /> Parcels'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMap_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_StPatrickCounty_3.setVisible(true);lyr_VictoriaCounty_4.setVisible(true);lyr_ElectoralDistricts_5.setVisible(true);lyr_Parcels_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMap_1,lyr_GoogleSatellite_2,lyr_StPatrickCounty_3,lyr_VictoriaCounty_4,lyr_ElectoralDistricts_5,lyr_Parcels_6];
lyr_StPatrickCounty_3.set('fieldAliases', {'fid': 'fid', 'COUNTY': 'COUNTY', });
lyr_VictoriaCounty_4.set('fieldAliases', {'fid': 'fid', 'COUNTY': 'COUNTY', });
lyr_ElectoralDistricts_5.set('fieldAliases', {'fid': 'fid', 'ED_2017': 'ED_2017', 'Councillor': 'Councillor', });
lyr_Parcels_6.set('fieldAliases', {'fid': 'fid', 'Parcel No': 'Parcel No', 'Area in m^2': 'Area in m^2', });
lyr_StPatrickCounty_3.set('fieldImages', {'fid': 'TextEdit', 'COUNTY': 'TextEdit', });
lyr_VictoriaCounty_4.set('fieldImages', {'fid': 'TextEdit', 'COUNTY': 'TextEdit', });
lyr_ElectoralDistricts_5.set('fieldImages', {'fid': 'TextEdit', 'ED_2017': 'TextEdit', 'Councillor': 'TextEdit', });
lyr_Parcels_6.set('fieldImages', {'fid': 'TextEdit', 'Parcel No': 'TextEdit', 'Area in m^2': 'TextEdit', });
lyr_StPatrickCounty_3.set('fieldLabels', {'fid': 'header label', 'COUNTY': 'header label', });
lyr_VictoriaCounty_4.set('fieldLabels', {'fid': 'header label', 'COUNTY': 'header label', });
lyr_ElectoralDistricts_5.set('fieldLabels', {'fid': 'header label', 'ED_2017': 'header label', 'Councillor': 'header label', });
lyr_Parcels_6.set('fieldLabels', {'fid': 'header label', 'Parcel No': 'header label', 'Area in m^2': 'header label', });
lyr_Parcels_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});