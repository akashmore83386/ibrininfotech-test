import User from "../models/user.js";

export const createUser = async (req, res) => {
  const { name, photo, country, dob, interests, state } = req.body;

  try {
    const oldUser = await User.findOne({ name });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const result = await User.create({ name, photo, country, dob, state, interests });

    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};