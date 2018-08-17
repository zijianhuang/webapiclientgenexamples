using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace Fonlow.Heroes.Views
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        protected override void OnAppearing()
        {
            load4Heroes();
            base.OnAppearing();
        }

        void load4Heroes()
        {
            var heroesVM = new VM.HeroesVM();

            heroesVM.Assign(Fonlow.Heroes.VM.HeroesFunctions.LoadHeroes().Take(4).ToArray());
            BindingContext = heroesVM;
        }

    }
}
