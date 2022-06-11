// **********************************************
// SJSX - Simple JavaScript XmlDataBinding
// Version 0.0.2 beta
// **********************************************
// **********************************************
// Class SJSX_xml
// **********************************************

function SJSX_xml(xmlText) {
	
	var _xmlText = xmlText; 
	
	if (_xmlText==null || _xmlText==''){
		_xmlText = '<xml />';
	}

    /* Create */
	this.xmlObj = new XmlObject(_xmlText, '1.0', 'UTF-8');
	
    /* Create of child elements*/
	if (xmlText==null || xmlText==''){
    		this.codigoCliente = new CodigoCliente();
	this.codigoAgencia = new CodigoAgencia();
	this.datosAgencia = new DatosAgencia();
	this.productos = new Productos();

    } else {
    		this.codigoCliente = new CodigoCliente(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('codigoCliente')[0]));	
	this.codigoAgencia = new CodigoAgencia(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('codigoAgencia')[0]));	
	this.datosAgencia = new DatosAgencia(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('datosAgencia')[0]));	
	this.productos = new Productos(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('productos')[0]));	

    }

}

/* Properties, getters and setters */
SJSX_xml.prototype.getXml = function() {
	this.actualizeXMLDoc();
	str = this.xmlObj.getXmlText(true);
	return str;
} 

SJSX_xml.prototype.actualizeXMLDoc = function() {
	var dupNode;
	cleanElement(this.xmlObj.xmlDoc.firstChild);
	
		if (this.codigoCliente.actualizeXMLDoc){
		this.codigoCliente.actualizeXMLDoc();
	}
	dupNode = this.codigoCliente.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
	if (this.codigoAgencia.actualizeXMLDoc){
		this.codigoAgencia.actualizeXMLDoc();
	}
	dupNode = this.codigoAgencia.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
	if (this.datosAgencia.actualizeXMLDoc){
		this.datosAgencia.actualizeXMLDoc();
	}
	dupNode = this.datosAgencia.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
	if (this.productos.actualizeXMLDoc){
		this.productos.actualizeXMLDoc();
	}
	dupNode = this.productos.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);

} 

SJSX_xml.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

SJSX_xml.prototype.setAttribute = function(attName, txtValue) {
	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}

SJSX_xml.prototype.getXmlObj = function() {
	try {
		return this.xmlObj;
	} catch (e) {
    	throw e;
	}
} 

SJSX_xml.prototype.length = function() {
	try {
		return this.xmlObj.xmlDoc.firstChild.childNodes.length;
	} catch (e) {
    	throw e;
	}
} 

SJSX_xml.prototype.childs = function() {
	try {
		return this.xmlObj.xmlDoc.firstChild.childNodes;
	} catch (e) {
    	throw e;
	}
} 

/* getters of childs */
SJSX_xml.prototype.getCodigoCliente = function() {
	return this.codigoCliente;
} 
SJSX_xml.prototype.getCodigoAgencia = function() {
	return this.codigoAgencia;
} 
SJSX_xml.prototype.getDatosAgencia = function() {
	return this.datosAgencia;
} 
SJSX_xml.prototype.getProductos = function() {
	return this.productos;
} 



// **********************************************
// Class Via
// **********************************************

