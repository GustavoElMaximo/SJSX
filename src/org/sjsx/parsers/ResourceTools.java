package org.sjsx.parsers;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ResourceTools {
	
	public static String getPropertiesValue(String pValue){
		Properties properties = new Properties();
		InputStream inputS = Thread.currentThread().getContextClassLoader()
				.getResourceAsStream(Numerators.PROPERTIESFILE);
		try {
			properties.load(inputS);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return properties.getProperty(pValue);
	}

}
