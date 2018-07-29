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
        }

        public override void SetContentView(View view)
        {
            LoadHeroes();
            base.SetContentView(view);
        }

        private void LoadHeroes()
        {
            var baseUri = new Uri("https://localhost:44356/");
            var httpClient = new System.Net.Http.HttpClient();
            var api = new DemoWebApi.Controllers.Client.Heroes(httpClient, baseUri);
            var heroes = api.Get();

        }
    }
}

