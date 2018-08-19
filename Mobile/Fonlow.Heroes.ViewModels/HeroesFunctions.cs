using System;
using DemoWebApi.Controllers.Client;
using System.ComponentModel;

namespace Fonlow.Heroes.VM
{
    public static class HeroesFunctions
    {
        static readonly Uri apiUri = new Uri("http://192.168.0.2:9030/webapi/");

        public static Hero[] LoadHeroes()
        {
            try
            {
                using (var httpClient = new System.Net.Http.HttpClient())
                {
                    var api = new DemoWebApi.Controllers.Client.Heroes(httpClient, apiUri);
                    return api.Get();
                }
            }
            catch (Exception ex)
            {
                System.Diagnostics.Trace.TraceError(ex.ToString());
                throw;
            }
        }

        public static Hero LoadHero(long id)
        {
            try
            {
                using (var httpClient = new System.Net.Http.HttpClient())
                {
                    var api = new DemoWebApi.Controllers.Client.Heroes(httpClient, apiUri);
                    return api.Get(id);
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