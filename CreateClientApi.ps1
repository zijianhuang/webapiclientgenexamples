#Launch WebApi Website and POST a request for generating client APIs. This only works with the DEBUG build of the Web service.
cd $PSScriptRoot
$arguments = "/site:DemoWebApi /apppool:Clr4IntegratedAppPool /config:$PSScriptRoot\.vs\WebApiClientGenExamples\config\applicationhost.config"
echo $arguments
$procArgs = @{
    FilePath         = "C:\Program Files (x86)\IIS Express\iisexpress.exe"
    ArgumentList     = $arguments
    PassThru         = $true
}
$process = Start-Process @procArgs

Invoke-RestMethod http://localhost:10965/api/codegen -Method POST -InFile "$($PSScriptRoot)\DemoWebApi\CodeGen.json" -ContentType "application/json"

#Step 3: Compile generated TS codes to JS for jQuery
Invoke-Expression "tsc.ps1 --target es2015 $PSScriptRoot\DemoWebApi\Scripts\ClientApi\WebApiClientAuto.ts"


Stop-Process $process
