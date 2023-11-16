:: Copy deployable to local IIS website
:: 1. Make sure the folder heroes has been created by IIS Manager, 
:: 2. and change the security to allow local User (YourMachine\Users) to have write/modify access.
:: 3. Convert folder WebApi to Application 
cd %~dp0
set target=C:\inetpub\wwwroot\heroes\webapi\
robocopy bin\ %target%bin\ /MIR
robocopy Views\ %target%Views\ /MIR
robocopy Areas\ %target%Areas\ /MIR
robocopy Scripts\ %target%Scripts\ /MIR
robocopy Content\ %target%Content\ /MIR
robocopy fonts\ %target%fonts\ /MIR
robocopy App_data\ %target%\App_data\ /MIR

copy Web.config %target%web.config /Y /D
copy Global.asax %target% /Y /D
copy ..\3rdParty\EssentialDiagnostics\*.dll %target%bin /Y /D
pause