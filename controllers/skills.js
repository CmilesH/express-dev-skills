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
  skillsDb.findbyId(req.params.id, function (error, todo) {
    res.render('skills/show', {
      skills: skills,
      error: error
    })
  })
}
export{
  index,
  show
}