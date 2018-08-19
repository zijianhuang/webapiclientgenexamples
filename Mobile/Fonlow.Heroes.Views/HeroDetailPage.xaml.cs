using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;


namespace Fonlow.Heroes.Views
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class HeroDetailPage : ContentPage
	{
		public HeroDetailPage (long heroId)
		{
			InitializeComponent ();
            BindingContext = VM.HeroesFunctions.LoadHero(heroId);
		}


	}
}