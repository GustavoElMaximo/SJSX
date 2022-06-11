package org.sjsx.parsers;

import java.util.Iterator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.jdom.Element;
import org.jdom.Namespace;

public class SJSXRootSchema extends SJSXElement {

	private static String headSJSXTemplateFile = "org/sjsx/resources/HeadSJSX.template";
	private String headSJSXTemplate = FileTools.loadStringResourceFile(headSJSXTemplateFile);
	private String version = ResourceTools.getPropertiesValue(Numerators.VERSION);	
	private String xmlEncoding;
	
	public SJSXRootSchema(Element element, Namespace namespace, String xmlEncoding) {
		super(element, namespace, xmlEncoding);
	}
	
	public String buildJS(){

		String resultJS = "";
		Iterator i = this.getChildElements().iterator();
		while (i.hasNext()){
			SJSXElement element = ((SJSXElement) i.next());
			resultJS += element.buildJS();
		}
		
		Pattern pattern = Pattern.compile("&VERSION");
		Matcher matcher = pattern.matcher(headSJSXTemplate);
		headSJSXTemplate = matcher.replaceAll(version);
		
		return headSJSXTemplate + resultJS;
	}

	public String getVersion() {
		return version;
	}

	public String getXmlEncoding() {
		return xmlEncoding;
	}	
	
	
}
