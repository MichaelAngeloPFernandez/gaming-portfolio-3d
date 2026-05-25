@echo off
echo ============================================================
echo [GIT INITIALIZER] Initializing local repository...
echo ============================================================
git init
git add .
git commit -m "Initial commit of 3D Gaming Portfolio website"
git branch -M main
git remote add origin https://github.com/MichaelAngeloPFernandez/gaming-portfolio-3d.git

echo.
echo ============================================================
echo [SUCCESS] Local git repository initialized and configured!
echo ============================================================
echo.
echo TO PUSH TO GITHUB:
echo 1. Go to https://github.com/new
echo 2. Create a new empty repository named: gaming-portfolio-3d
echo 3. Run the following command in this directory:
echo    git push -u origin main
echo.
pause
