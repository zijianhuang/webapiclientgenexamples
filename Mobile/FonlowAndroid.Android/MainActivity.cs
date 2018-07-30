using System;

using Android.App;
using Android.Content.PM;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using DemoWebApi.Controllers.Client;

namespace FonlowAndroid.Droid
{
    [Activity(Label = "FonlowAndroid", Icon = "@mipmap/icon", Theme = "@style/MainTheme", MainLauncher = true, ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation)]
    public class MainActivity : global::Xamarin.Forms.Platform.Android.FormsAppCompatActivity
    {
        protected override void OnCreate(Bundle bundle)
        {
            TabLayoutResource = Resource.Layout.Tabbar;
            ToolbarResource = Resource.Layout.Toolbar;

            base.OnCreate(bundle);

            global::Xamarin.Forms.Forms.Init(this, bundle);
            LoadApplication(new App());
            LoadHeroes();
        }

        public override void SetContentView(View view)
        {
            base.SetContentView(view);
        }

        private void LoadHeroes()
        {
            try
            {
                var baseUri = new Uri("http://192.168.2:9030/webapi/");
                var httpClient = new System.Net.Http.HttpClient();
                var api = new DemoWebApi.Controllers.Client.Heroes(httpClient, baseUri);
                Heroes = api.Get();

            }
            catch (Exception ex)
            {
                System.Diagnostics.Trace.TraceError(ex.ToString());
                throw;
            }
        }

        public Hero[] Heroes { get; private set; }

        public int HeroCount
        {
            get
            {
                if (Heroes == null)
                {
                    return 0;
                }

                return Heroes.Length;
            }
        }
    }
}

