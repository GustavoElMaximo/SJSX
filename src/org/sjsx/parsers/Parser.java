package org.sjsx.parsers;

import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.List;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.JDOMException;
import org.jdom.Namespace;
import org.jdom.input.SAXBuilder;

public class Parser {
	
	private Document document;
	private String xmlEncoding;
	private SJSXRootSchema schemaDocument;

	public Parser(InputStream xmlStream, String xmlEncoding) throws IOException {
		SAXBuilder parser = new SAXBuilder();
		try {
			this.document = parser.build(xmlStream);
			this.xmlEncoding = xmlEncoding;
		} catch (JDOMException e) {
			System.out.println(e.getMessage());
		}
	}

	public void doParser() {
		Element schema = (Element) this.document.getRootElement();
		Namespace namespace = schema.getNamespace();
		schemaDocument = new SJSXRootSchema(schema, namespace, getXmlEncoding());
	}
	
	public String generateJS() {
		return this.schemaDocument.buildJS();
	}
	
	public void listChildren(int depth) {
		Element root = this.document.getRootElement();
		listChildren(root, 0);
	}

	private static void listChildren(Element current, int depth) {
		printSpaces(depth);
		System.out.println(current.getName());
		List children = current.getChildren();
		Iterator iterator = children.iterator();
		while (iterator.hasNext()) {
			Element child = (Element) iterator.next();
			listChildren(child, depth + 1);
		}
	}

	private static void printSpaces(int n) {
		for (int i = 0; i < n; i++) {
			System.out.print(' ');
		}
	}

	public String getXmlEncoding() {
		return xmlEncoding;
	}
	
}
