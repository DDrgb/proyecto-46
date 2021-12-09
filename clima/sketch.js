var fondo;
var fondImg
var Baja_California_
var Baja_California_Sur
var Campeche_
var Chihuahua_
var Chiapas_
var Coahuila_de_Zaragoza_
var Colima_
var Durango_34000
var Guanajuato_
var Guerrero_
var Hidalgo_
var Jalisco_
var Mexico_
var Michoacan_de_Ocampo_
var Morelos_
var Nayarit_
var Nuevo_Leon
var Oaxaca
var Puebla
var Querétaro
var Quintana_Roo
var San_Luis_Potosi
var Sinaloa
var Sonora
var Tabasco
var Tamaulipas
var Tlaxcala
var Veracruz
var Yucatán
var Zacatecas
var Mexico
var aguascalientes

var Baja_CaliforniaN
var Baja_California_SurN
var CampecheN
var ChihuahuaN
var ChiapasN
var Coahuila_de_ZaragozaN
var ColimaN
var DurangoN
var GuanajuatoN
var GuerreroN
var HidalgoN
var JaliscoN
var MexicoN
var Michoacan_de_OcampoN
var MorelosN
var NayaritN
var Nuevo_LeonN
var OaxacaN
var PueblaN
var QuerétaroN
var Quintana_RooN
var San_Luis_PotosiN
var SinaloaN
var SonoraN
var TabascoN
var TamaulipasN
var TlaxcalaN
var VeracruzN
var YucatánN
var ZacatecasN
var MexicoN
var aguascalientesN

function preload(){
fondImg=loadImage("Imagenes/mapamexico.jpg")
Baja_CaliforniaN=loadImage("bajacalifornia.jpg")
Baja_California_SurN=loadImage("bajacaliforniasur.jpg")
CampecheN=loadImage("campeche.jpg")
ChihuahuaN=loadImage("chihuahua.jpg")
ChiapasN=loadImage("chiapas.jpg")
Coahuila_de_ZaragozaN=loadImage("coahulia.jpg")
ColimaN=loadImage("colima.jpg")
DurangoN=loadImage("durango.jpg")
GuanajuatoN=loadImage("guanajuato.jpg")
GuerreroN=loadImage("guerrero.jpg")
HidalgoN=loadImage("hidalgo.jpg")
JaliscoN=loadImage("jalisco.jpg")
MexicoN=loadImage("mexico1.1.jpg")
Michoacan_de_OcampoN=loadImage("michoacan.jpg")
MorelosN=loadImage("morelos.jpg")
NayaritN=loadImage("nayarit.jpg")
Nuevo_LeonN=loadImage("nuevoleon.jpg")
OaxacaN=loadImage("oaxaca.jpg")
PueblaN=loadImage("puebla.jpg")
QuerétaroN=loadImage("queretaro.jpg")
Quintana_RooN=loadImage("quintanaroo.jpg")
San_Luis_PotosiN=loadImage("sanliuspotosi.jpg")
SinaloaN=loadImage("sinaloa.jpg")
SonoraN=loadImage("sonora.jpg")
TabascoN=loadImage("tabasco.jpg")
TamaulipasN=loadImage("tamaulipas.jpg")
TlaxcalaN=loadImage("tlaxcala.jpg")
 VeracruzN=loadImage("veracruz.jpg")
 YucatánN=loadImage("yucatan.jpg")
 ZacatecasN=loadImage("zacatecas.jpg")
 aguascalientesN=loadImage("aguascalientes.jpg")
}

