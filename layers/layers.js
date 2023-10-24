var wms_layers = [];

var format_ADMINISTRASI_LN_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_0 = format_ADMINISTRASI_LN_25K_0.readFeatures(json_ADMINISTRASI_LN_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_0.addFeatures(features_ADMINISTRASI_LN_25K_0);
var lyr_ADMINISTRASI_LN_25K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASI_LN_25K_0, 
                style: style_ADMINISTRASI_LN_25K_0,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_0.png" /> ADMINISTRASI_LN_25K'
            });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> Amansari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> Babakanraden<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> Babelankota<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> Bahagia<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> Banjarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> Bantarjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> Bantarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> Batujaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> Bekasijaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> Bojongmangu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> Bojongsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> Bunibakti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> Burangkeng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> Cakung Timur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> Ciantra<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> Cibarusahjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> Cibarusankota<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> Cibatu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> Cibening<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> Cibuntu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> Cicau<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> Cijengkol<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> Cikarageman<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> Cikarangkota<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> Cikedokan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> Ciketingudik<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> Cilangkara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> Ciledug<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> Cimuning<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> Cipayung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> Cipenjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> Cipeucang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> Ciptasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> Danauindah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> Dewisari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> Durenjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> Gandamekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_37.png" /> Gandasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_38.png" /> Gandoang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_39.png" /> Harapanjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_40.png" /> Harjamekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_41.png" /> Hegarmanah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_42.png" /> Hegarmukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_43.png" /> Huripjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_44.png" /> Jatibaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_45.png" /> Jatimulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_46.png" /> Jatireja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_47.png" /> Jatisari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_48.png" /> Jatiwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_49.png" /> Jayabakti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_50.png" /> Jayalaksana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_51.png" /> Jayamukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_52.png" /> Jayamulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_53.png" /> Jayasakti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_54.png" /> Jayasempurna<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_55.png" /> Jejalenjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_56.png" /> Jonggol<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_57.png" /> Kalangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_58.png" /> Kaliabangtengah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_59.png" /> Kalijaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_60.png" /> Kampungsawah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_61.png" /> Karanganyar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_62.png" /> Karangasih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_63.png" /> Karangbahagia<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_64.png" /> Karangbaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_65.png" /> Karangharja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_66.png" /> Karangharum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_67.png" /> Karanghaur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_68.png" /> Karangindah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_69.png" /> Karangjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_70.png" /> Karangmekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_71.png" /> Karangmukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_72.png" /> Karangmulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_73.png" /> Karangpatri<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_74.png" /> Karangraharja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_75.png" /> Karangrahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_76.png" /> Karangreja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_77.png" /> Karangsambung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_78.png" /> Karangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_79.png" /> Karangsatria<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_80.png" /> Karangsatu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_81.png" /> Karangsegar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_82.png" /> Karangsentosa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_83.png" /> Karangsetia<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_84.png" /> Karyamakmur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_85.png" /> Karyasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_86.png" /> Kebalen<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_87.png" /> Kedungjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_88.png" /> Kedungpengawas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_89.png" /> Kedungwaringin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_90.png" /> Kertajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_91.png" /> Kertamukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_92.png" /> Kertarahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_93.png" /> Kertasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_94.png" /> Kutaampel<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_95.png" /> Labansari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_96.png" /> Lambangjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_97.png" /> Lambangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_98.png" /> Lenggahjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_99.png" /> Lenggahsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_100.png" /> Lubangbuaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_101.png" /> Mangunjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_102.png" /> Margahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_103.png" /> Marunda<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_104.png" /> Medalkrisna<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_105.png" /> Medangasem<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_106.png" /> Medansatria<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_107.png" /> Mekarjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_108.png" /> Mekarmukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_109.png" /> Mekarmulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_110.png" /> Mekarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_111.png" /> Mekarwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_112.png" /> Muarabakti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_113.png" /> Mukti Jaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_114.png" /> Muktiwari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_115.png" /> Mulangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_116.png" /> Mulyajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_117.png" /> Mustikajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_118.png" /> Mustikasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_119.png" /> Nagacipta<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_120.png" /> Nagasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_121.png" /> Pahlawansetia<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_122.png" /> Pantaibahagia<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_123.png" /> Pantaibakti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_124.png" /> Pantaiharapanjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_125.png" /> Pantaihurip<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_126.png" /> Pantaimakmur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_127.png" /> Pantaimekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_128.png" /> Pantaisederhana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_129.png" /> Parungsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_130.png" /> Pasirangin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_131.png" /> Pasirgombong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_132.png" /> Pasirranji<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_133.png" /> Pasirsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_134.png" /> Pasirtanjung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_135.png" /> Pengasinan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_136.png" /> Purwadana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_137.png" /> Pusakarakyat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_138.png" /> Ragemanunggal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_139.png" /> Rengasdengklokselatan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_140.png" /> Rengasdengklokutara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_141.png" /> Ridogalih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_142.png" /> Ridomanah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_143.png" /> Rorotan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_144.png" /> Samudrajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_145.png" /> Sarimukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_146.png" /> Satriajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_147.png" /> Satriamekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_148.png" /> Segarajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_149.png" /> Segaramakmur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_150.png" /> Segaran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_151.png" /> Serang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_152.png" /> Setiaasih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_153.png" /> Setiadarma<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_154.png" /> Setiajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_155.png" /> Setialaksana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_156.png" /> Setiamekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_157.png" /> Setiamulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_158.png" /> Setrajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_159.png" /> Simpangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_160.png" /> Sindangjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_161.png" /> Sindangmulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_162.png" /> Sindangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_163.png" /> Sirnajati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_164.png" /> Sirnajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_165.png" /> Solokan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_166.png" /> Sriamur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_167.png" /> Srijaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_168.png" /> Srimahi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_169.png" /> Srimukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_170.png" /> Sukaasih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_171.png" /> Sukabakti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_172.png" /> Sukabudi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_173.png" /> Sukabungah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_174.png" /> Sukadami<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_175.png" /> Sukadanau<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_176.png" /> Sukadaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_177.png" /> Sukadharma<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_178.png" /> Sukahurip<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_179.png" /> Sukaindah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_180.png" /> Sukajadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_181.png" /> Sukajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_182.png" /> Sukakarsa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_183.png" /> Sukakarya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_184.png" /> Sukakerta<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_185.png" /> Sukalaksana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_186.png" /> Sukamahi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_187.png" /> Sukamaju<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_188.png" /> Sukamakmur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_189.png" /> Sukamanah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_190.png" /> Sukamantri<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_191.png" /> Sukamekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_192.png" /> Sukamukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_193.png" /> Sukamulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_194.png" /> Sukamurni<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_195.png" /> Sukaragam<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_196.png" /> Sukarahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_197.png" /> Sukaraja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_198.png" /> Sukarapih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_199.png" /> Sukaraya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_200.png" /> Sukaresmi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_201.png" /> Sukaringin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_202.png" /> Sukarukun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_203.png" /> Sukasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_204.png" /> Sukasejati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_205.png" /> Sukatenang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_206.png" /> Sukawangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_207.png" /> Sukawijaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_208.png" /> Sumbereja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_209.png" /> Sumberjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_210.png" /> Sumbersari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_211.png" /> Sumberurip<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_212.png" /> Sumurbatu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_213.png" /> Talagajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_214.png" /> Tamanmekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_215.png" /> Tamanrahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_216.png" /> Tamansari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_217.png" /> Tambun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_218.png" /> Tanahbaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_219.png" /> Tanjungbaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_220.png" /> Tanjungbungin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_221.png" /> Tanjungmekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_222.png" /> Tanjungpakis<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_223.png" /> Tanjungpura<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_224.png" /> Tanjungsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_225.png" /> Telagaasih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_226.png" /> Telagamurni<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_227.png" /> Telajung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_228.png" /> Telukambulu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_229.png" /> Telukbango<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_230.png" /> Telukbuyung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_231.png" /> Telukpucung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_232.png" /> Tridayasakti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_233.png" /> Tunggakjati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_234.png" /> Waluya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_235.png" /> Wanajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_236.png" /> Wanakerta<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_237.png" /> Wanasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_238.png" /> Wangunharja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_239.png" /> Waringinjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_240.png" /> Weninggalih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_241.png" /> Wibawamulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_242.png" /> <br />'
        });

