import Property from "../models/Property";

// Multiple ways to return listed properties
// 1. Using the populate method
// 2. Using the find method
// 3. Using the aggregate method
// 4. Using the map method
// 5. Using the forEach method
// 6. Using the for loop
// 7. Return by suburb
// 8. Return by city
// 11. Return by similar properties
// 13. Return by similar price
// 14. Return by similar size
// 15. Return by similar number of bedrooms
// 16. Return by similar number of bathrooms
// 17. Return by similar number of garages
// 18. Return by similar number of parking spaces
// 19. Return by similar number of floors
// 20. Return by similar number of rooms
// 21. Return by similar number of lounges
// 22. Return by similar number of kitchens
// 23. Return by pet policy
// 24. Return by smoking policy

// 1. Using the populate method
export const getAllProperties = async (req, res, next) => {
    let properties;
    try {
        properties = await Property.find().populate("homeOwner");
    } catch (err) {
        return console.error(err);
    }
    if (!properties) {
        return res.status(404).json({ message: "Property not found" });
    }
    return res.status(200).json({ properties });
};

// 2. Using the find method
export const findProperty = async (req, res, next) => {
    let properties;
    try {
        properties = await Property.find();
    } catch (err) {
        return console.error(err);
    }
    if (!properties) {
        return res.status(404).json({ message: "Property not found" });
    }
    return res.status(200).json({ properties });
}

// 3. Using the aggregate method
export const aggregateProperty = async (req, res, next) => {
    let properties;
    try {
        properties = await Property.aggregate();
    } catch (err) {
        return console.error(err);
    }
    if (!properties) {
        return res.status(404).json({ message: "Property not found" });
    }
    return res.status(200).json({ properties });
}

// 4. Using the map method
export const mapProperty = async (req, res, next) => {
    let properties;
    try {
        properties = await Property.find().map();
    } catch (err) {
        return console.error(err);
    }
    if (!properties) {
        return res.status(404).json({ message: "Property not found" });
    }
    return res.status(200).json({ properties });
}

// 5. Using the forEach method
export const forEachProperty = async (req, res, next) => {
    let properties;
    try {
        properties = await Property.find().forEach();
    } catch (err) {
        return console.error(err);
    }
    if (!properties) {
        return res.status(404).json({ message: "Property not found" });
    }
    return res.status(200).json({ properties });
}

// 6. Using the for loop
export const forProperty = async (req, res, next) => {
    let properties;
    try {
        properties = await Property.find().for();
    } catch (err) {
        return console.error(err);
    }
    if (!properties) {
        return res.status(404).json({ message: "Property not found" });
    }
    return res.status(200).json({ properties });
}

// 7. Return by suburb
export const getPropertiesBySuburb = async (req, res, next) => {
    const { suburb } = req.params;
    let properties;
    try {
        properties = await Property.find({ suburb });
    } catch (err) {
        return console.error(err);
    }
    if (!properties) {
        return res.status(404).json({ message: "Property not found" });
    }
    return res.status(200).json({ properties });
}

// 8. Return by city
export const getPropertiesByCity = async (req, res, next) => {
    const { city } = req.params;
    let properties;
    try {
        properties = await Property.find({ city });
    } catch (err) {
        return console.error(err);
    }
    if (!properties) {
        return res.status(404).json({ message: "Property not found" });
    }
    return res.status(200).json({ properties });
}

// 11. Return by similar properties
export const getPropertiesBySimilarProperties = async (req, res, next) => {
    const { similarProperties } = req.params;
    let properties;
    try {
        properties = await Property.find({ similarProperties });
    } catch (err) {
        return console.error(err);
    }
    if (!properties) {
        return res.status(404).json({ message: "Property not found" });
    }
    return res.status(200).json({ properties });
}