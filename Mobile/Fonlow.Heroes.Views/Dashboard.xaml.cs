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
	public partial class Dashboard : ContentView
	{
		public Dashboard ()
		{
			InitializeComponent ();
            heroes = BindingContext as Fonlow.Heroes.VM.HeroesVM;

        }

        Fonlow.Heroes.VM.HeroesVM heroes;

    }
}