/* Create */
function Via(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<via />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
Via.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

Via.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

Via.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

Via.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
// **********************************************
// Class Telefono
// **********************************************

/* Create */
function Telefono(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<telefono />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
Telefono.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

Telefono.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

Telefono.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

Telefono.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
// **********************************************
// Class Poblacion
// **********************************************

/* Create */
function Poblacion(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<poblacion />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
Poblacion.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

Poblacion.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

Poblacion.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

Poblacion.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
// **********************************************
// Class Piso
// **********************************************

/* Create */
function Piso(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<piso />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
Piso.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

Piso.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

Piso.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

Piso.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
// **********************************************
// Class Numero
// **********************************************

/* Create */
function Numero(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<numero />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
Numero.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

Numero.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

Numero.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

Numero.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
// **********************************************
// Class Nombre
// **********************************************

/* Create */
function Nombre(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<nombre />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
Nombre.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

Nombre.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

Nombre.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

Nombre.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
// **********************************************
// Class Productos
// **********************************************

function Productos(xmlText) {
	
	var _xmlText = xmlText; 
	
	if (_xmlText==null || _xmlText==''){
		_xmlText = '<productos />';
	}

    /* Create */
	this.xmlObj = new XmlObject(_xmlText, '1.0', 'UTF-8');
	
    /* Create of child elements*/
	if (xmlText==null || xmlText==''){
    		this.producto = new Array();

    } else {
    		this.producto = new Array();
	for (i = 0; i < this.xmlObj.xmlDoc.getElementsByTagName('producto').length; i++) {
		var producto = new Producto(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('producto')[i]));
		this.addProducto(producto);
	}

    }

}

/* Properties, getters and setters */
Productos.prototype.getXml = function() {
	this.actualizeXMLDoc();
	str = this.xmlObj.getXmlText(true);
	return str;
} 

Productos.prototype.actualizeXMLDoc = function() {
	var dupNode;
	cleanElement(this.xmlObj.xmlDoc.firstChild);
	
		for (i in this.producto) {
		if (this.producto[i].actualizeXMLDoc){
			this.producto[i].actualizeXMLDoc();
		}
		if (this.producto[i].xmlObj) {
			dupNode = this.producto[i].xmlObj.xmlDoc.firstChild.cloneNode(true);
			if (dupNode) {
				this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
			}
		}
	}

} 

Productos.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

Productos.prototype.setAttribute = function(attName, txtValue) {
	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}

Productos.prototype.getXmlObj = function() {
	try {
		return this.xmlObj;
	} catch (e) {
    	throw e;
	}
} 

Productos.prototype.length = function() {
	try {
		return this.xmlObj.xmlDoc.firstChild.childNodes.length;
	} catch (e) {
    	throw e;
	}
} 

Productos.prototype.childs = function() {
	try {
		return this.xmlObj.xmlDoc.firstChild.childNodes;
	} catch (e) {
    	throw e;
	}
} 

/* getters of childs */
Productos.prototype.getProducto = function() {
	return this.producto;
} 


/* add and remove childs elements */
Productos.prototype.addProducto = function(producto) {
	this.producto[this.producto.length] = producto;
} 

Productos.prototype.removeProducto = function(id) {
	this.producto[id] = null;
} 

// **********************************************
// Class Producto
// **********************************************

function Producto(xmlText) {
	
	var _xmlText = xmlText; 
	
	if (_xmlText==null || _xmlText==''){
		_xmlText = '<producto />';
	}

    /* Create */
	this.xmlObj = new XmlObject(_xmlText, '1.0', 'UTF-8');
	
    /* Create of child elements*/
	if (xmlText==null || xmlText==''){
    		this.codigo = new Codigo();
	this.cantidad = new Cantidad();

    } else {
    		this.codigo = new Codigo(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('codigo')[0]));	
	this.cantidad = new Cantidad(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('cantidad')[0]));	

    }

}

/* Properties, getters and setters */
Producto.prototype.getXml = function() {
	this.actualizeXMLDoc();
	str = this.xmlObj.getXmlText(true);
	return str;
} 

Producto.prototype.actualizeXMLDoc = function() {
	var dupNode;
	cleanElement(this.xmlObj.xmlDoc.firstChild);
	
		if (this.codigo.actualizeXMLDoc){
		this.codigo.actualizeXMLDoc();
	}
	dupNode = this.codigo.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
	if (this.cantidad.actualizeXMLDoc){
		this.cantidad.actualizeXMLDoc();
	}
	dupNode = this.cantidad.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);

} 

Producto.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

Producto.prototype.setAttribute = function(attName, txtValue) {
	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}

Producto.prototype.getXmlObj = function() {
	try {
		return this.xmlObj;
	} catch (e) {
    	throw e;
	}
} 

Producto.prototype.length = function() {
	try {
		return this.xmlObj.xmlDoc.firstChild.childNodes.length;
	} catch (e) {
    	throw e;
	}
} 

Producto.prototype.childs = function() {
	try {
		return this.xmlObj.xmlDoc.firstChild.childNodes;
	} catch (e) {
    	throw e;
	}
} 

/* getters of childs */
Producto.prototype.getCodigo = function() {
	return this.codigo;
} 
Producto.prototype.getCantidad = function() {
	return this.cantidad;
} 



// **********************************************
// Class Email
// **********************************************

/* Create */
function Email(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<email />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
Email.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

Email.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

Email.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

Email.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
// **********************************************
// Class Direccion
// **********************************************

/* Create */
function Direccion(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<direccion />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
Direccion.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

Direccion.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

Direccion.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

Direccion.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
// **********************************************
// Class DatosAgencia
// **********************************************

function DatosAgencia(xmlText) {
	
	var _xmlText = xmlText; 
	
	if (_xmlText==null || _xmlText==''){
		_xmlText = '<datosAgencia />';
	}

    /* Create */
	this.xmlObj = new XmlObject(_xmlText, '1.0', 'UTF-8');
	
    /* Create of child elements*/
	if (xmlText==null || xmlText==''){
    		this.nombre = new Nombre();
	this.direccion = new Direccion();
	this.via = new Via();
	this.numero = new Numero();
	this.piso = new Piso();
	this.telefono = new Telefono();
	this.poblacion = new Poblacion();
	this.cp = new Cp();
	this.categoriaAgencia = new CategoriaAgencia();
	this.email = new Email();

    } else {
    		this.nombre = new Nombre(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('nombre')[0]));	
	this.direccion = new Direccion(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('direccion')[0]));	
	this.via = new Via(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('via')[0]));	
	this.numero = new Numero(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('numero')[0]));	
	this.piso = new Piso(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('piso')[0]));	
	this.telefono = new Telefono(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('telefono')[0]));	
	this.poblacion = new Poblacion(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('poblacion')[0]));	
	this.cp = new Cp(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('cp')[0]));	
	this.categoriaAgencia = new CategoriaAgencia(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('categoriaAgencia')[0]));	
	this.email = new Email(extractXmlText(this.xmlObj.xmlDoc.getElementsByTagName('email')[0]));	

    }

}

