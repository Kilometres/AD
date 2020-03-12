@echo off
:ask
set /p a="CMD:"
IF "%a%"=="off" (
echo OFF
ipconfig /release
GOTO:ask
)
IF "%a%"=="on" (
echo ON
ipconfig /renew
GOTO:ask
)
IF "%a%"=="end" (
echo END
exit
)
