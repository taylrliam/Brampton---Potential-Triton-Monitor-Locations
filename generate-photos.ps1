$assetsPath = Join-Path $PSScriptRoot "assets"
$outputPath = Join-Path $PSScriptRoot "sitePhotos.js"

$sitePhotos = @{}

Get-ChildItem -Path $assetsPath -Directory | ForEach-Object {

    $folderName = $_.Name

    $photos = Get-ChildItem -Path $_.FullName -File |
        Where-Object {
            $_.Extension -match '\.(jpg|jpeg|png|webp)$'
        } |
        Sort-Object Name |
        ForEach-Object {
            "assets/$folderName/$($_.Name)"
        }

    $sitePhotos[$folderName] = @($photos)
}

$json = $sitePhotos | ConvertTo-Json -Depth 5

$content = "const sitePhotos = $json;"

Set-Content -Path $outputPath -Value $content -Encoding UTF8

Write-Host "Photo list generated successfully!"
Write-Host "Created: $outputPath"