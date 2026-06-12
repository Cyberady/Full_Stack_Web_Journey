/*
	Filter out cars from 1965
		Select the brand, model, year and price
*/

-- SELECT brand, model, year, price FROM cars
--  WHERE year != 1965;

-- != or <> is same Not eqals to

-- SELECT brand, model, year, price FROM cars
--  WHERE year <> 1965;

/*
	Filter cars which are not yellow
		Select the brand, model, price and color
*/

SELECT brand, model, price, color FROM cars
  WHERE color != 'yellow';