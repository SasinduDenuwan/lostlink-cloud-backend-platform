#!/bin/bash
SERVICE=$1
JAVA_PATH="/home/sasindudenuwan2006wpsk/.sdkman/candidates/java/current/bin/java"
exec $JAVA_PATH -jar "${SERVICE}/target/${SERVICE}-0.0.1-SNAPSHOT.jar"
