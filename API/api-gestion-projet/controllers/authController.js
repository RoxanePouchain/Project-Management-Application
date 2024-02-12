const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../config/db");

//Inscription de l'utilisateur
exports.signup = async (req, res) => {
    try {
        const {lastname, firstname, username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ lastname, firstname, username, password: hashedPassword});
        res.status(201).json({message: "Utilisateur ajouté !"});
    } catch (error) {
        res.status(500).json({error: error.message });
    }
};

//Connexion de l'utilisateur
exports.login = async (req, res) => {
    try {
        const { username, password} = req.body;
        const user = await User.findOne({where: {username: req.body.username}});

        //Vérifie si on trouve un user et retourne un message d'erreur s'il n'est pas trouvé
        if (!user) {
            return res
                .status(401)
                .json({message: "Utilisateur ou mot de passe incorrect"});
        }

        //On vérifie si le mot de passe correspond à l'utilisateur et renvoie un message d'erreur si non valide
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return res
                .status(401)
                .json({message: "Utilisateur ou mot de passe incorrect"});
        }

        //générer un token valable 24h
        const token = jwt.sign({ userId: user.userId}, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
        });
        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};


//Deconnexion de l'utilisateur
exports.logout = async (req, res) => {
    res.deleteToken() //REVENIR DESSUS
    res.redirect("/") //ATTENTION: METTRE LE CHEMIN CORRESPONDANT
};