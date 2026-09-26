@echo off
title Saber 11 - Simulador & Tutor ICFES
chcp 65001 >nul
cd /d "%~dp0"

echo ===================================================================
echo     🎓 INICIANDO SABER 11 - SIMULADOR & TUTOR ICFES (PWA)
echo ===================================================================
echo.
echo Iniciando servidor local para soporte completo de PWA y Service Worker...
echo.
echo Presiona Ctrl+C en esta ventana para cerrar el servidor cuando termines.
echo.

start "" "http://localhost:8080"
python -m http.server 8080

if %ERRORLEVEL% NEQ 0 (
    echo Servidor Python no disponible, abriendo archivo directo...
    start "" "index.html"
)
