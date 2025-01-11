const command = require("../model/command");

//add command
const createCommand = async (req, res) => {
  const newCommand = new command(req.body);
  try {
    const savedCommand = await newCommand.save();
    res.status(201).json(savedCommand);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCommandById = async (req, res) => {
  const cui = req.params.id;
  try {
    const commandFound = await command.findById(cui);
    if (commandFound) {
      res.status(200).json(commandFound);
    } else {
      res.status(404).json({ msg: "command not Found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//cancel command
const cancelCommand = async (req, res) => {
  const cui = req.params.id;
  try {
    const commandFound = await command.findById(cui);

    if (!commandFound) {
      return res.status(404).json({ msg: "Command not found" });
    }
    commandFound.status = "canceled";
    const updatedCommand = await commandFound.save();
    res.status(200).json(updatedCommand);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createCommand, getCommandById, cancelCommand };
