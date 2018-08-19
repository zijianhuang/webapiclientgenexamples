using System;
using DemoWebApi.Controllers.Client;
using System.ComponentModel;
using System.Windows.Input;
using Xamarin.Forms;
using System.Collections.Generic;
using System.Linq;
using System.Collections.ObjectModel;
namespace Fonlow.Heroes.VM
{
    public class HeroesVM : INotifyPropertyChanged
    {
        public HeroesVM()
        {
            DeleteCommand = new Command<long>(DeleteHero);
            EditCommand = new Command<long>(EditHero);
        }

        public void Load(List<Hero> items)
        {
            Items = new ObservableCollection<Hero>(items);
            NotifyPropertyChanged("Items");
            NotifyPropertyChanged("Count");
        }

        public event PropertyChangedEventHandler PropertyChanged;

        public ObservableCollection<Hero> Items { get; private set; }

        public Hero Selected { get; set; }

        public int Count
        {
            get
            {
                if (Items == null)
                {
                    return 0;
                }

                return Items.Count;
            }
        }

        public void NotifyPropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        public ICommand DeleteCommand { get; private set; }

        public ICommand EditCommand { get; private set; }

        public void DeleteHero(long id)
        {
            var first = Items.FirstOrDefault(d => d.Id == id);
            if (first !=null)
            {
                Items.Remove(first);
                NotifyPropertyChanged("Items");
                NotifyPropertyChanged("Count");
            }

        }

        private void EditHero(long id)
        {

        }

    }
}
