using PetroineosAPI.Models;

namespace PetroineosAPI
{
    public class PowerService
    {
        private static readonly List<PowerTrade> powerTrades = new List<PowerTrade>();
        public PowerService()
        {
            try
            {
                if (powerTrades.Count == 0)
                {
                    powerTrades.Add(PowerTrade.Create(new DateTime(2015, 04, 01), 24));
                    powerTrades.Add(PowerTrade.Create(new DateTime(2015, 04, 01), 24));
                    powerTrades.Add(PowerTrade.Create(new DateTime(2015, 04, 01), 24));
                    powerTrades.Add(PowerTrade.Create(new DateTime(2015, 04, 02), 24));
                    powerTrades.Add(PowerTrade.Create(new DateTime(2015, 04, 02), 24));
                    powerTrades.Add(PowerTrade.Create(new DateTime(2015, 11, 01), 24));
                    powerTrades.Add(PowerTrade.Create(new DateTime(2015, 11, 01), 24));
                    powerTrades.Add(PowerTrade.Create(new DateTime(2015, 11, 22), 24));
                }
            }
            catch(Exception e)
            {
                // ***** In a real production system I would use some sort of Logger rather than Console.WriteLine *****
                Console.WriteLine("ERROR IN PowerService Constructor - when creating data: " + Environment.NewLine + e.Message + Environment.NewLine + e.StackTrace);
            }
         
        }

        public IEnumerable<PowerTrade> GetTrades(DateTime date)
        {
            IEnumerable<PowerTrade> trades = null;
            try
            {
                trades = powerTrades.Where(pt => pt.Date == date);
            }
            catch(Exception e)
            {
                // ***** In a real production system I would use some sort of Logger rather than Console.WriteLine *****
                Console.WriteLine("ERROR IN PowerService GetTrades method: " + Environment.NewLine + e.Message + Environment.NewLine + e.StackTrace);
            }
            return trades;


        }

    }
}