/* Properties, getters and setters */
DatosAgencia.prototype.getXml = function() {
	this.actualizeXMLDoc();
	str = this.xmlObj.getXmlText(true);
	return str;
} 

DatosAgencia.prototype.actualizeXMLDoc = function() {
	var dupNode;
	cleanElement(this.xmlObj.xmlDoc.firstChild);
	
		if (this.nombre.actualizeXMLDoc){
		this.nombre.actualizeXMLDoc();
	}
	dupNode = this.nombre.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
	if (this.direccion.actualizeXMLDoc){
		this.direccion.actualizeXMLDoc();
	}
	dupNode = this.direccion.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
	if (this.via.actualizeXMLDoc){
		this.via.actualizeXMLDoc();
	}
	dupNode = this.via.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
	if (this.numero.actualizeXMLDoc){
		this.numero.actualizeXMLDoc();
	}
	dupNode = this.numero.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
	if (this.piso.actualizeXMLDoc){
		this.piso.actualizeXMLDoc();
	}
	dupNode = this.piso.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
	if (this.telefono.actualizeXMLDoc){
		this.telefono.actualizeXMLDoc();
	}
	dupNode = this.telefono.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
	if (this.poblacion.actualizeXMLDoc){
		this.poblacion.actualizeXMLDoc();
	}
	dupNode = this.poblacion.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
	if (this.cp.actualizeXMLDoc){
		this.cp.actualizeXMLDoc();
	}
	dupNode = this.cp.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
	if (this.categoriaAgencia.actualizeXMLDoc){
		this.categoriaAgencia.actualizeXMLDoc();
	}
	dupNode = this.categoriaAgencia.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);
	if (this.email.actualizeXMLDoc){
		this.email.actualizeXMLDoc();
	}
	dupNode = this.email.xmlObj.xmlDoc.firstChild.cloneNode(true);
	this.xmlObj.xmlDoc.firstChild.appendChild(dupNode);

} 

