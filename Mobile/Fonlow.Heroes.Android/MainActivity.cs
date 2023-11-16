using Android.App;
using Android.Content.PM;
using Android.OS;
using Android.Views;


namespace Fonlow.Heroes
{
	[Activity(Label = "Heroes", Icon = "@mipmap/icon", 
		Theme = "@style/MainTheme", 
		MainLauncher = true, 
		ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation,
		HardwareAccelerated =true
		)]
	public class MainActivity : global::Xamarin.Forms.Platform.Android.FormsAppCompatActivity
	{
		App app;
		protected override void OnCreate(Bundle savedInstanceState)
		{
			//Both lines needed, otherwise in IDE Debug with x86 emulator base.OnCreate will throw System.InvalidCastException
			//Message = Unable to convert instance of type 'Android.Widget.RelativeLayout' to type 'AndroidX.AppCompat.Widget.Toolbar'.	
			//And the APK deployment will crash, though aab deployment is OK.
			ToolbarResource = Resource.Layout.Toolbar;
			TabLayoutResource = Resource.Layout.Tabbar;

			base.OnCreate(savedInstanceState);

			//Xamarin.Essentials.Platform.Init(this, savedInstanceState);
		}

		protected override void OnPostCreate(Bundle savedInstanceState)
		{

			global::Xamarin.Forms.Forms.Init(this, savedInstanceState);
			//global::Xamarin.Forms.FormsMaterial.Init(this, savedInstanceState);
			app = new App();//Settings is read
			LoadApplication(app);

			//Plugin.StoreReview.CrossStoreReview.Current.OpenStoreReviewPage("com.fonlow.VA");
			base.OnPostCreate(savedInstanceState);
		}
	}
}

