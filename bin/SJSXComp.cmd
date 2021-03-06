@REM
@REM  Copyright 2006 SJSX - Simple JavaScript Xmldatabinding
@REM
@REM  Licensed under the Apache License, Version 2.0 (the "License");
@REM  you may not use this file except in compliance with the License.
@REM  You may obtain a copy of the License at
@REM
@REM      http://www.apache.org/licenses/LICENSE-2.0
@REM
@REM  Unless required by applicable law or agreed to in writing, software
@REM  distributed under the License is distributed on an "AS IS" BASIS,
@REM  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@REM  See the License for the specific language governing permissions and
@REM  limitations under the License.
@REM

@rem Schema compiler
@rem
@rem Builds JavaScript Classes and generate JavaScript File from xsd files.

@echo off

set cp=
set cp=%cp%;..\lib\sjsx.jar
set cp=%cp%;..\lib\jdom.jar
set cp=%cp%;..\lib\xml-apis.jar

java -classpath "%cp%" org.sjsx.compiler.CompSJSX %1 %2 %3

:done