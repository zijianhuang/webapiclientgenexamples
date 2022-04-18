﻿using Newtonsoft.Json;
using System;
using Xunit;

namespace IntegrationTests
{
	public class TupleFixture : Fonlow.Testing.DefaultHttpClient
    {
        public TupleFixture()
        {
            Api = new DemoWebApi.Controllers.Client.Tuple(base.HttpClient);
        }

        public DemoWebApi.Controllers.Client.Tuple Api { get; private set; }
    }

    [Collection(TestConstants.IisExpressAndInit)]
    public class TupleApiIntegration : IClassFixture<TupleFixture>
    {
        public TupleApiIntegration(TupleFixture fixture)
        {
            api = fixture.Api;
        }

        DemoWebApi.Controllers.Client.Tuple api;

        [Fact]
        public void TestTuple1()
        {
            var r = api.GetTuple1();
            Assert.Equal(1, r.Item1);
        }

        [Fact]
        public void TestPostTuple1()
        {
            var r = api.PostTuple1(new Tuple<int>(8));
            Assert.Equal(8, r);
        }
        [Fact]
        public void TestTuple2()
        {
            var r = api.GetTuple2();
            Assert.Equal("Two", r.Item1);
            Assert.Equal(2, r.Item2);
        }

        [Fact]
        public void TestPostTuple2()
        {
            var r = api.PostTuple2(new Tuple<string, int>("some", 3));
            Assert.Equal("some", r);
        }

        [Fact]
        public void TestTuple3()
        {
            var r = api.GetTuple3();
            Assert.Equal("Three", r.Item1);
        }

        [Fact]
        public void TestPostTuple3()
        {
            var r = api.PostTuple3(new Tuple<string, string, int>("some", "", 3));
            Assert.Equal("some", r);
        }

        [Fact]
        public void TestTuple4()
        {
            var r = api.GetTuple4();
            Assert.Equal("Four", r.Item1);
        }

        [Fact]
        public void TestPostTuple4()
        {
            var r = api.PostTuple4(new Tuple<string, string, string, int>("some", "", "", 3));
            Assert.Equal("some", r);
        }

        [Fact]
        public void TestTuple5()
        {
            var r = api.GetTuple5();
            Assert.Equal("Five", r.Item1);
        }

        [Fact]
        public void TestPostTuple5()
        {
            var r = api.PostTuple5(new Tuple<string, string, string, string, int>("some", "", "", "", 3));
            Assert.Equal("some", r);
        }

        [Fact]
        public void TestTuple6()
        {
            var r = api.GetTuple6();
            Assert.Equal("Six", r.Item1);
        }

        [Fact]
        public void TestPostTuple6()
        {
            var r = api.PostTuple6(new Tuple<string, string, string, string, string, int>("some", "", "", "", "", 3));
            Assert.Equal("some", r);
        }

        [Fact]
        public void TestTuple7()
        {
            var r = api.GetTuple7();
            Assert.Equal("Seven", r.Item1);
        }

        [Fact]
        public void TestPostTuple7()
        {
            var r = api.PostTuple7(new Tuple<string, string, string, string, string, long, int>("some", "", "", "", "", 333, 3));
            Assert.Equal("some", r);
        }

        [Fact]
        public void TestTuple8()
        {
            var r = api.GetTuple8();
            Assert.Equal("Nested", r.Item1);
            Assert.Equal("nine", r.Rest.Item1);
        }

        [Fact]
        public void TestPostTuple8()
        {
            var r = api.PostTuple8(new Tuple<string, string, string, string, string, string, string, Tuple<string, string, string>>(
                "abc", "", "","", "", "", "", new Tuple<string, string, string>("ok", "yes", "no")));
            Assert.Equal("ok", r);
        }


        [Fact]
        public void TestTupleCreate()
        {
            var t = Tuple.Create<string, string, int>("One", "Two", 2);
            var s = JsonConvert.SerializeObject(t);
            
        }

        [Fact]
        public void TestJsonSerializer()
        {
            var t = Tuple.Create<string, string, int>("One", "Two", 2);
            using (var writer = new System.IO.StringWriter())
            {
                var serializer = JsonSerializer.Create();
                serializer.Serialize(writer, t);
                var s = writer.ToString();
            }
        }


    }
}
