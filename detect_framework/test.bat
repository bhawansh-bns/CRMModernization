@echo off
start C:\Users\BNS\Desktop\CARLCLI\detect_framework\detect_framework.exe C:\Users\BNS\Desktop\CARLCLI\CRMModernization --detail -o scans/my_application.json
pause
java -cp "C:\CASTBNS\picoCLI\JSONParser\out\artifacts\JSONParser_jar\JSONParser.jar" org.example.JSONParser
