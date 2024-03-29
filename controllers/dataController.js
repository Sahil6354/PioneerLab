const axios = require("axios");

exports.fetchData = async (req, res) => {
  try {
    const { category, limit } = req.query;
    let apiUrl = `https://api.publicapis.org/entries`;

    // data form public api
    const response = await axios.get(apiUrl);
    let data = response.data.entries;

    // Filtering by category
    if (category) {
      data = data.filter(
        (entry) => entry.Category.toLowerCase() === category.toLowerCase()
      );
    }

    // Applying result
    if (limit) {
      data = data.slice(0, parseInt(limit));
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
