using System;
using DemoWebApi.Controllers.Client;
using System.ComponentModel;
using System.Threading.Tasks;

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

        public static async Task<Hero[]> SearchAsync(string keyword)
        {
            try
            {
                using (var httpClient = new System.Net.Http.HttpClient())
                {
                    var api = new DemoWebApi.Controllers.Client.Heroes(httpClient, apiUri);
                    return await api.SearchAsync(keyword);
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

        public static async Task SaveAsync(Hero hero)
        {
            try
            {
                using (var httpClient = new System.Net.Http.HttpClient())
                {
                    var api = new DemoWebApi.Controllers.Client.Heroes(httpClient, apiUri);
                    await api.PutAsync(hero);
                }
            }
            catch (Exception ex)
            {
                System.Diagnostics.Trace.TraceError(ex.ToString());
                throw;
            }
        }

        public static async Task DeleteAsync(long id)
        {
            try
            {
                using (var httpClient = new System.Net.Http.HttpClient())
                {
                    var api = new DemoWebApi.Controllers.Client.Heroes(httpClient, apiUri);
                    await api.DeleteAsync(id);
                }
            }
            catch (Exception ex)
            {
                System.Diagnostics.Trace.TraceError(ex.ToString());
                throw;
            }
        }

        public static async Task<Hero> AddAsync(string name)
        {
            try
            {
                using (var httpClient = new System.Net.Http.HttpClient())
                {
                    var api = new DemoWebApi.Controllers.Client.Heroes(httpClient, apiUri);
                    return await api.PostAsync(name);
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