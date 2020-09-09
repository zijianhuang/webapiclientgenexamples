[Strongly Typed Client API Generators](https://github.com/zijianhuang/webapiclientgen) generate strongly typed client API in C# codes and TypeScript codes. This repository contains code examples explained in the following CodeProject.com articles:

* [Generate C# Client API for ASP.NET Web API](https://www.codeproject.com/Articles/1074039/Generate-Csharp-Client-API-for-ASP-NET-Web-API)
* [Generate TypeScript Client API for ASP.NET Web API](https://www.codeproject.com/Articles/1053601/Generate-TypeScript-Client-API-for-ASP-NET-Web-API)
* [ASP.NET Web API, Angular2, TypeScript and WebApiClientGen](https://www.codeproject.com/Articles/1165571/ASP-NET-Web-API-Angular-TypeScript-and-WebApiClie)


And this repository contains the following demo applications:
1. DemoWebApi, ASP.NET Web API with HeroesController providing data to DemoAngular2 and Fonlow.Heroes.Android.
1. DemoAngular2, an Angular 2+ applications based on the Heroes Tour example in Angular's tutorial Website.
1. Fonlow.Heroes.Android, a Xamarin.Forms application mimicking the Heroes example in Angular's tutorial Website.
1. axios, JEST test suite using the generated TypeScript codes for Axios which is recommended by React and Vue.js.
1. vueTS, JEST test suite with Vue TypeScript and the generated TypeScript codes.


## Prerequisites

This VS solution was constructed using Visual Studio 2015-2017.

**Server side:**
1. .NET Framework 4.6.2
1. ASP.NET Web API 2.2


**.NET client side:**
1. .NET Framework 4.6.2, or Universal Windows, or Xamarin.Android, or Xamarin.iOS
1. ASP.NET Web API 2.2 Client Libraries
1. Json.NET of Newtonsoft [for Content-Type application/json](http://www.asp.net/web-api/overview/formats-and-model-binding/content-negotiation)
1. Microsoft Build Tools 2015

**TypeScript client side:**
1. TypeScript compiler 2.6
1. Angular 2/4/5 and its dependencies in node_modules supported by Node.js and npm.



**Remarks**:
* tag "withWebApiClientGen22" is with WebApiClientGen v2.2 and Angular 4.3
* tag "NG522" is with WebapiClientGen v2.4.4 and Angular 5
* Current trunk is similar to tag "NG522

**Hints**:
* The Android mobile app is talking to the Web API, however the base URI http://192.168.1.100:9030/webapi/ is hard-coded in HeroesFunction. So you may need to alter the base URI in codes in order to run the app successfuly in either Android devices or emulators, after you have deployed the Web API to IIS of local dev machine (not IIS Express).
* iOS emulator is actually running in Mac.

![Android](https://raw.githubusercontent.com/zijianhuang/webapiclientgenexamples/master/Tests/Android.PNG)

![iPhone](https://raw.githubusercontent.com/zijianhuang/webapiclientgenexamples/master/Tests/iPhone.png)

## Testing on Browsers and Mobile Devices
[![BrowserStack](http://i.imgur.com/Pg0utrk.png)](http://browserstack.com/)

Special thanks to the support of [BrowserStack](http://browserstack.com/) so real cross browser testing on multiple desktop and mobile platforms as well is possible. And [App Live](https://app-live.browserstack.com) supports testing Android apps and iOS apps on rich collections of real Android and iOS devices.
