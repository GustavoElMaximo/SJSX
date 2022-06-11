function testThis() {
    // generate the object that represent the root node
	var fp = new SJSX_xml();

	// set a value to a single node
	fp.getCodigoAgencia().setValue("AG0034");

	// get a value from a single node
	document.getElementById('value1').value = fp.getCodigoAgencia().getValue();

	// set and/or create a attribute of a single node
	fp.getCodigoAgencia().setAttribute("identify", "3390");

	// get a value from a single node
	document.getElementById('att1').value = fp.getCodigoAgencia().getAttribute("identify");
	
	// manipulate a colection
	var producto = new Producto();
	producto.getCodigo().setValue('88888888');
	fp.getProductos().addProducto(producto); // productos is a node that contais a unbounded occurs of "producto" child

	var producto2 = new Producto();
	producto2.getCodigo().setValue('35636346345');
	fp.getProductos().addProducto(producto2); // productos is a node that contais a unbounded occurs of "producto" child

	// generate the XML message or structure
	var resXML = fp.getXml(); 
	document.getElementById('area').value = resXML;
}