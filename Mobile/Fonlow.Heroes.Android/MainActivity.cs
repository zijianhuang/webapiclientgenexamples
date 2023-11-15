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
		protected override void OnCreate(Bundle bundle)
		{
			//Both lines needed, otherwise in IDE Debug with x86 emulator base.OnCreate will throw System.InvalidCastException
			//Message = Unable to convert instance of type 'Android.Widget.RelativeLayout' to type 'AndroidX.AppCompat.Widget.Toolbar'.	
			//And the APK deployment will crash, though aab deployment is OK.
			ToolbarResource = Resource.Layout.Toolbar;
			TabLayoutResource = Resource.Layout.Tabbar;

			base.OnCreate(bundle);

			global::Xamarin.Forms.Forms.Init(this, bundle);
		}

		protected override void OnPostCreate(Bundle savedInstanceState)
		{

			global::Xamarin.Forms.Forms.Init(this, savedInstanceState);
			//global::Xamarin.Forms.FormsMaterial.Init(this, savedInstanceState);
			var app = new App();//Settings is read
			LoadApplication(app);

			//Plugin.StoreReview.CrossStoreReview.Current.OpenStoreReviewPage("com.fonlow.VA");
			base.OnPostCreate(savedInstanceState);
		}
	}
}

