package org.sjsx.parsers;

import java.util.Iterator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.jdom.Element;
import org.jdom.Namespace;

public class SJSXParentElement extends SJSXElement {

	private static String parentTemplateFile = "org/sjsx/resources/ParentClass_js.template";
	private String parentTemplate = FileTools.loadStringResourceFile(parentTemplateFile);
	private static String createChildsTemplateFile = "org/sjsx/resources/CreateChilds.template";
	private String createChildsTemplate = FileTools.loadStringResourceFile(createChildsTemplateFile);
	private static String createChildsFromXMLTemplateFile = "org/sjsx/resources/CreateChildsFromXML.template";
	private String createChildsFromXMLTemplate = FileTools.loadStringResourceFile(createChildsFromXMLTemplateFile);
	private static String createChildsFromXMLTemplateArrayFile = "org/sjsx/resources/CreateChildsFromXMLArray.template";
	private String createChildsFromXMLTemplateArray = FileTools.loadStringResourceFile(createChildsFromXMLTemplateArrayFile);
	private static String gettersChildsTemplateFile = "org/sjsx/resources/GettersChilds.template";
	private String gettersChildsTemplate = FileTools.loadStringResourceFile(gettersChildsTemplateFile);
	private static String addRemoveChildsTemplateFile = "org/sjsx/resources/AddRemoveChilds.template";
	private String addRemoveChildsTemplate = FileTools.loadStringResourceFile(addRemoveChildsTemplateFile);
	private static String actualizeXMLTemplateFile = "org/sjsx/resources/ActualizeXML.template";
	private String actualizeXMLTemplate = FileTools.loadStringResourceFile(actualizeXMLTemplateFile);
	private static String actualizeXMLChildsTemplateFile = "org/sjsx/resources/ActualizeXMLChilds.template";
	private String actualizeXMLChildsTemplate = FileTools.loadStringResourceFile(actualizeXMLChildsTemplateFile);
	private String name = null;
	private String xmlVersion = null;
	private String xmlEncoding = null;
	
	public SJSXParentElement(Element element, Namespace namespace) {
		super(element, namespace, null);
	}

	public SJSXParentElement(Element element, String name, Namespace namespace) {
		super(element, namespace, null);
		this.name = name;
	}

	public SJSXParentElement(Element element, String name, Namespace namespace, String xmlVersion, String xmlEncoding) {
		super(element, namespace, xmlEncoding);
		this.name = name;
		this.xmlVersion = xmlVersion;
		this.xmlEncoding = xmlEncoding;
	}
	
