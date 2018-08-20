using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Fonlow.Heroes.VM;

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
    }
}