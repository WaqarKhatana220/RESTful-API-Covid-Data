var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main');
const verifyToken = require('../middleware/authMiddleware');

/**
/**
 * @swagger
 * tags:
 *   name: COVID Data
 *   description: API endpoints for performing CRUD operations on COVID data. All of these endpoints require authorization using a token obtained from the response body after a successful login.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CovidData:
 *       type: object
 *       properties:
 *         continent:
 *           type: string
 *         location:
 *           type: string
 *         last_updated_date:
 *           type: string
 *         total_cases:
 *           type: number
 *         new_cases:
 *           type: number
 *         new_cases_smoothed:
 *           type: number
 *         total_deaths:
 *           type: number
 *         new_deaths:
 *           type: number
 *         new_deaths_smoothed:
 *           type: number
 *         total_cases_per_million:
 *           type: number
 *         new_cases_per_million:
 *           type: number
 *         new_cases_smoothed_per_million:
 *           type: number
 *         total_deaths_per_million:
 *           type: number
 *         new_deaths_per_million:
 *           type: number
 *         new_deaths_smoothed_per_million:
 *           type: number
 *         reproduction_rate:
 *           type: number
 *         icu_patients:
 *           type: number
 *         icu_patients_per_million:
 *           type: number
 *         hosp_patients:
 *           type: number
 *         hosp_patients_per_million:
 *           type: number
 *         weekly_icu_admissions:
 *           type: number
 *         weekly_icu_admissions_per_million:
 *           type: number
 *         weekly_hosp_admissions:
 *           type: number
 *         weekly_hosp_admissions_per_million:
 *           type: number
 *         total_tests:
 *           type: number
 *         new_tests:
 *           type: number
 *         total_tests_per_thousand:
 *           type: number
 *         new_tests_per_thousand:
 *           type: number
 *         new_tests_smoothed:
 *           type: number
 *         new_tests_smoothed_per_thousand:
 *           type: number
 *         positive_rate:
 *           type: number
 *         tests_per_case:
 *           type: number
 *         tests_units:
 *           type: string
 *         total_vaccinations:
 *           type: number
 *         people_vaccinated:
 *           type: number
 *         people_fully_vaccinated:
 *           type: number
 *         total_boosters:
 *           type: number
 *         new_vaccinations:
 *           type: number
 *         new_vaccinations_smoothed:
 *           type: number
 *         total_vaccinations_per_hundred:
 *           type: number
 *         people_vaccinated_per_hundred:
 *           type: number
 *         people_fully_vaccinated_per_hundred:
 *           type: number
 *         total_boosters_per_hundred:
 *           type: number
 *         new_vaccinations_smoothed_per_million:
 *           type: number
 *         new_people_vaccinated_smoothed:
 *           type: number
 *         new_people_vaccinated_smoothed_per_hundred:
 *           type: number
 *         stringency_index:
 *           type: number
 *         population_density:
 *           type: number
 *         median_age:
 *           type: number
 *         aged_65_older:
 *           type: number
 *         aged_70_older:
 *           type: number
 *         gdp_per_capita:
 *           type: number
 *         extreme_poverty:
 *           type: number
 *         cardiovasc_death_rate:
 *           type: number
 *         diabetes_prevalence:
 *           type: number
 *         female_smokers:
 *           type: number
 *         male_smokers:
 *           type: number
 *         handwashing_facilities:
 *           type: number
 *         hospital_beds_per_thousand:
 *           type: number
 *         life_expectancy:
 *           type: number
 *         human_development_index:
 *           type: number
 *         population:
 *           type: number
 *         excess_mortality_cumulative_absolute:
 *           type: number
 *         excess_mortality_cumulative:
 *           type: number
 *         excess_mortality:
 *           type: number
 *         excess_mortality_cumulative_per_million:
 *           type: number
 */


/**
 * @swagger
 * /{iso}:
 *   get:
 *     summary: Get COVID data for a specific country using ISO code
 *     tags: [COVID Data]
 *     parameters:
 *       - in: path
 *         name: iso
 *         required: true
 *         description: ISO country code (e.g., AFG for Afghanistan)
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CovidData'
 *       '404':
 *         description: Country data not found
 */

/**
 * @swagger
 * /:
 *   post:
 *     summary: Add COVID data for a new country
 *     tags: [COVID Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CovidData'
 *     responses:
 *       '200':
 *         description: Data added successfully
 *       '409':
 *         description: Country data already exists
 */

/**
 * @swagger
 * /{iso}:
 *   put:
 *     summary: Update COVID data for a specific country using ISO code
 *     tags: [COVID Data]
 *     parameters:
 *       - in: path
 *         name: iso
 *         required: true
 *         description: ISO country code (e.g., AFG for Afghanistan)
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CovidData'
 *     responses:
 *       '200':
 *         description: Data updated successfully
 *       '404':
 *         description: Country data not found
 */

/**
 * @swagger
 * /{iso}:
 *   delete:
 *     summary: Delete COVID data for a specific country using ISO code
 *     tags: [COVID Data]
 *     parameters:
 *       - in: path
 *         name: iso
 *         required: true
 *         description: ISO country code (e.g., AFG for Afghanistan)
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Data deleted successfully
 *       '404':
 *         description: Country data not found
 */

/**
 * @swagger
 * /:
 *   delete:
 *     summary: Delete all COVID data
 *     tags: [COVID Data]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Data deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Deleted All
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all COVID data
 *     tags: [COVID Data]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/CovidData'
 */


router.get('/', verifyToken, mainController.getAll);
router.get('/:iso', verifyToken, mainController.getOne);
router.post('/', verifyToken, mainController.add);
router.put('/:iso', verifyToken, mainController.update);
router.delete('/:iso', verifyToken, mainController.deleteOne);
router.delete('/', verifyToken, mainController.deleteAll);

module.exports = router;
