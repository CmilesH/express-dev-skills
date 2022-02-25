import * as skillsDb from "../data/skills-db.js"

function index (req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
}

function show(req,res) {
  console.log(req.params.id)
  skillsDb.findById(req.params.id, function (error, skill) {
    res.render('skills/show', {
      skill: skill,
      error: error
    })
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  skillsDb.create(req.body, function (error, skill) {
    res.redirect('/skills')
  })
}

export{
  index,
  show,
  newSkill as new,
  create
}