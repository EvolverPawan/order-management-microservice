'use strict'
const status = require('http-status')

module.exports = ({ repo }, app) => {
  app.post('/payment/makePurchase', (req, res, next) => {
    const { validate } = req.container.cradle
    console.log('req.body', req.body)
    validate(req.body.paymentOrder, 'payment')
      .then(payment => {
        console.log('payment', payment)
        return repo.makePurchase(payment)
      })
      .then(paid => {
        res.status(status.OK).json({ paid })
      })
      .catch(next)
  })

  // app.get('/payment/getPurchaseById/:id', (req, res, next) => {
  //   repo.getPurchaseById(req.params.id)
  //     .then(payment => {
  //       res.status(status.OK).json({ payment })
  //     })
  //     .catch(next)
  // })
}
