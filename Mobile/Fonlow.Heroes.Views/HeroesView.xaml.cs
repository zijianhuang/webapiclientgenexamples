using Fonlow.Heroes.VM;
using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Fonlow.Heroes.Views
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class HeroesView : ContentView
	{
		public HeroesView()
		{
			InitializeComponent();
		}

		HeroesVM Model
		{
			get
			{
				return BindingContext as HeroesVM;
			}
		}

		async void Edit_Clicked(object sender, EventArgs e)
		{
			await Navigation.PushAsync(new HeroDetailPage(Model.Selected.Id));
		}

		private void HeroesListView_ItemSelected(object sender, SelectedItemChangedEventArgs e)
		{
			System.Diagnostics.Debug.WriteLine(e.SelectedItem == null);
		}

		private async void Entry_Completed(object sender, EventArgs e)
		{
			var text = ((Entry)sender).Text;
			var hero= await  HeroesFunctions.AddAsync(text);
			Model.Items.Add(hero);
		}
	}
}