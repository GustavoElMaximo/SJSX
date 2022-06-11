package org.sjsx.parsers;

public class SJSXTools {
	
	private static final String SimplexmlTag = "<%s />"; 
	
	public static String formatInXml(String value){
		return String.format(SimplexmlTag, value);
	}
}
