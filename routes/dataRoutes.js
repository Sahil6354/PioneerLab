const express = require("express");
const router = express.Router();
const { fetchData } = require("../controllers/dataController");
const auth = require("../middleware/auth");

// Defined the route way for fetching data thrgh Api
router.get("/", auth, fetchData);

module.exports = router;

/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Fetches data from the public API with optional filtering
 *     description: Retrieves data entries from the public API. Allows filtering by category and limiting the number of results.
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         required: false
 *         description: Category to filter the data entries
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: Limit the number of data entries returned
 *     responses:
 *       200:
 *         description: An array of data entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   API:
 *                     type: string
 *                     description: Name of the API
 *                   Description:
 *                     type: string
 *                     description: Description of the API
 *                   Auth:
 *                     type: string
 *                     description: Type of authentication required by the API
 *                   HTTPS:
 *                     type: boolean
 *                     description: Whether the API supports HTTPS
 *                   Cors:
 *                     type: string
 *                     description: CORS support status of the API
 *                   Link:
 *                     type: string
 *                     format: uri
 *                     description: URL to the API
 *                   Category:
 *                     type: string
 *                     description: Category of the API
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
