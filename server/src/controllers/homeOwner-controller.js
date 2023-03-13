import HomeOwner from '../models/HomeOwner';
import bcrypt from 'bcryptjs';

export const getAllHomeOwners = async (req, res, next) => {
    let homeOwners;
    try {
        homeOwners = await HomeOwner.find();
    } catch (err) {
        return console.error(err);
    }
    if (!homeOwners) {
        return res.status(404).json({ message: "HomeOwner not found" });
    }
    return res.status(200).json({ homeOwners });
}

// Register Method for HomeOwner
export const register = async (req, res, next) => {
    const { firstName, middleName, lastName, email, phoneNumber, nationalId, homeAddress, properties, password } = req.body;
    let existingHomeOwner;

    try {
        existingHomeOwner = await HomeOwner.findOne({ email });
    } catch (err) {
        return console.log(err);
    }
    if (existingHomeOwner) {
        return res.status(400).json({ message: "HomeOwner already exists! Login Instead" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    const homeOwner = new HomeOwner({
        firstName,
        middleName,
        lastName,
        email,
        phoneNumber,
        nationalId,
        homeAddress,
        properties: [],
        password: hashedPassword,
    });

    try {
        await homeOwner.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ homeOwner }); //201 => homeOwner is created
};

// Login Method for HomeOwner
export const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingHomeOwner;

    try {
        existingHomeOwner = await HomeOwner.findOne({ email });
    } catch (err) {
        return console.log(err);
    }
    if (!existingHomeOwner) {
        return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isValidPassword = bcrypt.compareSync(password, existingHomeOwner.password);
    if (!isValidPassword) {
        return res.status(400).json({ message: "Invalid Credentials" });
    }
    return res.status(200).json({ homeOwner: existingHomeOwner });
};