lyr_ADMINISTRASI_LN_25K_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);
var layersList = [lyr_ADMINISTRASI_LN_25K_0,lyr_ADMINISTRASIDESA_AR_25K_1];
lyr_ADMINISTRASI_LN_25K_0.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_LN_25K_0.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASI_LN_25K_0.set('fieldLabels', {'KARKTR': 'inline label', 'STSBTS': 'inline label', 'FCODE': 'inline label', 'KELAS': 'inline label', 'UUPP': 'inline label', 'LOKASI': 'inline label', 'REMARK': 'inline label', 'NAMOBJ': 'inline label', 'ADMIN1': 'inline label', 'ADMIN2': 'inline label', 'SRS_ID': 'inline label', 'LCODE': 'inline label', 'METADATA': 'inline label', 'WAKLD1': 'inline label', 'WAKLD2': 'inline label', 'WADKC1': 'inline label', 'WADKC2': 'inline label', 'WAKBK1': 'inline label', 'WAKBK2': 'inline label', 'WAPRO1': 'inline label', 'WAPRO2': 'inline label', 'TIPTBT': 'inline label', 'PJGBTS': 'inline label', 'KLBADM': 'inline label', 'TIPLOK': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'inline label', 'NAMOBJ': 'inline label', 'REMARK': 'inline label', 'KDPBPS': 'inline label', 'FCODE': 'inline label', 'LUASWH': 'inline label', 'UUPP': 'inline label', 'SRS_ID': 'inline label', 'LCODE': 'inline label', 'METADATA': 'inline label', 'KDEBPS': 'inline label', 'KDEPUM': 'inline label', 'KDCBPS': 'inline label', 'KDCPUM': 'inline label', 'KDBBPS': 'inline label', 'KDBPUM': 'inline label', 'WADMKD': 'inline label', 'WIADKD': 'inline label', 'WADMKC': 'inline label', 'WIADKC': 'inline label', 'WADMKK': 'inline label', 'WIADKK': 'inline label', 'WADMPR': 'inline label', 'WIADPR': 'inline label', 'TIPADM': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_ADMINISTRASIDESA_AR_25K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});