	public String buildJS(){
		Pattern pattern;
		Matcher matcher;
		
		pattern = Pattern.compile("&ROOTCLASS");
		matcher = pattern.matcher(parentTemplate);
		String rootNodeName;
		if (this.name!=null){
			rootNodeName = this.name;
		} else {
			rootNodeName = this.getAttribute("name").getValue();
		}
		rootNodeName = rootNodeName.toUpperCase().charAt(0) + rootNodeName.substring(1);
		String resultJS = matcher.replaceAll(rootNodeName);
		
		pattern = Pattern.compile("&ROOTELEMENT");
		matcher = pattern.matcher(resultJS);
		resultJS = matcher.replaceAll(SJSXTools.formatInXml(this.getAttribute("name").getValue()));
		
		// xml version
		pattern = Pattern.compile("&XMLVERSION");
		matcher = pattern.matcher(resultJS);
		if (this.xmlVersion != null) {
			resultJS = matcher.replaceAll(getXmlVersion());
		} else {
			resultJS = matcher.replaceAll(ResourceTools.getPropertiesValue(Numerators.XMLVERSION));
		}
	
		// xml encoding
		pattern = Pattern.compile("&XMLENCODING");
		matcher = pattern.matcher(resultJS);
		if (this.xmlEncoding != null) {
			resultJS = matcher.replaceAll(getXmlEncoding());
		} else {
			resultJS = matcher.replaceAll(ResourceTools.getPropertiesValue(Numerators.XMLENCODING));
		}

		// create the function create objects
		String ccTemp = "";   
		String cxTemp = "";   
		String gcTemp = "";
		String axTemp = "";
		String arTemp = "";
		for (Iterator i = this.getChildElements().iterator(); i.hasNext();){
			SJSXElement element = ((SJSXElement) i.next());
			Iterator iCT = element.getChildElements().iterator();
			if (iCT.hasNext()){
				Iterator iSeq = ((SJSXElement) iCT.next()).getChildElements().iterator();
				while (iSeq.hasNext()){
					SJSXElement childElement = ((SJSXElement) iSeq.next());
					Pattern p;
					Matcher m;
					String childNodeName = childElement.getAttribute("ref").getValue();
					String cNNClass = childNodeName.toUpperCase().charAt(0) + childNodeName.substring(1);
					String cNNVar = childNodeName.toLowerCase().charAt(0) + childNodeName.substring(1);
					
					p = Pattern.compile("&CLASSCHILDVAR");
					m = p.matcher(createChildsTemplate);
					ccTemp += m.replaceAll(cNNVar);	
					
					p = Pattern.compile("&CLASSCHILD");
					m = p.matcher(ccTemp);
					if (childElement.getAttribute("maxOccurs")!=null){
						ccTemp = m.replaceAll("Array");

						// add remove childs
						p = Pattern.compile("&ROOTCLASS");
						m = p.matcher(addRemoveChildsTemplate);
						arTemp += m.replaceAll(rootNodeName);	

						p = Pattern.compile("&CHILDELEMENT");
						m = p.matcher(arTemp);
						arTemp = m.replaceAll(cNNClass);	
						
						p = Pattern.compile("&CLASSCHILDVAR");
						m = p.matcher(arTemp);
						arTemp = m.replaceAll(cNNVar);	

						// actualize childs
						p = Pattern.compile("&CLASSCHILDVAR");
						m = p.matcher(actualizeXMLChildsTemplate);
						axTemp += m.replaceAll(cNNVar);	

						// if is loading an XML
						p = Pattern.compile("&CLASSCHILDVAR");
						m = p.matcher(createChildsFromXMLTemplateArray);
						cxTemp += m.replaceAll(cNNVar);
						
					} else {
						ccTemp = m.replaceAll(cNNClass);	

						// actualize xml
						p = Pattern.compile("&CLASSCHILDVAR");
						m = p.matcher(actualizeXMLTemplate);
						axTemp += m.replaceAll(cNNVar);	

						p = Pattern.compile("&CLASSCHILDVAR");
						m = p.matcher(createChildsFromXMLTemplate);
						cxTemp += m.replaceAll(cNNVar);
						
					}

					// if is loading an XML
					p = Pattern.compile("&CLASSCHILD");
					m = p.matcher(cxTemp);
					cxTemp = m.replaceAll(cNNClass);	
					
					p = Pattern.compile("&CHILDNODENAME");
					m = p.matcher(cxTemp);
					cxTemp = m.replaceAll(childNodeName);		

					
					// getters
					p = Pattern.compile("&ROOTCLASS");
					m = p.matcher(gettersChildsTemplate);
					gcTemp += m.replaceAll(rootNodeName);	

					p = Pattern.compile("&CHILDELEMENT");
					m = p.matcher(gcTemp);
					gcTemp = m.replaceAll(cNNClass);	
					
					p = Pattern.compile("&CLASSCHILDVAR");
					m = p.matcher(gcTemp);
					gcTemp = m.replaceAll(cNNVar);	

				}
			}
			
		}
		pattern = Pattern.compile("&CREATECHILDS");
		matcher = pattern.matcher(resultJS);
		resultJS = matcher.replaceAll(ccTemp);

		pattern = Pattern.compile("&CREATEFROMXMLCHILDS");
		matcher = pattern.matcher(resultJS);
		resultJS = matcher.replaceAll(cxTemp);
		
		pattern = Pattern.compile("&GETTERSCHILDS");
		matcher = pattern.matcher(resultJS);
		resultJS = matcher.replaceAll(gcTemp);

		pattern = Pattern.compile("&ADDREMOVECHILDS");
		matcher = pattern.matcher(resultJS);
		resultJS = matcher.replaceAll(arTemp);

		pattern = Pattern.compile("&ACTUALIZEXML");
		matcher = pattern.matcher(resultJS);
		resultJS = matcher.replaceAll(axTemp);

		return resultJS;
		
	}

	public String getName() {
		return name;
	}

	public String getXmlEncoding() {
		return xmlEncoding;
	}

	public String getXmlVersion() {
		return xmlVersion;
	}
	
}
