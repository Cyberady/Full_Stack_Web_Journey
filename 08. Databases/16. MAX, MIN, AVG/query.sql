/*
	Select the maximum retail price
		where sold is true
	Use most_expensive as an alias
*/

-- SELECT MAX(price) AS most_expensive FROM cars
--     WHERE sold IS TRUE;

/*
    Use the AVG aggregate function to find the average price 
        where the brand is Bentley
*/

-- SELECT AVG(price) FROM cars
--     WHERE brand = 'Bentley';

-- ┌─────────┬──────────────────────┐
-- │ (index) │ avg                  │
-- ├─────────┼──────────────────────┤
-- │ 0       │ '62500.000000000000' │
-- └─────────┴──────────────────────┘



/*    
    We can FLOOR and CEIL to round the average down or up   
        to the nearest whole number
*/

-- SELECT FLOOR(AVG(price)) AS avg FROM cars
--     WHERE brand = 'Bentley';

-- ┌─────────┬─────────┐
-- │ (index) │ avg     │
-- ├─────────┼─────────┤
-- │ 0       │ '62500' │
-- └─────────┴─────────┘


/*
    Select the average, minimum and maximum price from cars 
        where sold is true
    Round the average up to the nearest whole number
        and use 'avg' as the alias for the result
*/

SELECT
    CEIL(AVG(price)) AS avg,
    MIN(price),
    MAX(price)
FROM cars
    WHERE sold IS TRUE