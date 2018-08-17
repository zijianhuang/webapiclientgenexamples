using System;
using DemoWebApi.Controllers.Client;
using System.ComponentModel;

namespace Fonlow.Heroes.VM
{
    public static class HeroesFunctions
    {
        public static Hero[] LoadHeroes()
        {
            try
            {
                var baseUri = new Uri("http://192.168.0.2:9030/webapi/");
                using (var httpClient = new System.Net.Http.HttpClient())
                {
                    var api = new DemoWebApi.Controllers.Client.Heroes(httpClient, baseUri);
                    return api.Get();
                }
            }
            catch (Exception ex)
            {
                System.Diagnostics.Trace.TraceError(ex.ToString());
                throw;
            }
        }
    }
}