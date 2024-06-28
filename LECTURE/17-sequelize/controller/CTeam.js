const { Team, Player } = require('../models/index');
const { Op, where } = require('sequelize')

exports.getTeams = async (req, res) => {
    try {
        const { sort, search } = req.query;
        console.log(req.query); // { sort: 'name_asc' }

        let teams;

        if (sort === 'name_asc') {
            // 이름 기준 오름차순
            // SELECT `team_id`, `name` FROM `Team` AS `Team`;
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
                order: [['name', 'ASC']]
            })
        } else if (search) {
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
                where: {
                    name: { [Op.like]: `%${search}` }
                }
            })
        } else {
            // 전체 조회
            // SELECT `team_id`, `name` FROM `Team` AS `Team`;
            teams = await Team.findAll({
                attributes: ['team_id', 'name']
            });
        }

        res.json(teams);
    } catch {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getTeam = async (req, res) => {
    try {
        console.log(req.params.team_id);
        const { team_id } = req.params;

        const team = await Team.findAll({
            where: { team_id },
        })

        res.json(team);
    } catch {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getTeamPlayers = async (req, res) => {
    try {
        console.log(req.params.team_id);
        const { team_id } = req.params;

        const team = await Team.findAll({
            where: { team_id },
            include: [{ model: Player }]
        })

        res.json(team);
    } catch {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
