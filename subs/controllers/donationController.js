const { v4: uuidv4 } = require('uuid')
const midtransClient = require('midtrans-client')

class DonationController {
    static async createPayment(req, res, next) {
        try {
            const { email, amount, currency } = req.body
            const transactionId = uuidv4()

            let snap = new midtransClient.Snap({
                isProduction: false,
                serverKey: process.env.MID_TRANS_SERVER_KEY,
            })

            let parameter = {
                "transaction_details": {
                    "order_id": transactionId,
                    "gross_amount": amount
                },
                "credit_card": {
                    "secure": true
                },
                item_details: [
                    {
                        id: 'donation',
                        price: amount,
                        quantity: 1,

                    }
                ]
            }

            const midTransToken = await snap.createTransaction(parameter)

            res.status(201).json({
                ...midTransToken,
                display_amount: amount
            })

        } catch (error) {
            console.log(error, 'error create payment')
        }
    }

    static async createSubscription(req, res, next) {
        try {

        } catch (error) {
            console.log(error, 'error create subscription')
        }
    }
}
module.exports = DonationController