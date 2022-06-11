package org.sjsx.compiler;
import java.io.File;
import java.io.FileInputStream;

import org.sjsx.parsers.FileTools;
import org.sjsx.parsers.Numerators;
import org.sjsx.parsers.Parser;

public class CompSJSX {

	/**
	 * @param args
	 * @throws Exception 
	 */
	public static void main(String[] args) throws Exception {

		try {
			String xsdFileName = args[0];
			String jsOutFileName = args[1];
			String encoding = args[2];
		
			File file = new File(xsdFileName);
			if (file.isFile()){
				FileInputStream fileInputStream = new FileInputStream(file);
				Parser parser = new Parser(fileInputStream, encoding);
				parser.doParser();
				String content = parser.generateJS();
				FileTools.saveFile(jsOutFileName, content);
			} else {
				throw new Exception(Numerators.ERROR_FICHEROENTRADAXSD);
			}
		} catch (Exception e) {
			for (int i = 0; i < args.length; i++){
				System.err.println("args[" + i + "]: " + args[i]);
			}
			System.err.println(" ");
			System.err.println("ERROR: " + e.toString());	
			System.err.println(" ");
			System.err.println(" ");
			System.err.println("SJSX - Simple JavaScript Xmldatabinding");
			System.err.println(" ");
			System.err.println("syntax:");
			System.err.println("  in win32:");
			System.err.println("    SJSXComp.cmd [yourschema.xsd] [javascriptdest.js] [enconding]");
			System.err.println(" ");
			System.err.println("  in Linux:");
			System.err.println("    ./SJSXComp.sh [yourschema.xsd] [javascriptdest.js] [enconding]");
			System.err.println(" ");
			System.err.println(" ");
			System.err.println(" ");
			System.err.println("example:");
			System.err.println(" ");
			System.err.println("  SJSXComp.cmd MyXML.xsd MyGenJSFromXSD.js UTF-8");
			System.err.println(" ");
		}
	}


	
}
