BEGIN;

Insert into category (name,img,description ,number_of_pledges) values('Transport','https://ibb.co/QfKW9dh','Transport is responsible for around 30% of all GHG emissions in the EU, of which cars account for over 72% - and unlike many sectors, emissions from transport are getting bigger. See what you can do below.' , 1329),
('Household','https://ibb.co/QfKW9dh','In the UK, around 30% of our personal emissions come from energy used in the home. But reducing your home energy use can be surprisingly cheap and easy.',4020);


Insert into pledge (category_id,title,description,number_of_enrollement, img ,  importance ,further_info) values(1,'Flying' ,'I will take no more than one return flight each year. When I fly, I will offset my emissions',4454,'https://ibb.co/QfKW9dh','A flight from London to New York generates 1 tn. of Co2 per passenger. The average British person takes 3.2 flights per year.Not taking these flights or buying a regulated carbon offset each time you do fly, would reduce the average persons carbon footprint by around 2.4 tns per year.','Flights produce greenhouse gases - mainly carbon dioxide (CO2) - from burning fuel. These contribute to global warming when released into the atmosphere.An economy-class return flight from London to New York emits an estimated 0.96 tonnes of CO2 per passenger.Thats equivalent to 13% of the average annual emissions for someone in the UK or about the same as those caused by someone living in Ghana over a year.Aviation contributes about 2% of the worlds global carbon emissions, according to the International Air Transport Association (IATA). It predicts passenger numbers will double to 8.2 billion in 2037.'
),

(2,'Green energy','I will switch my electricity and gas supply to a green energy tariff',782,'https://ibb.co/QfKW9dh','The energy used to heat our homes, cook our food and power our appliances accounts for approximately 30% of the average persons carbon footprint. A green tariff means that the electricity you buy is matched by purchases of renewable energy that your energy supplier makes on your behalf, significantly reducing the emissions you create.

For households that rely on gas for heating and cooking, many clean energy providers offset the carbon emissions associated with any continued gas provision.
','In the UK, our electricity comes from a range of sources (see the breakdown of the last 24 hours [link: https://windeurope.org/about-wind/daily-wind/electricity-mix?utf8=%E2%9C%93&areas=GB&commit=Apply+filters]). 

In 2018 one third (33%) of the UK’s electricity came from renewable sources, up from 29.7% in 2017. Only around 3% of our electricity comes from coal today – compared to around 30% ten years ago. Despite these significant improvements, around 80% of the worlds energy is still generated from burning fossil fuels.

When you switch to a green energy provider, it does not mean that all your electricity then comes from renewable sources. There is no unused capacity in renewable energy facilities in the UK, so the energy you consume may still be generated by burning fossil fuels. However, good green energy providers ensure that for every unit of energy you use, a unit is produced and put on the grid by a renewable source. This helps compensate your emissions and drives the industry towards renewable energy. 

');

Insert into pledge_pros_cons (pledge_id,statement,color) values
(2,'Potential reduction in monthly energy costs','green'),
(2,'Reduced air pollution from clean energy production','green'),
(2,'Reduced dependence on foreign oil, gas and coal','green'),
(2,'Ease of switching - only deal with your new provider','green'),

(1, 'Significant, measureable emissions reduction', 'blue'),
(1, 'Significant cost saving when not flying','blue'),
(1, ' Low cost of offset (c.5% of flight cost)','amber' ),
(1, 'Reduced flexibility when not flying','red');

Insert into pledge_references (pledge_id,description) values (2,'https://www.carbonindependent.org/16.html'),
(2,'https://data.worldbank.org/indicator/eg.use.comm.fo.zs'),
(2,'https://www.energysavingtrust.org.uk/home-energy-efficiency/switching-utilities/buying-green-electricity'),
(1,'https://www.theguardian.com/environment/ng-interactive/2019/jul/19/carbon-calculator-how-taking-one-flight-emits-as-much-as-many-people-do-in-a-year'),
(1,'https://www.dw.com/en/to-fly-or-not-to-fly-the-environmental-cost-of-air-travel/a-42090155'),
(1,'https://co2.myclimate.org/en/flight_calculators/new');

Insert into pledge_resources (pledge_id , description,link) values
 (1 , 'Loco2 - Trains and busses across Europe '
,'https://www.theguardian.com/environment/ng-interactive/2019/jul/19/carbon-calculator-how-taking-one-flight-emits-as-much-as-many-people-do-in-a-year'
),
(1,'Guardian - 50 best no-fly holidays',
' https://www.dw.com/en/to-fly-or-not-to-fly-the-environmental-cost-of-air-travel/a-42090155 '
),
(1,'GoldStandard - Highest standard carbon offsets','https://www.goldstandard.org/'),
(2,'Energy saving trust  - Greenest energy tariffs ','https://www.energysavingtrust.org.uk/home-energy-efficiency/switching-utilities/buying-green-electricity');

Insert into pledge_instructions (pledge_id,description) values
 (2,'Use the resources below to find the right provider'),
 (2,'Let the new provider deal with your existing provider'),
(1, 'Plan staycations with family and friends'),
(1,'Use the resources below to offset when you fly'),
(1,'Use trains to get around Europe');

  COMMIT;