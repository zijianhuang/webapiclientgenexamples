using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using DemoWebApi.Controllers.Client;
using Fonlow.Heroes.VM;

namespace Fonlow.Heroes.Views
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class HeroSearch : ContentView
	{
		public HeroSearch ()
		{
			InitializeComponent ();
            BindingContext = new HeroesVM();
		}

        HeroesVM ViewModel
        {
            get
            {
                return BindingContext as HeroesVM;
            }
        }

        private void Entry_Completed(object sender, EventArgs e)
        {
            var text = ((Entry)sender).Text;
            ViewModel.SearchCommand.Execute(text);
        }

        async void HeroesListView_ItemSelected(object sender, SelectedItemChangedEventArgs e)
        {
            await Navigation.PushAsync(new HeroDetailPage(ViewModel.Selected.Id));
        }
    }
}