const watch = require("../model/watchs");

//add Watch
const addWatch = async (req, res) => {
  const newWatch = new watch(req.body);
  try {
    const savedWatch = await newWatch.save();
    res.status(201).json(savedWatch);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getWatchById = async (req, res) => {
  const wid = req.params.id;
  try {
    await Watch.findById(wid).then(async (w) => {
      if (w) {
        res.status(200).json(w);
      } else {
        res.status(404).json({ msg: "watch not found !" });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllWatchs = async (req, res) => {
  try {
    await watch.find().then(async (watchs) => {
      if (watchs) {
        res.status(200).json(watchs);
      } else {
        res.status(404).json({ msg: "watchs not found !" });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteWatch = async (req, res) => {
  const wid = req.param.id;
  try {
    const watch = await watch.findByIdAndDelete(wid);
    if (!watch) {
      return res.status(404).json({ msg: "watch not found !" });
    } else {
      res.status(200).json({ msg: "watch deleted successfully  !" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Error occurred while deleting prod" });
  }
};

module.exports = {
  addWatch,
  getWatchById,
  deleteWatch,
  getAllWatchs,
};
