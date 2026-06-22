$ErrorActionPreference = "Stop"

$repoUrl = "https://github.com/MarryCrow/Rodnichok-camp-site.git"

if (!(Test-Path ".\dist")) {
    throw "Папка dist не найдена. Сначала выполните npm run build."
}

Remove-Item -Recurse -Force .\dist\.git -ErrorAction SilentlyContinue

Push-Location .\dist

# Удаляем тяжелые/локальные папки из сборки перед публикацией на gh-pages
Remove-Item -Recurse -Force ".\gallery" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force ".\__backup_gallery_before_normalize" -ErrorAction SilentlyContinue

git init
git branch -M gh-pages
git add -A
git commit -m "Deploy"

$originExists = git remote | Select-String -Pattern "^origin$"

if ($originExists) {
    git remote remove origin
}

git remote add origin $repoUrl
git push -f origin gh-pages

Pop-Location

Write-Host "Deploy completed successfully."