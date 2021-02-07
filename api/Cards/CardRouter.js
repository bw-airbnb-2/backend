const express = require("express");
const router = express.Router();
const Cards = require("./CardModel");

// POST /card/create

/**
 * @POST:
 *     /card/create
 * @Request:
 *      limit representing the total limit on that credit card
 * 
 * @Response: 
 *      Card ID
 *      Limit
 */
router.post("/create/:id", (req, res) => {
    const CardInfo = req.body;
    const { id } = req.params;
    try {
        Cards.findLimit(CardInfo).then(() => {
            Cards.findById(id).then((limit) => {
                res
                    .status(201)
                    .json({ id: id, limit: limit })
                    .catch((error) => {
                        res.status(500).json({ message: error.message });
                    });
            })


        });
    } catch (err) {
        return res.status(400).json({
            message: "please provide missing information",
        });
    }

})


/**
 * @POST:
 *     /charge/create
 * @Request:
 *      Card ID
 *      Charge Amount
 * 
 * @Response: 
 *      Success:
 *          Update the balance of the account and return that value
 *      
 *      Failure:
 *          “Insufficient Balance on Card”.      
 */
router.post("/charge/create/:id", (req, res) => {
    const CardInfo = req.body.amount;
    const { id } = req.params;

    try {
        Cards.update(CardInfo, id).then((newBalance) => {
            if(newBalance.balance > 0) {
                res
                .status(201)
                .json({ id: id, total_usage: newBalance})
                .catch((error) => {
                    res.status(500).json({ message: error.message });
                });
            } else if(newBalance.balance === 0) {
                res
                .status(201)
                .json({ id: id, message: "Your remaining balance is 0", total_usage: newBalance})
                .catch((error) => {
                    res.status(500).json({ message: error.message });
                });
                
            } else {
                // return an error
                                res
                .status(201)
                .json({ id: id, Error: "Insufficient Balance on Card", available_balance: newBalance})
                .catch((error) => {
                    res.status(500).json({ message: error.message });
                });
            }

        })
    } catch (err) {
        return res.status(400).json({
            message: "please provide missing information",
        });
    }

})

/**
* @GET:
*     /card/available_balance
* @Request:
*      Card ID
* 
* @Response: 
*      Total available balance
*/
router.get("/available_balance/:id", (req, res) => { 
        const { id } = req.params;
        console.log(Cards.findBalance(id))

    try {
        Cards.findBalance(id).then((balance) => {
            res
                .status(201)
                .json({ available_balance: balance })
                .catch((error) => {
                    res.status(500).json({ message: error.message });
                });
        })
    } catch (err) {
        return res.status(400).json({
            message: "please provide missing information",
        });
    }
})


module.exports = router;