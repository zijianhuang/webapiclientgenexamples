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
            Load4Heroes();
            base.OnAppearing();
        }

        void Load4Heroes()
        {
            var heroesVM = new VM.HeroesVM();

            heroesVM.Load(Fonlow.Heroes.VM.HeroesFunctions.LoadHeroes().Take(4).ToList());
            BindingContext = heroesVM;
        }

    }
}
