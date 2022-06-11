package org.sjsx.parsers;

public class SJSXAttribute {
	private String name;
	private String value;
	
	public SJSXAttribute(String name, String value) {
		super();
		this.name = name;
		this.value = value;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getValue() {
		return this.value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	
}
