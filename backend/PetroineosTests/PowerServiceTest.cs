using Microsoft.VisualStudio.TestTools.UnitTesting;
using PetroineosAPI;
using PetroineosAPI.Models;

namespace PetroineosTests
{
    
    [TestClass]
    public class PowerServiceTest
    {
        [TestMethod]
        public void TestMethod1()
        {
            PowerService ps = new PowerService();
            var response = ps.GetTrades(new DateTime(2015,04,02));

            var expected = new List<PowerTrade>()
            {
                new PowerTrade()
                {
                    Date = new DateTime(2015,04,02),
                    Periods = new PowerPeriod[]
                    {
                        new PowerPeriod() {},
                        new PowerPeriod() {}
                    }
                },

                new PowerTrade()
                {
                    Date = new DateTime(2022,04,02),
                    Periods = new PowerPeriod[]
                    {
                        new PowerPeriod() {},
                        new PowerPeriod() {}
                    }
                }
            };

            Assert.IsNotNull(response);
            Assert.AreEqual(expected.Count, response.Count());
        }
    }
}