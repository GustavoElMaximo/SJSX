package org.sjsx.parsers;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;

public class FileTools {
	
	protected static String NL = System.getProperty("line.separator");
	
	public static String loadStringFile(String fileName){
		File file = new File(fileName);
		String res = null;
		try {
			FileInputStream fileInputStream = new FileInputStream(file);
			res = _loadFile(fileInputStream);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return res;
	}
	
	public static String loadStringResourceFile(String fileName){
		InputStream fileInputStream = ClassLoader.getSystemResourceAsStream(fileName);
		String res = null;
		try {
			res = _loadFile(fileInputStream);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return res;
	}
	
	private static String _loadFile(InputStream fileInputStream) {
		String resultText = "";
		int line = 0;
		boolean end = false;

		BufferedReader in;
		try {
			in = new BufferedReader(new InputStreamReader(fileInputStream, "ISO-8859-1"));
			while (!end) {
				try {
					String currentLine = in.readLine();
					line++;
					if ((currentLine != null)) {
						resultText += currentLine + NL;
					} else {
						end = true;
					}
				} catch (IOException ex) {
					System.err.println("ex:" + ex.toString());
					ex.printStackTrace(System.err);
				}
			}
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}

		return resultText;
	}

	public static void saveFile(String FileName, String content){
	    try {
			FileOutputStream fileSt = new FileOutputStream(FileName);
			DataOutputStream fileDos = new DataOutputStream(fileSt);
			fileDos.writeBytes(content);
			fileDos.close();
			fileSt.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
