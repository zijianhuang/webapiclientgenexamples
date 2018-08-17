using System;
using DemoWebApi.Controllers.Client;
using System.ComponentModel;

namespace Fonlow.Heroes.VM
{
    public class HeroesVM : INotifyPropertyChanged
    {
        public HeroesVM()
        {

        }

        public void Load(Hero[] items)
        {
            Items = items;
            NotifyPropertyChanged("Items");
            NotifyPropertyChanged("Count");
        }

        public event PropertyChangedEventHandler PropertyChanged;

        public Hero[] Items { get; private set; }

        public int Count
        {
            get
            {
                if (Items == null)
                {
                    return 0;
                }

                return Items.Length;
            }
        }

        public void NotifyPropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

    }
}