function setup() {
  createCanvas(1300,600);
  fondo=createSprite(650,300)
  fondo.addImage(fondImg)
  fondo.scale=0.5
  Baja_California.addImage(Baja_CaliforniaN)
  Baja_California_Sur.addImage(Baja_California_SurN)
  Campeche.addImage(CampecheN)
  Chihuahua.addImage(ChihuahuaN)
  Chiapas.addImage(ChiapasN)
  Coahuila_de_Zaragoza.addImage(Coahuila_de_ZaragozaN)
  Colima.addImage(ColimaN)
  Durango.addImage(DurangoN)
  Guanajuato.addImage( GuanajuatoN)
  Guerrero.addImage( GuerreroN)
  Hidalgo.addImage(HidalgoN)
  Jalisco.addImage(JaliscoN)
  Mexico.addImage(MexicoN)
  Michoacan_de_Ocampo.addImage(Michoacan_de_OcampoN)
  Morelos.addImage(MorelosN)
  Nayarit.addImage(NayaritN)
  Nuevo_Leon.addImage(Nuevo_LeonN)
  Oaxaca.addImage(OaxacaN)
  Puebla.addImage(PueblaN)
  Querétaro.addImage(QuerétaroN)
  Quintana_Roo.addImage(Quintana_RooN)
  San_Luis_Potosi.addImage(San_Luis_PotosiN)
  Sinaloa.addImage( SinaloaN)
  Sonora.addImage(SonoraN)
  Tabasco.addImage(TabascoN)
  Tamaulipas.addImage(TamaulipasN)
  Tlaxcala.addImage(TlaxcalaN)
  Veracruz.addImage(VeracruzN)
  Yucatán.addImage(YucatánN)
  Zacatecas.addImage(ZacatecasN)
  aguascalientes.addImage(aguascalientesN)
 Baja_California=createSprite(354,122,20,20);
 Baja_California_Sur=createSprite(410,233,20,20);
 Campeche=createSprite(941,432,20,20)
 Chihuahua=createSprite(546,171,20,20)
 Chiapas=createSprite(885,492,20,20)
 Coahuila_de_Zaragoza=createSprite(649,265,20,20)
 Colima=createSprite(605,432,10,10)
 Durango=createSprite(586,300,20,20)
 Guanajuato=createSprite(670,386,20,20)
 Guerrero=createSprite(707,466,20,20)
 Hidalgo=createSprite(722,395,20,20)
 Jalisco=createSprite(607,405,20,20)
 Mexico=createSprite(721,428,10,10)
 Michoacan_de_Ocampo=createSprite(659,425,20,20)
 Morelos=createSprite(721,420,10,10)
 Nayarit=createSprite(580,361,20,20)
 Nuevo_Leon=createSprite(700,271,20,20)
 Oaxaca=createSprite(788,479,20,20)
 Puebla=createSprite(754,436,20,20)
 Querétaro=createSprite(699,388,10,10)
 Quintana_Roo=createSprite(981,406,20,20)
 San_Luis_Potosi=createSprite(680,340,20,20)
 Sinaloa=createSprite(526,285,20,20)
 Sonora=createSprite(463,167,20,20)
 Tabasco=createSprite(878,455,20,20)
 Tamaulipas=createSprite(728,300,20,20)
 Tlaxcala=createSprite(746,422,10,10)
 Veracruz=createSprite(780,427,20,20)
 Yucatán=createSprite(960,369,20,20)
 Zacatecas=createSprite(626,329,20,20)
 Mexico=createSprite(721,428,10,10)
aguascalientes=createSprite(641,362,10,10)
 
}

function draw() {
  background(174,219,132);
  console.log("x: "+ mouseX + "y: "+mouseY);
  if(mousePressedOver(Baja_California)){
    console.log("bajacalifornia")
  }
  if(mousePressedOver( Baja_California_Sur)){
    console.log(" Baja_California_Sur")
  }
  if(mousePressedOver(Campeche)){
    console.log("Campeche")
  }
  if(mousePressedOver(Chihuahua)){
    console.log("Chihuahua")
  }
  if(mousePressedOver(Chiapas)){
    console.log("Chiapas")
  }
  if(mousePressedOver(Coahuila_de_Zaragoza)){
    console.log("Coahuila_de_Zaragoza")
  }
  if(mousePressedOver( Colima)){
    console.log(" Colima")
  }
  if(mousePressedOver(Durango)){
    console.log("Durango")
  }
  if(mousePressedOver(Guanajuato)){
    console.log("Guanajuato")
  }
  if(mousePressedOver(Guerrero)){
    console.log("Guerrero")
  }
  if(mousePressedOver(Hidalgo)){
    console.log("Hidalgo")
  }
  if(mousePressedOver(Jalisco)){
    console.log("Jalisco")
  }
  if(mousePressedOver(Mexico)){
    console.log("Mexico")
  }
  if(mousePressedOver(Michoacan_de_Ocampo)){
    console.log("Michoacan_de_Ocampo")
  }
  if(mousePressedOver( Morelos)){
    console.log(" Morelos")
  }
  if(mousePressedOver(Nayarit)){
    console.log("Nayarit")
  }
  if(mousePressedOver(Nuevo_Leon)){
    console.log("Nuevo_Leon")
  }
  if(mousePressedOver(Oaxaca)){
    console.log("Oaxaca")
  }
  if(mousePressedOver(Puebla)){
    console.log("Puebla")
  }
  if(mousePressedOver(Querétaro)){
    console.log("bajacalifornia")
  }
  if(mousePressedOver(Quintana_Roo)){
    console.log("Quintana_Roo")
  }
  if(mousePressedOver(San_Luis_Potosi)){
    console.log("San_Luis_Potosi")
  }
  if(mousePressedOver(Sinaloa)){
    console.log("Sinaloa")
  }
  if(mousePressedOver( Sonora)){
    console.log(" Sonora")
  }
  if(mousePressedOver(Tabasco)){
    console.log("Tabasco")
  }
  if(mousePressedOver(Tamaulipas)){
    console.log("Tamaulipas")
  }
  if(mousePressedOver(Tlaxcala)){
    console.log("Tlaxcala")
  }
  if(mousePressedOver(Veracruz)){
    console.log("Veracruz")
  }
  if(mousePressedOver(Yucatán)){
    console.log("Yucatán")
  }
  if(mousePressedOver( Zacatecas)){
    console.log(" Zacatecas")
  }
  if(mousePressedOver(Mexico)){
    console.log("Mexico")
  }
  if(mousePressedOver(aguascalientes)){
    console.log("aguascalientes")
  }




  drawSprites();
}



