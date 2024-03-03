"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/reservation:

const reservation = require('../controllers/reservation')

// URL: /reservations

router.use(permissions.isStaffOrAdmin)

router.route('/')
    .get(reservation.list)
    .post(reservation.create)

router.route('/:id')
    .get(reservation.read)
    .put(reservation.update)
    .patch(reservation.update)
    .delete(permissions.isAdmin, reservation.delete)

/* ------------------------------------------------------- */
module.exports = router