DatosAgencia.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

DatosAgencia.prototype.setAttribute = function(attName, txtValue) {
	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}

DatosAgencia.prototype.getXmlObj = function() {
	try {
		return this.xmlObj;
	} catch (e) {
    	throw e;
	}
} 

DatosAgencia.prototype.length = function() {
	try {
		return this.xmlObj.xmlDoc.firstChild.childNodes.length;
	} catch (e) {
    	throw e;
	}
} 

DatosAgencia.prototype.childs = function() {
	try {
		return this.xmlObj.xmlDoc.firstChild.childNodes;
	} catch (e) {
    	throw e;
	}
} 

/* getters of childs */
DatosAgencia.prototype.getNombre = function() {
	return this.nombre;
} 
DatosAgencia.prototype.getDireccion = function() {
	return this.direccion;
} 
DatosAgencia.prototype.getVia = function() {
	return this.via;
} 
DatosAgencia.prototype.getNumero = function() {
	return this.numero;
} 
DatosAgencia.prototype.getPiso = function() {
	return this.piso;
} 
DatosAgencia.prototype.getTelefono = function() {
	return this.telefono;
} 
DatosAgencia.prototype.getPoblacion = function() {
	return this.poblacion;
} 
DatosAgencia.prototype.getCp = function() {
	return this.cp;
} 
DatosAgencia.prototype.getCategoriaAgencia = function() {
	return this.categoriaAgencia;
} 
DatosAgencia.prototype.getEmail = function() {
	return this.email;
} 



// **********************************************
// Class Cp
// **********************************************

/* Create */
function Cp(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<cp />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
Cp.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

Cp.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

Cp.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

Cp.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
// **********************************************
// Class CodigoCliente
// **********************************************

/* Create */
function CodigoCliente(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<codigoCliente />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
CodigoCliente.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

CodigoCliente.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

CodigoCliente.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

CodigoCliente.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
// **********************************************
// Class CodigoAgencia
// **********************************************

/* Create */
function CodigoAgencia(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<codigoAgencia />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
CodigoAgencia.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

CodigoAgencia.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

CodigoAgencia.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

CodigoAgencia.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
// **********************************************
// Class Codigo
// **********************************************

/* Create */
function Codigo(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<codigo />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
Codigo.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

Codigo.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

Codigo.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

Codigo.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
// **********************************************
// Class CategoriaAgencia
// **********************************************

/* Create */
function CategoriaAgencia(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<categoriaAgencia />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
CategoriaAgencia.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

CategoriaAgencia.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

CategoriaAgencia.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

CategoriaAgencia.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
// **********************************************
// Class Cantidad
// **********************************************

/* Create */
function Cantidad(xmlText) {
	if (xmlText==null || xmlText==''){
		xmlText = '<cantidad />';
	}
	this.xmlObj = new XmlObject(xmlText);
}

/* Properties, getters an d setters */
Cantidad.prototype.getValue = function() {
	if (W3CComp) {
		return this.xmlObj.xmlDoc.firstChild.textContent;
	} else {
		return this.xmlObj.xmlDoc.firstChild.text;
	}
} 

Cantidad.prototype.setValue = function(txtValue) {
	if (W3CComp) {
	  	this.xmlObj.xmlDoc.firstChild.textContent = txtValue;
	} else {
		this.xmlObj.xmlDoc.firstChild.text = txtValue;
	}
}

Cantidad.prototype.getAttribute = function(attName) {
	return this.xmlObj.xmlDoc.firstChild.getAttribute(attName);
} 

Cantidad.prototype.setAttribute = function(attName, txtValue) {
  	this.xmlObj.xmlDoc.firstChild.setAttribute(attName, txtValue);
}
