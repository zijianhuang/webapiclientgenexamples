[Strongly Typed Client API Generators](https://github.com/zijianhuang/webapiclientgen) generate strongly typed client API in C# codes and TypeScript codes. This repository contains code examples explained in the following CodeProject.com articles:

* [Generate C# Client API for ASP.NET Web API](https://www.codeproject.com/Articles/1074039/Generate-Csharp-Client-API-for-ASP-NET-Web-API)
* [Generate TypeScript Client API for ASP.NET Web API](https://www.codeproject.com/Articles/1053601/Generate-TypeScript-Client-API-for-ASP-NET-Web-API)
* [ASP.NET Web API, Angular2, TypeScript and WebApiClientGen](https://www.codeproject.com/Articles/1165571/ASP-NET-Web-API-Angular-TypeScript-and-WebApiClie)


## Prerequisites

This VS solution was constructed using Visual Studio 2015.

**Server side:**
1. .NET Framework 4.5
1. ASP.NET Web API 2.2


**.NET client side:**
1. .NET Framework 4.5, or Universal Windows, or Mono.Android, or Xamarin.iOS
1. ASP.NET Web API 2.2 Client Libraries
1. Json.NET of Newtonsoft [for Content-Type application/json](http://www.asp.net/web-api/overview/formats-and-model-binding/content-negotiation)
1. Microsoft Build Tools 2015

**TypeScript client side:**
1. TypeScript compiler
1. jQuery and Chutzpah Test Adapter for the Test Explorer
1. Angular 2/4 and its dependencies in node_modules supported by Node.js and npm.



**Remarks**:
The size of the repository is around 100 MB since the binary files of NuGet packages are included, so you should be able to build and run integration testing right away. However, if you are interested in the DemoAngular2 project, you need to run "npm install" to download all the node_modules files._

