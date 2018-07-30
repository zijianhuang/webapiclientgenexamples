using System;
using DemoWebApi.Controllers.Client;
using System.ComponentModel;

namespace MyAndroidVM
{
    public class Heroes : INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler PropertyChanged;

        public void LoadHeroes()
        {
            try
            {
                var baseUri = new Uri("http://192.168.0.2:9030/webapi/");
                var httpClient = new System.Net.Http.HttpClient();
                var api = new DemoWebApi.Controllers.Client.Heroes(httpClient, baseUri);
                Items = api.Get();
                NotifyPropertyChanged("Items");
                NotifyPropertyChanged("Count");

            }
            catch (Exception ex)
            {
                System.Diagnostics.Trace.TraceError(ex.ToString());
                throw;
            }
        }

        public Hero[] Items { get; private set; }

        public int Count
        {
            get
            {
                if (Items == null)
                {
                    return 0;
                }

                return Items.Length;
            }
        }

        public void NotifyPropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

    }
}
