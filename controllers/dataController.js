const axios = require("axios");

exports.fetchData = async (req, res) => {
  try {
    const { category, limit } = req.query;
    let apiUrl = `https://api.publicapis.org/entries`;

    // Fetch data from the public API
    const response = await axios.get(apiUrl);
    let data = response.data.entries;

    // Filter by category if specified
    if (category) {
      data = data.filter(
        (entry) => entry.Category.toLowerCase() === category.toLowerCase()
      );
    }

    // Apply result limit if specified
    if (limit) {
      data = data.slice(0, parseInt(limit));
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
