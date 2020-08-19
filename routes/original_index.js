
const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const student = require('../models/student');
// login Page
router.get('/', forwardAuthenticated, (req, res) => res.render('login'));

//info
router.get('/info', ensureAuthenticated, (req, res) =>
  res.render('info')
);
///////////////////
router.post('/info',function(req,res){
 const newstudent= new student({
   name:req.body.studentName,
   branch:req.body.studentBranch,
   rollno:req.body.studentRollno,
   mobileno:req.body.studentMobile,
   email:req.body.studentEmail,
   DUAcd:req.body.studentDUAcd,
   DUAcdAmt:req.body.studentDUAcdAmt,
   DUHostel:req.body.studentDUHostel,
   DUHostelAmt:req.body.studentDUHostelAmt
 });
 newstudent.save(function(err){
   if (!err){
       res.redirect("/library");
   }
 });
});


router.get("/library" , function(req,res){
   res.render("library");
});
router.post('/library',function(req,res){
 const library= new student({
   rollno:req.body.studentRollno,
   branch:req.body.studentBranch
 });
 library.save(function(err){
   if (!err){
       res.redirect("/acedmics");
   }
 });
});

router.get("/acedmics" , function(req,res){
   res.render("acedmics");
});
router.post('/acedmics',function(req,res){
 const acedmics= new student({
   rollno:req.body.studentRollno,
   DUAcd:req.body.DUAcadmics,
   DUAcdAmt:req.body.acadmicsAmount
 });
 acedmics.save(function(err){
   if (!err){
       res.redirect("/hostel");
   }
 });
});

router.get("/hostel" , function(req,res){
   res.render("hostel");
});
router.post('/hostel',function(req,res){
 const hostel= new student({
   rollno:req.body.studentRollno,
   DUHostel:req.body.DUHostel,
   DUHostelAmt:req.body.hostelAmount
 });
 hostel.save(function(err){
   if (!err){
       res.redirect("/success");
   }
 });
});

router.get("/success" , function(req,res){
   res.render("success");
});

module.exports = router;
