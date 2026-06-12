/*
	Select the brand, model, color and year 
		find any car where the color includes 'green'
*/

-- SELECT brand, model, color, year FROM cars
-- 	WHERE color LIKE '%green%';

/*
	for opposite condition
*/

-- SELECT brand, model, color, year FROM cars
-- 	WHERE color NOT LIKE '%green%';


/*
	Select the brand, model, color and year for cars
		where the model is 'DB' followed by any other single character
*/

SELECT brand, model, color, year FROM cars
	WHERE model LIKE 'DB_';