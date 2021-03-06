#!/bin/sh
##http://www.garzagutierrez.com.mx/mansson.JPG
##  Copyright 2006 SJSX - Simple JavaScript Xmldatabinding
##
##  Licensed under the Apache License, Version 2.0 (the "License");
##  you may not use this file except in compliance with the License.
##  You may obtain a copy of the License at
##
##      http://www.apache.org/licenses/LICENSE-2.0
##
##  Unless required by applicable law or agreed to in writing, software
##  distributed under the License is distributed on an "AS IS" BASIS,
##  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
##  See the License for the specific language governing permissions and
##  limitations under the License.
##

## Schema compiler
##
## Builds JavaScript Classes and generate JavaScript File from xsd files.

cp=../lib/sjsx.jar:../lib/jdom.jar:../lib/xml-apis.jar

case "`uname`" in
    CYGWIN*)
        cp=`cygpath -w -p $cp`
        ;;
esac

java -classpath "$cp" org.sjsx.compiler.CompSJSX "$1" "$2" "$3"