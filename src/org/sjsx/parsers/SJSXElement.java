package org.sjsx.parsers;

import java.util.Iterator;
import java.util.LinkedHashSet;

import org.jdom.Attribute;
import org.jdom.Element;
import org.jdom.Namespace;


public abstract class SJSXElement {

	private LinkedHashSet childElements = new LinkedHashSet();
	private String type;
	private LinkedHashSet attributes = new LinkedHashSet();
	private Element element;
	protected Namespace namespace;
	private String xmlEncoding;	
	
	protected static String NL = System.getProperty("line.separator");
	
	public SJSXElement(Element element, Namespace namespace, String xmlEncoding) {
		super();
		this.element = element;
		this.type = element.getName();
		this.namespace = namespace;
		this.xmlEncoding = xmlEncoding;

		// add all attributes
		for (Iterator i = this.element.getAttributes().iterator(); i.hasNext();){
			Attribute attribute = ((Attribute) i.next());
			SJSXAttribute att = new SJSXAttribute(attribute.getName(), attribute.getValue());
			this.addAttribute(att);
		}		

		// add all child from first level
		boolean first = true;
		for (Iterator i = this.element.getChildren().iterator(); i.hasNext();){
			Element elementChild = ((Element) i.next());
			Element childComplexType = elementChild.getChild("complexType", this.namespace);
			if (childComplexType!=null) {
				Element childSequence = childComplexType.getChild("sequence", this.namespace);
				if (childSequence!=null){
					SJSXParentElement parentElement;
					String xmlVersion = ResourceTools.getPropertiesValue(Numerators.XMLVERSION); 
					if (first) { 
						String nodeName = ResourceTools.getPropertiesValue(Numerators.PREFIX);
						nodeName += elementChild.getAttribute("name").getValue();
						parentElement = new SJSXParentElement(elementChild, nodeName, this.namespace, xmlVersion, this.xmlEncoding);
					} else{
						parentElement = new SJSXParentElement(elementChild, null, this.namespace, xmlVersion, this.xmlEncoding);
					}
					first = false;
					this.addChild(parentElement);
				} 
			} else {
				SJSXChildElement childElement = new SJSXChildElement(elementChild, this.namespace);
				this.addChild(childElement);
			}
		}		
	}

	public LinkedHashSet getChildElements() {
		return childElements;
	}
	
	@SuppressWarnings("unchecked")
	public void addChild(SJSXElement childElement){
		this.childElements.add(childElement);
	}

	public LinkedHashSet getAttributes() {
		return attributes;
	}

	@SuppressWarnings("unchecked")
	public void addAttribute(SJSXAttribute attribute){
		this.attributes.add(attribute);
	}

	public SJSXAttribute getAttribute(String name){
		for (Iterator i = this.attributes.iterator(); i.hasNext();){
			SJSXAttribute attribute = ((SJSXAttribute) i.next());
			if (attribute.getName().equals(name)) {
				return attribute;
			}
		}
		return null;		
	}

	public boolean hasAttribute(String name){
		for (Iterator i = this.attributes.iterator(); i.hasNext();){
			SJSXAttribute attribute = ((SJSXAttribute) i.next());
			if (attribute.getName().equals(name)) {
				return true;
			}
		}
		return false;		
	}
	
	public String getType() {
		return type;
	}

	public Element getElement() {
		return element;
	}

	public Namespace getNamespace() {
		return namespace;
	}

	public String getXmlEncoding() {
		return xmlEncoding;
	}

	public abstract String buildJS(); 
	
}
