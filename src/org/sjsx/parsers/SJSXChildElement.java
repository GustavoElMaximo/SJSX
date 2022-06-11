package org.sjsx.parsers;

import java.util.Iterator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.jdom.Element;
import org.jdom.Namespace;

public class SJSXChildElement extends SJSXElement {

	private static String childTemplateFile = "org/sjsx/resources/ChildClass_js.template";
	private String childTemplate = FileTools.loadStringResourceFile(childTemplateFile);

	public SJSXChildElement(Element element, Namespace namespace) {
		super(element, namespace, null);
	}
	
	public String buildJS() {
		Pattern pattern;
		Matcher matcher;
		String resultJS = "";
		
		if (this.getType() == Numerators.ELEMENT && this.hasAttribute("name")) {
			pattern = Pattern.compile("&CHILDCLASS");
			matcher = pattern.matcher(childTemplate);
			String className = this.getAttribute("name").getValue().toUpperCase().charAt(0) + this.getAttribute("name").getValue().substring(1);
			resultJS = matcher.replaceAll(className);			

			pattern = Pattern.compile("&CHILDELEMENT");
			matcher = pattern.matcher(resultJS);
			String childEle = this.getAttribute("name").getValue();
			childEle = SJSXTools.formatInXml(childEle);
			resultJS = matcher.replaceAll(childEle);			
		}

		for (Iterator i = this.getChildElements().iterator(); i.hasNext();){
			SJSXChildElement element = ((SJSXChildElement) i.next());
			resultJS += element.buildJS();
		}
		
		return resultJS;
	}
	
}
