﻿using Fonlow.Testing;
using System.Linq;
using Xunit;

namespace IntegrationTests
{
	public class ValuesFixture : DefaultHttpClient
	{
		public ValuesFixture()
		{
			Api = new DemoWebApi.Controllers.Client.Values(base.HttpClient);
		}

		public DemoWebApi.Controllers.Client.Values Api { get; private set; }
	}


	[Collection(TestConstants.IisExpressAndInit)]
	public class ValuesApiIntegration : IClassFixture<ValuesFixture>
	{
		public ValuesApiIntegration(ValuesFixture fixture)
		{
			api = fixture.Api;
		}

		DemoWebApi.Controllers.Client.Values api;

		[Fact]
		public void TestValuesGet()
		{
			//var task = authorizedClient.GetStringAsync(new Uri(baseUri, "api/Values"));
			//var text = task.Result;
			//var array = JArray.Parse(text);
			var array = api.Get().ToArray();
			Assert.Equal("value2", array[1]);
		}

		[Fact]
		public void TestValuesGetId()
		{
			//UriBuilder builder = new UriBuilder(new Uri(baseUri, "api/Values"));
			//var query = System.Web.HttpUtility.ParseQueryString(builder.Query);
			//query.Add("id", "1");
			//query.Add("name", "something to say");
			//builder.Query = query.ToString();
			//var task = authorizedClient.GetStringAsync(builder.ToString());
			//var text = task.Result;
			//var jObject = JValue.Parse(text);
			var r = api.Get(1,  "something to say中文\\`-=|~!@#$%^&*()_+/|?[]{},.';<>:\"");
			Assert.Equal("something to say中文\\`-=|~!@#$%^&*()_+/|?[]{},.';<>:\"1", r);
		}


		[Fact]
		public void TestValuesPost()
		{
			//var t = authorizedClient.PostAsync(new Uri(baseUri, "api/Values")
			//        , new FormUrlEncodedContent(new[] { new KeyValuePair<string, string>("", "value") }));
			//var ok = t.Result.IsSuccessStatusCode;
			//Assert.True(ok);
			//var text = t.Result.Content.ReadAsStringAsync().Result;
			//var jObject = JValue.Parse(text);
			//Assert.Equal("VALUE", jObject.ToObject<string>());
			var t = api.Post("value");
			Assert.Equal("VALUE", t);
		}

		[Fact]
		public void TestValuesPut2()
		{
			//var t = authorizedClient.PutAsync(new Uri(baseUri, "api/Values?id=1"), new FormUrlEncodedContent(new[] { new KeyValuePair<string, string>("", "value") }));
			//var ok = t.Result.IsSuccessStatusCode;
			//Assert.True(ok);
			api.Put(1, "value");
		}

		[Fact]
		public void TestValuesDelete()
		{
			//var t = authorizedClient.DeleteAsync(new Uri(baseUri, "api/Values/1"));
			//var ok = t.Result.IsSuccessStatusCode;
			//Assert.True(ok);
			api.Delete(1);
		}

	}
}
