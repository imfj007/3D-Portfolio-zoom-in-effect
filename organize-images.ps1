# PowerShell script to organize image frames into public/sequence folder

# Create the sequence folder if it doesn't exist
if (-not (Test-Path "public/sequence")) {
    New-Item -ItemType Directory -Path "public/sequence" -Force | Out-Null
}

# Copy all image files to public/sequence
$files = Get-ChildItem -Filter "ezgif-frame-*.jpg" -ErrorAction SilentlyContinue
if ($files) {
    Copy-Item -Path "ezgif-frame-*.jpg" -Destination "public/sequence/" -Force
    $count = (Get-ChildItem "public/sequence/" | Measure-Object).Count
    Write-Host "✓ Image frames organized in public/sequence/" -ForegroundColor Green
    Write-Host "Found: $count frames" -ForegroundColor Green
} else {
    Write-Host "⚠ No JPG frames found in current directory" -ForegroundColor Yellow
}
