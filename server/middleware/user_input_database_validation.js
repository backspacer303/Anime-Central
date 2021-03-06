const {db} = require('../global');
const queries = require('../queries/login_queries');
const passwordHash = require('password-hash');

const userInputDatabaseValidation = {
    //Checking if username exists in database. Used for both log in, sign up and change username.
    checkUsername(req, res, next){

        db.query(queries.selectUserWithUsername, [req.body.username], (err, results, fields) => {

            if (err) throw err;
            
            if (results.length === 0){
                req.usernameExists = false;
            } else {
                req.usernameExists = true;
            }
            next();
        });
    },

    //Checking if email exists in database. Used for sign up and change email.
    checkEmail(req, res, next){

        if (req.body.email){

            db.query(queries.selectUserWithEmail, [req.body.email], (err, results, fields) => {

                if (err) throw err;
                
                if (results.length == 0){
                    next();
                } else {
                    res.status(400).send("Email already exists.");
                }
            });
        } else {
            
            res.status(400).send("Email field is empty.");
        }
        
    },

    //Checking if password is correct for given username. Used for log in and change password.
    checkPassword(req, res, next){

        if(req.usernameExists) {
            db.query(queries.selectUserWithUsername, [req.body.username], (err, results, fields) => {
                if (err) throw err;
                if (results.length == 0){
                    res.status(400).send(`Password for username ${req.body.username} is not correct.`);
                } else {
                    //DatabaseAdministrator's password is not hashed because it was added via MySQL Workbench
                    if ((req.body.password == "Admin1" && results[0].username == "DatabaseAdministrator") || passwordHash.verify(req.body.password, results[0].password)){
                        next();
                    } else {
                        res.status(400).send(`Password for username ${req.body.username} is not correct.`);
                    }
                    
                }
            });
        } else {
            res.status(400).send(`Username ${req.body.username} does not exist.`);
        }
    },

    //Checking if user with specified username and email exists in database. Used in forgotten password
    checkUsernameAndEmail(req, res, next){

        db.query(queries.selectUserWithUsernameAndEmail, [req.body.username, req.body.email], (err, result, fields) => {

            if (err) throw err;

            if (result.length == 0){
                res.status(400).send(`User with username ${req.body.username} and email ${req.body.email} does not exist.`);
            } else {
                next();
            }
        });
        
    }
}

module.exports = userInputDatabaseValidation;