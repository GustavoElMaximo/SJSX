// **********************************************
// SJSX - Simple JavaScript XmlDataBinding
// Version 0.02 beta
//
// javascript tools  
//
//  Copyright 2006 SJSX - Simple JavaScript Xmldatabinding
//
//	gmaximo@gmail.com
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
// **********************************************

// **********************************************
// Global Functions
// **********************************************

var W3CComp; 

if(navigator.appVersion.indexOf("MSIE")!=-1){ 
	W3CComp = false; 
} else {
	W3CComp = true; 
}

function createXMLObject(XMLString){
	var xmlDoc;

	if(window.ActiveXObject){
 		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
 		xmlDoc.async = false;
		xmlDoc.resolveExternals = false;
		if (XMLString != null) {
	 		xmlDoc.loadXML(XMLString);
		}
		return xmlDoc;
	} else { 
 		if(document.implementation && document.implementation.createDocument) {
			if (XMLString != null) {
				var parser = new DOMParser();
				xmlDoc = parser.parseFromString(XMLString, "text/xml");
			} else {
	 			xmlDoc = document.implementation.createDocument("","",null);
		 		xmlDoc.load(XMLString);
			}
			return xmlDoc;
		} else {
			alert ('Su navegador no soporta SJSX');
 		}
    }
}

function cleanElement(element){
	while (element.firstChild) {
  		element.removeChild(element.firstChild);
	}
}

function extractXmlText(xmlDoc){
	var str;
	if (W3CComp) {
	 	var s = new XMLSerializer();
		str = s.serializeToString(xmlDoc);
	} else {
		str = xmlDoc.xml;
	}
	return str;
}

// **********************************************
// Class XmlObject
// **********************************************

function XmlObject(xmlText, version, encoding) {
    /*Properties */

	this.xmlDoc = createXMLObject(xmlText);
	this.versionXml = version;
	this.encondingXml = encoding;
}

XmlObject.prototype.setXmlText = function(xmlText) {
	this.xmlText = xmlText;
	this.xmlDoc = crearObjetoXML(xmlText); 
}

XmlObject.prototype.getXmlText = function(){

	if (this.versionXml != null) {
		versionXml = this.versionXml;
	} else {
		versionXml = '1.0';
	}

	if (this.encondingXml != null) {
		encondingXml = this.encondingXml;
	} else {
		encondingXml = 'UTF-8';
	}

	var xmlH = '<?xml version="' + versionXml + '" encoding="' + encondingXml + '" ?>'; 	

	var str;
	if (W3CComp) {
	 	var s = new XMLSerializer();
		str = s.serializeToString(this.xmlDoc);
	} else {
		str = this.xmlDoc.xml;
	}
	
	if (str.indexOf('<?xml',0)<0 && xmlDeclaration){
		str = xmlH + str;
	}

	return str;
}

XmlObject.prototype.getXmlDoc = function() {
	return this.xmlDoc;
}
