/*
	Count the number of cars 
    where sold is true
*/
 
-- SELECT COUNT(*) FROM cars
--   WHERE sold IS TRUE;

-- ┌─────────┬───────┐
-- │ (index) │ count │
-- ├─────────┼───────┤
-- │ 0       │ 19    │
-- └─────────┴───────┘

-- for changing the name from count to anything ex. total_count we use "AS" keyword 

-- SELECT COUNT(*) AS total_sold FROM cars
--   WHERE sold IS TRUE;

-- ┌─────────┬────────────┐
-- │ (index) │ total_sold │
-- ├─────────┼────────────┤
-- │ 0       │ 19         │
-- └─────────┴────────────┘


/*
	Sum the price of cars
        where sold is true 
    Use the alias total_earnings in your output
*/

SELECT SUM(price) AS total_earnings FROM cars
    WHERE sold IS TRUE;