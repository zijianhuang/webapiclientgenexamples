using Plugin.Settings;
using Plugin.Settings.Abstractions;

namespace Fonlow.Demo.Settings
{
  /// <summary>
  /// This is the Settings static class that can be used in your Core solution or in any
  /// of your client applications. All settings are laid out the same exact way with getters
  /// and setters. 
  /// </summary>
  public static class Settings
{
    private static ISettings AppSettings
    {
        get
        {
            return CrossSettings.Current;
        }
    }

        #region Setting Constants

        private const string SettingsKey = "settings_key";
        private static readonly string SettingsDefault = string.Empty;

        #endregion


        public static string GeneralSettings
        {
            get
            {
                return AppSettings.GetValueOrDefault(SettingsKey, SettingsDefault);
            }
            set
            {
                AppSettings.AddOrUpdateValue(SettingsKey, value);
            }
        }


        #region Setting Constants

        private const string baseUriKey = "baseUriKey";
        private static readonly string baseuriDefault = "http://192.168.0.2:9030/webapi/";

        #endregion


        public static string BaseUri
        {
            get
            {
                return AppSettings.GetValueOrDefault(baseUriKey, baseuriDefault);
            }
            set
            {
                AppSettings.AddOrUpdateValue(baseUriKey, value);
            }
        }



    }
}
