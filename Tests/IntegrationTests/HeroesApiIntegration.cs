using Fonlow.Testing;
using Xunit;

namespace IntegrationTests
{
	public class HeroesFixture : DefaultHttpClient
	{
		public HeroesFixture()
		{
			Api = new DemoWebApi.Controllers.Client.Heroes(base.HttpClient);
		}

		public DemoWebApi.Controllers.Client.Heroes Api { get; private set; }
	}

	[Collection(TestConstants.IisExpressAndInit)]
	public partial class HeroesApiIntegration : IClassFixture<HeroesFixture>
	{
		public HeroesApiIntegration(HeroesFixture fixture)
		{
			api = fixture.Api;
		}

		readonly DemoWebApi.Controllers.Client.Heroes api;


		[Fact]
		public async void TestGetAsyncHeroes()
		{
			var array = await api.GetAsync();
			Assert.NotEmpty(array);
		}

		[Fact]
		public void TestGetHeroes()
		{
			var array = api.Get();
			Assert.NotEmpty(array);
		}

		[Fact]
		public void TestGetHeroNotExists()
		{
			DemoWebApi.Controllers.Client.Hero h = api.Get(99999);
			Assert.Null(h);


		}

		[Fact]
		public void TestPost()
		{
			var hero = api.Post("Abc");
			Assert.Equal("Abc", hero.Name);
		}

		[Fact]
		public void TestPostWithQuery()
		{
			var hero = api.PostWithQuery("Xyz");
			Assert.Equal("Xyz", hero.Name);
		}

	}
}
