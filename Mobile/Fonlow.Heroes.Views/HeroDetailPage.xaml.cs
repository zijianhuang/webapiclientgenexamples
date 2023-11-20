using DemoWebApi.Controllers.Client;
using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Fonlow.Heroes.Views
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class HeroDetailPage : ContentPage
    {
        public HeroDetailPage(long heroId)
        {
            InitializeComponent();
            BindingContext = VM.HeroesFunctions.LoadHero(heroId);
        }

        Hero Model
        {
            get
            {
                return BindingContext as Hero;
            }
        }

        private async void Save_Clicked(object sender, EventArgs e)
        {
            await VM.HeroesFunctions.SaveAsync(Model);
        }
    }
}