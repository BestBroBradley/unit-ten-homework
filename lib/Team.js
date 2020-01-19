class Team {
    constructor (teamname) {
    this.teamname = teamname

    }
    
    getRole(){
        return "Teamname"
    }

    getTeamName(){
        return this.teamname
    }

}

// officeNumber
// getRole() (Overridden to return 'Manager')

module.exports = Team;