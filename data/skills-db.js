const skills = [
  {text: 'HTML', learned: true, _id: 1848594},
  {text: 'CSS', learned: true, _id: 1923984389},
  {text: 'JavaScript', learned: true, _id: 17848569},
  {text: 'Python', learned: true, _id: 1094432},
  {text: 'Ruby', learned: false, _id: 1236543},
  {text: 'SQL', learned: false, _id: 213435598},
  {text: 'C++', learned: false, _id: 124353},
  {text: 'Java', learned: false, _id:18765},
]

const find = (conditions, callback) => {
  try{
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, skills)
  } catch (error) {
    console.log(error)
    callback(error,[])
  }
}

const findById = (id, callback) =>{
  try{
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  skill._id = Date.now() % 1000000
  skill.learned = false
  skills.push(skill)
  return callback(null, skill)
}

export{
  find,
  findById,
  create
}