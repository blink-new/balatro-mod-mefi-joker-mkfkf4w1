@echo off
echo Installing Mefi Joker Mod for Balatro...
echo.

REM Get Balatro mods directory
set "BALATRO_MODS=%APPDATA%\Balatro\Mods"

REM Check if directory exists
if not exist "%BALATRO_MODS%" (
    echo Error: Balatro mods directory not found at %BALATRO_MODS%
    echo Please make sure Balatro is installed and has been run at least once.
    echo Also ensure Lovely mod loader is installed.
    pause
    exit /b 1
)

REM Create mod directory
set "MOD_DIR=%BALATRO_MODS%\MefiJoker"
if not exist "%MOD_DIR%" mkdir "%MOD_DIR%"

REM Copy mod files
echo Copying mod files...
copy "main.lua" "%MOD_DIR%\"
copy "lovely.toml" "%MOD_DIR%\"
copy "mod.json" "%MOD_DIR%\"
copy "mefij.png" "%MOD_DIR%\" 2>nul

REM Copy localization
if not exist "%MOD_DIR%\localization" mkdir "%MOD_DIR%\localization"
copy "localization\en-us.lua" "%MOD_DIR%\localization\"

echo.
echo ✓ Mefi Joker mod installed successfully!
echo   Location: %MOD_DIR%
echo.
echo Next steps:
echo 1. Launch Balatro with Lovely injector
echo 2. Look for the Mefi joker in rare joker pools
echo 3. Enjoy scaling your multipliers!
echo.
pause