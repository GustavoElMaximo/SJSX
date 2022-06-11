function testThis(theXml) {
    // create a SJSX xml object from a existent xml structure
	var fp = new SJSX_xml(theXml);

	// get a value from a single node
	document.getElementById('value1').value = fp.getCodigoAgencia().getValue();

	// generate the XML message or structure
	var resXML = fp.getXml(); 
	document.getElementById('area').value = resXML;
}
