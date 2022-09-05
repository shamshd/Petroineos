namespace PetroineosAPI.Models
{
    public class PowerTrade
    {
        public DateTime Date { get; set; }

        public PowerPeriod[] Periods { get; set; }

        public static PowerTrade Create(DateTime date, int numberOfPeriods)
        {
            PowerTrade pt = new PowerTrade();
            try
            {
                pt.Date = date;
                pt.Periods = new PowerPeriod[numberOfPeriods];
                for (int i = 0; i < numberOfPeriods; i++)
                {
                    pt.Periods[i] = new PowerPeriod();
                    pt.Periods[i].Period = i + 1;
                    Random r = new Random();
                    pt.Periods[i].Volume = 100 * r.Next(0, 10);
                }
            }
            catch(Exception e)
            {
                // ***** In a real production system I would use some sort of Logger rather than Console.WriteLine *****
                Console.WriteLine("ERROR IN POWERTRADE.Create method: " + Environment.NewLine + e.Message + Environment.NewLine + e.StackTrace);
            }
            return pt;
        }
    }
}
